import React, { lazy, useState, useEffect, Suspense } from 'react';
import List from '../components/List';


function renderStarWarsData(starWarsData) {
  return (
    starWarsData.map((data) => <div key={data.name}>{data.name}</div>)
  )
}

function useStarWarsData(starWarsRequest) {
  const [starWarsData, setStarWarsData] = useState([]);
  useEffect( async () => {
    const fetchedData = await fetch(`https://swapi.co/api/${starWarsRequest}`);
    const data = await fetchedData.json();
    setStarWarsData(data.results)
  }, []);
  return starWarsData;
}

const ListContainer = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://swapi.co/api/people')
      .then((res) => res.json())
      .then((result) => setUsers(result.results))
  }, []);

  const [planets, setPlanets] = useState([]);
  useEffect( async () => {
    const fetchedPlanets = await fetch('https://swapi.co/api/planets')
    const planets = await fetchedPlanets.json();
    setPlanets(planets.results)
  }, []);

  const starWarsShips = useStarWarsData('starships');

  return (
    <>
      <List characters={users} />
      {renderStarWarsData(planets)}
      {renderStarWarsData(starWarsShips)}
    </>
  )

};

export default ListContainer;
