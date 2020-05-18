import Axios from 'axios'

export default Axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization:
        'Client-ID 1bRPHaGROXkDmmoSQdd29vDAJAe5Vxk8xB2pZShIpiE'
    }
});