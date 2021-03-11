import { BackEndErrorsInterface } from 'src/app/shared/types/BackEndErrors.interface';

export interface SettingsStateInterface {
  isSubmitting: boolean;
  validationErrors: BackEndErrorsInterface | null;
}
