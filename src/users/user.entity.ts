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

  constructor(email: string, password: string) {
    this.email = email;
    this.hashed_password = password;
  }
}
