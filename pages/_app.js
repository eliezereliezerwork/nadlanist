import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import { ThemeProvider } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'

import {darkTheme ,lightTheme} from '../src/theme';

import CssBaseline from '@material-ui/core/CssBaseline';

import Nav from '../src/Nav';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  
  const [theme, setTheme] = useState(true) 
  const appliedTheme = createMuiTheme(theme ? darkTheme : lightTheme)

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={appliedTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Nav theme={theme} setTheme={setTheme} />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};