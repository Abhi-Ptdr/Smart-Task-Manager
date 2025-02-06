import { create } from "zustand";

export const useModalStore = create((set) => ({
  isOpen: false,
  task: null,
  openModal: (task = null) => set({ isOpen: true, task }),
  closeModal: () => set({ isOpen: false, task: null }),
}));
