import * as React from 'react'
import { Eye, EyeOff, LoaderCircle, UserPlus } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Button } from '../Button'
import { Card } from '../Card'
import { Input } from '../Input'
import { Label } from '../Label'
import { Checkbox } from '../Checkbox'
import { Separator } from '../Separator'

export interface SignUpCenteredProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSubmit'> {
  onSubmit?: (data: { name: string; email: string; password: string; agree: boolean }) => Promise<void> | void
  onToggleMode?: () => void
  brandSlot?: React.ReactNode
  socialButtons?: React.ReactNode
}

export function SignUpCentered({
  className,
  onSubmit,
  onToggleMode,
  brandSlot,
  socialButtons,
  ...props
}: SignUpCenteredProps) {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [agree, setAgree] = React.useState(false)
  const [showPassword, setShowPassword] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')
  const [fieldErrors, setFieldErrors] = React.useState<Record<string, string>>({})

  const validate = () => {
    const errors: Record<string, string> = {}
    if (!name.trim()) errors.name = 'Name is required'
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Valid email required'
    if (!password || password.length < 8) errors.password = 'Password must be at least 8 characters'
    if (!agree) errors.agree = 'You must agree to the terms'
    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!validate()) return
    setLoading(true)
    try {
      await onSubmit?.({ name, email, password, agree })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    }
    setLoading(false)
  }

  return (
    <div className={cn('flex min-h-screen items-center justify-center bg-background p-4', className)} {...props}>
      <Card className="w-full max-w-md p-8">
        <div className="flex flex-col items-center gap-2 text-center">
          {brandSlot}
          <h1 className="text-2xl font-bold text-foreground">Create an account</h1>
          <p className="text-sm text-muted-foreground">Fill in the details below to get started.</p>
        </div>

        {error ? <div className="mt-4 rounded-md bg-destructive/10 p-3 text-sm text-destructive" role="alert">{error}</div> : null}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="signup-name">Full Name</Label>
            <Input id="signup-name" placeholder="Jane Doe" value={name} onChange={(e) => { setName(e.target.value); setFieldErrors((p) => ({ ...p, name: '' })) }} aria-invalid={!!fieldErrors.name} />
            {fieldErrors.name ? <p className="text-xs text-destructive">{fieldErrors.name}</p> : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-email">Email</Label>
            <Input id="signup-email" type="email" placeholder="hello@example.com" value={email} onChange={(e) => { setEmail(e.target.value); setFieldErrors((p) => ({ ...p, email: '' })) }} aria-invalid={!!fieldErrors.email} />
            {fieldErrors.email ? <p className="text-xs text-destructive">{fieldErrors.email}</p> : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="signup-password">Password</Label>
            <div className="relative">
              <Input id="signup-password" type={showPassword ? 'text' : 'password'} placeholder="Min. 8 characters" value={password} onChange={(e) => { setPassword(e.target.value); setFieldErrors((p) => ({ ...p, password: '' })) }} aria-invalid={!!fieldErrors.password} />
              <Button type="button" variant="ghost" size="sm" iconOnly className="absolute right-1 top-1/2 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? 'Hide password' : 'Show password'}>
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
            {fieldErrors.password ? <p className="text-xs text-destructive">{fieldErrors.password}</p> : null}
          </div>
          <label className="flex items-start gap-2 text-sm text-foreground">
            <Checkbox checked={agree} onCheckedChange={(v) => { setAgree(v === true); setFieldErrors((p) => ({ ...p, agree: '' })) }} />
            <span>I agree to the <button type="button" className="underline underline-offset-2">Terms &amp; Privacy Policy</button></span>
          </label>
          {fieldErrors.agree ? <p className="text-xs text-destructive">{fieldErrors.agree}</p> : null}

          <Button type="submit" className="w-full" loading={loading} disabled={loading}>
            {loading ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <UserPlus className="h-4 w-4" />}
            Create Account
          </Button>
        </form>

        {socialButtons ? (
          <><Separator className="my-6" /><div className="flex flex-col gap-2">{socialButtons}</div></>
        ) : null}

        {onToggleMode ? (
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <button type="button" onClick={onToggleMode} className="font-medium text-primary underline-offset-4 hover:underline">Sign in</button>
          </p>
        ) : null}
      </Card>
    </div>
  )
}
