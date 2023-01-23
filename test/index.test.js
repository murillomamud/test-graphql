//import { request, gql, GraphQLClient } from 'graphql-request'
//import { queryRickAndMorthy } from "../src/index.js";
const queryRickAndMorthy = require('../src/index.js')
const { request, gql, GraphQLClient } = require('graphql-request')

jest.mock('graphql-request')


// call rick and morty api mocked
test('call rick and morty api mocked', async () => {

    GraphQLClient.mockImplementation(() => ({
        request: jest.fn().mockResolvedValue({
            characters: {
                results: [
                    {name: 'Morty Test'}
                ]
            }
        })
    }))    

    const result = await queryRickAndMorthy()
    expect(result).toBe('ok')
    expect(GraphQLClient).toHaveBeenCalledTimes(1)
}
)







