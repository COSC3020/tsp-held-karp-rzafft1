
function tsp_hk(dm)
{
    let cities = dm.map((item,index) => index)
    
    if (cities.length == 1) return 0;

    let cache = {}
    let minDist = Infinity

    for (let start in cities)
    {
        cache = {}
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
        cache = {}
        return dm[start][cities[0]];
    }
    else
    {
        let key = JSON.stringify(cities) + start

        if (cache[key] === undefined) cache[key] = {}
    
        if (cache[key][start] !== undefined) return cache[key][start];
    
        let minDist = Infinity;
    
        for (let i = 0; i < cities.length; i++) 
        {
            var nextStart = cities[i]
            let newCities = cities.filter(city => city !== start)
            let sumDist = dm[start][nextStart] + tsp(newCities, nextStart, dm, cache);
            minDist = Math.min(minDist, sumDist);   
        }

        cache[key][start] = minDist;
        return minDist;
    }
}

