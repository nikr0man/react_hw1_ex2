import images from "./img/bart_img.png";
import "./App.css";
import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Button from "@material-ui/core/Button";


function App() {

  
  
  const useStyles = makeStyles({
    root: {
      "&:hover": {
        backgroundColor: "transarent",
      },
      
    },
    icon: {
      borderRadius: 3,
      width: 24,
      height: 24,
      boxShadow:
        "inset 0 0 0 2px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
      backgroundColor: "#black",
      backgroundImage:
        "linear-gradient(180deg,hsla(0,0%,50%,.8),hsla(0,0%,100%,0))",
      "$root.Mui-focusVisible &": {
        outline: "2px auto rgba(19,124,189,.6)",
        outlineOffset: 2,
      },
      "input:hover ~ &": {
        backgroundColor: "#db305b",
      },
      "input:disabled ~ &": {
        boxShadow: "none",
        background: "rgba(206,217,224,.5)",
      },
    },
    checkedIcon: {
      backgroundColor: "#31db0b",
      backgroundImage:
        "linear-gradient(180deg,hsla(0,0%,50%,.4),hsla(0,0%,100%,0))",
      "&:before": {
        display: "block",
        width: 24,
        height: 24,
        backgroundImage:
          "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
          " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
          "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        content: '""',
      },
      "input:hover ~ &": {
        backgroundColor: "#106ba3",
      },
    },
  });

  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="h1">My first project!</h1>

        <FormControlLabel
          control={
            <Checkbox
              className={classes.root}
              disableRipple
              color="green"
              checkedIcon={
                <span className={clsx(classes.icon, classes.checkedIcon)} />
              }
              icon={<span className={classes.icon} />}
              inputProps={{ "aria-label": "decorative checkbox" }}
              name="checkedY"
            />
          }
          label="Я сделаль!!"
        />

        <p>
          <img src={images} className="App-logo" alt="images" />
        </p>
      </header>
      <footer className="Footer">
      <Button href="#text-buttons" color="primary">
        <a className="h2" href="http://google.com">
          My StackBlitz
        </a>
      </Button>
      </footer>
    </div>
  );
}

export default App;
