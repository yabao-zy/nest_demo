import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './server/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { User } from './server/user/user.entity'
import { mysqlConfig } from './config/mysql';


@Module({
  imports: [UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      ...mysqlConfig,
      insecureAuth: true,
      entities:[User]

    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor(private readonly connection: Connection) { }
}
