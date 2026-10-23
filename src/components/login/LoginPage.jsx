import BrandPanel from './BrandPanel'
import LoginForm from './LoginForm'

export default function LoginPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-background">
      <div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-12">
        <BrandPanel />
        <LoginForm />
      </div>
    </main>
  )
}
