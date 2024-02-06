export interface Shortener {
  id?: string;
  name: string;
  url: string;
  timestamp: string;
  click_count?: number;
  user_id?: string;
}
