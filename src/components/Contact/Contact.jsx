import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useContacts } from '../../hooks';
import { contactsOps } from '../../redux';
import Modal from '../Modal/Modal';

import { Box, IconButton, ListItem, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import toast from 'react-hot-toast';

const Contact = ({ name, number, id }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const dispatch = useDispatch();
  const { contacts } = useContacts();

  const infoOpenHandler = () => {
    setIsInfoOpen(true);
  };

  const deleteModalOpenHandler = () => {
    setIsDeleteModalOpen(true);
  };

  const editModalOpenHandler = () => {
    setIsEditModalOpen(true);
  };

  const infoCloseHandler = () => {
    setIsInfoOpen(false);
  };

  const deleteModalCloseHandler = () => {
    setIsDeleteModalOpen(false);
  };

  const editModalCloseHandler = () => {
    setIsEditModalOpen(false);
  };

  const deleteContactHandler = () => {
    try {
      dispatch(contactsOps.deleteContact(id));
      setIsDeleteModalOpen(false);
      contacts.find(
        contact =>
          contact.id === id &&
          toast.success(`${contact.name} was deleted from your contacts`)
      );
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <ListItem
      sx={theme => ({
        width: { xs: '95%', sm: '49%', md: '32%' },
        gap: 1,
        justifyContent: 'space-between',
        color: `${theme.palette.primary.main}`,
        ':hover': { color: `${theme.palette.primary.dark}` },
        cursor: 'pointer',
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: '4px',
        backgroundColor: `${theme.palette.background.paper}`,
      })}
    >
      <Typography
        component="p"
        variant="p"
        fontWeight={600}
        sx={{
          display: 'flex',
          justifyContent: 'start',
          fontSize: { xs: '18px', md: '20px' },
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        <span
          style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
          onClick={() => infoOpenHandler()}
        >
          {name}: {number}
        </span>
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <IconButton
          size="small"
          type="button"
          sx={theme => ({
            color: `${theme.palette.primary.main}`,
            ':hover': { color: `${theme.palette.primary.dark}` },
          })}
          onClick={() => editModalOpenHandler(id)}
        >
          <EditIcon sx={{}} />
        </IconButton>
        <IconButton
          size="small"
          type="button"
          sx={theme => ({
            color: `${theme.palette.primary.main}`,
            ':hover': { color: `${theme.palette.error.main}` },
          })}
          onClick={() => deleteModalOpenHandler()}
        >
          <DeleteOutlineIcon />
        </IconButton>
      </Box>

      {(isDeleteModalOpen || isEditModalOpen || isInfoOpen) && (
        <Modal
          name={name}
          number={number}
          id={id}
          openInfo={isInfoOpen}
          closeInfo={infoCloseHandler}
          openDeleteModal={isDeleteModalOpen}
          openEditModal={isEditModalOpen}
          closeDeleteModal={deleteModalCloseHandler}
          deleteContact={deleteContactHandler}
          closeEditModal={editModalCloseHandler}
        />
      )}
    </ListItem>
  );
};

export default Contact;
