import { create } from 'zustand';
import { ScrollState } from '../types';

interface AppState {
  selectedPhotoId: string | null;
  setSelectedPhotoId: (id: string | null) => void;

  scrollState: ScrollState;
  setScrollState: (state: Partial<ScrollState>) => void;

  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;

  isNavigationOpen: boolean;
  toggleNavigation: () => void;

  isMuted: boolean;
  toggleMute: () => void;
}

export const useStore = create<AppState>((set) => ({
  selectedPhotoId: null,
  setSelectedPhotoId: (id) => set({ selectedPhotoId: id }),

  scrollState: {
    scrollY: 0,
    progress: 0,
    direction: 'down',
  },
  setScrollState: (state) =>
    set((prev) => ({
      scrollState: { ...prev.scrollState, ...state },
    })),

  isLoading: true,
  setIsLoading: (loading) => set({ isLoading: loading }),

  isNavigationOpen: false,
  toggleNavigation: () =>
    set((state) => ({ isNavigationOpen: !state.isNavigationOpen })),

  isMuted: true,
  toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),
}));
