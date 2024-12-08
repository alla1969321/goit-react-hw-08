import { createSelector } from '@reduxjs/toolkit';
import { selectFiltersName } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFiltersName],
  (contacts, filter) => {
    const normalizedSearch = filter?.toLowerCase().trim();
    return contacts?.filter(contact => {
      return (
        contact.name.toLowerCase().includes(normalizedSearch) ||
        contact.number.includes(normalizedSearch)
      );
    });
  }
);
