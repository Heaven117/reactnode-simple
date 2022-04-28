import React from "react";
import {Redirect, Route, Switch} from 'react-router'

import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import ArticleEdit from "./pages/ArticleEdit";
import {BrowserRouter} from "react-router-dom";

const Routes = (props) =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/articles" component={Articles}/>
            <Route exact path="/articles/:id" component={ArticleDetail}/>
            <Route exact path="/articles/:id/edit" component={ArticleEdit}/>
            <Redirect to="/articles"/>
        </Switch>
    </BrowserRouter>
)
export default Routes;
