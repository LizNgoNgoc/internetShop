import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basketCards: [],
    modalActive: false,

}

export const funcSlice = createSlice({
    name: 'click',
    initialState,
    reducers: {
        showModal: (state) => {
            return {...state, modalActive: !state.modalActive}
        },
        addToCart : (state, action) => {
            const card =  action.payload
            console.log(card);
            if(card.count !== 0){
                return {...state, basketCards: state.basketCards.map(item => {
                    if(item.id === card.id){
                        card.count++
                        return card
                    }else {
                        return item
                    }
                })}
            }else {
                // action.payload.count = 1
                return {...state, basketCards: [...state.basketCards, action.payload]}
            }
        },
        deleteToCart : (state, action) => {
            return {...state, basketCards: state.basketCards.filter(item => item.id !== action.payload)}
        }
     

    }
})

export const {showModal, addToCart, deleteToCart} = funcSlice.actions
export default funcSlice.reducer