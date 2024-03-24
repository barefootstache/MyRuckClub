import { Association } from "@/business-logic/associations.model";

export const Associations: Association[] = [
  {
    name: 'My Ruck Club',
    contact: { 
      preferred: 'fediverse', 
      homepage: 'https://www.myruck.club/', 
      instagram: 'https://www.instagram.com/myruckclub/',
      fediverse: 'https://muenchen.social/@rucking'
    },
    type: 'myruckclub',
    color: 'cyan'
  },
  {
    name: 'GORUCK',
    contact: { 
      preferred: 'linktree', 
      homepage: 'https://www.goruck.com/',
      instagram: 'https://www.instagram.com/goruck/',
      facebook: 'https://www.facebook.com/GORUCK/',
      linktree: 'https://linktr.ee/goruck'
    },
    type: 'goruck',
    color: 'black'
  },
  {
    name: 'GORUCK Europe',
    contact: { 
      preferred: 'linktree', 
      linktree: 'https://linktr.ee/goruckeurope',
      instagram: 'http://instagram.com/goruckeurope',
      facebook: 'http://facebook.com/goruckeurope'
    },
    type: 'goruckeurope',
    color: 'blue'
  },
  {
    name: 'MILRUCK',
    contact: { 
      preferred: 'homepage', 
      homepage: 'https://milruck.se/',
      instagram: 'https://instagram.com/milruck',
      facebook: 'https://www.facebook.com/milruck'
    },
    type: 'milruck',
    color: 'yellow'
  },
  {
    name: 'Sandlot',
    contact: { 
      preferred: 'sandlot', 
      sandlot: 'https://www.sandlot.fit/',
      instagram: 'https://www.instagram.com/sandlotfit/',
      facebook: 'https://www.facebook.com/sandlot.fit.9'
    },
    type: 'sandlot',
    color: 'green'
  },
  {
    name: 'Spartan',
    contact: { 
      preferred: 'homepage', 
      homepage: 'https://www.spartan.com/',
      instagram: 'https://www.instagram.com/spartanrace/',
      facebook: 'https://www.facebook.com/spartan'
    },
    type: 'spartan',
    color: 'red'
  },
  {
    name: 'CrossFit',
    contact: { 
      preferred: 'homepage', 
      homepage: 'https://www.crossfit.com/',
      facebook: 'https://www.facebook.com/crossfit',
      instagram: 'https://www.instagram.com/crossfit/'
    },
    type: 'crossfit',
    color: 'grey'
  },
  {
    name: 'F3 Nation',
    contact: { 
      preferred: 'homepage', 
      homepage: 'https://f3nation.com/',
      facebook: 'https://www.facebook.com/fitnessfellowshipfaith/',
      instagram: 'https://www.instagram.com/f3nation_official/'
    },
    type: 'f3',
    color: 'white'
  },
]
