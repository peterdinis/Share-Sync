import {create} from 'zustand';

interface IAuhStore {
  user: any;
  setUser: (userData: any) => void;
}

export const useAuthStore = create<IAuhStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));