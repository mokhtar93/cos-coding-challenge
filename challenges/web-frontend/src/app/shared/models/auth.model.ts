import { Userbase } from './user.model';

export class Auth extends Userbase {
    authenticated?: boolean;
    userId?: string;
    token?: string;
    authenticationChallenge?: string;
}