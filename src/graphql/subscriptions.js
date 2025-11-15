/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreateResident = /* GraphQL */ `
  subscription OnCreateResident(
    $filter: ModelSubscriptionResidentFilterInput
    $owner: String
  ) {
    onCreateResident(filter: $filter, owner: $owner) {
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
export const onUpdateResident = /* GraphQL */ `
  subscription OnUpdateResident(
    $filter: ModelSubscriptionResidentFilterInput
    $owner: String
  ) {
    onUpdateResident(filter: $filter, owner: $owner) {
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
export const onDeleteResident = /* GraphQL */ `
  subscription OnDeleteResident(
    $filter: ModelSubscriptionResidentFilterInput
    $owner: String
  ) {
    onDeleteResident(filter: $filter, owner: $owner) {
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
export const onCreateBarangayOfficial = /* GraphQL */ `
  subscription OnCreateBarangayOfficial(
    $filter: ModelSubscriptionBarangayOfficialFilterInput
    $owner: String
  ) {
    onCreateBarangayOfficial(filter: $filter, owner: $owner) {
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
export const onUpdateBarangayOfficial = /* GraphQL */ `
  subscription OnUpdateBarangayOfficial(
    $filter: ModelSubscriptionBarangayOfficialFilterInput
    $owner: String
  ) {
    onUpdateBarangayOfficial(filter: $filter, owner: $owner) {
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
export const onDeleteBarangayOfficial = /* GraphQL */ `
  subscription OnDeleteBarangayOfficial(
    $filter: ModelSubscriptionBarangayOfficialFilterInput
    $owner: String
  ) {
    onDeleteBarangayOfficial(filter: $filter, owner: $owner) {
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
