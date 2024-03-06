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
            const card = action.payload
            return {...state, basketCards: state.basketCards.find(item => item.id === card.id) 
                ? [...state.basketCards.map( item => {
                    if(item.id === card.id){
                        return {...item, count : item.count + 1}
                    }
                    return item
                })]
                : [...state.basketCards, action.payload]
            }
        },
        deleteToItemCart : (state, action) => {
            const card = action.payload
            return {...state, basketCards: state.basketCards.find(item => item.id === card.id) 
                ? [...state.basketCards.map( item => {
                    if(item.id === card.id){
                        return {...item, count : item.count - 1}
                    }
                    return item
                })]
                : [...state.basketCards, action.payload]
            }
        },
        deleteToCart : (state, action) => {
            return {...state, basketCards: state.basketCards.filter(item => item.id !== action.payload)}
        },
        colculateProdicts : (state) => {
            return state
        },
    }
})

export const {showModal, addToCart, deleteToItemCart, deleteToCart, colculateProdicts} = funcSlice.actions
export default funcSlice.reducer