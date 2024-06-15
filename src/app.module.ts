import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StcolModule } from './stcol/stcol.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public/audio-files'), // Carpeta donde están tus archivos de audio
      serveRoot: '/audio', // Prefijo para los archivos servidos
    }),
    StcolModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
