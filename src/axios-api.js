import axios from 'axios'

const getAPI = axios.create({
    baseURL: 'http://3.104.75.221:8000'
})

export {getAPI}