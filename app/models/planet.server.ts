import { PlanetByIdQuery, planetCollectionQuery } from 'grafbase/request';

export async function getPlanets() {
  if (process.env.GRAFBASE_API_KEY && process.env.GRAFBASE_API_URL) {
    const headers = {
      'Content-Type': 'application/json',
      'x-api-key': process.env.GRAFBASE_API_KEY
    };
    const requestOptions = {
      headers,
      method: 'POST',
      body: JSON.stringify({ query: planetCollectionQuery })
    };
    const response = await fetch(process.env.GRAFBASE_API_URL, requestOptions);
    const planets = await response.json();
    return { planets };
  } else {
    return { planets: [] };
  }
}

export async function getPlanet(planetId: string) {
  console.log('planetId', planetId);
  if (process.env.GRAFBASE_API_KEY && process.env.GRAFBASE_API_URL) {
    const headers = {
      'Content-Type': 'application/json',
      'x-api-key': process.env.GRAFBASE_API_KEY
    };
    const variables = { id: planetId };
    const requestOptions = {
      headers,
      method: 'POST',
      body: JSON.stringify({ query: PlanetByIdQuery, variables })
    };
    const response = await fetch(process.env.GRAFBASE_API_URL, requestOptions);
    const data = await response.json();
    console.log('data', data);
    return { planet: data.data.planet };
  } else {
    return { planet: {} };
  }
}