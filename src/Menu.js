import React from "react";

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
        <h1>
          Name: {this.props.mealTime}
          <br />
        </h1>
      </div>
    );
  }
}

export default Restaurant;
