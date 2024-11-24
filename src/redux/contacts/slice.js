import { createSlice } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  editContact,
  fetchAllContacts,
} from "./operations";
import { logOut } from "../auth/operations";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchAllContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAllContacts.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.loading = false;
        state.error = false;
      })
      .addCase(editContact.pending, (state) => {
        state.loading = false;
        state.error = false;
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.items = state.items.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        );
        state.loading = false;
      })
      .addCase(editContact.rejected, (state) => {
        state.error = true;
        state.loading = false;
      }),
});

export const contactsReducer = contactsSlice.reducer;