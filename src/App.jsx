import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/friendsLogin">
                    <LoginForm />
                </Route>
                <PrivateRoute exact path="/friendsList">
                    <FriendsList />
                </PrivateRoute>
                <PrivateRoute exact path="/friends/add">
                    <AddFriend />
                </PrivateRoute>
                <Route exact path="/">
                    <Redirect to="/friendsLogin" />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
