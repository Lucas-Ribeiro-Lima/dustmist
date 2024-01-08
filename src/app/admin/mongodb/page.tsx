import { AuthProvider } from "@/components/contexts/authContext"
import { MongoLayout } from "@/components/mongo/mongoLayout"

export default function Home() {
    return (
        <AuthProvider>
            <MongoLayout></MongoLayout>
        </AuthProvider>
    )
}