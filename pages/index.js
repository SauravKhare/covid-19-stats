import { createGlobalStyle } from 'styled-components';
import useStats from '../utils/useStats';
import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';
import React from "react";
import {Helmet} from "react-helmet";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Poppins&display=swap');
  html {
    font-family: 'Montserrat', sans-serif;
  }
`;

export default function IndexPage() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>COVID-19 Stats</title>
      </Helmet>
      <GlobalStyle />
      <Stats url="https://covid19.mathdro.id/api"></Stats>
      <CountrySelector></CountrySelector>
    </div>
  );
}
