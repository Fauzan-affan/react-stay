import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID e157067493c22ddf1682ca5ad7cc33d60756f55920fbc503983be756c7b1427c',
        SetCookie: 'HttpOnly;Secure;SameSite=Strict'
    }
})