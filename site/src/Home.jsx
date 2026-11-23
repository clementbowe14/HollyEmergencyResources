import {ResourceCard} from './StormResources';
import {recoveryGroups} from './stormResourceData';
export function Home(){return <section className="detail">
 <h1>Help for neighbors affected by flooding</h1><p className="lede">Hollywood, Florida · Flood recovery resources</p><p><a className="button" href="#help">Find help in your city</a></p><p>If you or someone you know in Hollywood was affected by the recent flooding, save and share these resources. Contact each organization directly to confirm eligibility and availability.</p>
 <nav aria-label="Recovery resource sections" className="resource-actions">{recoveryGroups.map((g,i)=><a key={g.title} href={'#recovery-'+i} onClick={e=>{e.preventDefault();document.getElementById('recovery-'+i)?.focus();document.getElementById('recovery-'+i)?.scrollIntoView({block:'start'});}}>{g.title}</a>)}</nav>
 {recoveryGroups.map((group,i)=><section key={group.title} aria-labelledby={'recovery-'+i}><h2 id={'recovery-'+i} tabIndex={-1}>{group.title}</h2><div className="matched-resources">{group.items.map(r=><ResourceCard key={r.source} resource={r}/>)}</div></section>)}
 <aside className="note"><h2>Keep records for recovery</h2><ul><li>Photograph all damage before beginning cleanup, when safe to do so.</li><li>Keep receipts for disaster-related expenses.</li><li>Contact your insurance company if you have coverage.</li></ul></aside>
 </section>;}
