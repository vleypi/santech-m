import {create} from 'zustand'

interface INav {
    opened: boolean,
    setOpened: ()=> void
}

export const useNavStore = create<INav>((set,get) => ({
    opened: false,
    setOpened: () => set(state => ({
        opened: !state.opened
    }))
}));