import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: false
    },
    reducers: {
        addTocart: (state, action) => {
            const newItem = action.payload;

            const itemIntheCart = state.itemsList.find((item) => item.id === newItem.id);

            if(itemIntheCart){
                itemIntheCart.quantity++;
                itemIntheCart.totalPrice += itemIntheCart.price;
            }else{
                state.itemsList.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
                state.totalQuantity++;
            }
        }
    }
});

export const cartSliceActions = cartSlice.actions;
export default cartSlice;