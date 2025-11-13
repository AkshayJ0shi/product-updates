export interface ProductUpdate {
  id: string;
  date: string;
  product: string;
  version: string;
  updateType: 'Feature' | 'Bug Fix' | 'Improvement' | 'Security';
  description: string;
  impactedUsers: number;
}

export interface UserInteraction {
  id: string;
  timestamp: string;
  userId: string;
  userName: string;
  action: 'View' | 'Click' | 'Download' | 'Share' | 'Comment';
  productUpdate: string;
  duration: number; // in seconds
  device: 'Desktop' | 'Mobile' | 'Tablet';
}
