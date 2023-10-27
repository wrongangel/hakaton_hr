import { Resume } from '@/models/resume'
import { create } from 'zustand'

interface ResumeStore {
  hr: Resume[]
  management: Resume[]
  accepted: Resume[]
  rejected: Resume[]
  fetchHR: () => Promise<void>
  acceptHr: (id: number) => void
  acceptManager: (id: number) => void
  reject: (id: number) => void
}

export const useResumeStore = create<ResumeStore>((set) => ({
  hr: [], management: [], accepted: [], rejected: [],

  fetchHR: async () => {
    const hr: Resume[] = await (await fetch('/resume.json')).json()
    set(() => {
      return ({
        hr: hr
      })
    })
  },
  acceptHr: (id) => {
    set((state) => {
      const workResume = state.hr.find((res) => res.id === id)
      if (workResume){
        return ({
          state,
          management: [...state.management, workResume],
          hr: state.hr.filter((res) => res.id !== id)
        })
      }
      return ({state})
    })
  },
  acceptManager: (id) => {
    set((state) => {
      const workResume = state.management.find((res) => res.id === id)
      if (workResume){
        return ({
          state,
          accepted: [...state.accepted, workResume],
          management: state.management.filter((res) => res.id !== id)
        })
      }
      return ({state})
    })
  },
  reject: (id) => {
    set ((state) => {
      const workResume = state.management.find((res) => res.id === id) || state.hr.find((res) => res.id === id)
      if (workResume){
        return ({
          state,
          hr: state.hr.filter((res) => res.id !== id),
          management: state.management.filter((res) => res.id !== id),
          rejected: [...state.rejected, workResume]
        })
      }
      return ({state})
    })
  }
})
)