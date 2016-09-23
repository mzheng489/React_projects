//src/actions/ContactActions.js
//retrieve our contacts data

import AppDispatcher form '../dispatcher/AppDispatcher';
import ContactConstants from '../constants/ContactConstants';
import ContactsAPI form '../utils/ContactsAPI';

export default {

//first action`
  recieveContacts : () => {
    ContactsAPI
      .getContacts('http://localhost:8000/api/contacts')
      .then(contacts => {
        AppDispatcher.dispatch({
          actionType : ContactConstants.RECIEVE_CONTACTS,
          contacts : contacts
        });
      })
      .catch(message => {
        AppDispatcher.dispatch({
          actionType : ContactConstants.RECIEVE_CONTACTS_ERROR,
          message : message
        });
      });

  },

  //second actionType
  getContact : (id) => {
    ContactsAPI
      .getContact('http://localhost:8000/api/contacts/' + id)
      .then(contact => {
        AppDispatcher.dispatch({
          actionType : ContactConstants.RECIEVE_CONTACT,
          contact : contact
        });
      })
      .catch(message => {
        AppDispatcher.dispatch({
          actionType : ContactConstants.RECIEVE_CONTACTS_ERROR,
          message : message
        });
      });
  }

}
