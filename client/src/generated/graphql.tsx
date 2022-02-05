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

export type AddUserRoleInput = {
  roleId: Scalars['Float'];
  userId: Scalars['Float'];
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
  addUserRole: User_Role;
  changePassword: UserMutationResponse;
  changeUserProfile: UserMutationResponse;
  editPassword: UserMutationResponse;
  forgotPassword: Scalars['Boolean'];
  login: UserMutationResponse;
  logout: Scalars['Boolean'];
  register: UserMutationResponse;
  singleUpload: Scalars['String'];
};


export type MutationAddUserRoleArgs = {
  addUserRoleInput: AddUserRoleInput;
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
  district: District;
  districtAll: Array<District>;
  hello: Scalars['String'];
  me?: Maybe<User>;
  province: Province;
  provinceAll: Array<Province>;
  roleById: Role;
  roleByName: Role;
  userRole: User_Role;
  village: Village;
  villageAll: Array<Village>;
};


export type QueryDistrictArgs = {
  districtId: Scalars['Float'];
};


export type QueryDistrictAllArgs = {
  provinceId: Scalars['Float'];
};


export type QueryProvinceArgs = {
  provinceId: Scalars['Float'];
};


export type QueryRoleByIdArgs = {
  id: Scalars['Float'];
};


export type QueryRoleByNameArgs = {
  name: Scalars['String'];
};


export type QueryUserRoleArgs = {
  userId: Scalars['Float'];
};


export type QueryVillageArgs = {
  villageId: Scalars['Float'];
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

export type Role = {
  __typename?: 'Role';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  districtId?: Maybe<Scalars['Float']>;
  email: Scalars['String'];
  first_name: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['ID'];
  last_name: Scalars['String'];
  phone_num?: Maybe<Scalars['String']>;
  provinceId?: Maybe<Scalars['Float']>;
  street?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
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

export type User_Role = {
  __typename?: 'User_Role';
  created_at: Scalars['DateTime'];
  roleId: Scalars['Float'];
  updated_at: Scalars['DateTime'];
  userId: Scalars['Float'];
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

export type UserInfoFragment = { __typename?: 'User', id: string, last_name: string, first_name: string, username: string, email: string, gender: string, avatar?: string | null | undefined, phone_num?: string | null | undefined, provinceId?: number | null | undefined, districtId?: number | null | undefined, villageId?: number | null | undefined, street?: string | null | undefined };

export type UserMutationResponseFragment = { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: string | null | undefined, user?: { __typename?: 'User', id: string, last_name: string, first_name: string, username: string, email: string, gender: string, avatar?: string | null | undefined, phone_num?: string | null | undefined, provinceId?: number | null | undefined, districtId?: number | null | undefined, villageId?: number | null | undefined, street?: string | null | undefined } | null | undefined, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined };

export type AddUserRoleMutationVariables = Exact<{
  addUserRoleInput: AddUserRoleInput;
}>;


export type AddUserRoleMutation = { __typename?: 'Mutation', addUserRole: { __typename?: 'User_Role', userId: number, roleId: number } };

export type ChangePasswordMutationVariables = Exact<{
  userId: Scalars['Float'];
  token: Scalars['String'];
  changePasswordInput: ChangePasswordInput;
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: string | null | undefined, user?: { __typename?: 'User', id: string, last_name: string, first_name: string, username: string, email: string, gender: string, avatar?: string | null | undefined, phone_num?: string | null | undefined, provinceId?: number | null | undefined, districtId?: number | null | undefined, villageId?: number | null | undefined, street?: string | null | undefined } | null | undefined, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined } };

export type ChangeUserProfileMutationVariables = Exact<{
  changeUserProfileInput: ChangeUserProfileInput;
}>;


export type ChangeUserProfileMutation = { __typename?: 'Mutation', changeUserProfile: { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: string | null | undefined, user?: { __typename?: 'User', id: string, last_name: string, first_name: string, username: string, email: string, gender: string, avatar?: string | null | undefined, phone_num?: string | null | undefined, provinceId?: number | null | undefined, districtId?: number | null | undefined, villageId?: number | null | undefined, street?: string | null | undefined } | null | undefined, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined } };

export type EditPasswordMutationVariables = Exact<{
  editPasswordInput: EditPasswordInput;
}>;


export type EditPasswordMutation = { __typename?: 'Mutation', editPassword: { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: string | null | undefined, user?: { __typename?: 'User', id: string, last_name: string, first_name: string, username: string, email: string, gender: string, avatar?: string | null | undefined, phone_num?: string | null | undefined, provinceId?: number | null | undefined, districtId?: number | null | undefined, villageId?: number | null | undefined, street?: string | null | undefined } | null | undefined, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined } };

export type ForgotPasswordMutationVariables = Exact<{
  forgotPasswordInput: ForgotPasswordInput;
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: boolean };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: string | null | undefined, user?: { __typename?: 'User', id: string, last_name: string, first_name: string, username: string, email: string, gender: string, avatar?: string | null | undefined, phone_num?: string | null | undefined, provinceId?: number | null | undefined, districtId?: number | null | undefined, villageId?: number | null | undefined, street?: string | null | undefined } | null | undefined, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  registerInput: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: string | null | undefined, user?: { __typename?: 'User', id: string, last_name: string, first_name: string, username: string, email: string, gender: string, avatar?: string | null | undefined, phone_num?: string | null | undefined, provinceId?: number | null | undefined, districtId?: number | null | undefined, villageId?: number | null | undefined, street?: string | null | undefined } | null | undefined, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined } };

