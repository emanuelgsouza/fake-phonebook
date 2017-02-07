import http from './http'
import editContact from './editContact'

export default () => {
  http.then((res) => {
    const data = editContact(res.data)
    if (window.sessionStorage.getItem('agenda') === null) {
      window.sessionStorage.setItem('agenda', JSON.stringify(data))
    }
  })
}
