import test from 'node:test';
import assert from 'node:assert/strict';
import {cities,services,getResources} from '../src/resources.js';
import {cityResources} from '../src/cityResources.js';
import {sandLocations,filterLocations} from '../src/sandLocations.js';
test('every city and service has guidance; unsupported selections return none',()=>{
 assert.equal(cities.length,32);
 assert.deepEqual([...cityResources.map(c=>c.city)].sort(),[...cities].sort());
 for(const city of cities)for(const service of services)assert.ok(getResources(city,service.id).length,`${city}: ${service.id}`);
 assert.deepEqual(getResources('Miami','flood'),[]);assert.deepEqual(getResources('Hollywood','unknown'),[]);
});
test('all four researched categories have sources, dates and explicit status for every city',()=>{
 const allowed=new Set(['official-directory','published-program','historical-event','not-confirmed']);
 for(const city of cities)for(const category of ['sand','water','flood','shelter'])for(const r of getResources(city,category)){
  assert.ok(r.title&&r.description,city);assert.match(r.source,/^https:\/\//);assert.match(r.checkedAt,/^\d{4}-\d{2}-\d{2}$/);assert.ok(allowed.has(r.status),r.status);
  for(const l of r.locations||[])assert.ok(l.name&&l.address);
 }
});
test('community-provided RealManage contact stays scoped to Hollywood property help',()=>{
 for(const city of cities)for(const service of services)if(city!=='Hollywood'||service.id!=='property')assert.ok(getResources(city,service.id).every(r=>r.phone!=='1-800-241-7828'));
});
test('map filters isolate cities and preserve historical flags and coordinate integrity',()=>{
 for(const city of cities)assert.ok(filterLocations(city).every(s=>s.city===city));
 assert.equal(filterLocations('unknown').length,0);assert.equal(filterLocations('All').length,sandLocations.length);
 assert.ok(sandLocations.find(s=>s.id==='frost').historical);
 assert.match(sandLocations.find(s=>s.id==='armory').type,/only/);
 for(const s of sandLocations)if(s.position)assert.ok(s.position.length===2&&s.position.every(Number.isFinite));
 assert.equal(new Set(sandLocations.map(s=>s.id)).size,sandLocations.length);
});
test('Hollywood damage forms and updates do not route other cities to Hollywood reporting',()=>{
 const forms=getResources('Hollywood','damage');
 assert.equal(forms.length,2);
 assert.ok(forms.some(r=>r.source==='https://hollywood.readyop.com/fs/4e2S/540038e9'));
 assert.ok(forms.some(r=>r.source==='https://floridadisaster.biz/Respond/BusinessDamageAssessmentsSurvey'));
 assert.ok(getResources('Hollywood','updates').some(r=>r.source==='https://www.choosehollywoodfl.com/m/newsflash/home/detail/394'));
 for(const city of cities.filter(c=>c!=='Hollywood'))for(const service of ['damage','updates'])assert.ok(getResources(city,service).every(r=>!r.source.includes('readyop')&&!r.source.includes('BusinessDamageAssessmentsSurvey')));
});
