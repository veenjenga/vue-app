import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api', // update if needed
  headers: {
    'Content-Type': 'application/json',
  },
})

export default {
  getCategories() {
    return apiClient.get('/categories')
  },
  getMenuItems(categoryId) {
    return apiClient.get(`/items?categoryId=${categoryId}`)
  },
  updateItem(id, data) {
    return apiClient.put(`/items/${id}`, data)
  },
  deleteItem(id) {
    return apiClient.delete(`/items/${id}`)
  },
}
