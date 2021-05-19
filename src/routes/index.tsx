import React from 'react';
import { Switch, Route as Rota } from 'react-router-dom';
import Route from './Route';

// import Deshboard from '../pages/dashboard/index';
// import EnvioAvaliacaoNpsAGR from '../pages/agrNps/AvaliacaoNps';
// import RegisterUser from '../pages/users/register/index';
// import ListUser from '../pages/users/list/index';
// import EditUser from '../pages/users/edit/index';
import Register from '../pages/register';
import Login from '../pages/login/index';
import Notfound from '../pages/notFound';
import Post from '../pages/post';


const PagesRoot: React.FC = () => (
  <Switch>
    <Route path="/login" exact component={Login} />
    <Route path="/users/register" exact component={Register} />
    <Route path="/posts" exact component={Post} isPrivate />
    <Rota component={Notfound} />
  </Switch>
);

export default PagesRoot;