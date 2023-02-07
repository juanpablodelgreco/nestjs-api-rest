import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { EncryptManager } from 'src/interfaces/helpers/EncryptManager';

@Injectable()
export class EncryptManagerImp implements EncryptManager {
  async hash(value: string, salt: number): Promise<string> {
    return bcrypt.hashSync(value, salt);
  }

  async verify(password: string, hash: string): Promise<boolean> {
    return bcrypt.compareSync(password, hash);
  }
}
