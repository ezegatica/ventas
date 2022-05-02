import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './modules/items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { databaseConfig } from './config/database';
import { ConfigModule, ConfigType } from '@nestjs/config';

@Module({
  imports: [
    ItemsModule,
    MongooseModule.forRoot(
      'mongodb+srv://laptovix:OrpGNKYxoaA893bp@cluster0.foh7i.mongodb.net/dev?retryWrites=true&w=majority',
    ),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
