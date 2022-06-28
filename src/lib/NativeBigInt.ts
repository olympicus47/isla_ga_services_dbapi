import { BigIntType } from '@mikro-orm/core';

export class NativeBigIntType extends BigIntType {
  convertToJSValue(value: any): any {
    return BigInt(value);
  }
}
