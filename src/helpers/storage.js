import http from './http'

export default () => {
  http.then((res) => {
    const data = res.data
    if (window.localStorage.getItem('agenda') === null) {
      window.localStorage.setItem('agenda', JSON.stringify(data))
    }
  })
}
