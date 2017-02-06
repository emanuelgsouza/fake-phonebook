export default () => {
  const contacts = JSON.parse(window.localStorage.getItem('agenda'))
  return contacts.map((contact) => Object.assign({}, {
    Nome: `${contact.name} ${contact.surname}`,
    Telefone: contact.phone,
    Aniversario: contact.birthday.dmy,
    Email: contact.email,
    avatar: contact.photo
  }))
}
