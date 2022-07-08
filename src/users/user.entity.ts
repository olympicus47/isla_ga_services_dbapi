import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
@Entity()
export class User {
  @PrimaryKey({
    primary: true,
    unique: true,
    index: true,
  })
  email!: string;
  @Property()
  hashed_password!: string;

  @Property({ default: false, hidden: true })
  isAdmin!: boolean;

  @Property({ default: false })
  isConfirmed!: boolean;

  constructor(email: string, password: string) {
    this.email = email;
    this.hashed_password = password;
    this.isAdmin = false;
    this.isConfirmed = false;
  }
}
