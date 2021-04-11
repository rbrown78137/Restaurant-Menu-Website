import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import "./Sidebar.css";
import React from "react";

class SidebarRestrictions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: props.expanded,
      addElementFunction: props.addElementFunction,
    };
  }

  toggleExpansion = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  veganHandleChange = () => {
    this.props.veganHandleChange();
  };
  vegetHandleChange = () => {
    this.props.vegetHandleChange();
  };
  glutenHandleChange = () => {
    this.props.glutenHandleChange();
  };
  peanutHandleChange = () => {
    this.props.peanutHandleChange();
  };
  dairyHandleChange = () => {
    this.props.dairyHandleChange();
  };
  restaurantHandleChange = (e) => {
    this.props.restaurantHandleForm(e);
  };

  costLevelHandleChange = (event) => {
    this.props.costLevelHandleChange(event);
  };

  mealHandleChange = (event) => {
    this.props.mealHandleChange(event);
  };

  foodCategoryHandleChange = (event) => {
    this.props.foodCategoryHandleChange(event);
  };

  render() {
    if (!this.state.expanded) {
      return (
        <div className="sidebar-notexpanded">
          <div className="menuIcon">
            <IconButton
              edge="start"
              className="menuButton"
              color="inherit"
              aria-label="menu"
              onClick={this.toggleExpansion}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </div>
      );
    }
    return (
      <div className="sidebar">
        <div className="menuIcon">
          <IconButton
            edge="start"
            className="menuButton"
            color="inherit"
            aria-label="menu"
            onClick={this.toggleExpansion}
          >
            <MenuIcon />
          </IconButton>
        </div>

        <p>Search For Restaurant</p>
        <TextField
          id="standard-basic"
          label="Restaurant Name"
          onChange={this.restaurantHandleChange}
        />

        <p>Dietary Restrictions</p>
        <FormControlLabel
          control={
            <Checkbox
              checked={this.props.vegan}
              onChange={this.veganHandleChange}
              name="vegan"
              color="primary"
            />
          }
          label="Vegan"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.props.veget}
              onChange={this.vegetHandleChange}
              name="vegan"
              color="primary"
            />
          }
          label="Vegetarian"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.props.gluten}
              onChange={this.glutenHandleChange}
              name="vegan"
              color="primary"
            />
          }
          label="Gluten Free"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.props.peanut}
              onChange={this.peanutHandleChange}
              name="vegan"
              color="primary"
            />
          }
          label="Peanut Free"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.props.dairy}
              onChange={this.dairyHandleChange}
              name="dairy"
              color="primary"
            />
          }
          label="Dairy Free"
        />

        <p>Other</p>

        <div className="cost-level">
          <FormControl>
            <InputLabel id="cost-level">Cost Level</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={this.props.costLevel}
              onChange={this.costLevelHandleChange}
            >
              <MenuItem value={"HIGH"}>High</MenuItem>
              <MenuItem value={"MEDIUM"}>Medium</MenuItem>
              <MenuItem value={"LOW"}>Low</MenuItem>
            </Select>
            <FormHelperText>How much do you want to spend?</FormHelperText>
          </FormControl>
        </div>

        <div className="meal">
          <FormControl>
            <InputLabel id="meal">Cuisine</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={this.props.foodCategory}
              onChange={this.foodCategoryHandleChange}
            >
              <MenuItem value={"CHINESE"}>CHINESE</MenuItem>
              <MenuItem value={"BBQ"}>BBQ</MenuItem>
              <MenuItem value={"PIZZA"}>PIZZA</MenuItem>
              <MenuItem value={"ITALIAN"}>ITALIAN</MenuItem>
              <MenuItem value={"MISCELLANEOUS"}>MISCELLANEOUS</MenuItem>
              <MenuItem value={"AMERICAN"}>AMERICAN</MenuItem>
              <MenuItem value={"MEXICAN"}>MEXICAN</MenuItem>
              <MenuItem value={"THAI"}>THAI</MenuItem>
            </Select>
            <FormHelperText>Which cuisine are you looking for?</FormHelperText>
          </FormControl>
        </div>

        <div className="meal">
          <FormControl>
            <InputLabel id="meal">Meal</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={this.props.meal}
              onChange={this.mealHandleChange}
            >
              <MenuItem value={"DINNER"}>Dinner</MenuItem>
              <MenuItem value={"LUNCH"}>Lunch</MenuItem>
              <MenuItem value={"BREAKFAST"}>Breakfast</MenuItem>
              <MenuItem value={"MISCELLANEOUS"}>Miscellaneous</MenuItem>
            </Select>
            <FormHelperText>Which meal are you looking to eat?</FormHelperText>
          </FormControl>
        </div>

        <div className="submitButton">
          <Button
            variant="contained"
            color="primary"
            onClick={this.props.addElementFunction}
          >
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

export default SidebarRestrictions;
