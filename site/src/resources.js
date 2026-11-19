import {cityResources} from './cityResources.js';
export const cities=['Coconut Creek','Cooper City','Coral Springs','Dania Beach','Davie','Deerfield Beach','Fort Lauderdale','Hallandale Beach','Hillsboro Beach','Hollywood','Lauderdale-by-the-Sea','Lauderdale Lakes','Lauderhill','Lazy Lake','Lighthouse Point','Margate','Miramar','North Lauderdale','Oakland Park','Parkland','Pembroke Park','Pembroke Pines','Plantation','Pompano Beach','Sea Ranch Lakes','Southwest Ranches','Sunrise','Tamarac','West Park','Weston','Wilton Manors','Unincorporated Broward / not sure'];
export const services=[{id:'flood',name:'Flooding & drainage',description:'Flooded streets, entrances or storm drains'},{id:'water',name:'Water & sewage',description:'Water service, leaks or sewage concerns'},{id:'sand',name:'Sand & sandbags',description:'Pickup locations and residency requirements'},{id:'shelter',name:'Emergency shelters',description:'Official shelter locations, opening status and accessibility'},{id:'other',name:'Other local assistance',description:'Find the right county or municipal service'}];
const county={title:'Broward County service referral',description:'Ask which local agency serves your address. This is an information and referral line, not emergency dispatch.',phone:'311',alternate:'954-831-4000',source:'https://www.broward.org/AgenciesAndServices'};
export function getResources(city,service){
 if(!cities.includes(city)||!services.some(s=>s.id===service))return [];
 if(service==='other')return [county];
 const matches=cityResources.find(entry=>entry.city===city)?.resources.filter(resource=>resource.category===service)||[];
 if(service==='shelter')return [...matches,...shelterSupport];
 return matches;
}

const shelterSupport=[
 {category:'shelter',title:'Special-needs sheltering and transportation',description:'Review the County’s registration and transportation guidance if a general shelter cannot meet your medical needs. Contact the County about eligibility and arrangements; this is not emergency dispatch.',source:'https://www.broward.org/atrisk',phone:'954-831-3902',checkedAt:'2026-11-19',status:'official-directory'},
 {category:'shelter',title:'Homeless Helpline — shelter placement assistance',description:'For people experiencing homelessness, ask about shelter placement and housing support. This is separate from storm evacuation shelters; placement is not guaranteed. Check the official page for service hours.',source:'https://www.broward.org/CallCenter',phone:'954-563-4357',checkedAt:'2026-11-19',status:'official-directory'}
];
