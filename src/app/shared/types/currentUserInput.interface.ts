import { CurrentUserInterface } from './CurrentUser.interface';

export interface CurrentUserInputInterface extends CurrentUserInterface {
    password: string;
}