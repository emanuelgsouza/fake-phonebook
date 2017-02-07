import contacts from './returnAllContacts'
import orderContacts from './orderContacts'

export default (dado) => {
  const contactsStorage = contacts()
  contactsStorage.push(dado)
  window.sessionStorage.setItem('agenda', JSON.stringify(orderContacts(contactsStorage)))
}
