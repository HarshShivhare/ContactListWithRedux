import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import classNames from "classnames";

import ContactListData from "./contactList.json";

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit
  },
  row: {
    display: "flex",
    justifyContent: "center"
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 48,
    height: 48
  }
});
class ContactList extends React.Component {
  renderList() {
    return ContactListData.map((contact, key) => {
      return this.createContactList(contact, key);
    });
  }

  renderContactDetail(contact, key) {
    console.log(contact, key);
  }

  createContactList(contact, key) {
    const { classes } = this.props;
    return (
      <ListItem>
        <Avatar
          onClick={this.renderContactDetail(contact, key)}
          alt="Adelle Charles"
          src={contact.general.avatar}
          className={classNames(classes.avatar, classes.bigAvatar)}
        />
        <ListItemText
          primary={contact.general.firstName + " " + contact.general.lastName}
          secondary={contact.job.company}
        />
      </ListItem>
    );
  }

  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.root}>
        <List>{this.renderList()}</List>
      </div>
    );
  }
}

export default withStyles(styles)(ContactList);
