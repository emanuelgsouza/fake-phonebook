import http from './http'
import editContact from './editContact'
import orderContacts from './orderContacts'

export default () => {
  http.then((res) => {
    const data = orderContacts(editContact(res.data))
    if (window.sessionStorage.getItem('agenda') === null) {
      window.sessionStorage.setItem('agenda', JSON.stringify(data))
    }
  })
}
