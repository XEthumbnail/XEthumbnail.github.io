export interface WorkItem {
  id: number;
  title: string;
  category: string;
  views: string;
  icon: string;
  gradientClass: string; // Corresponds to CSS classes
}

export const worksData: WorkItem[] = [
  { id: 1, title: 'SpaceX Launch', category: 'Science', views: '2.5M Views', icon: '⚡', gradientClass: 'grad-1' },
  { id: 2, title: 'Passive Income 2024', category: 'Finance', views: '500K Views', icon: '💸', gradientClass: 'grad-2' },
  { id: 3, title: 'Street Food Japan', category: 'Vlog', views: '1.2M Views', icon: '🍜', gradientClass: 'grad-3' },
  { id: 4, title: 'MacBook Review', category: 'Tech', views: '800K Views', icon: '💻', gradientClass: 'grad-4' },
  { id: 5, title: 'Top 10 Goals', category: 'Sports', views: '3M Views', icon: '⚽', gradientClass: 'grad-5' },
  { id: 6, title: 'Digital Art Tutorial', category: 'Education', views: '150K Views', icon: '🎨', gradientClass: 'grad-6' },
];
