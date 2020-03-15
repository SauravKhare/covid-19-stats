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
  const [selectedCountry, setSelectedCountry] = useState('IND');
  if (loading) return <p>Loading...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <CountryText>
      <StatP>Select Country</StatP> <SelectCountry
        onChange={e => {
          setSelectedCountry(e.target.value);
        }}
      >
        {Object.entries(countries.countries).map(([country, code]) => (
          <option
            selected={selectedCountry === countries.iso3[code]}
            key={code}
            value={countries.iso3[code]}
          >
            {country}
          </option>
        ))}
      </SelectCountry>
      <StatH2>Currently Showing From {selectedCountry}</StatH2>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      ></Stats>
    </CountryText>
  );
}
