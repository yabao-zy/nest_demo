import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core'
import { UserService } from '../server/user/user.service';
@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private readonly reflector: Reflector,
        private readonly userService: UserService,

    ) { }
    async canActivate(
        context: ExecutionContext,
    ): Promise<any> {
        const roles = this.reflector.get<string[]>('roles', context.getHandler()) // 从控制器注解中得到的角色组信息。
        const request = context.switchToHttp().getRequest()
        let token = request.header('token')
        if (!token) throw new UnauthorizedException('用户不存在')
        let userData = await this.userService.getToken(token)
        if (!userData) throw new UnauthorizedException('权限不足')
        if (!roles.some(item => item == userData.role)) throw new UnauthorizedException('权限不足')



    }
}