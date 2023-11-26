import { IInitialStateType } from '@/types/Type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IModule } from '..';

const initialState: IInitialStateType = {
    basketLength: 0,
    sessionId:'beaymp6e7'
};

export const BasketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        SET_BASKET_LENGTH: (state, action: PayloadAction<number>) => {
            state.basketLength = action.payload;
        },
        SET_SESSION_ID: (state, action: PayloadAction<string>) => {
            state.sessionId = action.payload;
        },
    }
});

export const { SET_BASKET_LENGTH,SET_SESSION_ID } = BasketSlice.actions;
export const basketSelector = (state: IModule) => state.basket;
export default BasketSlice.reducer;