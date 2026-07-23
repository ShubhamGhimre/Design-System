import * as React from 'react'
import { Eye, EyeOff, LoaderCircle, LogIn } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Button } from '../Button'
import { Input } from '../Input'
import { Label } from '../Label'
import { Checkbox } from '../Checkbox'
import { Separator } from '../Separator'

export interface LoginSplitScreenProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSubmit'> {
  onSubmit?: (data: { email: string; password: string; remember: boolean }) => Promise<void> | void
  onToggleMode?: () => void
  brandSlot?: React.ReactNode
  imageSlot?: React.ReactNode
  socialButtons?: React.ReactNode
}

export function LoginSplitScreen({
  className,
  onSubmit,
  onToggleMode,
  brandSlot,
  imageSlot,
  socialButtons,
  ...props
}: LoginSplitScreenProps) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [remember, setRemember] = React.useState(false)
  const [showPassword, setShowPassword] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')
  const [fieldErrors, setFieldErrors] = React.useState<{ email?: string; password?: string }>({})

  const validate = () => {
    const errors: { email?: string; password?: string } = {}
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Valid email required'
    if (!password) errors.password = 'Password required'
    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!validate()) return
    setLoading(true)
    try {
      await onSubmit?.({ email, password, remember })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid email or password')
    }
    setLoading(false)
  }

  return (
    <div className={cn('flex min-h-screen', className)} {...props}>
      <div className="relative hidden flex-1 lg:block">
        {imageSlot ?? (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5 p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground">Your Brand</h2>
              <p className="mt-2 text-muted-foreground">Tagline or value proposition here.</p>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-1 items-center justify-center bg-background p-8">
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center gap-2 text-center">
            {brandSlot}
            <h1 className="text-2xl font-bold text-foreground">Welcome back</h1>
            <p className="text-sm text-muted-foreground">Sign in to your account to continue.</p>
          </div>

          {error ? (
            <div className="mt-4 rounded-md bg-destructive/10 p-3 text-sm text-destructive" role="alert">{error}</div>
          ) : null}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="splitscreen-email">Email</Label>
              <Input
                id="splitscreen-email"
                type="email"
                placeholder="hello@example.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setFieldErrors((p) => ({ ...p, email: undefined })) }}
                aria-invalid={!!fieldErrors.email}
              />
              {fieldErrors.email ? <p className="text-xs text-destructive">{fieldErrors.email}</p> : null}
            </div>
            <div className="space-y-2">
              <Label htmlFor="splitscreen-password">Password</Label>
              <div className="relative">
                <Input
                  id="splitscreen-password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setFieldErrors((p) => ({ ...p, password: undefined })) }}
                  aria-invalid={!!fieldErrors.password}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  iconOnly
                  className="absolute right-1 top-1/2 -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              {fieldErrors.password ? <p className="text-xs text-destructive">{fieldErrors.password}</p> : null}
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-foreground">
                <Checkbox checked={remember} onCheckedChange={(v) => setRemember(v === true)} />
                Remember me
              </label>
              <button type="button" className="text-sm text-primary underline-offset-4 hover:underline">Forgot password?</button>
            </div>
            <Button type="submit" className="w-full" loading={loading} disabled={loading}>
              {loading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <LogIn className="h-4 w-4" />}
              Sign In
            </Button>
          </form>

          {socialButtons ? (
            <>
              <Separator className="my-6" />
              <div className="flex flex-col gap-2">{socialButtons}</div>
            </>
          ) : null}

          {onToggleMode ? (
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{' '}
              <button type="button" onClick={onToggleMode} className="font-medium text-primary underline-offset-4 hover:underline">Sign up</button>
            </p>
          ) : null}
        </div>
      </div>
    </div>
  )
}
