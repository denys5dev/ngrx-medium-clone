import { ArticleInterface } from 'src/app/shared/types/Article.interface';
import { BackEndErrorsInterface } from 'src/app/shared/types/BackEndErrors.interface';

export interface EditArticleStateInterface {
  isSubmitting: boolean;
  article: ArticleInterface | null;
  isLoading: boolean;
  validationErrors: BackEndErrorsInterface | null;
}
