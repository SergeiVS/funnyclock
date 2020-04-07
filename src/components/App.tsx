import React from 'react';
import * as ReactRouterDOM from "react-router-dom";
import { Container } from "react-bootstrap";

import MenuComponent from "./menu";
import GameTypeOneComponent from "./gametypeone";
import GameTypeTwoComponent from "./gametypetwo";
import NotFoundComponent from "./notfound";

const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;

export default class App extends React.Component
{
    public render()
    {
        return (
            <Container fluid className="p-0 m-0 h-100">
                <Router basename={process.env.PUBLIC_URL}>
                    <Switch>
                        <Route exact path="/" component={ MenuComponent } />
                        <Route path="/typeone" component={ GameTypeOneComponent } />
                        <Route path="/typetwo" component={ GameTypeTwoComponent } />
                        <Route component={ NotFoundComponent } />
                    </Switch>
                </Router>
            </Container>
        )
    }   
}
