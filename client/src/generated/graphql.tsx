import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Brand = {
  __typename?: 'Brand';
  categoryId: Scalars['Float'];
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  logo: Scalars['String'];
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type Category = {
  __typename?: 'Category';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type ChangePasswordInput = {
  newPassword: Scalars['String'];
};

export type ChangeUserProfileInput = {
  avatar: Scalars['String'];
  districtId: Scalars['Float'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['Float'];
  last_name: Scalars['String'];
  phone_num: Scalars['String'];
  provinceId: Scalars['Float'];
  street: Scalars['String'];
  villageId: Scalars['Float'];
};

export type Color = {
  __typename?: 'Color';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type District = {
  __typename?: 'District';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  provinceId: Scalars['Float'];
  updated_at: Scalars['DateTime'];
};

export type EditPasswordInput = {
  id: Scalars['Float'];
  new_password: Scalars['String'];
  password: Scalars['String'];
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type ForgotPasswordInput = {
  email: Scalars['String'];
};

export type IMutationResponse = {
  code: Scalars['Float'];
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type LoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: UserMutationResponse;
  changeUserProfile: UserMutationResponse;
  editPassword: UserMutationResponse;
  forgotPassword: Scalars['Boolean'];
  login: UserMutationResponse;
  logout: Scalars['Boolean'];
  register: UserMutationResponse;
  singleUpload: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  changePasswordInput: ChangePasswordInput;
  token: Scalars['String'];
  userId: Scalars['Float'];
};


export type MutationChangeUserProfileArgs = {
  changeUserProfileInput: ChangeUserProfileInput;
};


export type MutationEditPasswordArgs = {
  editPasswordInput: EditPasswordInput;
};


export type MutationForgotPasswordArgs = {
  forgotPasswordInput: ForgotPasswordInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRegisterArgs = {
  registerInput: RegisterInput;
};


export type MutationSingleUploadArgs = {
  file: Scalars['Upload'];
};

export type Province = {
  __typename?: 'Province';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  brandAll: Array<Brand>;
  categoryAll: Array<Category>;
  colorAll: Array<Color>;
  districtAll: Array<District>;
  me?: Maybe<User>;
  provinceAll: Array<Province>;
  villageAll: Array<Village>;
};


export type QueryBrandAllArgs = {
  categoryId: Scalars['Float'];
};


export type QueryDistrictAllArgs = {
  provinceId: Scalars['Float'];
};


export type QueryVillageAllArgs = {
  districtId: Scalars['Float'];
};

export type RegisterInput = {
  email: Scalars['String'];
  first_name: Scalars['String'];
  gender: Scalars['String'];
  last_name: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  district?: Maybe<District>;
  districtId?: Maybe<Scalars['Float']>;
  email: Scalars['String'];
  first_name: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['ID'];
  last_name: Scalars['String'];
  phone_num?: Maybe<Scalars['String']>;
  province?: Maybe<Province>;
  provinceId?: Maybe<Scalars['Float']>;
  street?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  village?: Maybe<Village>;
  villageId?: Maybe<Scalars['Float']>;
};

export type UserMutationResponse = IMutationResponse & {
  __typename?: 'UserMutationResponse';
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type Village = {
  __typename?: 'Village';
  created_at: Scalars['DateTime'];
  districtId: Scalars['Float'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type FieldErrorFragment = { __typename?: 'FieldError', field: string, message: string };

export type UserMutationStatusesFragment = { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: string | null | undefined };

export type UserInfoFragment = { __typename?: 'User', id: string, last_name: string, first_name: string, username: string, email: string, gender: string, avatar?: string | null | undefined, phone_num?: string | null | undefined, street?: string | null | undefined, province?: { __typename?: 'Province', id: string, name: string } | null | undefined, district?: { __typename?: 'District', id: string, name: string } | null | undefined, village?: { __typename?: 'Village', id: string, name: string } | null | undefined };

export type UserMutationResponseFragment = { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: string | null | undefined, user?: { __typename?: 'User', id: string, last_name: string, first_name: string, username: string, email: string, gender: string, avatar?: string | null | undefined, phone_num?: string | null | undefined, street?: string | null | undefined, province?: { __typename?: 'Province', id: string, name: string } | null | undefined, district?: { __typename?: 'District', id: string, name: string } | null | undefined, village?: { __typename?: 'Village', id: string, name: string } | null | undefined } | null | undefined, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined };

export type ChangePasswordMutationVariables = Exact<{
  userId: Scalars['Float'];
  token: Scalars['String'];
  changePasswordInput: ChangePasswordInput;
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: string | null | undefined, user?: { __typename?: 'User', id: string, last_name: string, first_name: string, username: string, email: string, gender: string, avatar?: string | null | undefined, phone_num?: string | null | undefined, street?: string | null | undefined, province?: { __typename?: 'Province', id: string, name: string } | null | undefined, district?: { __typename?: 'District', id: string, name: string } | null | undefined, village?: { __typename?: 'Village', id: string, name: string } | null | undefined } | null | undefined, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined } };

export type ChangeUserProfileMutationVariables = Exact<{
  changeUserProfileInput: ChangeUserProfileInput;
}>;


export type ChangeUserProfileMutation = { __typename?: 'Mutation', changeUserProfile: { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: string | null | undefined, user?: { __typename?: 'User', id: string, last_name: string, first_name: string, username: string, email: string, gender: string, avatar?: string | null | undefined, phone_num?: string | null | undefined, street?: string | null | undefined, province?: { __typename?: 'Province', id: string, name: string } | null | undefined, district?: { __typename?: 'District', id: string, name: string } | null | undefined, village?: { __typename?: 'Village', id: string, name: string } | null | undefined } | null | undefined, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined } };

export type EditPasswordMutationVariables = Exact<{
  editPasswordInput: EditPasswordInput;
}>;


export type EditPasswordMutation = { __typename?: 'Mutation', editPassword: { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: string | null | undefined, user?: { __typename?: 'User', id: string, last_name: string, first_name: string, username: string, email: string, gender: string, avatar?: string | null | undefined, phone_num?: string | null | undefined, street?: string | null | undefined, province?: { __typename?: 'Province', id: string, name: string } | null | undefined, district?: { __typename?: 'District', id: string, name: string } | null | undefined, village?: { __typename?: 'Village', id: string, name: string } | null | undefined } | null | undefined, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined } };

export type ForgotPasswordMutationVariables = Exact<{
  forgotPasswordInput: ForgotPasswordInput;
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: boolean };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: string | null | undefined, user?: { __typename?: 'User', id: string, last_name: string, first_name: string, username: string, email: string, gender: string, avatar?: string | null | undefined, phone_num?: string | null | undefined, street?: string | null | undefined, province?: { __typename?: 'Province', id: string, name: string } | null | undefined, district?: { __typename?: 'District', id: string, name: string } | null | undefined, village?: { __typename?: 'Village', id: string, name: string } | null | undefined } | null | undefined, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  registerInput: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: string | null | undefined, user?: { __typename?: 'User', id: string, last_name: string, first_name: string, username: string, email: string, gender: string, avatar?: string | null | undefined, phone_num?: string | null | undefined, street?: string | null | undefined, province?: { __typename?: 'Province', id: string, name: string } | null | undefined, district?: { __typename?: 'District', id: string, name: string } | null | undefined, village?: { __typename?: 'Village', id: string, name: string } | null | undefined } | null | undefined, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined } };

export type SingleUploadMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;


export type SingleUploadMutation = { __typename?: 'Mutation', singleUpload: string };

export type BrandAllQueryVariables = Exact<{
  categoryId: Scalars['Float'];
}>;


export type BrandAllQuery = { __typename?: 'Query', brandAll: Array<{ __typename?: 'Brand', id: string, name: string, logo: string }> };

export type CategoryAllQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoryAllQuery = { __typename?: 'Query', categoryAll: Array<{ __typename?: 'Category', id: string, name: string }> };

export type ColorAllQueryVariables = Exact<{ [key: string]: never; }>;


export type ColorAllQuery = { __typename?: 'Query', colorAll: Array<{ __typename?: 'Color', id: string, name: string }> };

export type DistrictAllQueryVariables = Exact<{
  provinceId: Scalars['Float'];
}>;


export type DistrictAllQuery = { __typename?: 'Query', districtAll: Array<{ __typename?: 'District', id: string, name: string }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, last_name: string, first_name: string, username: string, email: string, gender: string, avatar?: string | null | undefined, phone_num?: string | null | undefined, street?: string | null | undefined, province?: { __typename?: 'Province', id: string, name: string } | null | undefined, district?: { __typename?: 'District', id: string, name: string } | null | undefined, village?: { __typename?: 'Village', id: string, name: string } | null | undefined } | null | undefined };

export type ProvinceAllQueryVariables = Exact<{ [key: string]: never; }>;


export type ProvinceAllQuery = { __typename?: 'Query', provinceAll: Array<{ __typename?: 'Province', id: string, name: string }> };

export type VillageAllQueryVariables = Exact<{
  districtId: Scalars['Float'];
}>;


export type VillageAllQuery = { __typename?: 'Query', villageAll: Array<{ __typename?: 'Village', id: string, name: string }> };

export const UserMutationStatusesFragmentDoc = gql`
    fragment userMutationStatuses on UserMutationResponse {
  code
  success
  message
}
    `;
export const UserInfoFragmentDoc = gql`
    fragment userInfo on User {
  id
  last_name
  first_name
  username
  email
  gender
  avatar
  phone_num
  street
  province {
    id
    name
  }
  district {
    id
    name
  }
  village {
    id
    name
  }
}
    `;
export const FieldErrorFragmentDoc = gql`
    fragment fieldError on FieldError {
  field
  message
}
    `;
export const UserMutationResponseFragmentDoc = gql`
    fragment userMutationResponse on UserMutationResponse {
  ...userMutationStatuses
  user {
    ...userInfo
  }
  errors {
    ...fieldError
  }
}
    ${UserMutationStatusesFragmentDoc}
${UserInfoFragmentDoc}
${FieldErrorFragmentDoc}`;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($userId: Float!, $token: String!, $changePasswordInput: ChangePasswordInput!) {
  changePassword(
    userId: $userId
    token: $token
    changePasswordInput: $changePasswordInput
  ) {
    ...userMutationResponse
  }
}
    ${UserMutationResponseFragmentDoc}`;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      token: // value for 'token'
 *      changePasswordInput: // value for 'changePasswordInput'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const ChangeUserProfileDocument = gql`
    mutation ChangeUserProfile($changeUserProfileInput: ChangeUserProfileInput!) {
  changeUserProfile(changeUserProfileInput: $changeUserProfileInput) {
    ...userMutationResponse
  }
}
    ${UserMutationResponseFragmentDoc}`;
export type ChangeUserProfileMutationFn = Apollo.MutationFunction<ChangeUserProfileMutation, ChangeUserProfileMutationVariables>;

/**
 * __useChangeUserProfileMutation__
 *
 * To run a mutation, you first call `useChangeUserProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeUserProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeUserProfileMutation, { data, loading, error }] = useChangeUserProfileMutation({
 *   variables: {
 *      changeUserProfileInput: // value for 'changeUserProfileInput'
 *   },
 * });
 */
export function useChangeUserProfileMutation(baseOptions?: Apollo.MutationHookOptions<ChangeUserProfileMutation, ChangeUserProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeUserProfileMutation, ChangeUserProfileMutationVariables>(ChangeUserProfileDocument, options);
      }
export type ChangeUserProfileMutationHookResult = ReturnType<typeof useChangeUserProfileMutation>;
export type ChangeUserProfileMutationResult = Apollo.MutationResult<ChangeUserProfileMutation>;
export type ChangeUserProfileMutationOptions = Apollo.BaseMutationOptions<ChangeUserProfileMutation, ChangeUserProfileMutationVariables>;
export const EditPasswordDocument = gql`
    mutation EditPassword($editPasswordInput: EditPasswordInput!) {
  editPassword(editPasswordInput: $editPasswordInput) {
    ...userMutationResponse
  }
}
    ${UserMutationResponseFragmentDoc}`;
export type EditPasswordMutationFn = Apollo.MutationFunction<EditPasswordMutation, EditPasswordMutationVariables>;

/**
 * __useEditPasswordMutation__
 *
 * To run a mutation, you first call `useEditPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editPasswordMutation, { data, loading, error }] = useEditPasswordMutation({
 *   variables: {
 *      editPasswordInput: // value for 'editPasswordInput'
 *   },
 * });
 */
export function useEditPasswordMutation(baseOptions?: Apollo.MutationHookOptions<EditPasswordMutation, EditPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditPasswordMutation, EditPasswordMutationVariables>(EditPasswordDocument, options);
      }
export type EditPasswordMutationHookResult = ReturnType<typeof useEditPasswordMutation>;
export type EditPasswordMutationResult = Apollo.MutationResult<EditPasswordMutation>;
export type EditPasswordMutationOptions = Apollo.BaseMutationOptions<EditPasswordMutation, EditPasswordMutationVariables>;
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($forgotPasswordInput: ForgotPasswordInput!) {
  forgotPassword(forgotPasswordInput: $forgotPasswordInput)
}
    `;
export type ForgotPasswordMutationFn = Apollo.MutationFunction<ForgotPasswordMutation, ForgotPasswordMutationVariables>;

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      forgotPasswordInput: // value for 'forgotPasswordInput'
 *   },
 * });
 */
export function useForgotPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, options);
      }
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>;
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>;
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = gql`
    mutation Login($loginInput: LoginInput!) {
  login(loginInput: $loginInput) {
    ...userMutationResponse
  }
}
    ${UserMutationResponseFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginInput: // value for 'loginInput'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($registerInput: RegisterInput!) {
  register(registerInput: $registerInput) {
    ...userMutationResponse
  }
}
    ${UserMutationResponseFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      registerInput: // value for 'registerInput'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const SingleUploadDocument = gql`
    mutation SingleUpload($file: Upload!) {
  singleUpload(file: $file)
}
    `;
export type SingleUploadMutationFn = Apollo.MutationFunction<SingleUploadMutation, SingleUploadMutationVariables>;

/**
 * __useSingleUploadMutation__
 *
 * To run a mutation, you first call `useSingleUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSingleUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [singleUploadMutation, { data, loading, error }] = useSingleUploadMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useSingleUploadMutation(baseOptions?: Apollo.MutationHookOptions<SingleUploadMutation, SingleUploadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SingleUploadMutation, SingleUploadMutationVariables>(SingleUploadDocument, options);
      }
export type SingleUploadMutationHookResult = ReturnType<typeof useSingleUploadMutation>;
export type SingleUploadMutationResult = Apollo.MutationResult<SingleUploadMutation>;
export type SingleUploadMutationOptions = Apollo.BaseMutationOptions<SingleUploadMutation, SingleUploadMutationVariables>;
export const BrandAllDocument = gql`
    query BrandAll($categoryId: Float!) {
  brandAll(categoryId: $categoryId) {
    id
    name
    logo
  }
}
    `;

/**
 * __useBrandAllQuery__
 *
 * To run a query within a React component, call `useBrandAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useBrandAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBrandAllQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useBrandAllQuery(baseOptions: Apollo.QueryHookOptions<BrandAllQuery, BrandAllQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BrandAllQuery, BrandAllQueryVariables>(BrandAllDocument, options);
      }
export function useBrandAllLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BrandAllQuery, BrandAllQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BrandAllQuery, BrandAllQueryVariables>(BrandAllDocument, options);
        }
export type BrandAllQueryHookResult = ReturnType<typeof useBrandAllQuery>;
export type BrandAllLazyQueryHookResult = ReturnType<typeof useBrandAllLazyQuery>;
export type BrandAllQueryResult = Apollo.QueryResult<BrandAllQuery, BrandAllQueryVariables>;
export const CategoryAllDocument = gql`
    query CategoryAll {
  categoryAll {
    id
    name
  }
}
    `;

/**
 * __useCategoryAllQuery__
 *
 * To run a query within a React component, call `useCategoryAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryAllQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoryAllQuery(baseOptions?: Apollo.QueryHookOptions<CategoryAllQuery, CategoryAllQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryAllQuery, CategoryAllQueryVariables>(CategoryAllDocument, options);
      }
export function useCategoryAllLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryAllQuery, CategoryAllQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryAllQuery, CategoryAllQueryVariables>(CategoryAllDocument, options);
        }
export type CategoryAllQueryHookResult = ReturnType<typeof useCategoryAllQuery>;
export type CategoryAllLazyQueryHookResult = ReturnType<typeof useCategoryAllLazyQuery>;
export type CategoryAllQueryResult = Apollo.QueryResult<CategoryAllQuery, CategoryAllQueryVariables>;
export const ColorAllDocument = gql`
    query ColorAll {
  colorAll {
    id
    name
  }
}
    `;

/**
 * __useColorAllQuery__
 *
 * To run a query within a React component, call `useColorAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useColorAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useColorAllQuery({
 *   variables: {
 *   },
 * });
 */
export function useColorAllQuery(baseOptions?: Apollo.QueryHookOptions<ColorAllQuery, ColorAllQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ColorAllQuery, ColorAllQueryVariables>(ColorAllDocument, options);
      }
export function useColorAllLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ColorAllQuery, ColorAllQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ColorAllQuery, ColorAllQueryVariables>(ColorAllDocument, options);
        }
export type ColorAllQueryHookResult = ReturnType<typeof useColorAllQuery>;
export type ColorAllLazyQueryHookResult = ReturnType<typeof useColorAllLazyQuery>;
export type ColorAllQueryResult = Apollo.QueryResult<ColorAllQuery, ColorAllQueryVariables>;
export const DistrictAllDocument = gql`
    query DistrictAll($provinceId: Float!) {
  districtAll(provinceId: $provinceId) {
    id
    name
  }
}
    `;

/**
 * __useDistrictAllQuery__
 *
 * To run a query within a React component, call `useDistrictAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useDistrictAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDistrictAllQuery({
 *   variables: {
 *      provinceId: // value for 'provinceId'
 *   },
 * });
 */
export function useDistrictAllQuery(baseOptions: Apollo.QueryHookOptions<DistrictAllQuery, DistrictAllQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DistrictAllQuery, DistrictAllQueryVariables>(DistrictAllDocument, options);
      }
export function useDistrictAllLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DistrictAllQuery, DistrictAllQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DistrictAllQuery, DistrictAllQueryVariables>(DistrictAllDocument, options);
        }
export type DistrictAllQueryHookResult = ReturnType<typeof useDistrictAllQuery>;
export type DistrictAllLazyQueryHookResult = ReturnType<typeof useDistrictAllLazyQuery>;
export type DistrictAllQueryResult = Apollo.QueryResult<DistrictAllQuery, DistrictAllQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...userInfo
  }
}
    ${UserInfoFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const ProvinceAllDocument = gql`
    query ProvinceAll {
  provinceAll {
    id
    name
  }
}
    `;

/**
 * __useProvinceAllQuery__
 *
 * To run a query within a React component, call `useProvinceAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useProvinceAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProvinceAllQuery({
 *   variables: {
 *   },
 * });
 */
export function useProvinceAllQuery(baseOptions?: Apollo.QueryHookOptions<ProvinceAllQuery, ProvinceAllQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProvinceAllQuery, ProvinceAllQueryVariables>(ProvinceAllDocument, options);
      }
export function useProvinceAllLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProvinceAllQuery, ProvinceAllQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProvinceAllQuery, ProvinceAllQueryVariables>(ProvinceAllDocument, options);
        }
export type ProvinceAllQueryHookResult = ReturnType<typeof useProvinceAllQuery>;
export type ProvinceAllLazyQueryHookResult = ReturnType<typeof useProvinceAllLazyQuery>;
export type ProvinceAllQueryResult = Apollo.QueryResult<ProvinceAllQuery, ProvinceAllQueryVariables>;
export const VillageAllDocument = gql`
    query VillageAll($districtId: Float!) {
  villageAll(districtId: $districtId) {
    id
    name
  }
}
    `;

/**
 * __useVillageAllQuery__
 *
 * To run a query within a React component, call `useVillageAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useVillageAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVillageAllQuery({
 *   variables: {
 *      districtId: // value for 'districtId'
 *   },
 * });
 */
export function useVillageAllQuery(baseOptions: Apollo.QueryHookOptions<VillageAllQuery, VillageAllQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VillageAllQuery, VillageAllQueryVariables>(VillageAllDocument, options);
      }
export function useVillageAllLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VillageAllQuery, VillageAllQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VillageAllQuery, VillageAllQueryVariables>(VillageAllDocument, options);
        }
export type VillageAllQueryHookResult = ReturnType<typeof useVillageAllQuery>;
export type VillageAllLazyQueryHookResult = ReturnType<typeof useVillageAllLazyQuery>;
export type VillageAllQueryResult = Apollo.QueryResult<VillageAllQuery, VillageAllQueryVariables>;