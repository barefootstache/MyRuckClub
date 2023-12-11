export type AssociationType = 'myruckclub' | 'goruck' |'goruckeurope' | 'milruck' | 'f3' | 'spartan' | 'crossfit' | 'sandlotfit';

export type Association = {
  name: string;
  url: string;
  type: AssociationType;
  color: string;
}

