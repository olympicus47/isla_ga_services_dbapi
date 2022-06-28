import { NativeBigIntType } from 'src/lib/NativeBigInt';
import { Entity, PrimaryKey, Property, Index } from '@mikro-orm/core';

// indexuri compuse cu toate permutarile pentru maximizarea vitezei de cautare
@Index({ properties: ['adresaLocatie', 'numeLocatie'] })
@Index({ properties: ['numeLocatie', 'adresaLocatie'] })
@Entity()
export class Locatie {
  @PrimaryKey({ unsigned: true, autoincrement: true, type: NativeBigIntType })
  idLocatie!: bigint;

  @Property({ unique: true, nullable: false })
  numeLocatie: string;

  @Property({ unique: true, nullable: false })
  adresaLocatie: string;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  constructor(numeLocatie: string, adresaLocatie: string) {
    this.numeLocatie = numeLocatie;
    this.adresaLocatie = adresaLocatie;
  }
}
