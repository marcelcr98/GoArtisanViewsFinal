import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route } from 'react-router-dom';
import Settings from './componentes/settings';
import Dashboard from './componentes/dashboard';
import Reports from './componentes/reports';
import Tiendas from './componentes/Tiendas/main_tienda';
import Acerca from './componentes/Acerca/main_acerca';
import TiendaC from './componentes/Tienda_Creada/main_tiendac';
import Producto from './componentes/Productos/main_productos';
import Inform from './componentes/Logins/App';
import CrearT from './componentes/Crear_Tienda/crear_tienda';
import TiendaU from './componentes/Tienda_User/main_tiendau';
import CrearP from './componentes/Crear_Producto/crear_producto';
import Carrito from './componentes/Carrito/main_carrito';
import Registro1 from './componentes/Crear_Producto/AddUserComponent';
import CrearP2 from './componentes/Crear_Producto/crear_producto2';
import CrearT2 from './componentes/Crear_Tienda/crear_tienda2';


const App = () => (

    <BrowserRouter>
       <React.Fragment>
            <Route path="dashboard/" component={Dashboard}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/reports" component={Reports}/>
            <Route path="/tienda" component={Tiendas}/>
            <Route path="/acerca" component={Acerca}/>
            <Route path="/tiendac" component={TiendaC}/>
            <Route path="/producto" component={Producto}/>
            <Route path="/creart" component={CrearT}/>
            <Route path="/inform" component={Inform}/>
            <Route path="/tiendau" component={TiendaU}/>
            <Route path="/crearp" component={CrearP}/>
            <Route path="/crearp2" component={CrearP2}/>
            <Route path="/creart2" component={CrearT2}/>
            <Route path="/carrito" component={Carrito}/>
            <Route path="/registro1" component={Registro1}/>
       </React.Fragment>
    
    </BrowserRouter>

    



);

ReactDOM.render(<App />, document.getElementById('root'));

