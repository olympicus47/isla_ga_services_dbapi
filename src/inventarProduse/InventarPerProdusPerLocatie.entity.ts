import { Entity, Property, Index, Enum, ManyToOne } from '@mikro-orm/core';
import { TVAProdus, TVA } from './TVAProduse';
import { TintaProfit } from './tintaProfitCaFactorMultiplicativ';
import { Produs } from '../produse/Produs.entity';
import { Locatie } from '../locatii/Locatie.entity';

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
  })
  idProdus!: Produs;
  @ManyToOne({
    primary: true,
    unsigned: true,
  })
  idLocatie!: Locatie;

  @Property({ unique: true, nullable: false })
  numeComercialProdus: string;

  @Property({ columnType: 'float', nullable: false })
  pretAchiziteProdus!: number;

  @Property({ columnType: 'float', nullable: false })
  @Enum(() => TVAProdus)
  factorTVAProdus!: TVA[string];

  @Property({ columnType: 'float', nullable: false })
  pretProdusCalculat: number;

  @Property({ columnType: 'float', nullable: false })
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
    factorTVAProdus: TVA[string],
    pretVanzare: number,
    stocMinimProdus: number,
    stocProdus: number,
  ) {
    this.numeComercialProdus = numeComercialProdus;
    this.pretAchiziteProdus = pretAchiziteProdus;
    this.factorTVAProdus = factorTVAProdus;
    this.pretProdusCalculat = Math.ceil(
      this.pretAchiziteProdus * this.factorTVAProdus * TintaProfit,
    );
    this.pretVanzare = pretVanzare;
    this.stocMinimProdus = stocMinimProdus;
    this.stocProdus = stocProdus;
  }
}
