import fetch from "node-fetch";

// Doing some action after 3 or more Promises task

const URL = 'https://rickandmortyapi.com/api';


const rickInfo = fetch(`${URL}/character/?name=sanchez&status=alive&species=human`).then((response) => response.json());
const rickOrigin = fetch(`${URL}/location/?name=137`).then((response) => response.json());
const rickEpisodes = fetch(`${URL}/episode`).then((response) => response.json());



// Promise waits for the responses from all these three fetch functions.
// After that we map through responses array we got and take results from info object.
// For the first response we got, which is the character info, we print out his name and origin.
// For the second response we print out from which dimension this location is.
// For the third response we print out some of the episodes names this character is in.


Promise.all([rickInfo, rickOrigin, rickEpisodes]).then((data) => data.map((i) => {
    const result = i.results[0];

    data.indexOf(i) === 0 && console.log(`\nThe main character of the show is ${result.name}, who is from ${result.origin.name}.`);
    data.indexOf(i) === 1 && console.log(`The planet ${result.name} is from dimension ${result.dimension}, which was created at ${new Date(result.created)}.`);
    data.indexOf(i) === 2 && console.log(`The list of some episodes he is in includes: ${i.results.map((episode) => {
                                if(episode.characters.includes('https://rickandmortyapi.com/api/character/1')) {
                                    return '\n' + episode.name;
                                }
                            })}`);
}))


// Doing the same but with Async/Await

async function getRickData() {
    const rickInfo = fetch(`${URL}/character/?name=sanchez&status=alive&species=human`).then((response) => response.json());
    const rickOrigin = fetch(`${URL}/location/?name=137`).then((response) => response.json());
    const rickEpisodes = fetch(`${URL}/episode`).then((response) => response.json());

    return await Promise.all([rickInfo, rickOrigin, rickEpisodes]);
}

getRickData().then((data) => data.map((i) => {
    const result = i.results[0];

    data.indexOf(i) === 0 && console.log(`\nThe main character of the show is ${result.name}, who is from ${result.origin.name}.`);
    data.indexOf(i) === 1 && console.log(`The planet ${result.name} is from dimension ${result.dimension}, which was created at ${new Date(result.created)}.`);
    data.indexOf(i) === 2 && console.log(`The list of some episodes he is in includes: ${i.results.map((episode) => {
                                if(episode.characters.includes('https://rickandmortyapi.com/api/character/1')) {
                                    return '\n' + episode.name;
                                }
                            })}`);
}));