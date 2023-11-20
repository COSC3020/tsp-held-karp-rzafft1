
function tsp_hk(dm)
{
    let cities = dm.map((item,index) => index)
    cities = cities.sort()
    
    if (cities.length == 1) return 0;

    let cache = {}
    let minDist = Infinity

    for (let start in cities)
    {
        start = parseInt(start)
        let sumDist = tsp(cities, start, dm, cache)
        minDist = Math.min(minDist, sumDist)        
    }
    return minDist
}

function tsp(cities, start, dm, cache) 
{
    if (cities.length === 1) 
    {
        let key = JSON.stringify(cities) + start
        if (cache[key] === undefined) cache[key] = {};
        else return cache[key];

        cache[key] = dm[start][cities[0]]
        return dm[start][cities[0]];
    }
    else
    {
        let key = JSON.stringify(cities) + start

        if (cache[key] === undefined) cache[key] = {};
        else return cache[key];
        
        let minDist = Infinity;
    
        for (let i = 0; i < cities.length; i++) 
        {
            var nextStart = cities[i]
            let newCities = cities.filter(city => city !== start)
            let sumDist = dm[start][nextStart] + tsp(newCities, nextStart, dm, cache);
            minDist = Math.min(minDist, sumDist);   
        }

        cache[key] = minDist;
        return minDist;
    }
}
