import styled from 'styled-components';
import useStats from '../utils/useStats';

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  margin: 1rem 2rem 1rem 2rem;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 1rem 2rem 1rem 2rem;
  }
`;
const StatBlock = styled.div`
  background: #000000;
  font-size: 2rem;
  color: #ffffff;
  padding: 2rem;
  border-radius: 1rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const StatH3 = styled.h3`
  font-size: 3.5rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;


export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);
  console.log(stats, loading, error);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <StatGrid>
      <StatBlock>
        <StatH3>{stats.confirmed?.value}</StatH3>
        <span>Total Confirmed</span>
      </StatBlock>
      <StatBlock>
      <StatH3>{stats.deaths?.value}</StatH3>
      <span>Total Deaths</span>
      </StatBlock>
      <StatBlock>
      <StatH3>{stats.recovered?.value}</StatH3>
      <span>Total Recovered</span>
      </StatBlock>
    </StatGrid>
  );
}
