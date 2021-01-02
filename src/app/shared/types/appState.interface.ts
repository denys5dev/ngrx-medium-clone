import { AuthStateInterface } from '../../auth/types/AuthState.interface';
import { FeedStateInterface } from '../modules/feed/types/feedState.interface';
import { PopularTagsStateInterface } from '../modules/popularTags/types/popularTagsState.interface';
import { ArticleStateInterface } from '../../article/types/articleState.interface';
import { CreateArticleStateInterface } from 'src/app/createArticle/store/types/createArticleState.interface';
import { EditArticleStateInterface } from 'src/app/editArticle/store/types/editArticleState.interface';
import { SettingsStateInterface } from 'src/app/settings/store/types/settingState.interface';
import { UserProfileStateInterface } from 'src/app/userProfile/types/userProfileState.interface';
export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  popularTags: PopularTagsStateInterface;
  article: ArticleStateInterface;
  createArticle: CreateArticleStateInterface;
  edictArticle: EditArticleStateInterface;
  settings: SettingsStateInterface;
  userProfile: UserProfileStateInterface;
}
