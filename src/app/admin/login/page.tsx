import { AuthProvider } from "@/components/contexts/authContext";
import { Login } from "@/components/login/login";

export default function LoginPage() {
  return (
    <AuthProvider>
      <Login></Login>
    </AuthProvider>
  )
}