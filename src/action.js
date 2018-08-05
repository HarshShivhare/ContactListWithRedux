export const fetchLoadContact = data => {
  return { type: "LOAD_CONTACT_LIST", data };
};

export const fetchSelectedContact = data => {
  return { type: "SELECTED_CONTACT", data };
};

export const fetchSearchTerm = data => {
  return { type: "FETCH_SEARCH_TERM", data };
};
