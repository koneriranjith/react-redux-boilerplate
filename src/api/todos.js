import axios from '../helpers/axios';

// export const getTodos = () => axios.get("/todos/"); 
export default {
    getTodos: () => axios.get("/todos/")
}