import React from "react";

class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      location: props.location,
      imageURL: props.imageURL,
      websiteURL: props.websiteURL,
      costLevel: props.costLevel,
      foodCategory: props.foodCategory,
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
          Location: {this.props.location}
          <br />
          Image: <img src={this.props.imageURL} alt="asdad"></img>
          <br />
          websiteURL: {this.props.websiteURL}
          <br />
          costLevel: {this.props.costLevel}
          <br />
          foodCategory: {this.props.foodCategory}
          <br />
        </h2>
      </div>
    );
  }
}

export default Restaurant;
