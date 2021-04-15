/** 
 * 这是角色路由判断功能，在控制器。在接口层定义的用户权限。
 * 会在这里做出处理
 * 
 */
 
import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);


export const role = ['admim','dev','pe','pd']
