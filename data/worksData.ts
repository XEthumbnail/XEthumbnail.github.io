export interface WorkItem {
  id: number;
  title: string;
  category: string;
  views: string;
  imageUrl: string; 
}

export const worksData: WorkItem[] = [
  { 
    id: 1, 
    title: 'How to Check if a MOD APK is Safe or Not', 
    category: 'Tutorial', 
    views: 'Client Project', 
    imageUrl: 'images/gallery/one.png' 
  },
  { 
    id: 2, 
    title: 'Create Telegram Bot on Android', 
    category: 'Tech Tutorial', 
    views: 'Client Project', 
    imageUrl: 'images/gallery/two.png' 
  },
  { 
    id: 3, 
    title: 'Top 5 Telegram Bots', 
    category: 'Tech / Apps', 
    views: 'Client Project', 
    imageUrl: 'images/gallery/three.png' 
  },
  { 
    id: 4, 
    title: 'Block YouTube Shorts Permanently', 
    category: 'Tech / YouTube Tips', 
    views: 'Client Project', 
    imageUrl: 'images/gallery/four.png' 
  },
  { 
    id: 5, 
    title: 'placeholder', 
    category: 'placeholder', 
    views: 'xyz', 
    imageUrl: 'https://placehold.co/1280x720/0277BD/FFFFFF?text=soon' 
  },
  { 
    id: 6, 
    title: 'placeholder', 
    category: 'placeholder', 
    views: 'xyz', 
    imageUrl: 'https://placehold.co/1280x720/9C27B0/FFFFFF?text=soon' 
  },
];
