import { useSelector } from 'react-redux';
import { contactsSelectors, filtersSelectors } from '../redux';

export const useContacts = () => {
  const contacts = useSelector(contactsSelectors.selectContacts);
  const loading = useSelector(contactsSelectors.selectLoading);
  const error = useSelector(contactsSelectors.selectError);
  const filters = useSelector(filtersSelectors.selectFiltersName);
  const filteredContacts = useSelector(
    contactsSelectors.selectFilteredContacts
  );

  return {
    contacts,
    loading,
    error,
    filters,
    filteredContacts,
  };
};
