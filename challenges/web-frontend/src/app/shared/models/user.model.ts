export class Userbase {
    'internalUserId': number;
    'internalUserUuid': string;
    'privileges': string; // {PUBLIC_USER} ~ {DEALERSHIP_USER} ~ {SALESMAN_USER}
  }

export class User extends Userbase {
    'mailAddress': string;
}
