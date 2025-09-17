const SibApiV3Sdk = require("sib-api-v3-sdk");
require('dotenv').config();


let defaultClient = SibApiV3Sdk.ApiClient.instance;
let apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY;

const contactsApi = new SibApiV3Sdk.ContactsApi();

// Function to add subscriber
async function addSubscriber(email) {
  const createContact = new SibApiV3Sdk.CreateContact();
  createContact.email = email;
  createContact.listIds = [5]; // Montero list

  return contactsApi.createContact(createContact);
}

module.exports = { addSubscriber };
