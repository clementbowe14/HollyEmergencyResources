import test from 'node:test';
import assert from 'node:assert/strict';
import {cities,services,getResources} from '../src/resources.js';
import {sandLocations,filterLocations} from '../src/sandLocations.js';
test('every non-sand selection has guidance and unsupported inputs have none',()=>{assert.equal(cities.length,32);for(const c of cities)for(const s of services)if(s.id!=='sand')assert.ok(getResources(c,s.id).length,`${c} ${s.id}`);assert.deepEqual(getResources('Miami','flood'),[]);assert.deepEqual(getResources('Hollywood','unknown'),[])});
test('Hollywood-only contacts never leak to other cities',()=>{for(const c of cities.filter(c=>c!=='Hollywood'))for(const s of services){const r=getResources(c,s.id);assert.ok(r.every(x=>x.phone!=='954-967-4362'&&x.phone!=='1-800-241-7828'))}});
test('Dania flooding routes to Dania and county; utility coverage is qualified',()=>{assert.match(getResources('Dania Beach','flood')[0].source,/daniabeachfl/);for(const c of cities){for(const r of getResources(c,'water'))if(r.phone==='954-831-3250')assert.match(r.description,/customers served/);}});
test('city map filters exclude other cities and historical site stays labeled',()=>{assert.equal(filterLocations('Hollywood').length,4);assert.equal(filterLocations('Dania Beach').length,1);assert.ok(filterLocations('Dania Beach')[0].historical);assert.equal(filterLocations('unknown').length,0);assert.equal(filterLocations('All').length,sandLocations.length);assert.match(sandLocations.find(s=>s.id==='armory').type,/only/)});
