import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  // Redirect,
} from 'react-router-dom';
import Navigation from './Navigation';
import Auth from '../routes/Auth';
import Home from '../routes/Home';
import Profile from '../routes/Profile';

const AppRouter = ({ refreshUser, isLoggedin, userObj }) => {
  return (
    <Router>
      {isLoggedin && <Navigation userObj={userObj} />}
      <Switch>
        {isLoggedin ? (
          <div
            style={{
              maxWidth: 890,
              width: '100%',
              margin: '0 auto',
              marginTop: 80,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>
            <Route exact path="/profile">
              <Profile refreshUser={refreshUser} userObj={userObj} />
            </Route>
          </div>
        ) : (
          <>
            <Route exact path="/">
              <Auth />
            </Route>
            {/* <Redirect from="*" to="/" /> */}
          </>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
