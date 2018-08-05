import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import classNames from "classnames";

import { fetchLoadContact, fetchSelectedContact } from "./action";
import ContactListData from "./data/contactList.json";

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
  componentDidMount() {
    if (ContactListData) {
      this.props.fetchLoadContact(ContactListData);
    }
  }
  renderList(contactList) {
    return contactList.map((contact, key) => {
      return this.createContactList(contact, key);
    });
  }

  contactClickHandler(contact) {
    this.props.fetchSelectedContact(contact);
  }

  createContactList(contact, key) {
    const { classes } = this.props;
    return (
      <ListItem onClick={() => this.contactClickHandler(contact)}>
        <Avatar
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

  contactListFiltering(contactList, searchTerm) {
    const filteredUsers = contactList.filter(contact => {
      const query = searchTerm.toLowerCase();
      return (
        contact.general.firstName.toLowerCase().indexOf(query) >= 0 ||
        contact.general.lastName.toLowerCase().indexOf(query) >= 0 ||
        contact.job.company.toLowerCase().indexOf(query) >= 0 ||
        contact.job.title.toLowerCase().indexOf(query) >= 0 ||
        contact.contact.email.toLowerCase().indexOf(query) >= 0 ||
        contact.contact.phone.toLowerCase().indexOf(query) >= 0 ||
        contact.address.city.toLowerCase().indexOf(query) >= 0 ||
        contact.address.country.toLowerCase().indexOf(query) >= 0 ||
        contact.address.street.toLowerCase().indexOf(query) >= 0 ||
        contact.address.zipCode.toLowerCase().indexOf(query) >= 0
      );
    });
    return filteredUsers;
  }

  render() {
    const { classes, contactList, searchTerm } = this.props;
    const updatedData = this.contactListFiltering(contactList, searchTerm);
    return (
      <div className={classes.root}>
        <List>{this.renderList(updatedData)}</List>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { contactList: state.contactList, searchTerm: state.searchTerm };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchLoadContact,
      fetchSelectedContact
    },
    dispatch
  );
};

const conatctListWithStyle = withStyles(styles)(ContactList);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(conatctListWithStyle);
