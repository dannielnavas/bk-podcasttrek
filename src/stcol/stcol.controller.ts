import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { createReadStream } from 'fs';
import { join } from 'path';
import { IResponse } from 'src/models/response.interface';
import { StcolService } from './stcol.service';

@Controller('audio')
export class StcolController {
  constructor(private readonly stcolService: StcolService) {}

  @Get('podcast-list')
  getPodcastList(): IResponse {
    return this.stcolService.getPodcastList();
  }

  @Get(':filename')
  getAudio(@Param('filename') filename: string, @Res() res: Response) {
    console.log(filename);
    // Ruta del archivo de audio
    const filePath = join(
      __dirname,
      '..',
      '..',
      'public/audio-files',
      filename,
    );
    // Establece el tipo de contenido para archivos MP3
    res.setHeader('Content-Type', 'audio/mpeg');
    // Forzar la descarga con la extensión correcta
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    // Crea un flujo de lectura del archivo y lo envía a la respuesta
    const fileStream = createReadStream(filePath);
    // Envía el archivo al cliente
    fileStream.pipe(res);
  }
}
