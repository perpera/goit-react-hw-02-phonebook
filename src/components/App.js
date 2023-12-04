import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { AppWrap } from './GlobalStyled';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = newContact => {
    const { contacts } = this.state;
    const isNameAdded = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (isNameAdded) {
      alert(`${newContact.name} is already in your contacts!`);
    } else {
      const contact = {
        ...newContact,
        id: nanoid(),
      };
      this.setState(prevState => {
        return { contacts: [...prevState.contacts, contact] };
      });
    }
  };

  render() {
    // const { contacts } = this.state;

    return (
      <AppWrap>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact}></ContactForm>
        <h2>Contacts</h2>
      </AppWrap>
    );
  }
}
