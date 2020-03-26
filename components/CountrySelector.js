import { useState } from 'react';
import useStats from '../utils/useStats';
import Stats from './Stats';
import styled from 'styled-components';

const CountryText = styled.div`
  color: #000000;
  align-items: center;
  justify-items: center;
  text-align: center;
`;

const StatH2 = styled.h2`
  font-size: 2rem;
  color: #000000;
`;

const StatH2Img = styled.h2`
  font-size: 1.5rem;
  color: #000000;
  vertical-align: top;
`;

const StatP = styled.p`
  font-size: 1.5rem;
  color: #000000;
`;

const SelectCountry = styled.select`
  padding: 1rem;
`;


export default function CountrySelector() {
  const { stats: countries, loading, error } = useStats(
    'https://covid19.mathdro.id/api/countries'
  );

  const [selectedCountry, setSelectedCountry] = useState({
    name: 'India',
    iso2: 'IN'
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      <CountryText>
      <StatP>Select Country</StatP>
      <SelectCountry
          onChange={e => {
            setSelectedCountry(countries.countries[e.target.value]);
          }}
        >
          {countries.countries.map((country, i) => (
            <option
              selected={selectedCountry.name === country.name}
              key={country.ios2}
              value={i}
            >
              {country.name}
            </option>
          ))}
        </SelectCountry>
        <div>
          <StatH2Img>Stats for {selectedCountry.name} <img style={{verticalAlign: "middle"}}
            src={`https://www.countryflags.io/${selectedCountry.iso2}/flat/32.png`}
          /></StatH2Img>
        </div>
      </CountryText>
      <Stats
        url={encodeURI(
          `https://covid19.mathdro.id/api/countries/${selectedCountry.name}`
        )}
      ></Stats>
    </div>
  );
}