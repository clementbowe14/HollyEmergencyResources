import {ResourceLink} from './ResourceLink';
import {damageResources,stormUpdates,recoveryGroups} from './stormResourceData';
function ResourceCard({resource:r}){
 return <article><h3>{r.title}</h3><p>{r.description}</p><div className="resource-actions">{[r.phone,r.alternate].filter(Boolean).map(phone=><a className="call" key={phone} href={'tel:'+phone.replace(/[^+\d]/g,'')}>Call {phone}</a>)}{r.email&&<a href={'mailto:'+r.email}>{r.email}</a>}<ResourceLink href={r.source} checkedAt={r.checkedAt} target="_blank" rel="noreferrer">{r.label}</ResourceLink></div></article>;
}
export function StormResources({updates=false}){
 const items=updates?stormUpdates:damageResources;
 return <><h1>{updates?'Storm updates':'Report storm damage'}</h1><p className="lede">Hollywood, Florida · November 2026 storms</p><div className="matched-resources">{items.map(r=><ResourceCard key={r.source} resource={r}/>)}</div>{updates?<>
 <h2>Resources for residents affected by flooding</h2><p>If you or someone you know in Hollywood was affected by the recent flooding, save and share these resources. Contact each organization directly to confirm eligibility and availability.</p>
 <nav aria-label="Recovery resource sections" className="resource-actions">{recoveryGroups.map((g,i)=><a key={g.title} href={'#recovery-'+i} onClick={e=>{e.preventDefault();document.getElementById('recovery-'+i)?.focus();document.getElementById('recovery-'+i)?.scrollIntoView({block:'start'});}}>{g.title}</a>)}</nav>
 {recoveryGroups.map((group,i)=><section key={group.title} aria-labelledby={'recovery-'+i}><h2 id={'recovery-'+i} tabIndex={-1}>{group.title}</h2><div className="matched-resources">{group.items.map(r=><ResourceCard key={r.source} resource={r}/>)}</div></section>)}
 <aside className="note"><h2>Keep records for recovery</h2><ul><li>Photograph all damage before beginning cleanup, when safe to do so.</li><li>Keep receipts for disaster-related expenses.</li><li>Contact your insurance company if you have coverage.</li></ul></aside>
 </>:<><p className="note">These links open official external services. Complete and submit your report there; VELPAZO does not collect your information. Damage reports are separate from requests for urgent help.</p><ResourceLink href={stormUpdates[0].source} checkedAt="2026-11-19" target="_blank" rel="noreferrer">City instructions and business storm update</ResourceLink></>}</>;
}
