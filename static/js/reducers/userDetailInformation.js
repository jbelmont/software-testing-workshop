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
        case 'ADD_USER_DETAIL_INFO':
            return Object.assign(
                {}, 
                ...state,
                {
                    email,
                    firstName,
                    lastName,
                    gender,
                    id
                }
            );
        case 'EMPTY_USER_INFO':
            return {};
        default:
            return state;
    }
}

export default userInformation;