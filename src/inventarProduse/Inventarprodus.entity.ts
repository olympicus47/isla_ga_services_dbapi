import { Entity, PrimaryKey, Property, Index, Enum } from '@mikro-orm/core';
import { TVAProdus } from './TVAProduse';
import { TintaProfit } from './tintaProfitCaFactorMultiplicativ';
import { NativeBigIntType } from 'src/lib/NativeBigInt';

// indexuri compuse cu toate permutarile pentru maximizarea vitezei de cautare
// @Index({ properties: ['eanProdus', 'numeProdus'] })
// @Index({ properties: ['numeProdus', 'eanProdus'] })
@Entity()
export class InventarProduse {
  @PrimaryKey({ unsigned: true, autoincrement: true, type: NativeBigIntType })
  idProdus!: bigint;

  @PrimaryKey({ unsigned: true, autoincrement: true, type: NativeBigIntType })
  idLocatie!: bigint;

  @Property({ unique: true, nullable: false })
  numeProdus: string;

  @Property({ unsigned: true, nullable: false })
  pretAchiziteProdus!: number;

  @Property({ unsigned: true, nullable: false })
  @Enum(() => TVAProdus)
  factorTVAProdus!: TVAProdus;

  @Property({ unsigned: true, nullable: false })
  pretProdusCalculat: number = Math.ceil(
    this.pretAchiziteProdus * this.factorTVAProdus * TintaProfit,
  );

  @Property({ unsigned: true, nullable: false })
  pretVanzare!: number;

  @Property({ unsigned: true, nullable: false })
  stocMinimProdus!: number;

  @Property({ unsigned: true, nullable: false })
  stocProdus!: number;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  constructor(
    numeProdus: string,
    pretAchiziteProdus: number,
    factorTVAProdus: number,
    pretVanzare: number,
    stocMinimProdus: number,
    stocProdus: number,
  ) {
    this.numeProdus = numeProdus;
    this.pretAchiziteProdus = pretAchiziteProdus;
    this.factorTVAProdus = factorTVAProdus;
    this.pretProdusCalculat = (() =>
      Math.ceil(
        this.pretAchiziteProdus * this.factorTVAProdus * TintaProfit,
      ))();
    this.pretVanzare = pretVanzare;
    this.stocMinimProdus = stocMinimProdus;
    this.stocProdus = stocProdus;
  }
}
