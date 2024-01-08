'use client'

import { createContext, useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";
import { useRouter } from 'next/navigation'
import { api } from "@/lib/api";
import { adminUserData } from "@/app/api/login/route";

type User = {
  name: string,
  email: string,
  avatar_url: string,
}

type SignInData = {
  email: string;
  password: string;
  rememberMe: boolean;
}

type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  signIn: ({ email, password, rememberMe }: SignInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {

  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)

  const isAuthenticated = !!user

  useEffect(() => {
    async function fetchUser() {
      const { 'dustmist-secret': secret } = parseCookies()
      if (secret) {
        api.defaults.headers['Authorization'] = `Bearer ${secret}`
        const { data } = await api.get<User>('/api/login')
        setUser(data)
      }
    }
    fetchUser()
  }, [])

  async function signIn({ email, password, rememberMe }: SignInData) {

    const { data: { secret, user } } = await api.post<adminUserData>('/api/login', { email: `${email}`, password: `${password}` })

    setCookie(undefined, 'dustmist-secret', secret, {
      maxAge: 60 * 60 * 1, //1 hour
    })

    api.defaults.headers['Authorization'] = `${secret}`;

    setUser(user)

    router.push('/admin/mongodb')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}