// 照片数据类型
export interface Photo {
  id: string;
  title: string;
  description: string;
  year: string;
  location: string;
  category: string;
  imagePath: string;
  thumbnail: string;
  aspectRatio: number; // 宽高比 (width / height)
}

// 照片集合类型
export interface PhotoCollection {
  photos: Photo[];
  categories: string[];
}

// 滚动状态类型
export interface ScrollState {
  scrollY: number;
  progress: number;
  direction: 'up' | 'down';
}

// 路由参数类型
export interface PhotoParams {
  id: string;
}
