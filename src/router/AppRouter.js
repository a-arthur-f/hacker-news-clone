import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Header from '../components/Header';
import ShowStories from '../components/ShowStories';

const AppRouter = () => (
    <BrowserRouter>
        <div className="container">
            <Header />

            <Switch>
                <Route path="/" render={() => <Redirect to="/top" />} exact={true} />
                <Route 
                    path="/:type"
                    render={({match}) => {
                        const { type } = match.params;
                        if(!['top', 'new', 'best'].includes(type)) {
                            return <Redirect to="/top" />
                        }

                        return <ShowStories type={type} />
                    }}
                />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;