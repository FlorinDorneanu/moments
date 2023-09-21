import axios from "axios";

axios.defaults.baseURL = 'https://moments-moments-bdf530118a56.herokuapp.com'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true