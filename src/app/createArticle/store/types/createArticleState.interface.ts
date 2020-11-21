import { BackEndErrorsInterface } from 'src/app/shared/types/BackEndErrors.interface';

export interface CreateArticleStateInterface {
  isSubmitting: boolean;
  validationErrors: BackEndErrorsInterface | null;
}
