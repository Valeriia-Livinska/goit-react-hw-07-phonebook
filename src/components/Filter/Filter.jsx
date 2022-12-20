import { useSelector, useDispatch } from 'react-redux';
import { setContactsFiltration } from 'redux/filterSlice';
import { getFilterValue } from 'redux/selectors';
import { Input } from './Filter.styled';
import { Box } from 'components/Box';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);

  const handleFilterChange = event => {
    dispatch(setContactsFiltration(event.currentTarget.value));
  };

  return (
    <Box flexDirection="column" alignItems="center" mb={5}>
      <label>Find contacts by name</label>
      <Input
        type="text"
        name="filter"
        value={filterValue}
        onChange={handleFilterChange}
      />
    </Box>
  );
};
