import React, { lazy, useState, useEffect, Suspense } from 'react';
import Loading from './components/Loading';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const ListContainer = lazy(() => import ('./containers/ListContainer'));
const User = lazy(() => import ('./containers/UserContainer'));

const withLazyLoading = Lazy => () => (
  <Suspense maxDuration={0} fallback={<Loading />}>
    <Lazy />
  </Suspense>
);

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <section>
          <Route exact path="/" component={withLazyLoading(ListContainer)} />
          <Route exact path="/users" component={withLazyLoading(User)} />
        </section>
      </div>
    </Router>
  );
}

export default App;
