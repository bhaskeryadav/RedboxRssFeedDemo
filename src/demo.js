import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar
} from "@material-ui/core";
import { Label, ThumbUp, ThumbDown } from "@material-ui/icons";
import axios from "axios";
import MessageBox from './components/mesasge.box';
import moment from "moment";
import listObj from "./list";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "darkgrey"
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: "white",
    background: "black"
  },
  gridList: {
    height: "92vh"
  },
  appBar: {
    top: "auto",
    background: "black",
    bottom: 0
  }
}));

let tempList = [
  "pqr",
  "dgd",
  "dfd",
  "cxx",
  "ukk",
  "wqe",
  "dgd",
  "dfd",
  "cxx",
  "yrt",
  "abc",
  "pqr",
  "dgd",
  "dfd",
  "cxx",
  "ukk",
  "wqe",
  "dgd",
  "dfd",
  "cxx",
  "ukk",
  "wqe",
  "dgd",
  "dfd",
  "cxx",
  "yrt"
];

const renderIcon = () => {
  let { score } = listObj.sentiment;
  if (Math.sign(score) === -1) {
    return (
      <ThumbDown style={{ color: "blue", position: "absolute", top: 0 }} />
    );
  } else if (Math.sign(score) === 1) {
    return <ThumbUp style={{ color: "green", position: "absolute", top: 0 }} />;
  } else {
    return <Label style={{ color: "red" }} />;
  }
};

const renderBlock = () => {
  let { date, title } = listObj.article;
  let fDate = moment(date).format("HH:mm:ss");
  return (
    <ListItem button style={{ padding: 0 }}>
      <ListItemAvatar style={{ marginTop: 0 }}>
        <ListItemText
          primary={fDate}
          style={{ position: "absolute", top: 0 }}
        />
      </ListItemAvatar>
      {renderIcon()}
      <ListItemText
        primary={title}
        style={{ wordWrap: "break-word", margin: 0 }}
      />
    </ListItem>
  );
};

const fetchData = async url => {
  axios
    .get(url)
    .then(d => console.log("sadsdas", d))
    .catch(e => console.log(e));
  const prom = await axios.get(url);
  return await prom;
};
export default function FullWidthGrid() {
  const classes = useStyles();
  // const messages = fetchData("https://r3kd3.sse.codesandbox.io/rss");
  // console.log(messages);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ backgroundColor: "black" }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid
        container
        justify="space-evenly"
        spacing={1}
        className={classes.gridList}
      >
        <Grid container xs={12} sm={4} spacing={1} style={{ marginTop: 60 }}>
          {/* <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>
              <ListItem
                button
                style={{
                  textAlign: "center",
                  paddingTop: 0,
                  borderBottom: "1px solid darkgrey"
                }}
              >
                <ListItemText primary="Inbox" style={{ margin: 0 }} />
              </ListItem>
              <List
                component="nav"
                aria-label="main mailbox folders"
                style={{ height: "37vh", overflow: "auto", padding: 0 }}
              >
                {tempList.map(data => (
                  <ListItem button style={{ padding: 0 }}>
                    <ListItemText
                      primary="Inbox"
                      style={{ margin: 0, padding: 2 }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid> */}
          <MessageBox height={'half'} title={'Test Component1'}></MessageBox>
          <MessageBox height={'half'} title={'Test Component2'}></MessageBox>
          {/* <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>
              <ListItem
                button
                style={{
                  textAlign: "center",
                  paddingTop: 0,
                  borderBottom: "1px solid darkgrey"
                }}
              >
                <ListItemText primary="Inbox" style={{ margin: 0 }} />
              </ListItem>
              <List
                component="nav"
                aria-label="main mailbox folders"
                style={{ height: "37vh", overflow: "auto", padding: 0 }}
              >
                {tempList.map(data => (
                  <ListItem button style={{ padding: 0 }}>
                    <ListItemText
                      primary="Inbox"
                      style={{ margin: 0, padding: 2 }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid> */}

        </Grid>

        <Grid container xs={12} sm={4} spacing={1} style={{ marginTop: 60 }}>
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>
              <ListItem
                button
                style={{
                  textAlign: "center",
                  paddingTop: 0,
                  borderBottom: "1px solid darkgrey"
                }}
              >
                <ListItemText primary="Inbox" style={{ margin: 0 }} />
              </ListItem>
              <List
                component="nav"
                aria-label="main mailbox folders"
                style={{ height: "80vh", overflow: "auto", padding: 0 }}
              >
                {renderBlock()}
              </List>
            </Paper>
          </Grid>
        </Grid>

        <Grid container xs={12} sm={4} spacing={1} style={{ marginTop: 60 }}>
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>
              <ListItem
                button
                style={{
                  textAlign: "center",
                  paddingTop: 0,
                  borderBottom: "1px solid darkgrey"
                }}
              >
                <ListItemText primary="Inbox" style={{ margin: 0 }} />
              </ListItem>
              <List
                component="nav"
                aria-label="main mailbox folders"
                style={{ height: "37vh", overflow: "auto", padding: 0 }}
              >
                {tempList.map(data => (
                  <ListItem button style={{ padding: 0 }}>
                    <ListItemText
                      primary="Inbox"
                      style={{ margin: 0, padding: 2 }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>
              <ListItem
                button
                style={{
                  textAlign: "center",
                  paddingTop: 0,
                  borderBottom: "1px solid darkgrey"
                }}
              >
                <ListItemText primary="Inbox" style={{ margin: 0 }} />
              </ListItem>
              <List
                component="nav"
                aria-label="main mailbox folders"
                style={{ height: "37vh", overflow: "auto", padding: 0 }}
              >
                {tempList.map(data => (
                  <ListItem button style={{ padding: 0 }}>
                    <ListItemText
                      primary="Inbox"
                      style={{ margin: 0, padding: 2 }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>

        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Footer
            </Typography>
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  );
}
