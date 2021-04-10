import React from "react";
import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/core/MenuIcon";
import "./Sidebar.css";

class SidebarRestrictions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: props.expanded,
      addElementFunction: props.addElementFunction,
    };
  }

  render() {
    return (
      <div className="sidebar">
        {/* <IconButton
          edge="start"
          className="menuButton"
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton> */}
        <Button
          variant="contained"
          color="primary"
          onClick={this.props.addElementFunction}
        >
          submit
        </Button>
      </div>
    );
  }
}

export default SidebarRestrictions;
