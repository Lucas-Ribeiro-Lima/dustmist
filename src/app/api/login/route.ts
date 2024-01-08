import { NextRequest, NextResponse } from "next/server";

export type adminUserData = {
  secret: string,
  user: {
    name: string,
    email: string,
    avatar_url: string,
  }
}

export async function GET(request: NextRequest) {
  try {
    const secret = request.headers.get('Authorization')

    if (secret === `Bearer ${process.env.ADMIN_SECRET}`) {
      const user = {
        user: {
          name: process.env.ADMIN_USERNAME,
          email: process.env.ADMIN_EMAIL,
          avatar_url: process.env.ADMIN_AVATAR_URL
        }
      }
      return NextResponse.json(user, { status: 200, statusText: "Authenticated" })
    }
    return NextResponse.json({ message: "Forbidden" }, { status: 401, statusText: "Forbidden" })
  }
  catch (error) {
    return NextResponse.json({ error: `${error}` }, { status: 500, statusText: "Server Error" })
  }
}

export async function POST(request: NextRequest) {

  try {
    const { email, password } = await request.json()

    if (email == process.env.ADMIN_EMAIL && password == process.env.ADMIN_PASSW) {
      const adminUser: adminUserData = {
        secret: process.env.ADMIN_SECRET,
        user: {
          name: process.env.ADMIN_USERNAME,
          email: process.env.ADMIN_EMAIL,
          avatar_url: process.env.ADMIN_AVATAR_URL
        }
      }
      return NextResponse.json(adminUser, { status: 200, statusText: "Authenticated" })
    }

    return NextResponse.json({ message: "Invalid credentials" }, { status: 401, statusText: "Invalid credentials" })
  } catch (error) {

    return NextResponse.json({ error: `${error}` }, { status: 500, statusText: "Server Error" })
  }
}