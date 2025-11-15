/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      email
      phone
      role
      firstName
      middleName
      lastName
      suffix
      barangay
      city
      province
      createdAt
      updatedAt
      residents {
        nextToken
        __typename
      }
      owner
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      email
      phone
      role
      firstName
      middleName
      lastName
      suffix
      barangay
      city
      province
      createdAt
      updatedAt
      residents {
        nextToken
        __typename
      }
      owner
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      email
      phone
      role
      firstName
      middleName
      lastName
      suffix
      barangay
      city
      province
      createdAt
      updatedAt
      residents {
        nextToken
        __typename
      }
      owner
      __typename
    }
  }
`;
export const createResident = /* GraphQL */ `
  mutation CreateResident(
    $input: CreateResidentInput!
    $condition: ModelResidentConditionInput
  ) {
    createResident(input: $input, condition: $condition) {
      id
      userID
      officialID
      firstName
      middleName
      lastName
      suffix
      gender
      dateOfBirth
      email
      phone
      houseNumber
      street
      purok
      sitio
      barangay
      city
      province
      postalCode
      residentIDNumber
      householdId
      isHeadOfFamily
      occupation
      civilStatus
      nationality
      createdBy
      updatedBy
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateResident = /* GraphQL */ `
  mutation UpdateResident(
    $input: UpdateResidentInput!
    $condition: ModelResidentConditionInput
  ) {
    updateResident(input: $input, condition: $condition) {
      id
      userID
      officialID
      firstName
      middleName
      lastName
      suffix
      gender
      dateOfBirth
      email
      phone
      houseNumber
      street
      purok
      sitio
      barangay
      city
      province
      postalCode
      residentIDNumber
      householdId
      isHeadOfFamily
      occupation
      civilStatus
      nationality
      createdBy
      updatedBy
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteResident = /* GraphQL */ `
  mutation DeleteResident(
    $input: DeleteResidentInput!
    $condition: ModelResidentConditionInput
  ) {
    deleteResident(input: $input, condition: $condition) {
      id
      userID
      officialID
      firstName
      middleName
      lastName
      suffix
      gender
      dateOfBirth
      email
      phone
      houseNumber
      street
      purok
      sitio
      barangay
      city
      province
      postalCode
      residentIDNumber
      householdId
      isHeadOfFamily
      occupation
      civilStatus
      nationality
      createdBy
      updatedBy
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createBarangayOfficial = /* GraphQL */ `
  mutation CreateBarangayOfficial(
    $input: CreateBarangayOfficialInput!
    $condition: ModelBarangayOfficialConditionInput
  ) {
    createBarangayOfficial(input: $input, condition: $condition) {
      id
      residentID
      position
      termStart
      termEnd
      isActive
      committee
      remarks
      createdBy
      updatedBy
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateBarangayOfficial = /* GraphQL */ `
  mutation UpdateBarangayOfficial(
    $input: UpdateBarangayOfficialInput!
    $condition: ModelBarangayOfficialConditionInput
  ) {
    updateBarangayOfficial(input: $input, condition: $condition) {
      id
      residentID
      position
      termStart
      termEnd
      isActive
      committee
      remarks
      createdBy
      updatedBy
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteBarangayOfficial = /* GraphQL */ `
  mutation DeleteBarangayOfficial(
    $input: DeleteBarangayOfficialInput!
    $condition: ModelBarangayOfficialConditionInput
  ) {
    deleteBarangayOfficial(input: $input, condition: $condition) {
      id
      residentID
      position
      termStart
      termEnd
      isActive
      committee
      remarks
      createdBy
      updatedBy
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
