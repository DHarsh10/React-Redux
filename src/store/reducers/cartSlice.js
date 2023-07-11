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
            }
            else{
                state.itemsList.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
                state.totalQuantity++;
            }
        },

        removeFromTheCart: (state, action) => {
            const removeItemId = action.payload;
            const itemIntheCart = state.itemsList.find((item) => item.id === removeItemId)

            if(itemIntheCart.quantity === 1){
                state.itemsList = state.itemsList.filter((item) => item.id !== removeItemId);
                state.totalQuantity--;
            } else{
                itemIntheCart.quantity--;
                itemIntheCart.totalPrice -= itemIntheCart.price
            }
        },

        showCartContainer: (state) => {
            if(state.totalQuantity > 0){
                state.showCart = !state.showCart;
            }
        }
    }
});

export const cartSliceActions = cartSlice.actions;
export default cartSlice;