import { AuthStateInterface } from '../../auth/types/AuthState.interface';
import { FeedStateInterface } from '../modules/feed/types/feedState.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
}
