import React, { Component } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import Navigation from '@Components/Navigation';
import SearchBar from '@Components/SearchBar';
import Grid from '@Components/Grid';

export default class ViewFiles extends Component {
  render() {
    return (
      <Container>
        <TopBar>
          <Disclaimer>
            Para agregar un documento envía un correo electrónico a 
            esta dirección <b>data@hcpromedical.awsapps.com</b> con un archivo adjunto.
          </Disclaimer>
          {/* <Navigation /> */}
          <SearchBar />
        </TopBar>
        <Route path="*" component={Grid} />
      </Container>
    );
  }
}

const Disclaimer = styled.div`
  max-width: 400px;
  float: left,
  font-family: 'Segoe UI'
`;

const Container = styled.div`
  padding: 41px;
  margin-left: 20px;
  transition: margin-left 250ms ease-in;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    padding: 55px 15px 15px 15px;
  }
`;

const TopBar = styled.div`
  display: flex;
  margin-top: 20px;
  float: right;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
