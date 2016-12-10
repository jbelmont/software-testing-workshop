function users(state = [], action) {
  const {
        type,
        email,
        firstName,
        lastName,
        gender,
        id
    } = action;
  switch(type) {
    case 'ADD_NEW_USER':
            return [
              ...state,
              {
                email: email,
                first_name: firstName,
                last_name: lastName,
                gender: gender,
                id: id
              }
            ]
    default:
      return state;
  }
}

export default users;
