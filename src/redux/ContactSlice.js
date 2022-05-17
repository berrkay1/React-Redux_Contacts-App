import { createSlice , createEntityAdapter } from "@reduxjs/toolkit";

export const contactAdapter = createEntityAdapter();
const initialState = contactAdapter.getInitialState();

export const contactSelector = contactAdapter.getSelectors(state => state.contacts);

const ContactSlice = createSlice({
    name:'contacts',
    initialState,
    reducers:{
        addContact:contactAdapter.addOne,
        deleteContact:contactAdapter.removeOne,
        deleteAllContact:contactAdapter.removeAll,
        updateContact:contactAdapter.updateOne,
    },
})
export const {addContact,deleteContact,deleteAllContact,updateContact} = ContactSlice.actions;
export default ContactSlice.reducer;