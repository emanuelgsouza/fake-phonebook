import orderBy from 'lodash.orderby'

export default (array) => {
  return orderBy(array, ['Nome'], ['asc'])
}
