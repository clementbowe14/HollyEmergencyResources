import {ResourceLink} from './ResourceLink';
import {damageResources,stormUpdates} from './stormResourceData';
export function StormResources({updates=false}){
 const items=updates?stormUpdates:damageResources;
 return <><h1>{updates?'Storm updates':'Report storm damage'}</h1><p className="lede">Hollywood, Florida · November 2026 storms</p><div className="matched-resources">{items.map(r=><article key={r.source}><h2>{r.title}</h2><p>{r.description}</p><ResourceLink href={r.source} checkedAt={r.checkedAt} target="_blank" rel="noreferrer">{r.label}</ResourceLink></article>)}</div>{!updates&&<><p className="note">These links open official external services. Complete and submit your report there; VELPAZO does not collect your information. Damage reports are separate from requests for urgent help.</p><ResourceLink href={stormUpdates[0].source} checkedAt="2026-11-19" target="_blank" rel="noreferrer">City instructions and business storm update</ResourceLink></>}</>;
}
