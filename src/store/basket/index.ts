import { IInitialStateType, IListProductsType } from "@/types/Type";
import { createSlice ,PayloadAction} from "@reduxjs/toolkit";
import { IModule } from "..";

const initialState:IInitialStateType = {
    basketLength:0,
    search:'',
    searchData: {} as IListProductsType
}

export const BasketSlice = createSlice({
    name:'basket',
    initialState,
    reducers:{
         SET_BASKET_LENGTH:(state,action:PayloadAction<number>)=>{
            state.basketLength = action.payload
         },
         SET_SEARCH:(state,action:PayloadAction<string>)=>{
            state.search = action.payload
         },
         SET_SEARCH_DATA:(state,action:PayloadAction<IListProductsType>)=>{
            state.searchData = action.payload
         }
    }
})

export const { SET_SEARCH,SET_SEARCH_DATA,SET_BASKET_LENGTH } = BasketSlice.actions;
export const basketSelector = (state: IModule) => state.basket;
export default BasketSlice.reducer;