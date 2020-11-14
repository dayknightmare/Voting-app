import axios from 'axios'

const apiVoting = axios.create({baseURL: "http://localhost:5000"})

export { apiVoting }