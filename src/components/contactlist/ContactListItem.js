import { Component } from "react";

export class ContactListItem extends Component {
  render() {
    const { name, number, id, deleteContact } = this.props;
    return (
      <li className="person">
        {name} {number}
        <button
          className="deleteButton"
          onClick={() => deleteContact(id)}
          type="button"
        >
          Delete
        </button>
      </li>
    );
  }
}

export default ContactListItem;
