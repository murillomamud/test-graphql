//import { request, gql, GraphQLClient } from 'graphql-request'
//import { queryRickAndMorthy } from "../src/index.js";
const queryRickAndMorthy = require('../src/index.js')
const { request, gql, GraphQLClient } = require('graphql-request')

jest.mock('graphql-request')



//TypeError: graphQLClient.request is not a function



// call rick and morty api mocked
test('call rick and morty api mocked', async () => {

    jest.mock('graphql-request', () => ({
        GraphQLClient: jest.fn().mockResolvedValue({
            request: jest.fn().mockResolvedValue({
                characters: {
                    results: [
                        {name: 'Morty'}
                    ]
                }
            })
        }),
        gql: jest.fn()
    }))

    const results = await queryRickAndMorthy()
    expect(results).toBe('ok')
}
)







