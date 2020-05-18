function userInformation(state = [], action) {
  const {
        type,
        email,
        firstName,
        lastName,
        gender,
        id
    } = action;

  switch (type) {
  case 'USER_DETAIL_INFO':
    return Object.assign(
      {},
      ...state,
      {
        email,
        firstName,
        lastName,
        gender,
        id
      },
    );
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
  case 'EMPTY_USER_INFO':
    return {};
  default:
    return state;
  }
}

export default userInformation;
