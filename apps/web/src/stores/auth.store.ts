import { create } from "zustand";
import { getMe, RefreshToken } from "@/services/auth.service";

export interface IUser {
  id: string;
  fullname: string;
  username: string;
  role: string;
}

interface IAuthState {
  authReady: boolean;
  isAuthenticated: boolean;
  user: IUser | null;
  setAuth: (user: IUser) => void;
  setUser: (user: IUser) => void;
  setIsAuthenticated: (value: boolean) => void;
  clearAuth: () => void;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<IAuthState>((set) => ({
  authReady: false,
  isAuthenticated: false,
  user: null,
  setAuth: (user) => set({ isAuthenticated: true, user }),
  setUser: (user) => set({ user }),
  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
  clearAuth: () => set({ isAuthenticated: false, user: null }),
  checkAuth: async () => {
    try {
      await RefreshToken();
      const currentUser = await getMe();
      set({ isAuthenticated: true, user: currentUser });
    } catch {
      set({ isAuthenticated: false, user: null });
    } finally {
      set({ authReady: true });
    }
  },
}));
