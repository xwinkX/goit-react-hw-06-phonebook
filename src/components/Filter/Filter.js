import css from 'components/Filter/Filter.module.css';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contact/contact';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h2 className={css.h2}>Find contacts by name</h2>
      <label>
        <input
          type="text"
          onChange={event =>
            dispatch(filterContacts(event.currentTarget.value))
          }
        />
      </label>
    </>
  );
};
export default Filter;
