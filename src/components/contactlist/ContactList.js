import { Component } from "react";

export class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.list.map((item) => (
          <li>
            {item.name} {item.number}{" "}
            <button
              onClick={() => this.props.deleteContact(item.id)}
              type="button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
