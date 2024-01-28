import { Club } from "@/business-logic/clubs.model";

export const Clubs: Club[] = [
  {
    associations: ['goruck', 'goruckeurope', 'sandlot'],
    coordinates: [48.1379,11.5744],
    country: 'Germany',
    default: {
      name: 'MRC Weekly Training',
      coordinates: [48.1779445, 11.5557917],
      location: 'BMW Welt Nord, München',
      recurringInterval: 'weekly',
      time: '19:00',
      type: 'pt'
    },
    id: 'munichruckingcrew',
    name: 'Munich Rucking Crew',
    contact: { 
      preferred: 'instagram', 
      instagram: 'https://www.instagram.com/munichruckingcrew/',
      linktree: 'https://linktr.ee/munichruckingcrew',
      sandlot: 'https://fistbumps.sandlot.fit/group/3834e838-51d4-4584-86a6-a46ae9b9784a',
    },
  },
  {
    associations: ['goruck', 'goruckeurope', 'crossfit'],
    coordinates: [49.9429,11.5767],
    country: 'Germany',
    name: 'GORUCK Club Franken',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/goruck_club_franken/'},
    id: 'goruck_club_franken'
  },
  {
    associations: ['goruck', 'goruckeurope', 'sandlot'],
    coordinates: [48.3663,10.8943],
    country: 'Germany',
    default: {
      name: 'Weekly Ruck Meetup',
      coordinates: [48.3772151, 10.8939913],
      location: 'Fischertor, Augsburg',
      recurringInterval: 'weekly',
      time: '18:30',
      type: 'ruck'
    },
    name: 'AUXRucker',
    contact: { 
      preferred: 'instagram', 
      instagram: 'https://www.instagram.com/auxruckers/',
      sandlot: 'https://fistbumps.sandlot.fit/group/c9b12a87-2b84-4bd0-b909-ec9b05897fdb'  
    },
    id: 'auxruckers'
  },
  {
    associations: ['goruck', 'goruckeurope'],
    coordinates: [51.7219,10.7089],
    country: 'Germany',
    name: 'GORUCK Harzmountains',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/goruckharzmountains/'},
    id: 'goruckharzmountains'
  },
  {
    associations: ['goruck', 'goruckeurope'],
    coordinates: [52.3754,9.7377],
    country: 'Germany',
    default: {
      name: 'Montly Ruck Meetup',
      coordinates: [52.3894, 9.7544],
      location: 'Freizeitheim Lister Turm, Hannover',
      recurringInterval: 'monthly',
      time: '10:00',
      type: 'ruck'
    },
    name: 'Ruck It! Hannover',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/ruckithannover/'},
    id: 'ruckithannover'
  },
  {
    associations: ['myruckclub'],
    coordinates: [51.4820,7.2187],
    country: 'Germany',
    default: {
      name: 'Montly Ruck Meetup',
      coordinates: [51.43960,7.19500],
      location: 'Parkplatz Nord, Weitmarer Holz, Weitmar',
      recurringInterval: 'monthly',
      time: '09:00',
      type: 'ruck'
    },
    name: 'Ruhr Ruckers',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/ruhr_ruckers/'},
    id: 'ruhr_ruckers'
  },
  {
    associations: ['goruck', 'goruckeurope', 'crossfit'],
    coordinates: [51.9469,8.5843],
    country: 'Germany',
    name: 'GORUCK Club Teuto Rucker',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/teutorucker/'},
    id: 'teutorucker'
  },
  {
    associations: ['goruck', 'goruckeurope'],
    coordinates: [48.7788,9.1750],
    country: 'Germany',
    name: 'grc stuttgart germany',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/goruckclub.stuttgart/'},
    id: 'goruckclubstuttgart'
  },
  {
    associations: ['goruck', 'goruckeurope'],
    coordinates: [50.1140,8.6737],
    country: 'Germany',
    name: 'Skyline Ruckers Rhein-Main',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/skylineruckers/'},
    id: 'skylineruckers'
  },
  {
    associations: ['myruckclub'],
    coordinates: [53.5697,9.9756],
    country: 'Germany',
    name: 'Hamburg RUCKing',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/hhauruck/'},
    id: 'hhauruck'
  },
  {
    associations: ['goruck', 'goruckeurope'],
    coordinates: [0,0],
    country: 'Germany',
    name: 'GORUCK Europe',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/goruckeurope/'},
    id: 'goruckeurope',
    hide: true
  },
  {
    associations: ['goruck', 'sandlot'],
    coordinates: [0,0],
    country: 'Germany',
    name: 'GORUCK',
    contact: { preferred: 'sandlot', sandlot: 'https://www.sandlot.fit/'},
    id: 'goruck',
    hide: true
  },
  {
    associations: ['myruckclub'],
    coordinates: [49.75845, 8.5996],
    country: 'Germany',
    name: 'RK Frankenstein',
    contact: { preferred: 'homepage', homepage: 'http://www.rkfrankenstein.de'},
    id: 'rkfrankenstein'
  },
  {
    associations: ['myruckclub'],
    coordinates: [53.15688,-6.91058],
    country: 'Ireland',
    name: 'Mad Ruckers Kildare',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/mad_ruckers/'},
    id: 'mad_ruckers'
  },
  {
    associations: ['goruck', 'goruckeurope'],
    coordinates: [49.48779,8.46621],
    country: 'Germany',
    name: 'GORUCK Kurpfalz',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/goruck_kurpfalz/'},
    id: 'goruck_kurpfalz'
  },
  {
    associations: ['goruck'],
    coordinates: [51.3583,7.4733],
    country: 'Germany',
    name: 'Mother Ruckers Hagen NRW',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/motherruckers_hagen_nrw/'},
    id: 'motherruckers_hagen_nrw'
  },
  {
    associations: ['myruckclub'],
    coordinates: [49.00269,8.40101],
    country: 'Germany',
    name: 'Rhine Valley Rucking',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/rhinevalleyrucking/'},
    id: 'rhinevalleyrucking'
  },
  {
    associations: ['myruckclub'],
    coordinates: [60.14339,11.17446],
    country: 'Norway',
    name: 'Norway Ruck',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/norwayruck/'},
    id: 'norwayruck'
  },
  {
    associations: ['myruckclub'],
    coordinates: [47.37181,8.54221],
    country: 'Switzerland',
    name: 'The Sunrise Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/thesunriseruckclub/'},
    id: 'thesunriseruckclub'
  },
  {
    associations: ['myruckclub'],
    coordinates: [25.6944,-80.1648],
    country: 'USA',
    name: 'Couth Florida Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/southfloridaruckclub/'},
    id: 'southfloridaruckclub'
  },
  {
    associations: ['myruckclub'],
    coordinates: [26.3100,-80.2386],
    country: 'USA',
    name: 'Vice City Ruckers',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/vicecityruckers/'},
    id: 'vicecityruckers'
  },
  {
    associations: ['myruckclub'],
    coordinates: [36.1551,-95.9951],
    country: 'USA',
    name: 'Green Country Ruckers',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/green.country.ruckers/'},
    id: 'greencountryruckers'
  },
  {
    associations: ['myruckclub'],
    coordinates: [34.6092,-98.3977],
    country: 'USA',
    name: 'Blockout Rucking Crew',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/blackoutruckingcrew/'},
    id: 'blackoutruckingcrew'
  },
  {
    associations: ['myruckclub'],
    coordinates: [32.7148,-117.1623],
    country: 'USA',
    name: 'Triton Ruck Club ',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/tritonruckclub/'},
    id: 'tritonruckclub'
  },
  {
    associations: ['myruckclub'],
    coordinates: [35.5846,-80.8102],
    country: 'USA',
    name: 'Mooresville Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/ruckmooresville/'},
    id: 'ruckmooresville'
  },
  {
    associations: ['milruck'],
    coordinates: [57.7072,11.9670],
    country: 'Sweden',
    name: 'Team Uphill',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/teamuphill/'},
    id: 'teamuphill'
  },
  {
    associations: ['myruckclub'],
    coordinates: [35.7327,-78.8506],
    country: 'USA',
    name: 'Apex Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/apex_ruck_club/'},
    id: 'apex_ruck_club'
  },
  {
    associations: ['myruckclub'],
    coordinates: [23.7327,-105.6897],
    country: 'México',
    name: 'Ruckers CDMX Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/ruckerscdmxclub/'},
    id: 'ruckerscdmxclub'
  },
  {
    associations: ['myruckclub'],
    coordinates: [46.2769,-119.2718],
    country: 'USA',
    name: 'Bedrock Rucking',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/bedrock_rucking/'},
    id: 'bedrock_rucking'
  },
  {
    associations: ['myruckclub'],
    coordinates: [41.4203,-73.9550],
    country: 'USA',
    name: 'Hudson Valley Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/hudson.valley.ruck.club/'},
    id: 'hudsonvalleyruckclub'
  },
  {
    associations: ['myruckclub'],
    coordinates: [42.3457,-82.9768],
    country: 'USA',
    name: 'East Side Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/eastsideruckclub_mi/'},
    id: 'eastsideruckclub_mi'
  },
  {
    associations: ['myruckclub'],
    coordinates: [47.658,-117.2626],
    country: 'USA',
    name: 'Nomad Ruckers',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/nomadruckers/'},
    id: 'nomadruckers'
  },
  {
    associations: ['milruck'],
    coordinates: [57.7312, 12.0272],
    country: 'Sweden',
    name: 'Gothenburg Ruck Buddies',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/gbg_ruck_buddies/'},
    id: 'gbg_ruck_buddies'
  },
  {
    associations: ['myruckclub'],
    coordinates: [38.5372,-81.9321],
    country: 'USA',
    name: 'Montaineer Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/mountaineerruckclub/'},
    id: 'mountaineerruckclub'
  },
  {
    associations: ['myruckclub'],
    coordinates: [28.2312,-80.7272],
    country: 'USA',
    name: 'Iron Fit Rucker',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/ironflamingoruckclub/'},
    id: 'ironflamingoruckclub'
  },
  {
    associations: ['myruckclub'],
    coordinates: [19.4388,-99.1324],
    country: 'México',
    name: 'Ruckers Mexico City',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/ruckersmxcity/'},
    id: 'ruckersmxcity'
  },
  {
    associations: ['myruckclub'],
    coordinates: [38.2802,-85.749],
    country: 'USA',
    name: 'Team RWB Louisville Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/teamrwb_louisville_ruck_club/'},
    id: 'teamrwb_louisville_ruck_club'
  },
  {
    associations: ['myruckclub'],
    coordinates: [39.2937,-76.6138],
    country: 'USA',
    name: 'Clipper City Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/clippercityruckclub/'},
    id: 'clippercityruckclub'
  },
  {
    associations: ['myruckclub'],
    coordinates: [39.2672,-81.5611],
    country: 'USA',
    name: 'Step Up MOV Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/stepupmovruckclub/'},
    id: 'stepupmovruckclub'
  },
  {
    associations: ['myruckclub'],
    coordinates: [42.601,-76.1795],
    country: 'USA',
    name: 'JTM Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/jtmruckclub/'},
    id: 'jtmruckclub'
  },
  {
    associations: ['milruck'],
    coordinates: [57.7818,14.1662],
    country: 'Sweden',
    name: 'Small Country Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/smallcountryruckclub/'},
    id: 'smallcountryruckclub'
  },
  {
    associations: ['myruckclub'],
    coordinates: [38.9712,-95.2398],
    country: 'USA',
    name: 'LFK Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/tomishiking/'},
    id: 'tomishiking'
  },
  {
    associations: ['myruckclub'],
    coordinates: [53.8655,10.6863],
    country: 'Germany',
    name: 'Rucking Hell',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/ruckinghellclub/'},
    id: 'ruckinghellclub'
  },
  {
    associations: ['myruckclub'],
    coordinates: [35.9986,-78.9024],
    country: 'USA',
    name: 'Hope Valley Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/hopevalleyruck/'},
    id: 'hopevalleyruck'
  },
  {
    associations: ['myruckclub'],
    coordinates: [53.9922,-1.5386],
    country: 'England',
    name: 'West Co North Yo Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/westconorthyoruckclub/'},
    id: 'westconorthyoruckclub'
  },
  {
    associations: ['myruckclub'],
    coordinates: [32.7526,-97.3238],
    country: 'USA',
    name: 'Panther City Rucking Crew',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/panthercity_rucking_crew/'},
    id: 'panthercity_rucking_crew'
  },
  {
    associations: ['myruckclub'],
    coordinates: [41.5536,-87.4515],
    country: 'USA',
    name: 'The Region Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/theregionruckclub/'},
    id: 'theregionruckclub'
  },
  {
    associations: ['milruck'],
    coordinates: [55.6057,12.9972],
    country: 'Sweden',
    name: 'Snapphane Ruckers',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/snapphaneruckers/'},
    id: 'snapphaneruckers'
  },
  {
    associations: ['myruckclub'],
    coordinates: [34.7365,-86.5881],
    country: 'USA',
    name: 'Rocket City Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/rocketcityrucks/'},
    id: 'rocketcityrucks'
  },
  {
    associations: ['myruckclub'],
    coordinates: [39.1151,-77.5673],
    country: 'USA',
    name: 'LoCo Ruckers',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/locoruckers/'},
    id: 'locoruckers'
  },
  {
    associations: ['myruckclub'],
    coordinates: [34.0549,-118.2362],
    country: 'USA',
    name: 'El Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/elruckclub/'},
    id: 'elruckclub'
  },
  {
    associations: ['myruckclub'],
    coordinates: [44.9769,-93.2691],
    country: 'USA',
    name: 'Mill City Rucking Crew',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/mill_city_rucking_crew/'},
    id: 'mill_city_rucking_crew'
  },
  {
    associations: ['myruckclub'],
    coordinates: [39.6822,-75.7512],
    country: 'USA',
    name: 'Go Ruck Yourself Rucking Club',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/goruckyourselfrucking/'},
    id: 'goruckyourselfrucking'
  },
  {
    associations: ['spartan'],
    coordinates: [1.27707,103.84545],
    country: 'Singapore',
    name: 'Team Black Mamba SG',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/teamblackmambasg/'},
    id: 'teamblackmambasg'
  },
  {
    associations: ['milruck'],
    coordinates: [60.6532,17.1634],
    country: 'Sweden',
    name: 'Team Invictus',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/teaminvictusgavle/'},
    id: 'teaminvictusgavle'
  },
  {
    associations: ['myruckclub'],
    coordinates: [36.5389,-87.3653],
    country: 'USA',
    name: 'Freedom Eagle',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/freedomruckclub/'},
    id: 'freedomruckclub'
  },
  {
    associations: ['milruck'],
    coordinates: [60.4863,15.4238],
    country: 'Sweden',
    name: 'Dalecarlia Steel Ruckers',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/dalecarlia_steel_ruckers/'},
    id: 'dalecarlia_steel_ruckers'
  },
  {
    associations: ['myruckclub'],
    coordinates: [34.0515,-117.7625],
    country: 'USA',
    name: 'East Side Rucks',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/eastsiderucks/'},
    id: 'eastsiderucks'
  },
  {
    associations: ['milruck'],
    coordinates: [62.3904,17.3059],
    country: 'Sweden',
    name: 'Ruck’n’GO',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/ruckngo/'},
    id: 'ruckngo'
  },
  {
    associations: ['myruckclub'],
    coordinates: [40.7961,-81.9374],
    country: 'USA',
    name: 'Wayne County Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/wayne_co_ruck_club/'},
    id: 'wayne_co_ruck_club'
  },
  {
    associations: ['myruckclub'],
    coordinates: [39.7608,-84.1968],
    country: 'USA',
    name: 'Dayton Area Rucking Crew',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/dayton_area_rucking_crew_/'},
    id: 'dayton_area_rucking_crew_'
  },
  {
    associations: ['myruckclub'],
    coordinates: [27.7401,-82.7463],
    country: 'USA',
    name: 'Skyway Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/skyway_ruck_club_fl/'},
    id: 'skyway_ruck_club_fl'
  },
  {
    associations: ['myruckclub'],
    coordinates: [31.3281,-89.2883],
    country: 'USA',
    name: 'OneDrive Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/overdrive_ruck_club/'},
    id: 'overdrive_ruck_club'
  },
  {
    associations: ['f3'],
    coordinates: [33.8296,-117.9121],
    country: 'USA',
    name: 'F3 Anaheim',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/f3anaheim/'},
    id: 'f3anaheim'
  },
  {
    associations: ['myruckclub'],
    coordinates: [34.3658,-89.5195],
    country: 'USA',
    name: 'Gravel Capital Ruckers',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/gravel_capital_ruckers/'},
    id: 'gravel_capital_ruckers'
  },
  {
    associations: ['milruck'],
    coordinates: [59.3123,14.1099],
    country: 'Sweden',
    name: 'Rucking Kristenhamn',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/rucking_kristinehamn/'},
    id: 'rucking_kristinehamn'
  },
  {
    associations: ['myruckclub'],
    coordinates: [35.729,139.757],
    country: 'Japan',
    name: 'Tokyo Hiyaku Ruckers',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/tokyohikyakuruckers/'},
    id: 'tokyohikyakuruckers'
  },
  {
    associations: ['myruckclub'],
    coordinates: [33.8402,-84.3799],
    country: 'USA',
    name: 'Buckhead Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/buckheadruckclub/'},
    id: 'buckheadruckclub'
  },
  {
    associations: ['myruckclub'],
    coordinates: [47.9129,-122.0979],
    country: 'USA',
    name: 'NW Tough',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/nw_tough/'},
    id: 'nw_tough'
  },
  {
    associations: ['myruckclub'],
    coordinates: [27.9479,-82.4572],
    country: 'USA',
    name: 'Tampa Bay Area Babes Trail Ruckers',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/bayareababestrailruckers/'},
    id: 'bayareababestrailruckers'
  },
  {
    associations: ['myruckclub'],
    coordinates: [45.6798,-111.0471],
    country: 'USA',
    name: 'Montana Mighty Rucks',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/montana_mighty_rucks/'},
    id: 'montana_mighty_rucks'
  },
  {
    associations: ['myruckclub'],
    coordinates: [28.5438,-81.384],
    country: 'USA',
    name: 'Orlando Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/orlando.ruck.club/'},
    id: 'orlandoruckclub'
  },
  {
    associations: ['myruckclub'],
    coordinates: [33.191,-117.2495],
    country: 'USA',
    name: 'Alleyway Ruckers Club',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/alleywayruckers/'},
    id: 'alleywayruckers'
  },
  {
    associations: ['f3'],
    coordinates: [36.0972,-79.2682],
    country: 'USA',
    name: 'F3 Meyham',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/f3meyham/'},
    id: 'f3meyham'
  },
  {
    associations: ['myruckclub'],
    coordinates: [34.0251,-84.3606],
    country: 'USA',
    name: 'Terminus Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/terminus_ruck_club/'},
    id: 'terminus_ruck_club'
  },
  {
    associations: ['myruckclub'],
    coordinates: [40.4279,-79.7034],
    country: 'USA',
    name: 'The Ruck-ulators',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/ruckulators/'},
    id: 'ruckulators'
  },
  {
    associations: ['myruckclub'],
    coordinates: [28.5658,-81.5864],
    country: 'USA',
    name: 'West Orange Ruckers',
    contact: { preferred: 'instagram', instagram: 'https://www.instagram.com/westorangeruckers/'},
    id: 'westorangeruckers'
  },
  {
    associations: ['myruckclub'],
    coordinates: [41.8726,-87.6256],
    country: 'USA',
    id: 'chicagoruckclub',
    name: 'Chicago Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://instagram.com/chicagoruckclub/'},
  },
  {
    associations: ['goruck'],
    coordinates: [30.332,-81.6631],
    country: 'USA',
    name: 'GORUCK Club HQ',
    contact: { preferred: 'instagram', instagram: 'https://instagram.com/goruck_club_hq/'},
    id: 'goruck_club_hq',
  },
  {
    associations: ['goruck'],
    coordinates: [44.3125,-96.771],
    country: 'USA',
    name: 'ROAM Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://instagram.com/roam_ruck_club/'},
    id: 'roam_ruck_club',
  },
  {
    associations: ['goruck'],
    coordinates: [47.2436,-122.4354],
    country: 'USA',
    name: 'Grit City Ruckers',
    contact: { preferred: 'instagram', instagram: 'https://instagram.com/gritcityruckers/'},
    id: 'gritcityruckers',
  },
  {
    associations: ['goruck'],
    coordinates: [34.226,-77.9459],
    country: 'USA',
    name: 'Port City Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://instagram.com/port_city_ruck_club/'},
    id: 'port_city_ruck_club',
  },
  {
    associations: ['goruck'],
    coordinates: [22.2775,114.1644],
    country: 'Hong Kong',
    name: 'GORUCK Hong Kong',
    contact: { preferred: 'instagram', instagram: 'https://instagram.com/goruckhk/'},
    id: 'goruckhk',
  },
  {
    associations: ['goruck'],
    coordinates: [4.609,114.434],
    country: 'Brunei',
    name: 'Brunei Ruck Squad',
    contact: { preferred: 'instagram', instagram: 'https://instagram.com/bruneirucksquad/'},
    id: 'bruneirucksquad',
  },
  {
    associations: ['goruck', 'goruckeurope'],
    coordinates: [60.1709,24.9362],
    country: 'Finland',
    name: 'Helsinki Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://instagram.com/helsinkiruckclub/'},
    id: 'helsinkiruckclub',
  },
  {
    associations: ['myruckclub'],
    coordinates: [27.4096,-82.5135],
    country: 'USA',
    name: 'Tampa Bay Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://instagram.com/tampabayruckclub/'},
    id: 'tampabayruckclub',
  },
  {
    associations: ['goruckeurope'],
    coordinates: [55.955,-3.1929],
    country: 'Scotland',
    name: 'Edinburgh Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://instagram.com/edinburghruckclub/'},
    id: 'edinburghruckclub',
  },
  {
    associations: ['myruckclub'],
    coordinates: [44.94,-123.0355],
    country: 'USA',
    name: 'Cherry City Ruckers',
    contact: { preferred: 'instagram', instagram: 'https://instagram.com/cherry_city_ruckers/'},
    id: 'cherry_city_ruckers',
  },
  {
    associations: ['myruckclub'],
    coordinates: [35.5856,-80.8117],
    country: 'USA',
    name: 'Osprey Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://instagram.com/osprey_ruck_club/'},
    id: 'osprey_ruck_club',
  },
  {
    associations: ['myruckclub'],
    coordinates: [42.1451,-88.0661],
    country: 'USA',
    name: 'Mother Ruckers',
    contact: { preferred: 'instagram', instagram: 'https://instagram.com/motherruckers_community/'},
    id: 'motherruckers_community',
  },
  {
    associations: ['goruck'],
    coordinates: [32.7988,-79.9468],
    country: 'USA',
    name: 'Chucktown Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://instagram.com/chucktownruckclub/'},
    id: 'chucktownruckclub',
  },
  {
    associations: ['myruckclub'],
    coordinates: [41.4135,-95.8575],
    country: 'USA',
    name: 'West Omaha Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://instagram.com/omaharuckclub/'},
    id: 'omaharuckclub',
  },
  {
    associations: ['goruck'],
    coordinates: [26.7054,-80.0378],
    country: 'USA',
    name: 'Palm Beach Rucking Crew',
    contact: { preferred: 'instagram', instagram: 'https://instagram.com/palmbeachruckingcrew/'},
    id: 'palmbeachruckingcrew',
  },
  {
    associations: ['myruckclub'],
    coordinates: [34.6977,-79.8843],
    country: 'USA',
    name: 'VerRückt Club',
    contact: { preferred: 'instagram', instagram: 'https://instagram.com/verrucktclub/'},
    id: 'verrucktclub',
  },
  {
    associations: ['goruck'],
    coordinates: [33.5219,-86.8133],
    country: 'USA',
    name: 'LP Ruck',
    contact: { preferred: 'instagram', instagram: 'https://instagram.com/lp_ruck/'},
    id: 'lp_ruck',
  },
  {
    associations: ['myruckclub'],
    coordinates: [43.6597,-70.2589],
    country: 'USA',
    name: 'Dirigo Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://instagram.com/dirigoruckclub/'},
    id: 'dirigoruckclub',
  },
  {
    associations: ['goruck'],
    coordinates: [25.2112,55.2846],
    country: 'United Arab Emirates',
    name: 'Xtreme Endurance',
    contact: { preferred: 'instagram', instagram: 'https://instagram.com/xtreme_endurance/'},
    id: 'xtreme_endurance',
  },
  {
    associations: ['myruckclub'],
    coordinates: [8.5742,-83.56],
    country: 'Costa Rica',
    name: 'Rainforest Ruck Club',
    contact: { preferred: 'instagram', instagram: 'https://instagram.com/rainforest_ruckclubcr/'},
    id: 'rainforest_ruckclubcr',
  },
  {
    associations: ['myruckclub'],
    coordinates: [59.437,18.0553],
    country: "Sweden",
    name: "TAC-Up Ruck",
    id: "tacupruck",
    contact: {preferred: 'instagram', instagram: "https://instagram.com/tacupruck/", homepage: "https://tacupgear.com/"}
  },
  {
    associations: ['myruckclub'],
    coordinates: [29.8951,-81.3153],
    country: "USA",
    name: "Ancient City Ruckers",
    id: "ancientcityruckers",
    contact: { preferred: 'instagram', instagram: "https://instagram.com/ancientcityruckers/"}
  },
  {
    associations: ['myruckclub'],
    coordinates: [39.9,-79.7192],
    country: "USA",
    name: "Uniontown Ruck Club",
    id: "uniontown_ruck_club",
    contact: { preferred: 'instagram', instagram: "https://instagram.com/uniontown_ruck_club/"}
  },
  {
    associations: ['goruck'],
    coordinates: [44.127,-71.532],
    country: "USA",
    name: "White Mountain Ruck Club",
    id: "white_mountain_ruck_club",
    contact: { preferred: 'instagram', instagram: "https://instagram.com/white_mountain_ruck_club/"}
  },
  {
    associations: ['myruckclub'],
    coordinates: [19.2936,-99.659],
    country: "México",
    name: "Ruckers Toluca",
    id: "ruckerstoluca",
    contact: { preferred: 'instagram', facebook: "https://www.facebook.com/RuckersTolucaMX/", instagram: "https://instagram.com/ruckerstoluca/"}
  },
  {
    associations: ['goruck'],
    coordinates: [41.0825,-85.1399],
    country: "USA",
    name: "Old Fort Ruckers",
    id: "old.fort.ruckers",
    contact: { preferred: 'instagram', instagram: "https://instagram.com/old.fort.ruckers/"}
  },
  {
    associations: ['goruck'],
    coordinates: [40.4997,-74.4392],
    country: "USA",
    name: "Inglorious Ruckers",
    id: "inglorious_ruckers",
    contact: {
      preferred: 'homepage',
      instagram: "https://instagram.com/inglorious_ruckers/",
      homepage: 'https://ingloriousruckers.com/',
      email: 'Info.Inglorious.Rucker@gmail.com',
      facebook: 'https://www.facebook.com/groups/2507082779386126'
    }
  },
  {
    associations: ['myruckclub'],
    coordinates: [33.9753,-117.5644],
    country: "USA",
    name: "Ruckervale Club",
    id: "ruckervaleclub",
    contact: { preferred: 'instagram', instagram: "https://instagram.com/ruckervaleclub/"}
  },
  {
    associations: ['myruckclub'],
    coordinates: [45.5222,-122.6706],
    country: "USA",
    name: "Portlandia Ruck Club",
    id: "portlandiaruckclub",
    contact: { preferred: 'instagram', instagram: "https://instagram.com/portlandiaruckclub/"}
  },
  {
    associations: ['myruckclub'],
    coordinates: [40.4417,-79.9997],
    country: "USA",
    name: "Steel City Ruck Club",
    id: "steelcityruckclub",
    contact: { preferred: 'instagram', instagram: "https://instagram.com/steelcityruckclub/"}
  },
  {
    associations: ['goruck'],
    coordinates: [37.0059,-121.5668],
    country: "USA",
    name: "Garlic City Ruckers",
    id: "garlic_city_ruckers",
    contact: { preferred: 'instagram', instagram: "https://instagram.com/garlic_city_ruckers/"}
  },
  {
    associations: ['myruckclub'],
    coordinates: [48.5251,-121.8714],
    country: "USA",
    name: "Skagit Ruck Club",
    id: "skagitruckclub",
    contact: { preferred: 'instagram', instagram: "https://instagram.com/skagitruckclub/"}
  },
  {
    associations: ['myruckclub'],
    coordinates: [34.2647,-85.1716],
    country: "USA",
    name: "Rome Ruckers",
    id: "rome_ruckers",
    contact: { preferred: 'instagram', instagram: "https://instagram.com/rome_ruckers/"}
  },
  {
    associations: ['myruckclub'],
    coordinates: [30.114,-81.4221],
    country: "USA",
    name: "NOC Rucks",
    id: "nocrucks",
    contact: { preferred: 'instagram', instagram: "https://instagram.com/nocrucks/"}
  },
  {
    associations: ['myruckclub'],
    coordinates: [41.7766,-88.1393],
    country: "USA",
    name: "630 Ruckers",
    id: "630ruckers",
    contact: { preferred: 'instagram', instagram: "https://instagram.com/630ruckers/"}
  },
  {
    associations: ['goruck'],
    coordinates: [33.3709,-84.7679],
    country: "USA",
    name: "TD Ruck Coweda",
    id: "tdruck_coweta",
    contact: { preferred: 'instagram', instagram: "https://instagram.com/tdruck_coweta/"}
  },
  {
    associations: ['goruck'],
    coordinates: [31.4733,-100.4385],
    country: "USA",
    name: "Chaulk Ruckers",
    id: "chaulkruckers",
    contact: { preferred: 'instagram', instagram: "https://instagram.com/chaulkruckers/"}
  },
  {
    associations: ['goruck'],
    coordinates: [37.6625,-121.9759],
    country: "USA",
    name: "Triton Ruck Club - Nor Cal",
    id: "tritonnorcal",
    contact: {
      preferred: 'instagram',
      instagram: "https://instagram.com/tritonnorcal/",
      facebook: "www.facebook.com%2Fgroups%2F499670368786357%2F%3Fref%3Dshare_group_link&e=AT0VcDSAZ6cEk4qjmF7vNgWP45cv1k5wlJvMlT5z3hcf3UJOThcvZpIezwCr4Xsg1g7x5FV5tGqz2F9A15LBaI2JcFhhnpFYgzboJfP0i5MPXz-L"
    }
  },
  {
    associations: ['myruckclub'],
    coordinates: [39.9657,-75.1741],
    country: "USA",
    name: "Delaware Valley Rucking Crew",
    id: "dvruckingcrew",
    contact: {
      preferred: 'instagram',
      instagram: "https://instagram.com/dvruckingcrew/",
      homepage: "https://discord.gg%2FQHMRXGGVkr&e=AT0KWwn9RQ3fDGHo6nXQK4xJsQD2k1y8T6HPaQliHP-QAPH9lR63VcgnDvFolI9qeYOfiXmCz_nVcg8l5IB3Lz_gGwTflmPwHQOkBxn9W9lyEmya"
    }
  },
  {
    associations: ['myruckclub'],
    coordinates: [36.1568,-115.1419],
    country: "USA",
    name: "Vegas Strong Ruckers",
    id: "vegasstrongruckers",
    contact: { preferred: 'instagram', facebook: "www.facebook.com%2Fgroups%2Fvegasstrongruckers&e=AT3wHS8OC-5wh8SE62DWBV4sfYK3EHRtlyJ5C8oPXL-YMMipegQA92Cm0WADegDI4Z_8ewBRskIC4_0wo_4jz5rn1ZTqrlHNy8x_aTOlSYEB_t66", instagram: "https://instagram.com/vegasstrongruckers/"}
  },
  {
    associations: ['goruck'],
    coordinates: [33.4144,-84.474],
    country: "USA",
    name: "RUCK 770",
    id: "ruck770ptc",
    contact: { preferred: 'instagram', instagram: "https://instagram.com/ruck770ptc/"}
  },
  {
    associations: ['goruck'],
    coordinates: [40.2065,-75.3637],
    country: "USA",
    name: "MontCoRuckClub",
    id: "montcoruckclub",
    contact: { preferred: 'instagram', facebook: "www.facebook.com%2Fgroups%2F285564969015897%2F%3Fref%3Dshare&e=AT3Fhe7FJpXlVpSmzQ-P6qW74St9yWSqulFUXhjT0xK6vZQzPbDpVG9XZ3mM7shJg5CjiThRLJhDWYBIJkOTjAIXb5O_tIh8fo_7gneF5lzTsGzM", instagram: "https://instagram.com/montcoruckclub/"}
  },
  {
    associations: ['myruckclub'],
    coordinates: [41.30851,-81.43934],
    country: "USA",
    name: "Cleveland Area Rucking Crew",
    id: "omcleveland_area_rucking_crew/",
    contact: {
      preferred: 'instagram', 
      facebook: 'https://www.clhttps://www.facebook.com/ClevelandAreaRuckingCrew/evelandarearuckingcrew.com/',
      email: 'info@clevelandarearuckingcrew.com',
      instagram: "https://www.instagram.com/cleveland_area_rucking_crew/"
    }
      // https://www.youtube.com/channel/UCDy6y7w4-hNfv3ard3EfRng, https://twitter.com/C_A_R_C_, ]
  },
  {
    associations: ['goruck'],
    coordinates: [44.2329,-76.4820,],
    country: "Canada",
    name: "The Rucking Nuts",
    id: "omruckingnuts/",
    contact: {preferred: 'instagram', instagram: "https://www.instagram.com/ruckingnuts/", linktree: "https://linktr.ee/RuckingNuts" }
  },
  {
    associations: ['goruck'],
    coordinates: [35.6499,-78.4599,],
    country: "USA",
    name: "Clayton Ruck Club",
    id: "omclaytonruckclub/",
    contact: { preferred: 'instagram', instagram: "https://www.instagram.com/claytonruckclub/"}
  },
  {
    associations: ['myruckclub'],
    coordinates: [40.7514, -73.9854],
    country: "USA",
    name: "BAAR Ruck Club",
    id: "ombaar_ruck_club/",
    contact: { preferred: 'instagram', instagram: "https://www.instagram.com/baar_ruck_club/"}
  }
]
