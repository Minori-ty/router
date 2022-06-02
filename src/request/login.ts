import axios from 'axios'
// axios.defaults.baseURL = 'http://127.0.0.1:4523/m1/1054178-0-default'
export const login = (username: string, password: string) => {
    return axios.post('/api/login', {
        username,
        password,
    })
}
