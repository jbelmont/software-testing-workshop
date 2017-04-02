function users(state = [], action) {
  const {
        type,
        email,
        firstName,
        lastName,
        gender,
        index,
        id
    } = action;
  switch (type) {
  case 'ADD_NEW_USER':
    return [
      ...state,
      {
        email,
        first_name: firstName,
        last_name: lastName,
        gender,
        id
      }
    ];
  case 'REMOVE_USER':
    return [
      ...state.slice(0, index !== 0 && (index - 1) || 0),
      ...state.slice(index !== 0 && index || 1, state.length)
    ];
  default:
    return state;
  }
}

export default users;
