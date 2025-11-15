import { generateClient } from "aws-amplify/api";
import { createOfficialPosition, updateOfficialPosition, deleteOfficialPosition } from "@/graphql/mutations";
import { listOfficialPositions, getOfficialPosition } from "@/graphql/queries";


const client = generateClient();

type GraphQLResponse<T> = {
  data: T;
  errors?: Array<{ message: string }>;
};

export interface OfficialPosition {
  id: string;
  position: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
}

export interface CreatePositionInput {
  position: string;
  description?: string;
}

export interface UpdatePositionInput {
  id: string;
  position?: string;
  description?: string;
}

export async function createPosition(input: CreatePositionInput): Promise<OfficialPosition> {
  const result = await client.graphql({
    query: createOfficialPosition,
    variables: { input },
    authMode: "userPool", // ✅ must be "userPools"
  }) as GraphQLResponse<{ createOfficialPosition: OfficialPosition }>;

  if (result.errors) throw new Error(result.errors[0].message);
  return result.data.createOfficialPosition;
}

export async function getAllPositions(): Promise<OfficialPosition[]> {
  const allPositions: OfficialPosition[] = [];
  let nextToken: string | null | undefined = null;

  do {
    const result = await client.graphql({
      query: listOfficialPositions,
      variables: { nextToken: nextToken || undefined },
      authMode: "userPool",
    }) as GraphQLResponse<{
      listOfficialPositions: { items: OfficialPosition[]; nextToken: string | null | undefined };
    }>;

    if (result.errors) throw new Error(result.errors[0].message);

    const { items, nextToken: token } = result.data.listOfficialPositions;
    allPositions.push(...items);
    nextToken = token;
  } while (nextToken);

  return allPositions;
}

export async function getPositionById(id: string): Promise<OfficialPosition> {
  const result = await client.graphql({
    query: getOfficialPosition,
    variables: { id },
    authMode: "userPool",
  }) as GraphQLResponse<{ getOfficialPosition: OfficialPosition }>;

  if (result.errors) throw new Error(result.errors[0].message);
  return result.data.getOfficialPosition;
}

export async function updatePosition(input: UpdatePositionInput): Promise<OfficialPosition> {
  const result = await client.graphql({
    query: updateOfficialPosition,
    variables: { input },
    authMode: "userPool",
  }) as GraphQLResponse<{ updateOfficialPosition: OfficialPosition }>;

  if (result.errors) throw new Error(result.errors[0].message);
  return result.data.updateOfficialPosition;
}

export async function deletePosition(id: string): Promise<OfficialPosition> {
  const result = await client.graphql({
    query: deleteOfficialPosition,
    variables: { input: { id } },
    authMode: "userPool",
  }) as GraphQLResponse<{ deleteOfficialPosition: OfficialPosition }>;

  if (result.errors) throw new Error(result.errors[0].message);
  return result.data.deleteOfficialPosition;
}

export const positionService = {
  createPosition,
  getAllPositions,
  getPositionById,
  updatePosition,
  deletePosition,
};
