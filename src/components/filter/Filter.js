import { Component } from "react";

export class Filter extends Component {
  render() {
    return (
      <div>
        <p className="text">Find contacts by name</p>
        <input
          value={this.props.filter}
          onChange={this.props.handleFilter}
          type="text"
        />
      </div>
    );
  }
}

export default Filter;
