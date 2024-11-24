import getNeighborhoodsList from './2-arrow.js';

test('returns the list of neighborhoods', () => {
  const neighborhoodsList = new getNeighborhoodsList();
  expect(neighborhoodsList.addNeighborhood('Tenderloin')).toEqual(['SOMA', 'Union Square', 'Tenderloin']);
});

