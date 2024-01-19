import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from 'sweetalert2'

// export const fetchproducts = createAsyncThunk("productslice/fetchproducts" , async()=>{
//     const res = await fetch("https://dummyjson.com/products");
//     const data = await res.json();
//     // console.log(data);
//     return data 
// })

export const cartslice = createSlice({
    initialState:[] ,
    name:"cartslice",
    reducers:{
        add_to_cart:(state,action)=>{
            const finded_product = state.find((product)=> product.id == action.payload.id )
            if(!finded_product){
                Swal.fire({
                    icon: "success",
                    title: `Your product (${action.payload.title.slice(0,10)}) add to cart successfully`,
                    showConfirmButton: false,
                    timer: 1500,
                    color:"#ab3550"
                  });
                  
                const setquanity = {...action.payload , quaninty:1}
                state.push(setquanity)
            }else{
                Swal.fire({
                    icon: "info",
                     title :`your quaninty of ${action.payload.title.slice(0,10)} now is (${finded_product.quaninty+1 }) !`,
                     color : "#ab3550"
            });
                finded_product.quaninty += 1
            }
            // state.push(action.payload)
        },
        add_amount:(state,action)=>{
            const finded_product = state.find((product)=> product.id == action.payload.id )
            finded_product.quaninty +=1 
            console.log(state);
        },
        mince_amount:(state,action)=>{
            const finded_product = state.find((product)=> product.id == action.payload.id )
            finded_product.quaninty > 1 ? finded_product.quaninty-=1 : 
            console.log(state);
        },
        
        delete_from_cart:(state,action)=>{
            return state.filter((product)=> product.id != action.payload.id)
        },
        claer_all_cart:(state,action)=>{
            return []
        }
    },
    // extraReducers:(builder)=>{
    //     builder.addCase(fetchproducts.fulfilled , (state,action)=>{
    //          state = action.payload.products
    //         return state
    //     })
    // }
})

export const {add_to_cart, delete_from_cart, claer_all_cart ,add_amount , mince_amount} = cartslice.actions;
export default cartslice.reducer