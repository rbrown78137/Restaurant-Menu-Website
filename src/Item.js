import React from "react";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      description: props.description,
      menuId: props.menuId,
      cost: props.decimal,
      calories: props.calories,
    };
  }

  render() {
    return (
      <div>
        <h1>
          Name: {this.props.name}
          <br />
        </h1>
        <h2>
          Description: {this.props.description}
          <br />
          Cost: {this.props.cost}
          <br />
          Calories: {this.props.calories}
          <br />
        </h2>
      </div>
    );
  }
}

export default Item;
