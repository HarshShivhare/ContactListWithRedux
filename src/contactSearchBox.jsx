import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { DebounceInput } from "react-debounce-input";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";

import { fetchSearchTerm } from "./action";

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit
  }
});
class ContactSearchBox extends React.Component {
  constructor(props) {
    super(props);
  }

  triggerSearch(value) {
    if (value !== undefined) {
      this.props.fetchSearchTerm(value);
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.margin}>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <DebounceInput
                minLength={2}
                debounceTimeout={3000}
                onChange={event => this.triggerSearch(event.target.value)}
                element={TextField}
                id="input-with-icon-grid"
                label="Search Contact"
              />
              {
                // <TextField id="input-with-icon-grid" label="Search Contact" />
              }
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchSearchTerm
    },
    dispatch
  );
};

const ContactSearchBoxWithStyle = withStyles(styles)(ContactSearchBox);
export default connect(
  null,
  mapDispatchToProps
)(ContactSearchBoxWithStyle);
