import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <>
      <Label>
        Find contacts by name
        <Input
          name="filter"
          type="text"
          placeholder="Filter contacts"
          value={filter}
          onChange={handleChange}
        />
      </Label>
    </>
  );
};
