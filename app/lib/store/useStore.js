import { create } from 'zustand'

// store
const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  tutors: [],
  setTutors: (tutors) => set(() => ({ tutors: tutors })),
  totalTutors: 0,
  setTotalTutors: (total) => set(() => ({ totalTutors: total })),
  selectedSort: {
    label: 'Price (low to high)',
    value: 'price:asc'
  },
  setSelectedSort: (sort) => set(() => ({ selectedSort: sort })),
  selectedFilter: null,
  setSelectedFilter: (filter) => set(() => ({ selectedFilter: filter })),
  isUsingFilter: false,
  setIsUsingFilter: (isUsingFilter) => set(() => ({ isUsingFilter: isUsingFilter })),
  selectedTutorId: 0,
  setSelectedTutorId: (tutorId) => set(() => ({ selectedTutorId: tutorId })),
}))

const tutor = state => state.tutors.find(tutor => tutor.id === state.selectedTutorId)

export {
  useStore,
  tutor,
}