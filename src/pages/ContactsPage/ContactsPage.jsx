import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import DocumentTitle from '../../components/DocumentTitle';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import Loader from '../../components/Loader/Loader';
import { useContacts } from '../../hooks';
import { contactsOps } from '../../redux';
import { Box, Paper, Typography } from '@mui/material';

const ContactsPage = () => {
  const { contacts, loading, error } = useContacts();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOps.fetchContacts());
  }, [dispatch]);

  return (
    <Box component="main" sx={{ flexGrow: 1 }}>
      <Paper component="section" sx={{ pb: '20px' }}>
        <DocumentTitle>Contacts</DocumentTitle>
        <Typography
          component="h1"
          variant="h1"
          gutterBottom
          sx={theme => ({
            fontSize: { xs: 38, sm: 44, md: 56 },
            pt: 4,
            fontWeight: 600,
            color: `${theme.palette.primary.main}`,
            textShadow:
              theme.palette.mode === 'light'
                ? ` 2px 2px 0 ${theme.palette.primary.light},
                        2px -2px 0 ${theme.palette.primary.light},
                        -2px 2px 0 ${theme.palette.primary.light},
                        -2px -2px 0 ${theme.palette.primary.light},
                        2px 0px 0 ${theme.palette.primary.light},
                        0px 2px 0 ${theme.palette.primary.light},
                        -2px 0px 0 ${theme.palette.primary.light},
                        0px -2px 0 ${theme.palette.primary.light}
            `
                : ` 2px 2px 0 ${theme.palette.primary.dark},
                        2px -2px 0 ${theme.palette.primary.dark},
                        -2px 2px 0 ${theme.palette.primary.dark},
                        -2px -2px 0 ${theme.palette.primary.dark},
                        2px 0px 0 ${theme.palette.primary.dark},
                        0px 2px 0 ${theme.palette.primary.dark},
                        -2px 0px 0 ${theme.palette.primary.dark},
                        0px -2px 0 ${theme.palette.primary.dark}
            `,
          })}
        >
          Contacts book
        </Typography>
        {loading && <Loader />}
        <ContactForm submitButtonName={'Add contact'} isValidate={true} />
        {contacts?.length > 1 && <SearchBox />}
        {contacts?.length > 0 && (
          <Typography
            variant="h2"
            fontSize="36px"
            fontWeight={600}
            sx={theme => ({
              color: `${theme.palette.primary.main}`,
              mb: 3,
            })}
          >
            Contacts
          </Typography>
        )}
        {contacts?.length === 0 && !loading && (
          <Typography
            component="p"
            variant="h6"
            fontWeight={600}
            sx={theme => ({
              color: `${theme.palette.primary.main}`,
              maxWidth: '90%',
              fontSize: { xs: '20px' },
            })}
          >
            There are no contacts in your contact list
          </Typography>
        )}
        <ContactList />
        {error && toast.error(error)}
        <Toaster
          gutter={8}
          toastOptions={{
            duration: 4000,
            position: 'bottom-center',
            style: {
              background: '#05556F',
              color: '#f0ac00',
            },
          }}
        />
      </Paper>
    </Box>
  );
};

export default ContactsPage;
