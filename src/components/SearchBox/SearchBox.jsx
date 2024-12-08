import { useDispatch } from 'react-redux';
import { useContacts } from '../../hooks';
import { filtersSlice } from '../../redux';

import { TextField } from '@mui/material';

const SearchBox = () => {
  const dispatch = useDispatch();
  const { filters } = useContacts();

  const changeFilterHandler = e => {
    dispatch(filtersSlice.changeFilter(e.target.value));
  };

  return (
    <div>
      <TextField
        variant="filled"
        id="filter"
        name="filter"
        label="Find contacts by name or number"
        value={filters}
        onChange={changeFilterHandler}
        margin="normal"
        sx={{ width: { xs: '95%', sm: '85%', md: '70%' }, mb: 3 }}
      ></TextField>
    </div>
  );
};

export default SearchBox;
