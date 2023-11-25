import { IInitialStateType, IListProductsType } from "@/types/Type";
import { createSlice ,PayloadAction} from "@reduxjs/toolkit";
import { IModule } from "..";

const initialState:IInitialStateType = {
    search:'',
    searchData: {} as IListProductsType
}

export const BasketSlice = createSlice({
    name:'basket',
    initialState,
    reducers:{
         SET_SEARCH:(state,action:PayloadAction<string>)=>{
            state.search = action.payload
         },
         SET_SEARCH_DATA:(state,action:PayloadAction<IListProductsType>)=>{
            state.searchData = action.payload
         }
    }
})

export const { SET_SEARCH,SET_SEARCH_DATA } = BasketSlice.actions;
export const basketSelector = (state: IModule) => state.basket;
export default BasketSlice.reducer;