export interface GalleryItem {
  id: number;
  imageUrl: string;
  alt: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    imageUrl: '/Freelancing-/images/gallery/one.png',
    alt: 'Tech Thumbnail'
  },
  {
    id: 2,
    imageUrl: '/Freelancing-/images/gallery/two.png',
    alt: 'Tutorial Thumbnail'
  },
  {
    id: 3,
    imageUrl: '/Freelancing-/images/gallery/three.png',
    alt: 'Bot Thumbnail'
  },
  {
    id: 4,
    imageUrl: '/Freelancing-/images/gallery/four.png',
    alt: 'Tutorial Thumbnail'
  }
];
