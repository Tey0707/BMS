/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
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
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getResident = /* GraphQL */ `
  query GetResident($id: ID!) {
    getResident(id: $id) {
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
export const listResidents = /* GraphQL */ `
  query ListResidents(
    $filter: ModelResidentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResidents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const residentsByUserID = /* GraphQL */ `
  query ResidentsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelResidentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    residentsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const residentsByOfficialID = /* GraphQL */ `
  query ResidentsByOfficialID(
    $officialID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelResidentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    residentsByOfficialID(
      officialID: $officialID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getOfficialPosition = /* GraphQL */ `
  query GetOfficialPosition($id: ID!) {
    getOfficialPosition(id: $id) {
      id
      position
      description
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listOfficialPositions = /* GraphQL */ `
  query ListOfficialPositions(
    $filter: ModelOfficialPositionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOfficialPositions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        position
        description
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBarangayOfficial = /* GraphQL */ `
  query GetBarangayOfficial($id: ID!) {
    getBarangayOfficial(id: $id) {
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
export const listBarangayOfficials = /* GraphQL */ `
  query ListBarangayOfficials(
    $filter: ModelBarangayOfficialFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBarangayOfficials(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const barangayOfficialsByResidentID = /* GraphQL */ `
  query BarangayOfficialsByResidentID(
    $residentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBarangayOfficialFilterInput
    $limit: Int
    $nextToken: String
  ) {
    barangayOfficialsByResidentID(
      residentID: $residentID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
