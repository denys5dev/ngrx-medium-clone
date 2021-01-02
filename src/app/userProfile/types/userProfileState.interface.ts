import { ProfileInterface } from "src/app/shared/types/Profile.interface";

export interface UserProfileStateInterface {
    data: ProfileInterface | null;
    isLoading: boolean;
    error: string | null;
}