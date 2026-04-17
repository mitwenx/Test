"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface BookmarkState {
  bookmarks: string[];
  toggleBookmark: (slug: string) => void;
}

export const useBookmarksStore = create<BookmarkState>()(
  persist(
    (set) => ({
      bookmarks: [],
      toggleBookmark: (slug) =>
        set((state) => ({
          bookmarks: state.bookmarks.includes(slug)
            ? state.bookmarks.filter((item) => item !== slug)
            : [...state.bookmarks, slug]
        }))
    }),
    {
      name: "cycleindia-bookmarks",
      storage: createJSONStorage(() => localStorage)
    }
  )
);
