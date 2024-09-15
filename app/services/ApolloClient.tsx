import { ApolloClient, InMemoryCache } from "@apollo/client";
import {
  type DocumentNode,
  gql,
  type OperationVariables,
  type TypedDocumentNode,
} from "@apollo/client/core";

export const client = new ApolloClient({
  uri: process.env.GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

const graphqlFetcher = async (
  query: DocumentNode | TypedDocumentNode<any, {}>,
  variables?: OperationVariables
) => {
  try {
    const { data, error, errors } = await client.query({
      query: query,
      variables: variables,
    });

    if (error || errors) {
      throw new Error(error?.message || "Unable to fetch graphql query");
    }

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default graphqlFetcher;
