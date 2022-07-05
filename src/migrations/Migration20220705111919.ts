import { Migration } from '@mikro-orm/migrations';

export class Migration20220705111919 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `user` (`email` varchar(255) not null, `hashed_password` varchar(255) not null, primary key (`email`)) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `user` add index `user_email_index`(`email`);');

    this.addSql('create table `locatie` (`id_locatie` int unsigned not null auto_increment primary key, `nume_locatie` varchar(255) not null, `adresa_locatie` varchar(255) not null, `created_at` datetime not null, `updated_at` datetime not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `locatie` add unique `locatie_nume_locatie_unique`(`nume_locatie`);');
    this.addSql('alter table `locatie` add unique `locatie_adresa_locatie_unique`(`adresa_locatie`);');
    this.addSql('alter table `locatie` add index `locatie_nume_locatie_adresa_locatie_index`(`nume_locatie`, `adresa_locatie`);');
    this.addSql('alter table `locatie` add index `locatie_adresa_locatie_nume_locatie_index`(`adresa_locatie`, `nume_locatie`);');

    this.addSql('create table `produs` (`id_produs` int unsigned not null auto_increment primary key, `ean_produs` bigint not null, `nume_produs` varchar(255) not null, `created_at` datetime not null, `updated_at` datetime not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `produs` add unique `produs_ean_produs_unique`(`ean_produs`);');
    this.addSql('alter table `produs` add unique `produs_nume_produs_unique`(`nume_produs`);');
    this.addSql('alter table `produs` add index `produs_nume_produs_ean_produs_index`(`nume_produs`, `ean_produs`);');
    this.addSql('alter table `produs` add index `produs_ean_produs_nume_produs_index`(`ean_produs`, `nume_produs`);');

    this.addSql('create table `inventar_per_produs_per_locatie` (`id_produs_id_produs` int unsigned not null, `id_locatie_id_locatie` int unsigned not null, `nume_comercial_produs` varchar(255) not null, `pret_achizite_produs` float not null, `factor_tvaprodus` float not null, `pret_produs_calculat` float not null, `pret_vanzare` float not null, `stoc_minim_produs` int unsigned not null, `stoc_produs` int unsigned not null, `cod_casa_marcat` int unsigned null, `created_at` datetime not null, `updated_at` datetime not null, primary key (`id_produs_id_produs`, `id_locatie_id_locatie`)) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `inventar_per_produs_per_locatie` add index `inventar_per_produs_per_locatie_id_produs_id_produs_index`(`id_produs_id_produs`);');
    this.addSql('alter table `inventar_per_produs_per_locatie` add index `inventar_per_produs_per_locatie_id_locatie_id_locatie_index`(`id_locatie_id_locatie`);');
    this.addSql('alter table `inventar_per_produs_per_locatie` add unique `inventar_per_produs_per_locatie_nume_comercial_produs_unique`(`nume_comercial_produs`);');
    this.addSql('alter table `inventar_per_produs_per_locatie` add index `inventar_per_produs_per_locatie_stoc_produs_pret_va_97937_index`(`stoc_produs`, `pret_vanzare`, `nume_comercial_produs`);');
    this.addSql('alter table `inventar_per_produs_per_locatie` add index `inventar_per_produs_per_locatie_pret_vanzare_stoc_p_19cbc_index`(`pret_vanzare`, `stoc_produs`, `nume_comercial_produs`);');
    this.addSql('alter table `inventar_per_produs_per_locatie` add index `inventar_per_produs_per_locatie_pret_vanzare_nume_c_730bd_index`(`pret_vanzare`, `nume_comercial_produs`, `stoc_produs`);');
    this.addSql('alter table `inventar_per_produs_per_locatie` add index `inventar_per_produs_per_locatie_stoc_produs_nume_co_103c6_index`(`stoc_produs`, `nume_comercial_produs`, `pret_vanzare`);');
    this.addSql('alter table `inventar_per_produs_per_locatie` add index `inventar_per_produs_per_locatie_nume_comercial_prod_6cfa9_index`(`nume_comercial_produs`, `pret_vanzare`, `stoc_produs`);');
    this.addSql('alter table `inventar_per_produs_per_locatie` add index `inventar_per_produs_per_locatie_nume_comercial_prod_75ed5_index`(`nume_comercial_produs`, `stoc_produs`, `pret_vanzare`);');
    this.addSql('alter table `inventar_per_produs_per_locatie` add index `inventar_per_produs_per_locatie_id_locatie_id_locat_7de3d_index`(`id_locatie_id_locatie`, `id_produs_id_produs`);');
    this.addSql('alter table `inventar_per_produs_per_locatie` add index `inventar_per_produs_per_locatie_id_produs_id_produs_d0d9d_index`(`id_produs_id_produs`, `id_locatie_id_locatie`);');

    this.addSql('alter table `inventar_per_produs_per_locatie` add constraint `inventar_per_produs_per_locatie_id_produs_id_produs_foreign` foreign key (`id_produs_id_produs`) references `produs` (`id_produs`) on update cascade;');
    this.addSql('alter table `inventar_per_produs_per_locatie` add constraint `inventar_per_produs_per_locatie_id_locatie_id_locatie_foreign` foreign key (`id_locatie_id_locatie`) references `locatie` (`id_locatie`) on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table `inventar_per_produs_per_locatie` drop foreign key `inventar_per_produs_per_locatie_id_locatie_id_locatie_foreign`;');

    this.addSql('alter table `inventar_per_produs_per_locatie` drop foreign key `inventar_per_produs_per_locatie_id_produs_id_produs_foreign`;');

    this.addSql('drop table if exists `user`;');

    this.addSql('drop table if exists `locatie`;');

    this.addSql('drop table if exists `produs`;');

    this.addSql('drop table if exists `inventar_per_produs_per_locatie`;');
  }

}
