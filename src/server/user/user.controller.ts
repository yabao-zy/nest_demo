import { Controller, Get, Redirect, HttpCode, UseGuards, UnauthorizedException, Session } from '@nestjs/common';
import { get } from 'node:http';
import { UserService } from './user.service'
import { RolesGuard } from '../../guard/roles.guard'
import { Roles } from '../../guard/roles.decorator'

@UseGuards(RolesGuard)
@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }
    @Roles('admin','develope','cat')
    @Get('/login')
    async login() {
        let data = await this.userService.getOne('yabao')
        console.log(data);
        return data
    }
    @Get('/save')
    @HttpCode(200)
    save() {
        let data = this.userService.save({ name: 123, age: 456 })
        console.log(data);
        return data

    }

}
