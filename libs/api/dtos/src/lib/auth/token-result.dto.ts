import addMilliseconds from 'date-fns/addMilliseconds';
import parse from 'date-fns/parse';
import ms from 'ms';
import { UserInformationDto } from '../user/user-information.dto';

export class TokenResultDto {
  token: string;
  tokenExpiry: Date;
  user: UserInformationDto;

  computeExpiry(expired: string) {
    const milli = ms(expired);
    const now = Date.now();
    this.tokenExpiry = parse(
      addMilliseconds(now, milli).toLocaleString(),
      'M/d/yyyy, h:mm:ss aaa',
      now
    );
  }
}
