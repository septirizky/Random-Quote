import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  header: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "lightskyblue",
    padding: "2px 12px",
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
  },
}));

const Header = ({ darkMode, toggleDarkMode }) => {
  const classes = styles();

  return (
    <div className={classes.header}>
      <Typography variant="h5" className={classes.title}>
        Random Quote Generator
      </Typography>
      <IconButton edge="end" color="inherit">
        <DarkModeSwitch
          checked={darkMode}
          onChange={toggleDarkMode}
          size={22}
        />
      </IconButton>
    </div>
  );
};

export default Header;
