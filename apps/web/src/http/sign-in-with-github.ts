import { api } from './api-client'

interface singInWithGithubRequest {
  code: string
}
interface singInWithGithubResponse {
  token: string
}

export async function singInWithGithub({ code }: singInWithGithubRequest) {
  const result = await api
    .post('sessions/github', {
      json: {
        code,
      },
    })
    .json<singInWithGithubResponse>()

  return result
}
