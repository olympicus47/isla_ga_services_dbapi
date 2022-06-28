import { type } from 'os';

export enum TVAProdus {
  '19%' = 1.19,
  '9%' = 1.9,
}

const factorTVAProdus = '19%';
console.log(
  '\n',
  TVAProdus[factorTVAProdus],
  '\n\n\n',
  typeof TVAProdus[factorTVAProdus],
);
