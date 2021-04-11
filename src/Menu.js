import React from "react";
import "./menu.css"

class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mealTime: props.mealTime,
      restaurant_id: props.restaurant_id,
    };
  }

  render() {
    return (
      <div>
        <div className="menuContainer">
          {this.props.mealTime.charAt(0).toUpperCase() + this.props.mealTime.slice(1).toLowerCase()} Menu:
        </div>
      </div>
    );
  }
}

export default Restaurant;
