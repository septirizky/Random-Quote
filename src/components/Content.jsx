import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Button,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { getRandomQuote } from "../api";

const styles = makeStyles(() => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  quoteWrapper: {
    padding: 22,
  },
  buttonWrapper: {
    width: "100%",
    backgroundColor: "lightskyblue",
  },
  button: {
    margin: "5px 10px",
  },
}));

const Content = () => {
  const classes = styles();
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState(true);

  useEffect(() => {
    if (newData) {
      const fetchAPI = async () => {
        setData(await getRandomQuote());
      };

      fetchAPI();
    }

    setNewData(false);
  }, [newData]);

  const newQuoteHandler = () => {
    setNewData(true);
  };

  const tweetQuoteHandler = () => {
    window.open(
      `https://twitter.com/intent/tweet?text="${data.content}"%20-${data.author}`,
      "_blank"
    );
  };

  return (
    <div>
      <Card className={classes.card}>
        <CardContent className={classes.quoteWrapper}>
          {data.content && data.author ? (
            <>
              <Typography variant="h6" gutterBottom>
                <q>{data.content}</q>
              </Typography>
              <Typography variant="body2">
                <cite>- {data.author}</cite>
              </Typography>
            </>
          ) : (
            <CircularProgress />
          )}
        </CardContent>
        <CardContent className={classes.buttonWrapper}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={newQuoteHandler}
          >
            New Quote
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={tweetQuoteHandler}
          >
            Tweet Quote
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Content;
