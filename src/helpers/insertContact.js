import contacts from './returnAllContacts'

export default (dado) => {
  const contactsStorage = contacts()
  contactsStorage.push(dado)
  window.sessionStorage.setItem('agenda', JSON.stringify(contactsStorage))
}
