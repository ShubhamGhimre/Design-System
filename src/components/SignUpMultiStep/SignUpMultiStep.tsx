import * as React from 'react'
import { Check, Eye, EyeOff, LoaderCircle, ArrowLeft, ArrowRight, UserPlus } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Button } from '../Button'
import { Card } from '../Card'
import { Input } from '../Input'
import { Label } from '../Label'
import { Checkbox } from '../Checkbox'
import { Separator } from '../Separator'

export interface SignUpMultiStepProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSubmit'> {
  onSubmit?: (data: { name: string; email: string; password: string; agree: boolean }) => Promise<void> | void
  onToggleMode?: () => void
  brandSlot?: React.ReactNode
  socialButtons?: React.ReactNode
}

const steps = [
  { id: 1, title: 'Account', description: 'Your email and password' },
  { id: 2, title: 'Profile', description: 'Tell us about yourself' },
  { id: 3, title: 'Confirm', description: 'Review and agree' },
]

export function SignUpMultiStep({
  className,
  onSubmit,
  onToggleMode,
  brandSlot,
  socialButtons,
  ...props
}: SignUpMultiStepProps) {
  const [step, setStep] = React.useState(1)
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [agree, setAgree] = React.useState(false)
  const [showPassword, setShowPassword] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')
  const [fieldErrors, setFieldErrors] = React.useState<Record<string, string>>({})

  const validateStep = (s: number): boolean => {
    const errors: Record<string, string> = {}
    if (s === 1) {
      if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Valid email required'
      if (!password || password.length < 8) errors.password = 'Password must be at least 8 characters'
    }
    if (s === 2) {
      if (!name.trim()) errors.name = 'Name is required'
    }
    if (s === 3) {
      if (!agree) errors.agree = 'You must agree to the terms'
    }
    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleNext = () => {
    if (validateStep(step)) setStep((p) => Math.min(p + 1, 3))
  }

  const handleBack = () => setStep((p) => Math.max(p - 1, 1))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!validateStep(step)) return
    if (step < 3) { handleNext(); return }
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
      <Card className="w-full max-w-lg p-8">
        <div className="flex flex-col items-center gap-2 text-center">
          {brandSlot}
          <h1 className="text-2xl font-bold text-foreground">Create your account</h1>
          <p className="text-sm text-muted-foreground">Step {step} of 3</p>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {steps.map((s) => (
            <div key={s.id} className="flex items-center gap-2">
              <div className={cn(
                'flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium',
                s.id < step ? 'bg-primary text-primary-foreground' : s.id === step ? 'border-2 border-primary text-primary' : 'border border-border text-muted-foreground',
              )}>
                {s.id < step ? <Check className="h-4 w-4" /> : s.id}
              </div>
              {s.id < 3 ? <div className={cn('h-0.5 w-8', s.id < step ? 'bg-primary' : 'bg-border')} /> : null}
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="font-medium text-foreground">{steps[step - 1].title}</p>
          <p className="text-xs text-muted-foreground">{steps[step - 1].description}</p>
        </div>

        {error ? <div className="mt-4 rounded-md bg-destructive/10 p-3 text-sm text-destructive" role="alert">{error}</div> : null}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {step === 1 ? (
            <>
              <div className="space-y-2">
                <Label htmlFor="ms-email">Email</Label>
                <Input id="ms-email" type="email" placeholder="hello@example.com" value={email} onChange={(e) => { setEmail(e.target.value); setFieldErrors((p) => ({ ...p, email: '' })) }} aria-invalid={!!fieldErrors.email} />
                {fieldErrors.email ? <p className="text-xs text-destructive">{fieldErrors.email}</p> : null}
              </div>
              <div className="space-y-2">
                <Label htmlFor="ms-password">Password</Label>
                <div className="relative">
                  <Input id="ms-password" type={showPassword ? 'text' : 'password'} placeholder="Min. 8 characters" value={password} onChange={(e) => { setPassword(e.target.value); setFieldErrors((p) => ({ ...p, password: '' })) }} aria-invalid={!!fieldErrors.password} />
                  <Button type="button" variant="ghost" size="sm" iconOnly className="absolute right-1 top-1/2 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? 'Hide password' : 'Show password'}>
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
                {fieldErrors.password ? <p className="text-xs text-destructive">{fieldErrors.password}</p> : null}
              </div>
            </>
          ) : null}

          {step === 2 ? (
            <div className="space-y-2">
              <Label htmlFor="ms-name">Full Name</Label>
              <Input id="ms-name" placeholder="Jane Doe" value={name} onChange={(e) => { setName(e.target.value); setFieldErrors((p) => ({ ...p, name: '' })) }} aria-invalid={!!fieldErrors.name} />
              {fieldErrors.name ? <p className="text-xs text-destructive">{fieldErrors.name}</p> : null}
            </div>
          ) : null}

          {step === 3 ? (
            <div className="space-y-3 rounded-md bg-muted p-4 text-sm">
              <div><span className="text-muted-foreground">Email:</span> <span className="text-foreground">{email}</span></div>
              <div><span className="text-muted-foreground">Password:</span> <span className="text-foreground">{'•'.repeat(Math.min(password.length, 12))}</span></div>
              <div><span className="text-muted-foreground">Name:</span> <span className="text-foreground">{name || '—'}</span></div>
              <Separator />
              <label className="flex items-start gap-2 text-foreground">
                <Checkbox checked={agree} onCheckedChange={(v) => { setAgree(v === true); setFieldErrors((p) => ({ ...p, agree: '' })) }} />
                <span>I agree to the <button type="button" className="underline underline-offset-2">Terms &amp; Privacy Policy</button></span>
              </label>
              {fieldErrors.agree ? <p className="text-xs text-destructive">{fieldErrors.agree}</p> : null}
            </div>
          ) : null}

          <div className="flex gap-3">
            {step > 1 ? (
              <Button type="button" variant="outline" onClick={handleBack} className="flex-1">
                <ArrowLeft className="h-4 w-4" /> Back
              </Button>
            ) : null}
            <Button type="submit" className="flex-1" loading={loading && step === 3} disabled={loading}>
              {step < 3 ? (
                <>Next <ArrowRight className="h-4 w-4" /></>
              ) : loading ? (
                <><LoaderCircle className="h-4 w-4 animate-spin" /> Creating...</>
              ) : (
                <><UserPlus className="h-4 w-4" /> Create Account</>
              )}
            </Button>
          </div>
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
