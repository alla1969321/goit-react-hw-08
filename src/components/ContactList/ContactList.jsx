import { List, ListItem } from '@mui/material';
import { useContacts } from '../../hooks';
import Contact from '../Contact/Contact';

const ContactList = () => {
  const { filters, filteredContacts } = useContacts();

  return (
    <List
      disablePadding
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1,
        justifyContent: { xs: 'center', sm: 'start' },
        width: { sm: '95%', md: '85%' },
      }}
    >
      {filteredContacts?.map(contact => (
        <Contact key={contact.id} {...contact} />
      ))}
      {filteredContacts?.length === 0 && filters !== '' && (
        <ListItem
          component="p"
          variant="h6"
          fontWeight={600}
          sx={theme => ({
            color: `${theme.palette.primary.main}`,
            maxWidth: '90%',
            fontSize: { xs: '20px' },
            justifyContent: 'center',
          })}
        >
          No contacts found
        </ListItem>
      )}
    </List>
  );
};

export default ContactList;
