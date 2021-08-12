import React, { useState } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import ShowStories from '../components/ShowStories';
import { getStoriesCount } from '../utils/apis';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />

                <Switch>
                    <Route path="/" render={() => <Redirect to="/top/1" />} exact={true} />
                    <Route 
                        path="/:type/:page?"
                        render={({match}) => {
                            const { page } = match.params;
                            const { type } = match.params;

                            if(!page) {
                                return <Redirect to={`/${type}/1`} />
                            }

                            if(!['top', 'new', 'best'].includes(type)) {
                                return <Redirect to="/" />
                            }

                            return (
                                <React.Fragment>
                                    <ShowStories type={type} page={page} />
                                    <Pagination type={type}/>
                                </React.Fragment>
                            )
                        }}
                    />
                </Switch>
            </div>
        </BrowserRouter>
    )
};

export default AppRouter;