import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ContextButtonType = 'left' | 'right' | 'center';

interface IPageState {
    isControlsVisible: boolean;
    contextButtonPosition: ContextButtonType;
}

const initialState: IPageState = {
    isControlsVisible: false,
    contextButtonPosition: 'center',
};

export const sharedSlice = createSlice({
    name: 'page',
    initialState: initialState,
    reducers: {
        setControlsVisible: (state) => {
            state.isControlsVisible = !state.isControlsVisible;
        },
        setControlsHidden: (state, actions: PayloadAction<boolean>) => {
            state.isControlsVisible = actions.payload;
        },
        setContextButtonPosition: (state, actions: PayloadAction<ContextButtonType>) => {
            state.contextButtonPosition = actions.payload;
        },
    },
    selectors: {
        selectControlsVisibility: (state) => state.isControlsVisible,
        selectContextButtonPosition: (state) => state.contextButtonPosition,
    },
});

export const { setControlsVisible, setControlsHidden, setContextButtonPosition } = sharedSlice.actions;
export const { selectControlsVisibility, selectContextButtonPosition } = sharedSlice.selectors;
export const name: string = sharedSlice.name;
