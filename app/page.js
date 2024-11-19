import Dashboard from './components/Dashboard'

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-12 bg-gray-100 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-center text-gray-900">Healthcare Dashboard</h1>
        <Dashboard />
      </div>
    </main>
  )
}
