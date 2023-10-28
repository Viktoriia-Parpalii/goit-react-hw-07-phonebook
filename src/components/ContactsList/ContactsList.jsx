import { useDispatch, useSelector } from 'react-redux';
import css from './ContactsList.module.css';
import { deleteContact, fetchContacts } from 'redux/contacts';
import { useEffect } from 'react';

import { selectContacts, selectFilter } from 'redux/contacts.selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getContactFromFilter = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.list}>
      {getContactFromFilter().map(contact => {
        const { id, name, number } = contact;
        return (
          <li key={id}>
            <div>{name}</div>
            <div>{number}</div>
            <button type="button" onClick={() => handleDelete(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
