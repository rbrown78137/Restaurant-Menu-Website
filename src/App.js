import "./App.css";
import SidebarRestrictions from "./SidebarRestrictions";
import Restaurant from "./Restaurant";
import Menu from "./Menu";
import Item from "./Item";
import React from "react";
import ReactDOM from "react-dom";
//Warning: render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurant: "",
      vegan: false,
      veget: false,
      gluten: false,
      peanut: false,
      dairy: false,
      costLevel: "",
      foodCategory: "",
      meal: "",
    };
  }
  toggleExpansion = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  veganHandleChange = () => {
    this.setState({ vegan: !this.state.vegan });
  };
  vegetHandleChange = () => {
    this.setState({ veget: !this.state.veget });
  };
  glutenHandleChange = () => {
    this.setState({ gluten: !this.state.gluten });
  };
  peanutHandleChange = () => {
    this.setState({ peanut: !this.state.peanut });
  };
  dairyHandleChange = () => {
    this.setState({ dairy: !this.state.dairy });
  };
  restaurantHandleForm = (e) => {
    this.setState({ restaurant: e.target.value });
  };

  costLevelHandleChange = (event) => {
    this.setState({ costLevel: event.target.value });
  };

  mealHandleChange = (event) => {
    this.setState({ meal: event.target.value });
  };

  foodCategoryHandleChange = (event) => {
    this.setState({ foodCategory: event.target.value });
  };

  removeAllChildNodes = (parent) => {
    try{
      while (parent.firstChild) {
          parent.removeChild(parent.firstChild);
      }
    }catch(err){

    }
  }
  /*
   */
  getFilter = () => {
    //localhost:8080/api/restaurants/?name=McDonalds&mealTime=LUNCH&dietaryRestrictionIds=1&dietaryRestrictionIds=2&dietaryRestrictionIds=3
    var BASE = "http://localhost:8080/api/restaurants/?";
    var URL = "";
    console.log(this.state.dairy);
    if (
      !(this.state.meal === undefined) &&
      this.state.meal.length > 0
    ) {
      URL += "&mealTime=" + this.state.meal;
    }
    if (
      !(this.state.restaurant === undefined) &&
      this.state.restaurant.length > 0
    ) {
      URL += "&name=" + this.state.restaurant;
    }
    if (this.state.vegan == true) {
      URL += "&dietaryRestrictionIds=0";
    }
    if (this.state.veget == true) {
      URL += "&dietaryRestrictionIds=1";
    }
    if (this.state.dairy == true) {
      URL += "&dietaryRestrictionIds=2";
    }
    if (this.state.gluten == true) {
      URL += "&dietaryRestrictionIds=3";
    }
    if (this.state.peanut == true) {
      URL += "&dietaryRestrictionIds=4";
    }
    if (
      this.state.costLevel == "HIGH" ||
      this.state.costLevel == "LOW" ||
      this.state.costLevel == "MEDIUM"
    ) {
      URL += "&costLevel=" + this.state.costLevel;
    }
    if (
      !(this.state.foodCategory === undefined) &&
      this.state.foodCategory.length > 0
    ) {
      URL += "&foodCategory=" + this.state.foodCategory;
    }
    if(URL.length >0){
    URL = BASE + URL.substring(1,URL.length);
    }else{
      URL = BASE;
    }
    console.log(URL);
    return URL;
  }
  addElements = () => {
    console.log("trying to test");
    this.removeAllChildNodes(document.getElementById("restaurantList"));
    ///api/restaurants/?name=McDonalds&mealTime=LUNCH&dietaryRestrictionIds=1&dietaryRestrictionIds=2&dietaryRestrictionIds=3
    var xhr = new XMLHttpRequest();
    xhr.open("GET", this.getFilter(), true);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 400) {
        console.log(xhr.responseText);
        var restaurants = JSON.parse(xhr.responseText);
        var x = 0;
        var y = 0;
        var z = 0;
        for (; x < Object.keys(restaurants).length; x++) {
          console.log(restaurants[x]);
          var newRestaurant = new React.createElement(
            Restaurant,
            {
              name: restaurants[x].name,
              location: restaurants[x].location,
              imageURL: restaurants[x].logoURL,
              websiteURL: restaurants[x].websiteUrl,
              costLevel: restaurants[x].costLevel,
              foodCategory: restaurants[x].foodCategory,
            },
            null
          );
          ReactDOM.render(
            newRestaurant,
            document
              .getElementById("restaurantList")
              .appendChild(document.createElement("div"))
          );

          for (; y < Object.keys(restaurants[x].menus).length; y++) {
            console.log(restaurants[x].menus[y]);
            var newMenu = new React.createElement(
              Menu,
              {
                mealTime: restaurants[x].menus[y].mealTime,
              },
              null
            );
            ReactDOM.render(
              newMenu,
              document
                .getElementById("restaurantList")
                .appendChild(document.createElement("div"))
            );

            for (; z < Object.keys(restaurants[x].menus[y].items).length; z++) {
              console.log(restaurants[x].menus[y].items[z]);
              var newItem = new React.createElement(
                Item,
                {
                  name: restaurants[x].menus[y].items[z].name,
                  description: restaurants[x].menus[y].items[z].description,
                  cost: restaurants[x].menus[y].items[z].cost,
                  calories: restaurants[x].menus[y].items[z].calories,
                },
                null
              );
              ReactDOM.render(
                newItem,
                document
                  .getElementById("restaurantList")
                  .appendChild(document.createElement("div"))
              );
            }
            z = 0;
          }
          y = 0;
        }
      }
    };
    xhr.send();
  };
  renderItems = () => {
    return (
      <Item
        name={"Royale with Cheese"}
        description={"Quarter pounder with cheese"}
        menuId={1}
        cost={2.99}
        calories={550}
      />
    );
  };

  render() {
    //this.addElements();
    return (
      <div className="App">
        <header className="App-header">
          <img className="logo" src="./logo.png" alt="MenuMe"></img>
        </header>

        <div className="container">
          <SidebarRestrictions
            expanded={"true"}
            addElementFunction={this.addElements}
            vegan={this.state.vegan}
            veganHandleChange={this.veganHandleChange}
            veget={this.state.veget}
            vegetHandleChange={this.vegetHandleChange}
            gluten={this.state.gluten}
            glutenHandleChange={this.glutenHandleChange}
            peanut={this.state.peanut}
            peanutHandleChange={this.peanutHandleChange}
            dairy={this.state.dairy}
            dairyHandleChange={this.dairyHandleChange}
            restaurant={this.state.restaurant}
            restaurantHandleForm={this.restaurantHandleForm}
            costLevel={this.state.costLevel}
            costLevelHandleChange={this.costLevelHandleChange}
            meal={this.state.meal}
            mealHandleChange={this.mealHandleChange}
            foodCategory={this.state.foodCategory}
            foodCategoryHandleChange={this.foodCategoryHandleChange}
          />

          <div id="restaurantList"></div>
        </div>
      </div>
    );
  }
}

export default App;

