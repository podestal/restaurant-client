// import { create } from "zustand"

// interface NotificationsState {
//     type: string
//     setType: (value: string) => void
//     message: string
//     setMessage: (value: string) => void
//     show: boolean
//     setShow: (value: boolean) => void
//     reset: () => void
// }

// const useNotificationsStore = create<NotificationsState>(set => ({
//     type: '',
//     setType: (value) => set({ type: value }),
//     message: '',
//     setMessage: (value) => set({ message: value }),
//     show: false,
//     setShow: (val) => set({ show: val }),
//     reset: () => set({ type: '', message: '', show: false })
// }))

// export default useNotificationsStore

import { create } from "zustand"

interface LoadingState {
    isLoading: boolean
    setIsLoading: (value: boolean) => void 
}

const useLoadingStore = create<LoadingState>(set => ({
    isLoading: true,
    setIsLoading: (value) => set({ isLoading: value })
}))

export default useLoadingStore