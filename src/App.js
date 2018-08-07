import React, { Component } from 'react';
import { Route , BrowserRouter, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const MyLoadingComponent = ({ isLoading, error }) => {
    if (isLoading) {
        return <div>Loading...</div>
    }
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>
    }
    else {
        return null;
    }
};

const AsyncHome = Loadable({
    loader: () => import('./pages/home/Home'),
    loading: MyLoadingComponent
});

const AsyncAbout = Loadable({
    loader: () => import('./pages/about/About'),
    loading: MyLoadingComponent
});

const routes = [
    { path: '/', component: AsyncHome, exact: true },
    { path: '/about', component: AsyncAbout },
]

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                   {
                       routes.map(route => (
                           <Route key={route.path} path={route.path} component={route.component}  exact={route.exact} />
                       ))
                   }
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
