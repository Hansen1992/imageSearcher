import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID 0d205d0b3ae8d6beb41203de4f6f3758ca5358c28bb811204f1931a93caa97ce'
    }
});