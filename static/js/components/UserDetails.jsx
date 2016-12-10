import React, { Component } from 'react';
import {browserHistory} from 'react-router';

import store from '../store/store';

import * as constants from '../constants/constants';

const UserDetails = routerInfo => {
    const {
        CODE_CRAFTSMANSHIP
    } = constants;
    const userInformation = store && store.getState() && store.getState()["userInfo"];
    let email, firstName, lastName, gender, id;
    if (Object.keys(userInformation).length > 0) {
        email = userInformation["email"];
        firstName = userInformation["firstName"];
        lastName = userInformation["lastName"];
        gender = userInformation["gender"];
        id = userInformation["id"];
    } else {
        const storeInfo = store && store.getState() && store.getState()["users"];
        firstName = storeInfo["first_name"];
        lastName = storeInfo["last_name"];
        email = storeInfo["email"];
        gender = storeInfo["gender"];
        id = storeInfo["id"];
    }

    const UserDetailsArea = (
        <div className="user-details-container">
            <span className="email">{email}</span>
            <span className="first-name">{firstName}</span>
            <span className="last-name">{lastName}</span>
            <span className="gender">{gender}</span>
        </div>
    );
    return (
        <div className="code-craftsmanship-container">
        <h2 className="code-craftsmanship-container-label"><strong>CODE_CRAFTSMANSHIP</strong></h2>
        {UserDetailsArea}
      </div>
    );
}

export default UserDetails;
