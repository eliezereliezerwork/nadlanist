import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

import styled from 'styled-components';
import useTheme from "@material-ui/core/styles/useTheme";



const MyCardHeader = styled.div`
                        width: 100%;
                        height: 40px;
                        background-color: ${props => props.theme.bgColor}; 
                        color: ${props => props.theme.txtColor}; 
                        display: flex;
                        align-items:center;
                        justify-content: center;
                    `;


export default function Login() {


  const theme = {
    bgColor: useTheme().palette.primary.main, 
    txtColor: useTheme().palette.primary.contrastText
};


  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Culture
        </Typography>
        <MyCardHeader theme={theme}>
            מישהו משהו
        </MyCardHeader>
        <Button variant="contained" color="primary" component={Link} naked href="/">
          Go to the main page
        </Button>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}


