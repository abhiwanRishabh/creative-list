import { createSlice } from '@reduxjs/toolkit'
import { getColorsService } from './api/colorService'
import toast from 'react-hot-toast';

const initialState = {
    loading: false,
    open : false,
    lists: [],
    progressWidth: 0,
    progressCount:0,
    colors: []
}

export const counterSlice = createSlice({
    name: 'create-lists',
    initialState,
    reducers: {
        createListItem: (state, action) => {
          if(state.lists.length < 5) {
            state.lists = [...state.lists, action.payload];
            state.progressWidth += 20;
            state.progressCount += 1;
          } else {
            toast.error("List length is full")
          }
        },
        setDrawerOpen : (state,action) => {
             state.open = action.payload;
        },
        filterColors:(state,action)=>{
            let color=action.payload;
            let fillterdData=state.lists.filter(data=>data.backgroundColor===color)
            console.log("filtterData=>",fillterdData)
            state.lists=fillterdData;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getColorsService.pending, (state) => {
                state.loading = true;
            })
            .addCase(getColorsService.fulfilled, (state, action) => {
                state.loading = false;
                state.colors = action.payload;
            })
            .addCase(getColorsService.rejected, (state) => {
                state.loading = false;
                state.colors = []
            })
    }
})

// Action creators are generated for each case reducer function
export const { createListItem,setDrawerOpen,filterColors } = counterSlice.actions

export default counterSlice.reducer