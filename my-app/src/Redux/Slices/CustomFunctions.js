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
            return {...state, modalActive: !state.modalActive}
        },
     

    }
})

export const {showModal} = funcSlice.actions
export default funcSlice.reducer