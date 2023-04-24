import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BirdModule } from './bird/bird.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';


// MongooseModule.forRoot('mongodb://localhost:27017/lsdb'),
@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true,envFilePath:['.env']}),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGO_URI'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),
    // MongooseModule.forRoot('mongodb://mongodb:27017/bird'),
   
    BirdModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
