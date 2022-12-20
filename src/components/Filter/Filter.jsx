import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getFilterValue } from 'redux/selectors';
import { Input } from './Filter.styled';
import { Box } from 'components/Box';

export const Filter = ({ onChange }) => {
  const filterValue = useSelector(getFilterValue);
  return (
    <Box flexDirection="column" alignItems="center" mb={5}>
      <label>Find contacts by name</label>
      <Input
        type="text"
        name="filter"
        value={filterValue}
        onChange={onChange}
      />
    </Box>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
