import { api } from './api-client'

interface getProjectsResponse {
  projects: {
    description: string
    id: string
    name: string
    slug: string
    avatarUrl: string | null
    organizationId: string
    ownerId: string
    createdAt: string
    owner: {
      id: string
      name: string | null
      avatarUrl: string | null
    }
  }[]
}

export async function getProjects(org: string) {
  const result = await api
    .get(`organizations/${org}/projects`)
    .json<getProjectsResponse>()

  return result
}
