import {ResourceLink} from './ResourceLink';
import {damageResources,stormUpdates} from './stormResourceData';
export function ResourceCard({resource:r}){
 return <article><h3>{r.title}</h3><p>{r.description}</p><div className="resource-actions">{[r.phone,r.alternate].filter(Boolean).map(phone=><a className="call" key={phone} href={'tel:'+phone.replace(/[^+\d]/g,'')}>Call {phone}</a>)}{r.email&&<a href={'mailto:'+r.email}>{r.email}</a>}<ResourceLink href={r.source} checkedAt={r.checkedAt} target="_blank" rel="noreferrer">{r.label}</ResourceLink></div></article>;
}
export function StormResources({updates=false}){
 const items=updates?stormUpdates:damageResources;
 return <><h1>{updates?'Storm updates':'Report storm damage'}</h1><p className="lede">Hollywood, Florida · November 2026 storms</p><div className="matched-resources">{items.map(r=><ResourceCard key={r.source} resource={r}/>)}</div>{!updates&&<><p className="note">These links open official external services. Complete and submit your report there; The Hollywood Watch does not collect your information. Damage reports are separate from requests for urgent help.</p><ResourceLink href={stormUpdates[0].source} checkedAt="2026-11-19" target="_blank" rel="noreferrer">City instructions and business storm update</ResourceLink></>}</>;
}
