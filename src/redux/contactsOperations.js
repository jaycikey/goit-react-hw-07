// features/contacts/contactsOperations.js
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://65db2c743ea883a1529142c9.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) throw new Error("Failed to fetch contacts");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const contact = { name, phone: number };
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      if (!response.ok) throw new Error("Failed to add contact");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/${contactId}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete contact");
      return contactId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
