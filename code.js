function tsp_hk(cities, start, dm, cache) 
{
    if (cities.length == 2) 
    {
        var key = JSON.stringify(cities)
        if (cache[key] === undefined) cache[key] = {};
        if (cache[key][start] !== undefined) return cache[key][start];
        return dm[start][cities[1]] 
    } 
    else 
    {
        var key = JSON.stringify(cities)
        if (cache[key] === undefined) cache[key] = {};

        if (cache[key][start] !== undefined) return cache[key][start];

        let minDist = Infinity;

        for (let i = 0; i < cities.length; i++) 
        {
            if (cities[i] !== start) 
            {
                var it = cities[i]

                let newCities = cities.filter(city => city !== it);
                let nextcity = cities.find(x => x == it)

                minDist = Math.min(minDist,(dm[start][nextcity] + tsp_hk(newCities, nextcity, dm, cache))) 
            }
        }

        cache[key][start] = minDist;

        return minDist 
    }
}

let dm4 = [
  [0.0, 8.0, 50.0, 31.0, 12.0, 48.0, 36.0, 2.0, 5.0, 39.0, 10.0],
  [8.0, 0.0, 38.0, 9.0, 33.0, 37.0, 22.0, 6.0, 4.0, 14.0, 32.0],
  [50.0, 38.0, 0.0, 11.0, 55.0, 1.0, 23.0, 46.0, 41.0, 17.0, 52.0],
  [31.0, 9.0, 11.0, 0.0, 44.0, 13.0, 16.0, 19.0, 25.0, 18.0, 42.0],
  [12.0, 33.0, 55.0, 44.0, 0.0, 54.0, 53.0, 30.0, 28.0, 45.0, 7.0],
  [48.0, 37.0, 1.0, 13.0, 54.0, 0.0, 26.0, 47.0, 40.0, 24.0, 51.0],
  [36.0, 22.0, 23.0, 16.0, 53.0, 26.0, 0.0, 29.0, 35.0, 34.0, 49.0],
  [2.0, 6.0, 46.0, 19.0, 30.0, 47.0, 29.0, 0.0, 3.0, 27.0, 15.0],
  [5.0, 4.0, 41.0, 25.0, 28.0, 40.0, 35.0, 3.0, 0.0, 20.0, 21.0],
  [39.0, 14.0, 17.0, 18.0, 45.0, 24.0, 34.0, 27.0, 20.0, 0.0, 43.0],
  [10.0, 32.0, 52.0, 42.0, 7.0, 51.0, 49.0, 15.0, 21.0, 43.0, 0.0],
  ];

  let dm2 = [
    [0,3,4,2,7],
    [3,0,4,6,3],
    [4,4,0,5,8],
    [2,6,5,0,6],
    [7,3,8,6,0]
    ];
  
console.log(tsp_hk([0,1,2,3,4],0,dm2,{}))
console.log(tsp_hk([0,1,2,3,4,5,6,7,8,9,10],0,dm4,{}))
