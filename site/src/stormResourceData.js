export const damageResources=[
 {title:'Report damage to your home, vehicle or property',description:'Hollywood residents and property owners can report damage from the November 2026 rainstorms. Include a description and photos. The City uses reports to support requests for state and federal recovery funding; submitting a report does not guarantee reimbursement.',source:'https://hollywood.readyop.com/fs/4e2S/540038e9',label:'Open property damage form',checkedAt:'2026-11-19'},
 {title:'Report damage to a Hollywood business',description:'Business owners can report physical and economic storm damage through the FloridaCommerce survey. Select “2026 Fall Flooding”. Responses help the State assess business recovery needs.',source:'https://floridadisaster.biz/Respond/BusinessDamageAssessmentsSurvey',label:'Fill out the business damage survey',checkedAt:'2026-11-19'}
];
export const stormUpdates=[
 {title:'Storm updates for Hollywood businesses',description:'Read the City’s business storm update for recovery resources, survey instructions and service announcements.',source:'https://www.choosehollywoodfl.com/m/newsflash/home/detail/394',label:'Read business storm updates',checkedAt:'2026-11-19'},
 {title:'Hollywood citywide storm updates',description:'Check the City’s latest announcements for changing storm conditions and municipal services.',source:'https://www.hollywoodcra.org/m/newsflash',label:'Read City updates',checkedAt:'2026-11-19'}
];

// Sources reviewed November 23, 2026. A source review does not confirm live capacity.
export const recoveryGroups=[
 {title:'City assistance and damage reporting',items:[
  {title:'Hollywood flood safety',description:'City flood safety information and guidance for residents.',source:'https://www.hollywoodfl.org/692/Flood-Safety'},
  {...damageResources[0]},
  {title:'Hollywood assistance and flooding concerns',description:'Ask the City about storm assistance. Email your address, photos and a short description to report flooding concerns.',phone:'954-967-4362',email:'EOC@HollywoodFL.org',source:'https://www.hollywoodcra.org/m/newsflash',checkedAt:'2026-11-19'},
  {title:'Broward County guidance',description:'Call 311 or 954-831-4000 for county services and guidance on reporting home damage. Hollywood residents can use the direct City damage form above.',phone:'311',alternate:'954-831-4000',source:'https://www.broward.org/PublicInfo'},
  {title:'Request mosquito service',description:'Call 311 for county assistance or use the County’s instructions to request mosquito service. The mosquito service desk is 954-765-4062.',phone:'311',alternate:'954-765-4062',source:'https://browardcountyfl.qscend.com/311/knowledgebase/article/201330'}
 ]},
 {title:'Food, shelter and essential needs',items:[
  {title:'211 Broward',description:'Available 24/7 to connect you with food, shelter and essential-needs resources.',phone:'211',source:'https://www.211-broward.org/'},
  {title:'Broward Homeless Helpline',description:'Help with shelter placement and housing options for people experiencing homelessness. Placement depends on eligibility and availability; this is not confirmation that a storm shelter is open.',phone:'954-563-4357',source:'https://www.broward.org/CallCenter'},
  {title:'Area Agency on Aging of Broward County',description:'Ask the Elder Helpline about meals, transportation, caregiver support, in-home services and other resources for seniors.',phone:'954-745-9779',source:'https://www.adrcbroward.org/'},
  {title:'Goodman Jewish Family Services',description:'Ask about financial assistance, family support and referrals. Eligibility and funding availability apply.',phone:'954-370-2140',source:'https://www.jfsbroward.org/services/financial-assistance/'},
  {title:'We Are One Kosher Food Bank',description:'Contact the team to request kosher food assistance and confirm availability.',phone:'954-505-4152',source:'https://www.weareonecharity.org/contact'},
  {title:'The Dorit & Ben J. Genet Cupboard',description:'Contact the food assistance program for eligibility and access information.',phone:'954-530-7555',source:'https://www.jfsbroward.org/services/cupboard/'},
  {title:'United Way Broward Project Lifeline',description:'Find participating food pantries and resources for food, hygiene products and essential supplies.',source:'https://www.unitedwaybroward.org/news/project-lifeline'}
 ]},
 {title:'Disaster-related legal help',items:[
  {title:'Coast to Coast Legal Aid',description:'Ask about disaster-related housing issues, insurance disputes, FEMA applications and appeals. Services depend on eligibility; this listing does not mean FEMA assistance has been approved for this storm.',phone:'954-736-2400',source:'https://www.coasttocoastlegalaid.org/hurricane-disaster-resources/'},
  {title:'Legal Aid Service of Broward County',description:'Contact Legal Aid to ask about civil legal assistance and disaster-related concerns. Eligibility applies.',phone:'954-765-8950',source:'https://www.browardlegalaid.org/'}
 ]},
 {title:'Cleanup and recovery',items:[
  {title:'Florida Conference Disaster Recovery',description:'855-CAT-FUMC. Ask about cleanup, tarps and debris assistance. Confirm whether teams are serving your area and accepting requests.',phone:'855-228-3862',source:'https://www.flumc.org/disaster-recovery-updates'},
  {title:'Samaritan’s Purse cleanup assistance',description:'The local recovery coalition lists this contact for possible cleanup and sanitizing help. Current phone routing and local service availability have not been independently confirmed with the provider.',phone:'561-873-1718',source:'https://ltrcbroward.org/2026-fall-flood/',label:'View local recovery coalition listing'},
  {title:'EPA mold cleanup guide',description:'Read EPA guidance on mold, moisture and cleanup after flooding.',source:'https://www.epa.gov/mold'}
 ]}
].map(group=>({...group,items:group.items.map(item=>({checkedAt:'2026-11-23',label:'Visit resource website',...item}))}));
