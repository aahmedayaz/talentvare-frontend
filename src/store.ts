import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'

export type JobId = string

type JobsState = {
  saved: Record<JobId, boolean>
  applied: Record<JobId, boolean>
}

const initialState: JobsState = {
  saved: {},
  applied: {},
}

const hydrate = (): JobsState => {
  try {
    const raw = localStorage.getItem('jobsState')
    return raw ? { ...initialState, ...JSON.parse(raw) } : initialState
  } catch {
    return initialState
  }
}

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: hydrate(),
  reducers: {
    toggleSaved(state, action: PayloadAction<JobId>) {
      const id = action.payload
      state.saved[id] = !state.saved[id]
    },
    markApplied(state, action: PayloadAction<JobId>) {
      const id = action.payload
      state.applied[id] = true
    },
    hydrateFromStorage(state) {
      const next = hydrate()
      state.saved = next.saved
      state.applied = next.applied
    },
  },
})

export const { toggleSaved, markApplied, hydrateFromStorage } = jobsSlice.actions

export const store = configureStore({
  reducer: {
    jobs: jobsSlice.reducer,
  },
})

store.subscribe(() => {
  const s = store.getState().jobs as JobsState
  localStorage.setItem('jobsState', JSON.stringify({ saved: s.saved, applied: s.applied }))
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


