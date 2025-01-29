import { create } from 'zustand'

// store
const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  tutors: [],
  setTutors: () => set((tutors) => ({ tutors: tutors })),
  selectedSort: 'price:asc',
  setSelectedSort: (sort) => set(() => ({ selectedSort: sort })),
  selectedFilter: null,
  setSelectedFilter: (filter) => set(() => ({ selectedFilter: filter })),
}))

export default useStore