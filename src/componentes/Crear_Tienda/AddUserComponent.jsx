import React, { Component } from 'react'
import ApiService from "./ApiService";
import { Link, Redirect, withRouter } from 'react-router-dom';

class AddUserComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            age: '',
            salary: '',
            message: null
        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {username: this.state.username, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age, salary: this.state.salary};
        ApiService.addUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
               
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(

            <div className="container">
                <div className="col-md-12">



            
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h2 className="text-center">Crear Tiemda</h2>
                <form>
                <div className="form-group">
                    <label>Nombre de la tienda:</label>
                    <input type="text" name="username" className="form-control" value={this.state.username} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Descripcion:</label>
                    <input type="text"  name="password" className="form-control" value={this.state.password} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Dueño:</label>
                    <input  name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Fecha Inicio:</label>
                    <input type="date" placeholder="Ejm: (DD/MM/YYYY)" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>RUC:</label>
                    <input type="number"  name="age" className="form-control" value={this.state.age} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Rubro:</label>
                    <input type="text"  name="salary" className="form-control" value={this.state.salary} onChange={this.onChange}/>
                </div>

                <Link className="btn btn-success" to="/crearp2" onClick={this.saveUser}>Guardar</Link>
                
                <Link className="btn btn-success" to="/creart2"> Mostrar datos de la tienda</Link>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </form>
    </div>
    </div>
    </div>
        );
    }
}

export default AddUserComponent;