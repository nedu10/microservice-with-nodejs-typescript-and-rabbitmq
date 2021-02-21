import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [
          'amqps://zfsuybsg:O-WEW6KWtyVtBq4q5W-_3xTmOvUGnIPL@hornet.rmq.cloudamqp.com/zfsuybsg',
        ],
        queue: 'product_queue',
        queueOptions: {
          durable: false,
        },
      },
    },
  );

  await app.listen(() => {
    console.log('Microservice is Listening');
  });
}
bootstrap();
