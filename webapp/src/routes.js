import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { css, Global } from '@emotion/core';
import { Home } from './home';
import AddTransaction from './components/AddTransaction/AddTransaction';
import EditTransaction from './components/EditTransaction/EditTransaction';
import I18nProvider from './contexts/I18nProvider';

function AppRouter() {
  return (
    <Router>
      <I18nProvider>
        {isi18n => (
          <div css={css`font-family: ${isi18n ? 'Open Sans': 'Noto Serif TC'}`}>
            <nav css={navStyle}>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/add-transaction">Create Transaction</Link>
                </li>
              </ul>
            </nav>
            <div className="main-content" css={contentStyle}>
              <Route component={Home} exact path="/" />
              <Route component={AddTransaction} path="/add-transaction" />
              <Route component={EditTransaction} path="/edit-transaction/:id" />
            </div>
          </div>
        )}
      </I18nProvider>
    </Router>
  );
}

export default AppRouter;

const layoutStyle = css`
  display: grid;
  grid-row-gap: 24px;
  padding: 8px;
`;

const navStyle = css`
  grid-row: 1;

  & > ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
  }

  & > ul > li:not(:first-of-type) {
    margin-left: 16px;
  }
`;

const contentStyle = css`
  grid-row: 2;
`;
