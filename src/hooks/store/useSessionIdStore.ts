import { create } from "zustand"

interface SessionState {
    sessionId: string | null
    saveSessionId: (sessionId: string) => void
}

const useSessionIdStore = create<SessionState>(set => ({
    sessionId: localStorage.getItem('sessioniD'),
    saveSessionId: (sessionId) => {
        localStorage.setItem('sessioniD', sessionId)
        set({ sessionId })
    }
}))

export default useSessionIdStore