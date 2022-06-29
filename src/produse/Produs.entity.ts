// import { NativeBigIntType } from './../lib/NativeBigInt';
import { Entity, PrimaryKey, Property, Index } from '@mikro-orm/core';

// indexuri compuse cu toate permutarile pentru maximizarea vitezei de cautare
@Index({ properties: ['eanProdus', 'numeProdus'] })
@Index({ properties: ['numeProdus', 'eanProdus'] })
@Entity()
export class Produs {
  @PrimaryKey({
    unsigned: true,
    autoincrement: true /*type: NativeBigIntType*/,
  })
  idProdus!: number;

  @Property({ unsigned: true, unique: true, nullable: false })
  eanProdus: bigint;

  @Property({ unique: true, nullable: false })
  numeProdus: string;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  constructor(numeProdus: string, eanProdus: bigint) {
    this.numeProdus = numeProdus;
    this.eanProdus = eanProdus;
  }
}
