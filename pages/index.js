import { createGlobalStyle } from 'styled-components';
import useStats from '../utils/useStats';
import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';
import React from "react";
import {Helmet} from "react-helmet";
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Poppins&display=swap');
  html {
    font-family: 'Archia', sans-serif;
  }
`;

const StatH3 = styled.h3`
  font-size: 3rem;
  color: #000000;
  margin-bottom: 0.5rem;
  align-items: center;
  justify-items: center;
  text-align: center;
  margin-top: 0.6rem;
`;

export default function IndexPage() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>COVID-19 Stats</title>
      </Helmet>
      <GlobalStyle />
      <StatH3>COVID-19 Stats</StatH3>
      <Stats url="https://covid19.mathdro.id/api"></Stats>
      <CountrySelector></CountrySelector>
    </div>
  );
}
