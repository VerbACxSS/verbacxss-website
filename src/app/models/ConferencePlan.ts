import {Person} from './Person';
import {ConferenceSession} from './ConferenceSession';

export interface ConferencePlan {

  thursdaySessions: Array<ConferenceSession>
  fridaySessions: Array<ConferenceSession>
  saturdaySessions: Array<ConferenceSession>

  localCommitteeMembers: Array<Person>
  scientificCommitteeMembers: Array<Person>
}
