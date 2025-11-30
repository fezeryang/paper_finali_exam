import { Photo, PhotoCollection } from '../types';

// 示例照片数据（用户后续可替换为真实照片）
export const photos: Photo[] = [
  {
    id: 'photo-001',
    title: '城市之光',
    description: '夜晚的城市灯火，记录下繁华与寂静的对话',
    year: '2024',
    location: '上海',
    category: '城市',
    imagePath: '/photos/city-lights.jpg',
    thumbnail: '/photos/thumbs/city-lights-thumb.jpg',
    aspectRatio: 16 / 9,
  },
  {
    id: 'photo-002',
    title: '自然之美',
    description: '山川湖泊，大自然的鬼斧神工',
    year: '2024',
    location: '杭州',
    category: '风景',
    imagePath: '/photos/nature.jpg',
    thumbnail: '/photos/thumbs/nature-thumb.jpg',
    aspectRatio: 4 / 3,
  },
  {
    id: 'photo-003',
    title: '人文瞬间',
    description: '街头巷尾，捕捉生活中的美好瞬间',
    year: '2023',
    location: '北京',
    category: '人文',
    imagePath: '/photos/people.jpg',
    thumbnail: '/photos/thumbs/people-thumb.jpg',
    aspectRatio: 1 / 1,
  },
  // 用户可继续添加更多照片...
];

// 提取所有分类
export const categories = Array.from(new Set(photos.map((p) => p.category)));

// 导出照片集合
export const photoCollection: PhotoCollection = {
  photos,
  categories,
};

// 根据 ID 查找照片
export const getPhotoById = (id: string): Photo | undefined => {
  return photos.find((photo) => photo.id === id);
};

// 根据分类筛选照片
export const getPhotosByCategory = (category: string): Photo[] => {
  return photos.filter((photo) => photo.category === category);
};
