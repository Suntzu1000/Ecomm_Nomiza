import { useMutation } from "@tanstack/react-query"
import apiClient from "../apiClient"
import { UserInfo } from "../types/userInfo"

export const useSigninMutation = () =>
useMutation({
  mutationFn: async ({
    email,
    password,
  }: {
    email: string
    password: string
  }) =>
    (
      await apiClient.post<UserInfo>(`api/users/entrar`, {
        email,
        password,
      })
    ).data,
})
