import { Link } from 'react-router-dom'
import { Button } from '../../components'

export function NotFoundPage() {
  return (
    <div className="py-16 text-center">
      <h2 className="mb-2 text-5xl font-bold text-foreground">404</h2>
      <p className="mb-6 text-lg text-muted-foreground">The page you're looking for doesn't exist.</p>
      <Link to="/">
        <Button>Go Home</Button>
      </Link>
    </div>
  )
}
