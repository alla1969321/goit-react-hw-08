import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchAllContacts = createAsyncThunk(
  "fetchAllContacts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "addContact",
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", newContact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "deleteContact",
  async (contactid, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactid}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const editContact = createAsyncThunk(
  "editContact",
  async (contact, thunkAPI) => {
    const newUser = { name: contact.name, number: contact.number };
    try {
      const response = await axios.patch(`/contacts/${contact.id}`, newUser);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);