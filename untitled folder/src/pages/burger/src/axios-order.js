import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://my-react-burger-db376-default-rtdb.firebaseio.com/'
}) 


export default instance