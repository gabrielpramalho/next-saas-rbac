import { api } from './api-client'

interface singInWithPasswordRequest {
  email: string
  password: string
}
interface singInWithPasswordResponse {
  token: string
}

export async function singInWithPassword({
  email,
  password,
}: singInWithPasswordRequest) {
  const result = await api
    .post('sessions/password', {
      json: {
        email,
        password,
      },
    })
    .json<singInWithPasswordResponse>()

  return result
}
