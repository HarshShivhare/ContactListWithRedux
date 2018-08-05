export default function renderContact(
  state = { contactList: [], selectedData: {}, searchTerm: "" },
  action
) {
  switch (action.type) {
    case "LOAD_CONTACT_LIST":
      return Object.assign({}, state, {
        contactList: action.data
      });
    case "SELECTED_CONTACT":
      return Object.assign({}, state, {
        selectedData: action.data
      });
    case "FETCH_SEARCH_TERM":
      return Object.assign({}, state, {
        searchTerm: action.data
      });
    default:
      return state;
  }
}