export type SingleUploadMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;


export type SingleUploadMutation = { __typename?: 'Mutation', singleUpload: string };

export type DistrictQueryVariables = Exact<{
  districtId: Scalars['Float'];
}>;


export type DistrictQuery = { __typename?: 'Query', district: { __typename?: 'District', id: string, name: string } };

export type DistrictAllQueryVariables = Exact<{
  provinceId: Scalars['Float'];
}>;


export type DistrictAllQuery = { __typename?: 'Query', districtAll: Array<{ __typename?: 'District', id: string, name: string }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, last_name: string, first_name: string, username: string, email: string, gender: string, avatar?: string | null | undefined, phone_num?: string | null | undefined, provinceId?: number | null | undefined, districtId?: number | null | undefined, villageId?: number | null | undefined, street?: string | null | undefined } | null | undefined };

export type ProvinceQueryVariables = Exact<{
  provinceId: Scalars['Float'];
}>;


export type ProvinceQuery = { __typename?: 'Query', province: { __typename?: 'Province', id: string, name: string } };

export type ProvinceAllQueryVariables = Exact<{ [key: string]: never; }>;


export type ProvinceAllQuery = { __typename?: 'Query', provinceAll: Array<{ __typename?: 'Province', id: string, name: string }> };

export type RoleByIdQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type RoleByIdQuery = { __typename?: 'Query', roleById: { __typename?: 'Role', id: string, name: string } };

export type RoleByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type RoleByNameQuery = { __typename?: 'Query', roleByName: { __typename?: 'Role', id: string, name: string } };

export type UserRoleQueryVariables = Exact<{
  userId: Scalars['Float'];
}>;


export type UserRoleQuery = { __typename?: 'Query', userRole: { __typename?: 'User_Role', userId: number, roleId: number } };

export type VillageQueryVariables = Exact<{
  villageId: Scalars['Float'];
}>;


export type VillageQuery = { __typename?: 'Query', village: { __typename?: 'Village', id: string, name: string } };

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
  provinceId
  districtId
  villageId
  street
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
export const AddUserRoleDocument = gql`
    mutation AddUserRole($addUserRoleInput: AddUserRoleInput!) {
  addUserRole(addUserRoleInput: $addUserRoleInput) {
    userId
    roleId
  }
}
    `;
export type AddUserRoleMutationFn = Apollo.MutationFunction<AddUserRoleMutation, AddUserRoleMutationVariables>;

/**
 * __useAddUserRoleMutation__
 *
 * To run a mutation, you first call `useAddUserRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserRoleMutation, { data, loading, error }] = useAddUserRoleMutation({
 *   variables: {
 *      addUserRoleInput: // value for 'addUserRoleInput'
 *   },
 * });
 */
export function useAddUserRoleMutation(baseOptions?: Apollo.MutationHookOptions<AddUserRoleMutation, AddUserRoleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUserRoleMutation, AddUserRoleMutationVariables>(AddUserRoleDocument, options);
      }
export type AddUserRoleMutationHookResult = ReturnType<typeof useAddUserRoleMutation>;
export type AddUserRoleMutationResult = Apollo.MutationResult<AddUserRoleMutation>;
export type AddUserRoleMutationOptions = Apollo.BaseMutationOptions<AddUserRoleMutation, AddUserRoleMutationVariables>;
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
export const DistrictDocument = gql`
    query District($districtId: Float!) {
  district(districtId: $districtId) {
    id
    name
  }
}
    `;

/**
 * __useDistrictQuery__
 *
 * To run a query within a React component, call `useDistrictQuery` and pass it any options that fit your needs.
 * When your component renders, `useDistrictQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDistrictQuery({
 *   variables: {
 *      districtId: // value for 'districtId'
 *   },
 * });
 */
export function useDistrictQuery(baseOptions: Apollo.QueryHookOptions<DistrictQuery, DistrictQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DistrictQuery, DistrictQueryVariables>(DistrictDocument, options);
      }
export function useDistrictLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DistrictQuery, DistrictQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DistrictQuery, DistrictQueryVariables>(DistrictDocument, options);
        }
export type DistrictQueryHookResult = ReturnType<typeof useDistrictQuery>;
export type DistrictLazyQueryHookResult = ReturnType<typeof useDistrictLazyQuery>;
export type DistrictQueryResult = Apollo.QueryResult<DistrictQuery, DistrictQueryVariables>;
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
export const ProvinceDocument = gql`
    query Province($provinceId: Float!) {
  province(provinceId: $provinceId) {
    id
    name
  }
}
    `;

