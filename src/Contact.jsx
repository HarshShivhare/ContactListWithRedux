import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import ContactSearchBox from "./contactSearchBox.jsx";
import ContactDetails from "./ContactDetails.jsx";
import ContactList from "./ContactList.jsx";

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit
  }
});

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={3}>
            <ContactSearchBox />
            <ContactList />
          </Grid>
          <Grid item xs={9}>
            <ContactDetails />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Contact);
