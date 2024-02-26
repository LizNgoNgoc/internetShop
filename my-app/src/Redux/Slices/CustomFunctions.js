import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket: {
        image: '',
        name: '',
        count: 1,
        price: 1,
    },
    modalActive: false,

}

export const funcSlice = createSlice({
    name: 'click',
    initialState,
    reducers: {
        showModal: (state) => {
            return {...state, modalActive: true}
        },
        hideModal: (state) => {
            return state
        }

    }
})

export const {showModal, hideModal} = funcSlice.actions
export default funcSlice.reducer