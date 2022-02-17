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

export type AddProductColorsInput = {
  colorIds: Array<Scalars['Float']>;
  productId: Scalars['Float'];
};

export type AddProductImagesInput = {
  colorLinks: Array<ColorLinks>;
  productId: Scalars['Float'];
};

export type AddProductInput = {
  avatar: Scalars['String'];
  best_sell: Scalars['Boolean'];
  brandId: Scalars['Float'];
  categoryId: Scalars['Float'];
  description: Scalars['String'];
  discount: Scalars['Float'];
  gift: Scalars['Float'];
  highlight: Scalars['Boolean'];
  installment: Scalars['Boolean'];
  name: Scalars['String'];
  new: Scalars['Boolean'];
  price: Scalars['Float'];
  price_input: Scalars['Float'];
  quantity: Scalars['Float'];
  slug: Scalars['String'];
  userCreatedId: Scalars['Float'];
  userUpdatedId: Scalars['Float'];
};

export type AddPromotionInput = {
  contents: Array<Scalars['String']>;
  productId: Scalars['Float'];
};

export type AddSpecificationsInput = {
  productId: Scalars['Float'];
  specis: Array<Specis>;
};

export type Brand = {
  __typename?: 'Brand';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  logo: Scalars['String'];
  name: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type BrandByIdsInput = {
  brandIds: Array<Scalars['Float']>;
};

export type Brand_Category = {
  __typename?: 'Brand_Category';
  brandId: Scalars['Float'];
  categoryId: Scalars['Float'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
};

export type Category = {
  __typename?: 'Category';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
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

export type ColorByIdsInput = {
  colorIds: Array<Scalars['Float']>;
};

export type ColorLinks = {
  id: Scalars['Float'];
  links: Array<Scalars['String']>;
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

export type EditProductInput = {
  avatar: Scalars['String'];
  best_sell: Scalars['Boolean'];
  brandId: Scalars['Float'];
  categoryId: Scalars['Float'];
  description: Scalars['String'];
  discount: Scalars['Float'];
  gift: Scalars['Float'];
  highlight: Scalars['Boolean'];
  id: Scalars['Float'];
  installment: Scalars['Boolean'];
  name: Scalars['String'];
  new: Scalars['Boolean'];
  price: Scalars['Float'];
  price_input: Scalars['Float'];
  quantity: Scalars['Float'];
  slug: Scalars['String'];
  userCreatedId: Scalars['Float'];
  userUpdatedId: Scalars['Float'];
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
  addProduct: ProductMutationResponse;
  addProductColors: Scalars['String'];
  addProductImages: Scalars['String'];
  addPromotion: Scalars['String'];
  addSpecifications: Scalars['String'];
  changePassword: UserMutationResponse;
  changeUserProfile: UserMutationResponse;
  editPassword: UserMutationResponse;
  editProduct: ProductMutationResponse;
  forgotPassword: Scalars['Boolean'];
  login: UserMutationResponse;
  logout: Scalars['Boolean'];
  multipleUpload: Array<Scalars['String']>;
  register: UserMutationResponse;
  singleUpload: Scalars['String'];
};


export type MutationAddProductArgs = {
  addProductInput: AddProductInput;
};


export type MutationAddProductColorsArgs = {
  addProductColorsInput: AddProductColorsInput;
};


export type MutationAddProductImagesArgs = {
  addProductImagesInput: AddProductImagesInput;
};


export type MutationAddPromotionArgs = {
  addPromotionInput: AddPromotionInput;
};


export type MutationAddSpecificationsArgs = {
  addSpecificationsInput: AddSpecificationsInput;
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


export type MutationEditProductArgs = {
  editProductInput: EditProductInput;
};


export type MutationForgotPasswordArgs = {
  forgotPasswordInput: ForgotPasswordInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationMultipleUploadArgs = {
  files: Array<Scalars['Upload']>;
};


export type MutationRegisterArgs = {
  registerInput: RegisterInput;
};


export type MutationSingleUploadArgs = {
  file: Scalars['Upload'];
};

export type Product = {
  __typename?: 'Product';
  avatar: Scalars['String'];
  best_sell: Scalars['Boolean'];
  brand?: Maybe<Brand>;
  brandId: Scalars['Float'];
  category?: Maybe<Category>;
  categoryId: Scalars['Float'];
  created_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['Float']>;
  gift?: Maybe<Scalars['Float']>;
  highlight: Scalars['Boolean'];
  id: Scalars['ID'];
  installment: Scalars['Boolean'];
  name: Scalars['String'];
  new: Scalars['Boolean'];
  price: Scalars['Float'];
  price_input: Scalars['Float'];
  product_colors?: Maybe<Array<Product_Color>>;
  product_images?: Maybe<Array<Product_Image>>;
  promotions?: Maybe<Array<Promotion>>;
  quantity: Scalars['Float'];
  slug?: Maybe<Scalars['String']>;
  specificationses?: Maybe<Array<Specifications>>;
  updated_at: Scalars['DateTime'];
  userCreatedId: Scalars['Float'];
  userUpdatedId: Scalars['Float'];
  user_created?: Maybe<User>;
  user_updated?: Maybe<User>;
};

export type ProductMutationResponse = IMutationResponse & {
  __typename?: 'ProductMutationResponse';
  code: Scalars['Float'];
  errors?: Maybe<Array<FieldError>>;
  message?: Maybe<Scalars['String']>;
  product?: Maybe<Product>;
  success: Scalars['Boolean'];
};

export type ProductPaginationInput = {
  skip: Scalars['Float'];
  take: Scalars['Float'];
};

export type Product_Color = {
  __typename?: 'Product_Color';
  colorId: Scalars['Float'];
  created_at: Scalars['DateTime'];
  productId: Scalars['Float'];
  updated_at: Scalars['DateTime'];
};

export type Product_Image = {
  __typename?: 'Product_Image';
  colorId: Scalars['Float'];
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  link: Scalars['String'];
  productId: Scalars['Float'];
  updated_at: Scalars['DateTime'];
};

export type Promotion = {
  __typename?: 'Promotion';
  content: Scalars['String'];
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  productId: Scalars['Float'];
  updated_at: Scalars['DateTime'];
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
  brandByIds: Array<Brand>;
  brandCategories: Array<Brand_Category>;
  categoryAll: Array<Category>;
  colorAll: Array<Color>;
  colorByIds: Array<Color>;
  districtAll: Array<District>;
  me?: Maybe<User>;
  productBySlug: Product;
  productPagination: Array<Product>;
  provinceAll: Array<Province>;
  totalRows: Scalars['Float'];
  villageAll: Array<Village>;
};


export type QueryBrandByIdsArgs = {
  brandByIdsInput: BrandByIdsInput;
};


export type QueryBrandCategoriesArgs = {
  categoryId: Scalars['Float'];
};


export type QueryColorByIdsArgs = {
  colorByIdsInput: ColorByIdsInput;
};


export type QueryDistrictAllArgs = {
  provinceId: Scalars['Float'];
};


export type QueryProductBySlugArgs = {
  productSlug: Scalars['String'];
};


export type QueryProductPaginationArgs = {
  productPaginationInput: ProductPaginationInput;
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

export type Specifications = {
  __typename?: 'Specifications';
  content: Scalars['String'];
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  productId: Scalars['Float'];
  updated_at: Scalars['DateTime'];
};

export type Specis = {
  content: Scalars['String'];
  name: Scalars['String'];
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

export type ProductInfoFragment = { __typename?: 'Product', id: string, name: string, slug?: string | null | undefined, avatar: string, description?: string | null | undefined, installment: boolean, best_sell: boolean, highlight: boolean, new: boolean, price_input: number, discount?: number | null | undefined, price: number, gift?: number | null | undefined, quantity: number };

export type ProductMutationResponseFragment = { __typename?: 'ProductMutationResponse', code: number, success: boolean, message?: string | null | undefined, product?: { __typename?: 'Product', id: string, name: string, slug?: string | null | undefined, avatar: string, description?: string | null | undefined, installment: boolean, best_sell: boolean, highlight: boolean, new: boolean, price_input: number, discount?: number | null | undefined, price: number, gift?: number | null | undefined, quantity: number } | null | undefined, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined };

export type UserInfoFragment = { __typename?: 'User', id: string, last_name: string, first_name: string, username: string, email: string, gender: string, avatar?: string | null | undefined, phone_num?: string | null | undefined, street?: string | null | undefined, province?: { __typename?: 'Province', id: string, name: string } | null | undefined, district?: { __typename?: 'District', id: string, name: string } | null | undefined, village?: { __typename?: 'Village', id: string, name: string } | null | undefined };

export type UserMutationResponseFragment = { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: string | null | undefined, user?: { __typename?: 'User', id: string, last_name: string, first_name: string, username: string, email: string, gender: string, avatar?: string | null | undefined, phone_num?: string | null | undefined, street?: string | null | undefined, province?: { __typename?: 'Province', id: string, name: string } | null | undefined, district?: { __typename?: 'District', id: string, name: string } | null | undefined, village?: { __typename?: 'Village', id: string, name: string } | null | undefined } | null | undefined, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined };

export type AddProductMutationVariables = Exact<{
  addProductInput: AddProductInput;
}>;


export type AddProductMutation = { __typename?: 'Mutation', addProduct: { __typename?: 'ProductMutationResponse', code: number, success: boolean, message?: string | null | undefined, product?: { __typename?: 'Product', id: string, name: string, slug?: string | null | undefined, avatar: string, description?: string | null | undefined, installment: boolean, best_sell: boolean, highlight: boolean, new: boolean, price_input: number, discount?: number | null | undefined, price: number, gift?: number | null | undefined, quantity: number } | null | undefined, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined } };

export type AddProductColorsMutationVariables = Exact<{
  addProductColorsInput: AddProductColorsInput;
}>;


export type AddProductColorsMutation = { __typename?: 'Mutation', addProductColors: string };

export type AddProductImagesMutationVariables = Exact<{
  addProductImagesInput: AddProductImagesInput;
}>;


export type AddProductImagesMutation = { __typename?: 'Mutation', addProductImages: string };

export type AddPromotionMutationVariables = Exact<{
  addPromotionInput: AddPromotionInput;
}>;


export type AddPromotionMutation = { __typename?: 'Mutation', addPromotion: string };

export type AddSpecificationsMutationVariables = Exact<{
  addSpecificationsInput: AddSpecificationsInput;
}>;


export type AddSpecificationsMutation = { __typename?: 'Mutation', addSpecifications: string };

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

export type MultipleUploadMutationVariables = Exact<{
  files: Array<Scalars['Upload']> | Scalars['Upload'];
}>;


export type MultipleUploadMutation = { __typename?: 'Mutation', multipleUpload: Array<string> };

export type RegisterMutationVariables = Exact<{
  registerInput: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserMutationResponse', code: number, success: boolean, message?: string | null | undefined, user?: { __typename?: 'User', id: string, last_name: string, first_name: string, username: string, email: string, gender: string, avatar?: string | null | undefined, phone_num?: string | null | undefined, street?: string | null | undefined, province?: { __typename?: 'Province', id: string, name: string } | null | undefined, district?: { __typename?: 'District', id: string, name: string } | null | undefined, village?: { __typename?: 'Village', id: string, name: string } | null | undefined } | null | undefined, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined } };

export type SingleUploadMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;


export type SingleUploadMutation = { __typename?: 'Mutation', singleUpload: string };

export type BrandByIdsQueryVariables = Exact<{
  brandByIdsInput: BrandByIdsInput;
}>;


export type BrandByIdsQuery = { __typename?: 'Query', brandByIds: Array<{ __typename?: 'Brand', id: string, name: string, logo: string }> };

export type BrandCategoriesQueryVariables = Exact<{
  categoryId: Scalars['Float'];
}>;


export type BrandCategoriesQuery = { __typename?: 'Query', brandCategories: Array<{ __typename?: 'Brand_Category', brandId: number, categoryId: number }> };

export type CategoryAllQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoryAllQuery = { __typename?: 'Query', categoryAll: Array<{ __typename?: 'Category', id: string, name: string, slug: string }> };

export type ColorAllQueryVariables = Exact<{ [key: string]: never; }>;


export type ColorAllQuery = { __typename?: 'Query', colorAll: Array<{ __typename?: 'Color', id: string, name: string }> };

export type ColorByIdsQueryVariables = Exact<{
  colorByIdsInput: ColorByIdsInput;
}>;


export type ColorByIdsQuery = { __typename?: 'Query', colorByIds: Array<{ __typename?: 'Color', id: string, name: string }> };

export type DistrictAllQueryVariables = Exact<{
  provinceId: Scalars['Float'];
}>;


export type DistrictAllQuery = { __typename?: 'Query', districtAll: Array<{ __typename?: 'District', id: string, name: string }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, last_name: string, first_name: string, username: string, email: string, gender: string, avatar?: string | null | undefined, phone_num?: string | null | undefined, street?: string | null | undefined, province?: { __typename?: 'Province', id: string, name: string } | null | undefined, district?: { __typename?: 'District', id: string, name: string } | null | undefined, village?: { __typename?: 'Village', id: string, name: string } | null | undefined } | null | undefined };

export type ProductBySlugQueryVariables = Exact<{
  productSlug: Scalars['String'];
}>;


export type ProductBySlugQuery = { __typename?: 'Query', productBySlug: { __typename?: 'Product', id: string, name: string, slug?: string | null | undefined, avatar: string, description?: string | null | undefined, installment: boolean, best_sell: boolean, highlight: boolean, new: boolean, price_input: number, discount?: number | null | undefined, price: number, quantity: number, gift?: number | null | undefined, category?: { __typename?: 'Category', id: string, name: string } | null | undefined, brand?: { __typename?: 'Brand', id: string, name: string, logo: string } | null | undefined, product_colors?: Array<{ __typename?: 'Product_Color', colorId: number }> | null | undefined, product_images?: Array<{ __typename?: 'Product_Image', id: string, link: string, colorId: number }> | null | undefined, specificationses?: Array<{ __typename?: 'Specifications', id: string, name: string, content: string }> | null | undefined, promotions?: Array<{ __typename?: 'Promotion', id: string, content: string }> | null | undefined, user_created?: { __typename?: 'User', id: string, last_name: string, first_name: string } | null | undefined, user_updated?: { __typename?: 'User', id: string, last_name: string, first_name: string } | null | undefined } };

export type ProductPaginationQueryVariables = Exact<{
  productPaginationInput: ProductPaginationInput;
}>;


export type ProductPaginationQuery = { __typename?: 'Query', productPagination: Array<{ __typename?: 'Product', id: string, name: string, slug?: string | null | undefined, avatar: string, description?: string | null | undefined, installment: boolean, best_sell: boolean, highlight: boolean, new: boolean, price_input: number, discount?: number | null | undefined, price: number, quantity: number, gift?: number | null | undefined, category?: { __typename?: 'Category', id: string, name: string } | null | undefined, brand?: { __typename?: 'Brand', id: string, name: string, logo: string } | null | undefined, product_colors?: Array<{ __typename?: 'Product_Color', colorId: number }> | null | undefined, product_images?: Array<{ __typename?: 'Product_Image', id: string, link: string, colorId: number }> | null | undefined, specificationses?: Array<{ __typename?: 'Specifications', id: string, name: string, content: string }> | null | undefined, promotions?: Array<{ __typename?: 'Promotion', id: string, content: string }> | null | undefined, user_created?: { __typename?: 'User', id: string, last_name: string, first_name: string } | null | undefined, user_updated?: { __typename?: 'User', id: string, last_name: string, first_name: string } | null | undefined }> };

export type ProvinceAllQueryVariables = Exact<{ [key: string]: never; }>;


export type ProvinceAllQuery = { __typename?: 'Query', provinceAll: Array<{ __typename?: 'Province', id: string, name: string }> };

export type TotalRowsQueryVariables = Exact<{ [key: string]: never; }>;


export type TotalRowsQuery = { __typename?: 'Query', totalRows: number };

export type VillageAllQueryVariables = Exact<{
  districtId: Scalars['Float'];
}>;


export type VillageAllQuery = { __typename?: 'Query', villageAll: Array<{ __typename?: 'Village', id: string, name: string }> };

export const ProductInfoFragmentDoc = gql`
    fragment productInfo on Product {
  id
  name
  slug
  avatar
  description
  installment
  best_sell
  highlight
  new
  price_input
  discount
  price
  gift
  quantity
}
    `;
export const FieldErrorFragmentDoc = gql`
    fragment fieldError on FieldError {
  field
  message
}
    `;
export const ProductMutationResponseFragmentDoc = gql`
    fragment productMutationResponse on ProductMutationResponse {
  code
  success
  message
  product {
    ...productInfo
  }
  errors {
    ...fieldError
  }
}
    ${ProductInfoFragmentDoc}
${FieldErrorFragmentDoc}`;
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
export const AddProductDocument = gql`
    mutation AddProduct($addProductInput: AddProductInput!) {
  addProduct(addProductInput: $addProductInput) {
    ...productMutationResponse
  }
}
    ${ProductMutationResponseFragmentDoc}`;
export type AddProductMutationFn = Apollo.MutationFunction<AddProductMutation, AddProductMutationVariables>;

/**
 * __useAddProductMutation__
 *
 * To run a mutation, you first call `useAddProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProductMutation, { data, loading, error }] = useAddProductMutation({
 *   variables: {
 *      addProductInput: // value for 'addProductInput'
 *   },
 * });
 */
export function useAddProductMutation(baseOptions?: Apollo.MutationHookOptions<AddProductMutation, AddProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddProductMutation, AddProductMutationVariables>(AddProductDocument, options);
      }
export type AddProductMutationHookResult = ReturnType<typeof useAddProductMutation>;
export type AddProductMutationResult = Apollo.MutationResult<AddProductMutation>;
export type AddProductMutationOptions = Apollo.BaseMutationOptions<AddProductMutation, AddProductMutationVariables>;
export const AddProductColorsDocument = gql`
    mutation AddProductColors($addProductColorsInput: AddProductColorsInput!) {
  addProductColors(addProductColorsInput: $addProductColorsInput)
}
    `;
export type AddProductColorsMutationFn = Apollo.MutationFunction<AddProductColorsMutation, AddProductColorsMutationVariables>;

/**
 * __useAddProductColorsMutation__
 *
 * To run a mutation, you first call `useAddProductColorsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProductColorsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProductColorsMutation, { data, loading, error }] = useAddProductColorsMutation({
 *   variables: {
 *      addProductColorsInput: // value for 'addProductColorsInput'
 *   },
 * });
 */
export function useAddProductColorsMutation(baseOptions?: Apollo.MutationHookOptions<AddProductColorsMutation, AddProductColorsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddProductColorsMutation, AddProductColorsMutationVariables>(AddProductColorsDocument, options);
      }
export type AddProductColorsMutationHookResult = ReturnType<typeof useAddProductColorsMutation>;
export type AddProductColorsMutationResult = Apollo.MutationResult<AddProductColorsMutation>;
export type AddProductColorsMutationOptions = Apollo.BaseMutationOptions<AddProductColorsMutation, AddProductColorsMutationVariables>;
export const AddProductImagesDocument = gql`
    mutation AddProductImages($addProductImagesInput: AddProductImagesInput!) {
  addProductImages(addProductImagesInput: $addProductImagesInput)
}
    `;
export type AddProductImagesMutationFn = Apollo.MutationFunction<AddProductImagesMutation, AddProductImagesMutationVariables>;

/**
 * __useAddProductImagesMutation__
 *
 * To run a mutation, you first call `useAddProductImagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProductImagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProductImagesMutation, { data, loading, error }] = useAddProductImagesMutation({
 *   variables: {
 *      addProductImagesInput: // value for 'addProductImagesInput'
 *   },
 * });
 */
export function useAddProductImagesMutation(baseOptions?: Apollo.MutationHookOptions<AddProductImagesMutation, AddProductImagesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddProductImagesMutation, AddProductImagesMutationVariables>(AddProductImagesDocument, options);
      }
export type AddProductImagesMutationHookResult = ReturnType<typeof useAddProductImagesMutation>;
export type AddProductImagesMutationResult = Apollo.MutationResult<AddProductImagesMutation>;
export type AddProductImagesMutationOptions = Apollo.BaseMutationOptions<AddProductImagesMutation, AddProductImagesMutationVariables>;
export const AddPromotionDocument = gql`
    mutation AddPromotion($addPromotionInput: AddPromotionInput!) {
  addPromotion(addPromotionInput: $addPromotionInput)
}
    `;
export type AddPromotionMutationFn = Apollo.MutationFunction<AddPromotionMutation, AddPromotionMutationVariables>;

/**
 * __useAddPromotionMutation__
 *
 * To run a mutation, you first call `useAddPromotionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPromotionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPromotionMutation, { data, loading, error }] = useAddPromotionMutation({
 *   variables: {
 *      addPromotionInput: // value for 'addPromotionInput'
 *   },
 * });
 */
export function useAddPromotionMutation(baseOptions?: Apollo.MutationHookOptions<AddPromotionMutation, AddPromotionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddPromotionMutation, AddPromotionMutationVariables>(AddPromotionDocument, options);
      }
export type AddPromotionMutationHookResult = ReturnType<typeof useAddPromotionMutation>;
export type AddPromotionMutationResult = Apollo.MutationResult<AddPromotionMutation>;
export type AddPromotionMutationOptions = Apollo.BaseMutationOptions<AddPromotionMutation, AddPromotionMutationVariables>;
export const AddSpecificationsDocument = gql`
    mutation AddSpecifications($addSpecificationsInput: AddSpecificationsInput!) {
  addSpecifications(addSpecificationsInput: $addSpecificationsInput)
}
    `;
export type AddSpecificationsMutationFn = Apollo.MutationFunction<AddSpecificationsMutation, AddSpecificationsMutationVariables>;

/**
 * __useAddSpecificationsMutation__
 *
 * To run a mutation, you first call `useAddSpecificationsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddSpecificationsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addSpecificationsMutation, { data, loading, error }] = useAddSpecificationsMutation({
 *   variables: {
 *      addSpecificationsInput: // value for 'addSpecificationsInput'
 *   },
 * });
 */
export function useAddSpecificationsMutation(baseOptions?: Apollo.MutationHookOptions<AddSpecificationsMutation, AddSpecificationsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddSpecificationsMutation, AddSpecificationsMutationVariables>(AddSpecificationsDocument, options);
      }
export type AddSpecificationsMutationHookResult = ReturnType<typeof useAddSpecificationsMutation>;
export type AddSpecificationsMutationResult = Apollo.MutationResult<AddSpecificationsMutation>;
export type AddSpecificationsMutationOptions = Apollo.BaseMutationOptions<AddSpecificationsMutation, AddSpecificationsMutationVariables>;
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
export const MultipleUploadDocument = gql`
    mutation MultipleUpload($files: [Upload!]!) {
  multipleUpload(files: $files)
}
    `;
export type MultipleUploadMutationFn = Apollo.MutationFunction<MultipleUploadMutation, MultipleUploadMutationVariables>;

/**
 * __useMultipleUploadMutation__
 *
 * To run a mutation, you first call `useMultipleUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMultipleUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [multipleUploadMutation, { data, loading, error }] = useMultipleUploadMutation({
 *   variables: {
 *      files: // value for 'files'
 *   },
 * });
 */
export function useMultipleUploadMutation(baseOptions?: Apollo.MutationHookOptions<MultipleUploadMutation, MultipleUploadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MultipleUploadMutation, MultipleUploadMutationVariables>(MultipleUploadDocument, options);
      }
export type MultipleUploadMutationHookResult = ReturnType<typeof useMultipleUploadMutation>;
export type MultipleUploadMutationResult = Apollo.MutationResult<MultipleUploadMutation>;
export type MultipleUploadMutationOptions = Apollo.BaseMutationOptions<MultipleUploadMutation, MultipleUploadMutationVariables>;
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
export const BrandByIdsDocument = gql`
    query BrandByIds($brandByIdsInput: BrandByIdsInput!) {
  brandByIds(brandByIdsInput: $brandByIdsInput) {
    id
    name
    logo
  }
}
    `;

/**
 * __useBrandByIdsQuery__
 *
 * To run a query within a React component, call `useBrandByIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBrandByIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBrandByIdsQuery({
 *   variables: {
 *      brandByIdsInput: // value for 'brandByIdsInput'
 *   },
 * });
 */
export function useBrandByIdsQuery(baseOptions: Apollo.QueryHookOptions<BrandByIdsQuery, BrandByIdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BrandByIdsQuery, BrandByIdsQueryVariables>(BrandByIdsDocument, options);
      }
export function useBrandByIdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BrandByIdsQuery, BrandByIdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BrandByIdsQuery, BrandByIdsQueryVariables>(BrandByIdsDocument, options);
        }
export type BrandByIdsQueryHookResult = ReturnType<typeof useBrandByIdsQuery>;
export type BrandByIdsLazyQueryHookResult = ReturnType<typeof useBrandByIdsLazyQuery>;
export type BrandByIdsQueryResult = Apollo.QueryResult<BrandByIdsQuery, BrandByIdsQueryVariables>;
export const BrandCategoriesDocument = gql`
    query BrandCategories($categoryId: Float!) {
  brandCategories(categoryId: $categoryId) {
    brandId
    categoryId
  }
}
    `;

/**
 * __useBrandCategoriesQuery__
 *
 * To run a query within a React component, call `useBrandCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useBrandCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBrandCategoriesQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useBrandCategoriesQuery(baseOptions: Apollo.QueryHookOptions<BrandCategoriesQuery, BrandCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BrandCategoriesQuery, BrandCategoriesQueryVariables>(BrandCategoriesDocument, options);
      }
export function useBrandCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BrandCategoriesQuery, BrandCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BrandCategoriesQuery, BrandCategoriesQueryVariables>(BrandCategoriesDocument, options);
        }
export type BrandCategoriesQueryHookResult = ReturnType<typeof useBrandCategoriesQuery>;
export type BrandCategoriesLazyQueryHookResult = ReturnType<typeof useBrandCategoriesLazyQuery>;
export type BrandCategoriesQueryResult = Apollo.QueryResult<BrandCategoriesQuery, BrandCategoriesQueryVariables>;
export const CategoryAllDocument = gql`
    query CategoryAll {
  categoryAll {
    id
    name
    slug
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
export const ColorByIdsDocument = gql`
    query ColorByIds($colorByIdsInput: ColorByIdsInput!) {
  colorByIds(colorByIdsInput: $colorByIdsInput) {
    id
    name
  }
}
    `;

/**
 * __useColorByIdsQuery__
 *
 * To run a query within a React component, call `useColorByIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useColorByIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useColorByIdsQuery({
 *   variables: {
 *      colorByIdsInput: // value for 'colorByIdsInput'
 *   },
 * });
 */
export function useColorByIdsQuery(baseOptions: Apollo.QueryHookOptions<ColorByIdsQuery, ColorByIdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ColorByIdsQuery, ColorByIdsQueryVariables>(ColorByIdsDocument, options);
      }
export function useColorByIdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ColorByIdsQuery, ColorByIdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ColorByIdsQuery, ColorByIdsQueryVariables>(ColorByIdsDocument, options);
        }
export type ColorByIdsQueryHookResult = ReturnType<typeof useColorByIdsQuery>;
export type ColorByIdsLazyQueryHookResult = ReturnType<typeof useColorByIdsLazyQuery>;
export type ColorByIdsQueryResult = Apollo.QueryResult<ColorByIdsQuery, ColorByIdsQueryVariables>;
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
export const ProductBySlugDocument = gql`
    query ProductBySlug($productSlug: String!) {
  productBySlug(productSlug: $productSlug) {
    id
    name
    slug
    avatar
    description
    installment
    best_sell
    highlight
    new
    price_input
    discount
    price
    quantity
    gift
    category {
      id
      name
    }
    brand {
      id
      name
      logo
    }
    product_colors {
      colorId
    }
    product_images {
      id
      link
      colorId
    }
    specificationses {
      id
      name
      content
    }
    promotions {
      id
      content
    }
    user_created {
      id
      last_name
      first_name
    }
    user_updated {
      id
      last_name
      first_name
    }
  }
}
    `;

/**
 * __useProductBySlugQuery__
 *
 * To run a query within a React component, call `useProductBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductBySlugQuery({
 *   variables: {
 *      productSlug: // value for 'productSlug'
 *   },
 * });
 */
export function useProductBySlugQuery(baseOptions: Apollo.QueryHookOptions<ProductBySlugQuery, ProductBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductBySlugQuery, ProductBySlugQueryVariables>(ProductBySlugDocument, options);
      }
export function useProductBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductBySlugQuery, ProductBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductBySlugQuery, ProductBySlugQueryVariables>(ProductBySlugDocument, options);
        }
export type ProductBySlugQueryHookResult = ReturnType<typeof useProductBySlugQuery>;
export type ProductBySlugLazyQueryHookResult = ReturnType<typeof useProductBySlugLazyQuery>;
export type ProductBySlugQueryResult = Apollo.QueryResult<ProductBySlugQuery, ProductBySlugQueryVariables>;
export const ProductPaginationDocument = gql`
    query ProductPagination($productPaginationInput: ProductPaginationInput!) {
  productPagination(productPaginationInput: $productPaginationInput) {
    id
    name
    slug
    avatar
    description
    installment
    best_sell
    highlight
    new
    price_input
    discount
    price
    quantity
    gift
    category {
      id
      name
    }
    brand {
      id
      name
      logo
    }
    product_colors {
      colorId
    }
    product_images {
      id
      link
      colorId
    }
    specificationses {
      id
      name
      content
    }
    promotions {
      id
      content
    }
    user_created {
      id
      last_name
      first_name
    }
    user_updated {
      id
      last_name
      first_name
    }
  }
}
    `;

/**
 * __useProductPaginationQuery__
 *
 * To run a query within a React component, call `useProductPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductPaginationQuery({
 *   variables: {
 *      productPaginationInput: // value for 'productPaginationInput'
 *   },
 * });
 */
export function useProductPaginationQuery(baseOptions: Apollo.QueryHookOptions<ProductPaginationQuery, ProductPaginationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductPaginationQuery, ProductPaginationQueryVariables>(ProductPaginationDocument, options);
      }
export function useProductPaginationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductPaginationQuery, ProductPaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductPaginationQuery, ProductPaginationQueryVariables>(ProductPaginationDocument, options);
        }
export type ProductPaginationQueryHookResult = ReturnType<typeof useProductPaginationQuery>;
export type ProductPaginationLazyQueryHookResult = ReturnType<typeof useProductPaginationLazyQuery>;
export type ProductPaginationQueryResult = Apollo.QueryResult<ProductPaginationQuery, ProductPaginationQueryVariables>;
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
export const TotalRowsDocument = gql`
    query TotalRows {
  totalRows
}
    `;

/**
 * __useTotalRowsQuery__
 *
 * To run a query within a React component, call `useTotalRowsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTotalRowsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTotalRowsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTotalRowsQuery(baseOptions?: Apollo.QueryHookOptions<TotalRowsQuery, TotalRowsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TotalRowsQuery, TotalRowsQueryVariables>(TotalRowsDocument, options);
      }
export function useTotalRowsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TotalRowsQuery, TotalRowsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TotalRowsQuery, TotalRowsQueryVariables>(TotalRowsDocument, options);
        }
export type TotalRowsQueryHookResult = ReturnType<typeof useTotalRowsQuery>;
export type TotalRowsLazyQueryHookResult = ReturnType<typeof useTotalRowsLazyQuery>;
export type TotalRowsQueryResult = Apollo.QueryResult<TotalRowsQuery, TotalRowsQueryVariables>;
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