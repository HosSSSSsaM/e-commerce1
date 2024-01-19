// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchproducts = createAsyncThunk("productslice/fetchproducts" , async()=>{
//     const res = await fetch("https://dummyjson.com/products");
//     const data = await res.json();
//     // console.log(data);
//     return data 
// })

// export const productslice = createSlice({
//     initialState:[] ,
//     name:"productslice",
//     reducers:{

//     },
//     extraReducers:(builder)=>{
//         builder.addCase(fetchproducts.fulfilled , (state,action)=>{
//              state = action.payload.products
//             return state
//         })
//     }
// })

// export const {} = productslice.actions;
// export default productslice.reducer