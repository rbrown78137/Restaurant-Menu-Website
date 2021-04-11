import React from "react";
import "./Restaurant.css"

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
    let img = "";
    const mcdsI = "./mcds.jpg";
    const deI = "./deles.png";
    if(this.props.name == "McDonalds"){
      img = mcdsI;
    }else{
      img = deI;
    }

    return (
      <div className="restContainer">
        <img className="logoImg" src={img} alt="image"></img>
        <div className="restInfo">
        <p>
          {this.props.name} 
        </p>
          {this.props.location}
          <br />
          <a href={this.props.websiteURL}>Website</a>
          <br />
          Cuisine - {this.props.foodCategory.charAt(0).toUpperCase() + this.props.foodCategory.slice(1).toLowerCase()}
          <br />

        </div>


      </div>
    );
  }
}

// function getCostLevel(cost){
//   if(cost==0){
//     return "LOW"
//   }
//   if(cost==1){
//     return "MEDIUM"
//   }
//   return "HIGH"
// }

export default Restaurant;
