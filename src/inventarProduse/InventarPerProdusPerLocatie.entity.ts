import { Entity, Property, Index, Enum, ManyToOne } from '@mikro-orm/core';
import { TVAProdus } from './TVAProduse';
import { TintaProfit } from './tintaProfitCaFactorMultiplicativ';
import { Produs } from 'src/produse/Produs.entity';
import { Locatie } from 'src/locatii/Locatie.entity';

// indexuri compuse cu toate permutarile pentru maximizarea vitezei de cautare
@Index({ properties: ['idProdus', 'idLocatie'] })
@Index({ properties: ['idLocatie', 'idProdus'] })
@Index({
  properties: ['numeComercialProdus', 'stocProdus', 'pretVanzare'],
})
@Index({
  properties: ['numeComercialProdus', 'pretVanzare', 'stocProdus'],
})
@Index({
  properties: ['stocProdus', 'numeComercialProdus', 'pretVanzare'],
})
@Index({
  properties: ['pretVanzare', 'numeComercialProdus', 'stocProdus'],
})
@Index({
  properties: ['pretVanzare', 'stocProdus', 'numeComercialProdus'],
})
@Index({
  properties: ['stocProdus', 'pretVanzare', 'numeComercialProdus'],
})
@Entity()
export class InventarPerProdusPerLocatie {
  //
  @ManyToOne({
    primary: true,
    unsigned: true,
    autoincrement: true,
  })
  idProdus!: Produs;
  @ManyToOne({
    primary: true,
    unsigned: true,
    autoincrement: true,
  })
  idLocatie!: Locatie;

  @Property({ unique: true, nullable: false })
  numeComercialProdus: string;

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

  @Property({ unsigned: true })
  codCasaMarcat?: number = 1;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  constructor(
    numeComercialProdus: string,
    pretAchiziteProdus: number,
    factorTVAProdus: number,
    pretVanzare: number,
    stocMinimProdus: number,
    stocProdus: number,
  ) {
    this.numeComercialProdus = numeComercialProdus;
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
