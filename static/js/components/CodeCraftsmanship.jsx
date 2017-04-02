import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import store from '../store';

import { Button, Radio, FormGroup, FormControl, ControlLabel, HelpBlock, FieldGroup } from 'react-bootstrap/lib';

import Users from './Users.jsx';

import {ajax} from '../utils/ajax.js';

import * as constants from '../constants';

class CodeCraftsmanship extends Component {

  static propTypes = {
    users: PropTypes.array,
    getUserInfo: PropTypes.func,
    addUserInfo: PropTypes.func,
    getusers: PropTypes.func,
    removeUser: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users,
      showAddPopDown: false,
      genderValue: 'Male',
      trashBinSvgPath: './build/symbol-defs.svg#icon-bin'
    }
    this.togglePopDown = this.togglePopDown.bind(this);
    this.getValidationState = this.getValidationState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addUser = this.addUser.bind(this);
    this._generateAddUserRoute = this._generateAddUserRoute.bind(this);
    this.removeUserAction = this.removeUserAction.bind(this);
  }

  removeUserAction(users) {
    this.setState({
      users
    });
  }

  togglePopDown() {
    this.setState({
      showAddPopDown: !this.state.showAddPopDown
    });
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  addUser(event) {
    event.preventDefault();
    event.stopPropagation();
    const email = document.getElementById('emailInput') && document.getElementById('emailInput').value;
    const firstName = document.getElementById('firstNameInput') && document.getElementById('firstNameInput').value;
    const lastName = document.getElementById('lastNameInput') && document.getElementById('lastNameInput').value;
    const select = document.getElementById('genderSelect');
    const gender = select.options[select.selectedIndex].value;
    const id = Math.max.apply(Math, this.state.users.map(user => user['id'])) + 1;
    const newUser = {
      firstName,
      lastName,
      email,
      gender,
      id
    };
    this.props.addUserInfo(newUser);
    return ajax(this._generateAddUserRoute(newUser))
      .then(() => {
        const users = store.getState()['users'];
        this.setState({
          users: users
        });
        this.togglePopDown();
      });
  }

  _generateAddUserRoute(user) {
    return {
      type: 'POST',
      route: '/api/v1/users/addUser',
      body: {
        user
      }
    };
  }

  render() {

    const {
      users,
      showAddPopDown
    } = this.state;

    const {
      CODE_CRAFTSMANSHIP,
      ADD_USER,
      ADD,
      CLOSE,
      MALE,
      FEMALE,
      GENDER
    } = constants;

    let FieldGroup, FormInstance;
    if (showAddPopDown) {
      FieldGroup = ({ id, label, help, ...props }) => {
        return (
          <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
          </FormGroup>
        );
      }

      FormInstance = (
        <form onSubmit={this.addUser}>
          <FieldGroup
            id="emailInput"
            type="email"
            label="Email address:"
            placeholder="Enter email"
          />
          <FieldGroup
            id="firstNameInput"
            type="text"
            label="First Name:"
            placeholder="Enter First Name"
          />
          <FieldGroup
            id="lastNameInput"
            type="text"
            label="Last Name:"
            placeholder="Enter Last Name"
          />
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>{GENDER}</ControlLabel>
            <FormControl id="genderSelect" componentClass="select" placeholder="select">
              <option value={MALE}>{MALE}</option>
              <option value={FEMALE}>{FEMALE}</option>
            </FormControl>
          </FormGroup>
          <Button bsStyle="primary" bsSize="large" type="submit">{ADD}</Button>
        </form>
      );
    }

    const UserArea = (
        users.map( (info, index) =>
            <Users  data-email={info['email']}
                    email={info['email']}
                    data-first-name={info['first_name']}
                    first_name={info['first_name']}
                    data-last-name={info['last_name']}
                    last_name={info['last_name']}
                    data-gender={info['gender']}
                    gender={info['gender']}
                    data-id={info['id']}
                    id={info['id']}
                    key={index}
                    index={index}
                    props={this.props}
                    trashBinSvgPath={this.state.trashBinSvgPath}
                    store={store}
                    onClick={[this.props.getUserInfo, this.props.removeUser, this.removeUserAction]}
            />
        )
    );

    return (
      <div className="code-craftsmanship-container">
        <div className="add-user-btn-container">
          <Button bsStyle="primary"
                  bsSize="large"
                  id="addSomeUserBtn"
                  onClick={this.togglePopDown}>{!showAddPopDown && ADD_USER || CLOSE}
          </Button>
        </div>
        {FormInstance}
        <h2 className="code-craftsmanship-container-label"><strong>{CODE_CRAFTSMANSHIP}</strong></h2>
        {UserArea}
      </div>
    );
  }
}

export default CodeCraftsmanship;
