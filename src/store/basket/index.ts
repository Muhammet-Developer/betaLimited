import { IInitialStateType } from "@/types/Type";
import { createSlice ,PayloadAction} from "@reduxjs/toolkit";
import { IModule } from "..";

const initialState:IInitialStateType = {
    test:''
}

export const BasketSlice = createSlice({
    name:'basket',
    initialState,
    reducers:{
         SET_TEST:(state,action:PayloadAction<string>)=>{
            state.test = action.payload
         }
    }
})

export const { SET_TEST } = BasketSlice.actions;
export const basketSelector = (state: IModule) => state.basket;
export default BasketSlice.reducer;