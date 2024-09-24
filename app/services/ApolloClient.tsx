import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
} from "@apollo/client";
import {
  type DocumentNode,
  type OperationVariables,
  type TypedDocumentNode,
} from "@apollo/client/core";

function createApolloClient(): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.GRAPHQL_ENDPOINT,
      fetchOptions: {
        next: { revalidate: 5 },
      },
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "network-only",
      },
      query: {
        fetchPolicy: "network-only",
      },
    },
  });
}

export const client = createApolloClient();

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
