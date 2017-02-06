import axios from 'axios'

const url = 'https://uinames.com/api/?region=brazil&amount=30&ext'

export default axios.get(url).then((response) => response).catch((err) => err)
