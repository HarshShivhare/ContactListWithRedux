import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit
  }
});

class ContactDetails extends React.Component {
  renderContactDetails() {
    const selectedContact = this.props.selectedData;

    const { classes } = this.props;
    if (
      selectedContact &&
      !(
        Object.keys(selectedContact).length === 0 &&
        selectedContact.constructor === Object
      )
    ) {
      return (
        <div className="margin-top">
          <Card className={(classes.card, "padding-cd", "margin-cd")}>
            <img
              className="cd-image"
              src={selectedContact.general.avatar}
              alt=""
            />
            <div className={classes.details}>
              <CardContent className={(classes.content, "text-align")}>
                <Typography variant="headline">
                  {selectedContact.general.firstName +
                    " " +
                    selectedContact.general.lastName}
                </Typography>
                <Typography variant="subheading" color="textSecondary">
                  Job Titel:{" "}
                  {selectedContact.job.title +
                    " - " +
                    selectedContact.job.company}
                </Typography>
                <Typography
                  className="cd-email"
                  variant="subheading"
                  color="textSecondary"
                >
                  Email: {selectedContact.contact.email}
                </Typography>
                <Typography variant="subheading" color="textSecondary">
                  Phone: {selectedContact.contact.phone}
                </Typography>
                <Typography variant="subheading" color="textSecondary">
                  {selectedContact.address.street +
                    ", " +
                    selectedContact.address.city +
                    ", " +
                    selectedContact.address.country +
                    " " +
                    selectedContact.address.zipCode}
                </Typography>
              </CardContent>
            </div>
          </Card>
        </div>
      );
    } else {
      return null;
    }
  }
  render() {
    return <React.Fragment>{this.renderContactDetails()}</React.Fragment>;
  }
}
function mapStateToProps(state) {
  return { selectedData: state.selectedData };
}

const conatctDetailsWithStyle = withStyles(styles)(ContactDetails);
export default connect(mapStateToProps)(conatctDetailsWithStyle);
