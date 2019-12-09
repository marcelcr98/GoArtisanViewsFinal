import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8083/users';

class ApiService {

    fetchUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    addUser(user) {
        return axios.post(""+USER_API_BASE_URL, user);
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }

}

export default new ApiService();

/*

import axios from 'axios';

const PRODUCTO_API_BASE_URL = 'http://localhost:8083/productos';

class ApiService {

    fetchUsers() {
        return axios.get(PRODUCTO_API_BASE_URL);
    }

    fetchUserById(productoId) {
        return axios.get(PRODUCTO_API_BASE_URLL + '/' + productoId);
    }

    deleteUser(productoId) {
        return axios.delete(PRODUCTO_API_BASE_URLL + '/' + productoId);
    }

    addUser(producto) {
        return axios.post(""+PRODUCTO_API_BASE_URLL, producto);
    }

    editUser(producto) {
        return axios.put(PRODUCTO_API_BASE_URL + '/' + producto.id, producto);
    }

}

export default new ApiService();

*/