module.exports = {
  url: 'https://localhost:3000',
  elements: {
    addUserButton: {
      selector: '.add-user-btn-container > button'
    },
    addSomeUserBtn: {
      selector: '#addSomeUserBtn'
    },
    codeCraftsmanshipContainerLabel: {
      selector: '.code-craftsmanship-container-label'
    },
    codeCraftsmanshipContainerStrongLabel: {
      selector: '.code-craftsmanship-container-label > strong'
    },
    trashBin: {
      selector: '.users-container .users-container-trash-bin'
    },
    emailInput: {
      selector: '#emailInput'
    },
    firstNameInput: {
      selector: '#firstNameInput'
    },
    lastNameInput: {
      selector: '#lastNameInput'
    },
    addUserSubmit: {
      selector: '#addUserSubmit'
    }
  },
  commands: [
    {
      setInput: function (input, value) {
        this.setValue(input, value);
      }
    }
  ]
};
