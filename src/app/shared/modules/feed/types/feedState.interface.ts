import { GetFeedResponseInterface} from '../types/GetFeedResponse.interface';

export interface FeedStateInterface {
  isLoading: boolean;
  error: string | null;
  data: GetFeedResponseInterface | null;
}
