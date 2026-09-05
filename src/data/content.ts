export const rcbApplications = [
'Rubber',
'Plastics',
'Paints & Coatings',
'Masterbatch'];


export const rcbAttributes = [
{
  name: 'Particle Size',
  note: 'Controlled distribution for predictable dispersion behaviour.'
},
{
  name: 'Structure',
  note: 'Aggregate structure matched to compound requirements.'
},
{
  name: 'Surface Area',
  note: 'Measured to support reinforcement and loading decisions.'
},
{
  name: 'Dispersion',
  note: 'Processed to mix cleanly into rubber and polymer systems.'
},
{
  name: 'Consistency',
  note: 'Batch-to-batch stability across production runs.'
},
{
  name: 'Quality Control',
  note: 'Sampling and testing at every stage of recovery.'
}];


export const processSteps = [
{
  step: 'End-of-life tyres',
  note: 'Collected and sorted feedstock entering the recovery system.'
},
{
  step: 'Preparation',
  note: 'Sizing and cleaning to a consistent input specification.'
},
{
  step: 'Pyrolysis',
  note: 'Controlled thermal processing in an oxygen-free reactor.'
},
{ step: 'Vapour', note: 'Hydrocarbon vapour drawn off under controlled flow.' },
{ step: 'Condensation', note: 'Vapour cooled and condensed into liquid oil.' },
{
  step: 'Tyre pyrolysis oil',
  note: 'Recovered oil collected, settled and stored.'
}];


export const coOutputs = [
{ name: 'Recovered Carbon Black', note: 'Solid carbon recovered from the reactor.' },
{ name: 'Steel', note: 'Bead and belt wire separated for re-melting.' },
{ name: 'Syngas', note: 'Process gas returned to the energy cycle.' }];


export const applicationGroups = [
{
  title: 'Rubber',
  items: ['Tyres', 'Tubes', 'Seals', 'Gaskets', 'Conveyor Belts']
},
{
  title: 'Plastics',
  items: ['Masterbatch', 'PVC', 'Compounds']
},
{
  title: 'Coatings',
  items: ['Paints', 'Industrial Coatings']
}];


export const technology = [
{
  index: '01',
  title: 'Pyrolysis',
  body: 'Controlled thermal processing designed to recover valuable components from end-of-life tyres.'
},
{
  index: '02',
  title: 'Energy',
  body: 'Process gases can be utilised within the energy cycle of the operation.'
},
{
  index: '03',
  title: 'Emission Control',
  body: 'Engineered systems support controlled treatment of process gases.'
}];


export const impactStats = [
{ value: '15M+', label: 'End-of-life tyres processed annually' },
{ value: '36,000 T', label: 'Annual TPO production' },
{
  value: '85%',
  label: 'Reported GHG reduction compared with virgin carbon black production'
},
{ value: 'ZERO', label: 'Landfill philosophy' }];


export const sustainabilityFocus = [
{
  title: 'Resource Recovery',
  body: 'Materials are recovered rather than discarded, keeping useful carbon inside industry.'
},
{
  title: 'Energy Efficiency',
  body: 'Process gases are captured and used within the operation to reduce external demand.'
},
{
  title: 'Circular Manufacturing',
  body: 'Recovered outputs are returned to productive applications in real manufacturing.'
}];


export const timeline = [
{
  year: '1957',
  title: 'Origins',
  body: 'The Finster story begins in tyre handling and rubber recycling.'
},
{
  year: '2009',
  title: 'India',
  body: 'Operations expand with dedicated tyre recovery capacity.'
},
{
  year: 'Today',
  title: 'Advanced tyre recovery & material manufacturing',
  body: 'Recovered Carbon Black and Tyre Pyrolysis Oil developed for industrial customers.'
}];