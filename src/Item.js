import React from "react";
import "./item.css";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      description: props.description,
      cost: props.decimal,
      calories: props.calories,
    };
  }

  render() {
    return (
      <div className="itemContainer">
          {this.props.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Calories - {this.props.calories}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${this.props.cost}.00
        <div className="itemDesc">
          {this.props.description}
        </div>
      </div>
    );
  }
}

export default Item;
