import { Injectable } from '@nestjs/common';
import { EPISODES } from 'src/database/episodes.const';
import { SHORTCAST } from 'src/database/shortcast.const';
import { IResponse } from 'src/models/response.interface';

@Injectable()
export class StcolService {
  getPodcastList(): IResponse {
    return {
      episodes: EPISODES,
      shortcast: SHORTCAST,
    };
  }
}
