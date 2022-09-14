import React, { useRef } from 'react';
import { Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import useStyles from './styles';
import useAlan from './Alan';

import { Actors, MovieInfomation, Movies, Profile, NavBar } from '.';

const App = () => {
  const classes = useStyles();
  const alanBtnContainer = useRef();

  useAlan();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path={['/', '/approved']}>
            <Movies />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
          <Route exact path="/movie/:id">
            <MovieInfomation />
          </Route>
          <Route exact path="/actors/:id">
            <Actors />
          </Route>
        </Switch>
      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
};

export default App;
