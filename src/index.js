//import { request, gql, GraphQLClient } from 'graphql-request'
const { request, gql, GraphQLClient } = require('graphql-request')


const queryRickAndMorthy = async function () {
    const graphQLClient = new GraphQLClient('https://rickandmortyapi.com/graphql', {
        // headers: {
        //     authorization: 'Apikey ' + process.env.STEPZEN_API_KEY,
        // },
        });
        const query = gql`
        query Query {
            characters(page: 2, filter: {name: "Morty"}) {
              info {
                count
              }
              results {
                name
              }
            }
            location(id: 1) {
              id
            }
            episodesByIds(ids: [1, 2]) {
              id
            }
          }
        `;
        const results = await graphQLClient.request(query);
        return('ok')
}



module.exports = queryRickAndMorthy;

//console.log(await queryRickAndMorthy())