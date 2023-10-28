import { Wrapper } from './Wrapper/Wrapper';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { CircleLoader } from 'react-spinners';
import { selectIsLoading } from 'redux/contacts.selectors';
import { useSelector } from 'react-redux';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading === true && (
        <CircleLoader
          color="#670063"
          size={100}
          cssOverride={{
            margin: '30px auto',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        />
      )}
      <ContactsList />
    </Wrapper>
  );
};
