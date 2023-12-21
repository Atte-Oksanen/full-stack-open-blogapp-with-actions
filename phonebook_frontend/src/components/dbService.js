import axios from "axios";
const baseUrl = 'https://phonebook-backend-with-actions.onrender.com/api/persons'

const getData = () => {
  return axios.get(baseUrl).then(response => response.data)
}

const create = newDataPoint => {
  return axios.post(baseUrl, newDataPoint).then(response => (response.data))
    .catch(error => error)
}

const remove = id => {
  return axios.delete(`${baseUrl}${id}`).then(response => response.data)
}

const put = person => {
  return axios.put(`${baseUrl}${person.id}`, person).then(response => response.data)
}

const exportFunctions = {
  getData,
  create,
  remove,
  put
}

export default exportFunctions