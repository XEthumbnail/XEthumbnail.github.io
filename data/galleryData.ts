export interface GalleryItem {
  id: number;
  imageUrl: string;
  alt: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    imageUrl: 'https://placehold.co/1280x720/5B5BE6/FFFFFF?text=Epic+Gaming+Thumbnail',
    alt: 'Gaming Thumbnail'
  },
  {
    id: 2,
    imageUrl: 'https://placehold.co/1280x720/7D5260/FFFFFF?text=Tech+Review+2024',
    alt: 'Tech Review Thumbnail'
  },
  {
    id: 3,
    imageUrl: 'https://placehold.co/1280x720/2D0F7E/FFFFFF?text=Finance+Tips+Guide',
    alt: 'Finance Thumbnail'
  },
  {
    id: 4,
    imageUrl: 'https://placehold.co/1280x720/17005E/FFFFFF?text=Vlog+Adventure',
    alt: 'Vlog Thumbnail'
  }
];
