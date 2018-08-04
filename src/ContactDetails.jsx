import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit
  }
});

class ContactDetails extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="margin-top">
        <Card className={(classes.card, "padding-cd", "margin-cd")}>
          <CardMedia
            className={classes.cover}
            image="/static/images/cards/live-from-space.jpg"
            title="Live from space album cover"
          />
          <div className={classes.details}>
            <CardContent className={(classes.content, "text-align")}>
              <Typography variant="headline">Harsh D.Shivhare</Typography>
              <Typography variant="subheading" color="textSecondary">
                Job titel - Zensar
              </Typography>
              <Typography variant="subheading" color="textSecondary">
                Email: harsh.shivhare@zensar.com
              </Typography>
              <Typography variant="subheading" color="textSecondary">
                Phone: 7418529630
              </Typography>
              <Typography variant="subheading" color="textSecondary">
                Address: 104, Zensar Technology, Marwah house, off saki-vihar
                road, andheri east, 400072.
              </Typography>
            </CardContent>
          </div>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(ContactDetails);
