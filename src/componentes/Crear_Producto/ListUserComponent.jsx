import React, { Component } from 'react'
import ApiService from "./ApiService";
import '../css/main.css';
import '../css/util.css';
import { Link, Redirect, withRouter } from 'react-router-dom';

class ListUserComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            message: null
        }
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.addUser = this.addUser.bind(this);
        this.reloadUserList = this.reloadUserList.bind(this);
    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList() {
        ApiService.fetchUsers()
            .then((res) => {
                this.setState({users: res.data.result})
            });
    }

    deleteUser(userId) {
        ApiService.deleteUser(userId)
           .then(res => {
               this.setState({message : 'User deleted successfully.'});
               this.setState({users: this.state.users.filter(user => user.id !== userId)});
           })

    }

    editUser(id) {
        window.localStorage.setItem("userId", id);
        this.props.history.push('/edit-user');
    }

    addUser() {
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-user');
    }

    render() {
        return (

            <div className="container">
            <div className="col-md-12">
            <div>
                    <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h2 className="text-center">Lista de Productos</h2>
                <Link className="btn btn-success" to="/crearp"> Añadir Producto</Link>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th><h3>Nombre</h3></th>
                            <th><h3>Color</h3></th>
                            <th><h3>Descripcion</h3></th>
                            <th><h3>Cantidad</h3></th>
                            <th><h3>Precio</h3></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                        user =>
                                    <tr key={user.id}>
                                        <td><h3>{user.username}</h3></td>
                                        <td><h3>{user.lastName}</h3></td>
                                        <td><h3>{user.firstName}</h3></td>
                                        <td><h3>{user.age}</h3></td>
                                        <td><h3>{user.salary}</h3></td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteUser(user.id)}> Eliminar</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

                <br></br>
                <br></br>
                <br></br>
                <br></br>

            </div>
            </div>
            </div>
        );
    }

}

export default ListUserComponent;