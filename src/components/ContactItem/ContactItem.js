import css from 'components/ContactItem/ContactItem.module.css';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContacts } from 'redux/contact/contact';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.li}>
      <p className={css.p}>{name}</p>
      <p>{number}</p>
      <button
        className={css.button}
        onClick={() => dispatch(removeContacts(id))}
      >
        Удалить
      </button>
    </li>
  );
};

export default ContactItem;

// ContactItem.propTypes = {
//   id: PropTypes.string.isRequired,
// };
