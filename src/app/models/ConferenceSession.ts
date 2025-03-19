import {ConferenceSpeech} from './ConferenceSpeech';

export interface ConferenceSession {
  title: string;
  icon: string;
  speeches: Array<ConferenceSpeech>;
}
