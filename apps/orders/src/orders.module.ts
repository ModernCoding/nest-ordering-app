import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
import { DatabaseModule } from 'libs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object ({
          MONGODB_URI: Joi.string().required()
        }),
      envFilePath: './apps/orders/.env'
    }),

    DatabaseModule,
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})

export class OrdersModule {}