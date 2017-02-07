export default (array) => {
  return array.map(item => {
    return Object.assign({}, {
      Nome: `${item.name} ${item.surname}`,
      Telefone: item.phone,
      Aniversario: item.birthday.dmy,
      Email: item.email,
      avatar: item.photo
    })
  })
}
