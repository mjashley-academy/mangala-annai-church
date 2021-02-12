/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import MarqueeText from '../../components/MarqueeText';
import MenuBar from 'components/MenuBar';
import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import { FormattedMessage } from 'react-intl';
import messages from "./messages";


import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

class App extends React.Component {
  
  render() {
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - Mangala Annai Church"
          defaultTitle="Mangala Annai Church, Kattuvilai, Nagercoil"
        >
          <meta
            name="description"
            content="Managal Annai Church, Nagercoil, Kanniyakumari District"
          />
        </Helmet>
        <Header />
        <MarqueeText>
          <FormattedMessage {...messages.Text} />
        </MarqueeText>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/features" component={FeaturePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <Footer />
        <GlobalStyle />
      </AppWrapper>
    );
  }
}
const mapStateToProps = state => ({
  somethingFromStore: state.languageProviderReducer,
});

// wrap App in connect and pass in mapStateToProps
export default connect(mapStateToProps)(App);
