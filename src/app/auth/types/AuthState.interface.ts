import { CurrentUserInterface } from 'src/app/shared/types/CurrentUser.interface';
import { BackEndErrorsInterface } from 'src/app/shared/types/BackEndErrors.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null;
  isLoggedIn: boolean | null;
  validationErrors: BackEndErrorsInterface | null;
}
