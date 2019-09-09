
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Demand from './demand';
import routerConfig from './routerConfig';

import Header from '../components/common/header';
import Footer from '../components/common/footer';

let configList = [];
function getRoutes(routerConfig) {
    routerConfig.forEach(item => {
        const { children, title, component, name, path } = item;
        if (children) {
            getRoutes(children)
        };
        const Obj = (props) => {
            document.title = title;
            return (<Demand load={component}>{(Route) => <Route {...props} />}</Demand>)
        };

        configList.push(<Route key={name} exact path={path} component={Obj} />)
    })
    return configList;
}

const BasicRoute = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            {getRoutes(routerConfig)}
        </Switch>
        <Footer />
    </BrowserRouter>
);

export default BasicRoute;