declare module "@/graphql/mutations" {
    export const createOfficialPosition: string;
    export const updateOfficialPosition: string;
    export const deleteOfficialPosition: string;
  }
  
  declare module "@/graphql/queries" {
    export const listOfficialPositions: string;
    export const getOfficialPosition: string;
  }