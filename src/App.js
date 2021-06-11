import { Component } from "react";
import { ContactForm } from "./components/contactform/ContactForm";
import { ContactList } from "./components/contactlist/ContactList";
import { Filter } from "./components/filter/Filter";
import "./styles.scss";
import { v4 as uuid } from "uuid";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  addContact = (contact) => {
    contact.id = uuid();
    if (this.state.contacts.find((person) => person.name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    if (
      this.state.contacts.find((person) => person.number === contact.number)
    ) {
      alert(`${contact.number} is already in contacts`);
      return;
    }
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  deleteContact = (id) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((contact) => contact.id !== id),
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        {/* <Filter /> */}
        <ContactList
          list={this.state.contacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
