import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Example = {
  __typename?: 'Example';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createExample: Example;
};


export type MutationCreateExampleArgs = {
  data: NewExampleInput;
};

export type NewExampleInput = {
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  examples: Array<Example>;
};

export type CreateExampleMutationVariables = Exact<{
  data: NewExampleInput;
}>;


export type CreateExampleMutation = { __typename?: 'Mutation', createExample: { __typename?: 'Example', id: number } };

export type ExamplesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ExamplesQueryQuery = { __typename?: 'Query', examples: Array<{ __typename?: 'Example', id: number, name: string }> };


export const CreateExampleDocument = gql`
    mutation CreateExample($data: NewExampleInput!) {
  createExample(data: $data) {
    id
  }
}
    `;
export type CreateExampleMutationFn = Apollo.MutationFunction<CreateExampleMutation, CreateExampleMutationVariables>;

/**
 * __useCreateExampleMutation__
 *
 * To run a mutation, you first call `useCreateExampleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateExampleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createExampleMutation, { data, loading, error }] = useCreateExampleMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateExampleMutation(baseOptions?: Apollo.MutationHookOptions<CreateExampleMutation, CreateExampleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateExampleMutation, CreateExampleMutationVariables>(CreateExampleDocument, options);
      }
export type CreateExampleMutationHookResult = ReturnType<typeof useCreateExampleMutation>;
export type CreateExampleMutationResult = Apollo.MutationResult<CreateExampleMutation>;
export type CreateExampleMutationOptions = Apollo.BaseMutationOptions<CreateExampleMutation, CreateExampleMutationVariables>;
export const ExamplesQueryDocument = gql`
    query ExamplesQuery {
  examples {
    id
    name
  }
}
    `;

/**
 * __useExamplesQueryQuery__
 *
 * To run a query within a React component, call `useExamplesQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useExamplesQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExamplesQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useExamplesQueryQuery(baseOptions?: Apollo.QueryHookOptions<ExamplesQueryQuery, ExamplesQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExamplesQueryQuery, ExamplesQueryQueryVariables>(ExamplesQueryDocument, options);
      }
export function useExamplesQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExamplesQueryQuery, ExamplesQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExamplesQueryQuery, ExamplesQueryQueryVariables>(ExamplesQueryDocument, options);
        }
export type ExamplesQueryQueryHookResult = ReturnType<typeof useExamplesQueryQuery>;
export type ExamplesQueryLazyQueryHookResult = ReturnType<typeof useExamplesQueryLazyQuery>;
export type ExamplesQueryQueryResult = Apollo.QueryResult<ExamplesQueryQuery, ExamplesQueryQueryVariables>;