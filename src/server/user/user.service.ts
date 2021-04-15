import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) { }

    getOne(name: any) {
        return this.usersRepository.findOne({ name })
    }
    save(obj: any) {
        return this.usersRepository.save(obj)
    }
    getToken(token: string) {
        return this.usersRepository.findOne({ token })
    }
}
