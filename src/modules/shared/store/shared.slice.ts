import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ContextButtonType = 'left' | 'right' | 'center';
export type MainPageAnimationType = 'left' | 'right';

interface IPageState {
    isControlsVisible: boolean;
    contextButtonPosition: ContextButtonType;
    mainPageAnimation?: MainPageAnimationType;
    isPageAnimated?: boolean;
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
        setMainPageAnimation: (
            state,
            actions: PayloadAction<MainPageAnimationType | undefined>,
        ) => {
            state.mainPageAnimation = actions.payload;
        },
        setPageAnimated: (state, actions: PayloadAction<boolean>) => {
            state.isPageAnimated = actions.payload;
        },
    },
    selectors: {
        selectControlsVisibility: (state) => state.isControlsVisible,
        selectContextButtonPosition: (state) => state.contextButtonPosition,
        selectMainPageAnimation: (state) => state.mainPageAnimation,
        selectPageAnimated: (state) => state.isPageAnimated,
    },
});

export const {
    setControlsVisible,
    setControlsHidden,
    setContextButtonPosition,
    setMainPageAnimation,
    setPageAnimated,
} = sharedSlice.actions;
export const {
    selectControlsVisibility,
    selectContextButtonPosition,
    selectMainPageAnimation,
    selectPageAnimated,
} = sharedSlice.selectors;
export const name: string = sharedSlice.name;
