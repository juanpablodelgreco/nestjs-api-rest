export const ENCRYPT_MANAGER = 'IEncryptManager';

export interface EncryptManager {
  hash(value: string, salt: number): Promise<string>;
  verify(password: string, hash: string): Promise<boolean>;
}
