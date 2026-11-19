// Recorded source-review dates; never advance these merely because the app rebuilds.
const checkedDates = {
  'https://daniabeachfl.gov/DocumentCenter/View/18815': '2026-11-18',
  'https://hollywoodfl.org/692/Flood-Safety': '2026-11-18',
  'https://hollywoodfl.org/CivicSend/ViewMessage/message/305196': '2026-11-18',
  'https://mapcarta.com/20658328': '2026-11-18',
  'https://mapcarta.com/W202767691': '2026-11-18',
  'https://ocean.floridamarine.org/acp/MIAACP/Maps/GRP_Maps/SFL-51SE.pdf': '2026-11-18',
  'https://twitter.com/DaniaBeachFL/status/1838294409651138786': '2026-11-18',
  'https://webapps.broward.org/NewsRelease/View.aspx?intMessageID=16264': '2026-11-18',
  'https://www.broward.org/AgenciesAndServices': '2026-11-18',
  'https://www.broward.org/WaterServices/About/Pages/Contact.aspx': '2026-11-18',
  'https://www.daniabeachfl.gov/news-announcements': '2026-11-18',
  'https://www.daniabeachfl.gov/public-services': '2026-11-18',
  'https://www.saj.usace.army.mil/Missions/Regulatory/Public-Notices/Article/3919359/saj-2024-02796sp-jlm/': '2026-11-18',
};
export function ResourceLink({href, children, checkedAt, ...props}) {
 const checked = checkedAt || checkedDates[href];
 return <span className="resource-link"><a href={href} {...props}>{children}</a><small className="link-checked">{checked ? <>Last checked: <time dateTime={checked}>{new Date(checked+'T12:00:00Z').toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric',timeZone:'UTC'})}</time></> : 'Not yet checked'}</small></span>;
}
