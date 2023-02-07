import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserRepository } from 'src/interfaces/repositories/UserRepository';
import { User } from 'src/models/User';

export class UserRepositoryImp implements UserRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}
  getAll(filters: any): Promise<User[]> {
    throw new Error('Method not implemented.');
  }

  async create(request: any): Promise<User> {
    return (await this.userModel.create(request)).save();
  }

  async getOne(email: string): Promise<User> {
    return this.userModel.findOne({ email });
  }

  update(user: User, request: any): Promise<User> {
    throw new Error('Method not implemented.');
  }

  delete(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