/**
 * __useProvinceQuery__
 *
 * To run a query within a React component, call `useProvinceQuery` and pass it any options that fit your needs.
 * When your component renders, `useProvinceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProvinceQuery({
 *   variables: {
 *      provinceId: // value for 'provinceId'
 *   },
 * });
 */
export function useProvinceQuery(baseOptions: Apollo.QueryHookOptions<ProvinceQuery, ProvinceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProvinceQuery, ProvinceQueryVariables>(ProvinceDocument, options);
      }
export function useProvinceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProvinceQuery, ProvinceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProvinceQuery, ProvinceQueryVariables>(ProvinceDocument, options);
        }
export type ProvinceQueryHookResult = ReturnType<typeof useProvinceQuery>;
export type ProvinceLazyQueryHookResult = ReturnType<typeof useProvinceLazyQuery>;
export type ProvinceQueryResult = Apollo.QueryResult<ProvinceQuery, ProvinceQueryVariables>;
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
export const RoleByIdDocument = gql`
    query RoleById($id: Float!) {
  roleById(id: $id) {
    id
    name
  }
}
    `;

/**
 * __useRoleByIdQuery__
 *
 * To run a query within a React component, call `useRoleByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoleByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoleByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRoleByIdQuery(baseOptions: Apollo.QueryHookOptions<RoleByIdQuery, RoleByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RoleByIdQuery, RoleByIdQueryVariables>(RoleByIdDocument, options);
      }
export function useRoleByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RoleByIdQuery, RoleByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RoleByIdQuery, RoleByIdQueryVariables>(RoleByIdDocument, options);
        }
export type RoleByIdQueryHookResult = ReturnType<typeof useRoleByIdQuery>;
export type RoleByIdLazyQueryHookResult = ReturnType<typeof useRoleByIdLazyQuery>;
export type RoleByIdQueryResult = Apollo.QueryResult<RoleByIdQuery, RoleByIdQueryVariables>;
export const RoleByNameDocument = gql`
    query RoleByName($name: String!) {
  roleByName(name: $name) {
    id
    name
  }
}
    `;

/**
 * __useRoleByNameQuery__
 *
 * To run a query within a React component, call `useRoleByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoleByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoleByNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useRoleByNameQuery(baseOptions: Apollo.QueryHookOptions<RoleByNameQuery, RoleByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RoleByNameQuery, RoleByNameQueryVariables>(RoleByNameDocument, options);
      }
export function useRoleByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RoleByNameQuery, RoleByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RoleByNameQuery, RoleByNameQueryVariables>(RoleByNameDocument, options);
        }
export type RoleByNameQueryHookResult = ReturnType<typeof useRoleByNameQuery>;
export type RoleByNameLazyQueryHookResult = ReturnType<typeof useRoleByNameLazyQuery>;
export type RoleByNameQueryResult = Apollo.QueryResult<RoleByNameQuery, RoleByNameQueryVariables>;
export const UserRoleDocument = gql`
    query UserRole($userId: Float!) {
  userRole(userId: $userId) {
    userId
    roleId
  }
}
    `;

/**
 * __useUserRoleQuery__
 *
 * To run a query within a React component, call `useUserRoleQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserRoleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserRoleQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserRoleQuery(baseOptions: Apollo.QueryHookOptions<UserRoleQuery, UserRoleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserRoleQuery, UserRoleQueryVariables>(UserRoleDocument, options);
      }
export function useUserRoleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserRoleQuery, UserRoleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserRoleQuery, UserRoleQueryVariables>(UserRoleDocument, options);
        }
export type UserRoleQueryHookResult = ReturnType<typeof useUserRoleQuery>;
export type UserRoleLazyQueryHookResult = ReturnType<typeof useUserRoleLazyQuery>;
export type UserRoleQueryResult = Apollo.QueryResult<UserRoleQuery, UserRoleQueryVariables>;
export const VillageDocument = gql`
    query Village($villageId: Float!) {
  village(villageId: $villageId) {
    id
    name
  }
}
    `;

/**
 * __useVillageQuery__
 *
 * To run a query within a React component, call `useVillageQuery` and pass it any options that fit your needs.
 * When your component renders, `useVillageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVillageQuery({
 *   variables: {
 *      villageId: // value for 'villageId'
 *   },
 * });
 */
export function useVillageQuery(baseOptions: Apollo.QueryHookOptions<VillageQuery, VillageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VillageQuery, VillageQueryVariables>(VillageDocument, options);
      }
export function useVillageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VillageQuery, VillageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VillageQuery, VillageQueryVariables>(VillageDocument, options);
        }
export type VillageQueryHookResult = ReturnType<typeof useVillageQuery>;
export type VillageLazyQueryHookResult = ReturnType<typeof useVillageLazyQuery>;
export type VillageQueryResult = Apollo.QueryResult<VillageQuery, VillageQueryVariables>;
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