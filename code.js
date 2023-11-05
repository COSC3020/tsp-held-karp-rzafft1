function swap (x, a, b)
{
    let tmp = x[a]
    x[a] = x[b]
    x[b] = tmp
}

function getPermutations (arr, index, permutations)
{
    if (index == arr.length)
    {
        permutations.push([...arr])
    }
    else 
    {
        for (var i = index; i < arr.length; i++)
        {
            swap(arr, index, i)
            getPermutations(arr, index+1, permutations)
            swap(arr, index, i)
        } 
    }
    return permutations
}

function tsp_hk(dm)
{
    cities = []
    for (city in dm)
    {
        cities.push(parseInt(city))
    }
    let perms = []
    let permutations = getPermutations(cities,0,perms)
    let distance = Infinity
    for (let i = 0; i < permutations.length; i++)
    {
        let cities = permutations[i]
        let sumdist = 0
        for (let i = 0; i < cities.length; i++)
        {
            let city = cities[i]
            let nextcity = cities[i+1]
            if (nextcity != undefined) 
            {
                sumdist += dm[city][nextcity]
            }
        }
        distance = Math.min(distance,sumdist)
    }
    return distance
}

let dist = [[0,3,4,2,7],
[3,0,4,6,3],
[4,4,0,5,8],
[2,6,5,0,6],
[7,3,8,6,0]];

shortestdistance = tsp_hk(dist)
console.log("shortest path has distance : " + shortestdistance)

