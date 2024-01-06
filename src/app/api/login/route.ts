import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from 'uuid'

type adminUserData = {
  token: string,
  name: string,
  email: string,
  avatar_urL: string,
}

export async function POST(request: NextRequest) {

  try {
    const { email, password } = await request.json()

    if (email == process.env.ADMIN_EMAIL && password == process.env.ADMIN_PASSW) {
      const adminUser: adminUserData = {
        token: uuid(),
        name: process.env.ADMIN_USERNAME,
        email: process.env.ADMIN_EMAIL,
        avatar_urL: process.env.ADMIN_AVATAR_URL
      }
      return NextResponse.json(adminUser)
    }

    return NextResponse.json("Invalid credentials", { status: 401, statusText: "Invalid credentials" })
  } catch (error) {

    return NextResponse.json(error, { status: 500, statusText: "Server Error" })
  }
}