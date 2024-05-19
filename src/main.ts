import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const documentOptions = new DocumentBuilder()
  .setTitle('REST API')
  .setDescription('Api de creaturas mitologicas')
  .build();

  const document = SwaggerModule.createDocument(app, documentOptions);

  await app.listen(3000);
}
bootstrap();
