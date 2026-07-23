import * as React from 'react'
import { cn } from '../../lib/utils'

type InputOTPContextValue = {
  value: string[]
  setValue: React.Dispatch<React.SetStateAction<string[]>>
  maxLength: number
}

const InputOTPContext = React.createContext<InputOTPContextValue | null>(null)

function useInputOTP() {
  const ctx = React.useContext(InputOTPContext)
  if (!ctx) throw new Error('useInputOTP must be used within InputOTP')
  return ctx
}

export interface InputOTPProps extends React.HTMLAttributes<HTMLDivElement> {
  maxLength?: number
  value?: string
  onValueChange?: (value: string) => void
  pattern?: RegExp
}

export function InputOTP({
  maxLength = 6,
  value: controlledValue,
  onValueChange,
  pattern = /[0-9]/,
  className,
  ...props
}: InputOTPProps) {
  const [internalValue, setInternalValue] = React.useState<string[]>(
    Array.from({ length: maxLength }, () => ''),
  )

  const value = controlledValue
    ? controlledValue.split('').concat(Array.from({ length: maxLength }, () => '')).slice(0, maxLength)
    : internalValue

  const setValue: React.Dispatch<React.SetStateAction<string[]>> = React.useCallback(
    (next) => {
      if (controlledValue && onValueChange) {
        const resolved = typeof next === 'function' ? next(value) : next
        onValueChange(resolved.join(''))
      } else {
        setInternalValue(next)
      }
    },
    [controlledValue, onValueChange, value],
  )

  return (
    <InputOTPContext.Provider value={{ value, setValue, maxLength }}>
      <div className={cn('flex items-center gap-2', className)} {...props}>
        <Slots />
      </div>
    </InputOTPContext.Provider>
  )
}

function Slots() {
  const { value, setValue, maxLength } = useInputOTP()
  const refs = React.useRef<(HTMLInputElement | null)[]>([])

  const focus = (index: number) => refs.current[index]?.focus()

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      e.preventDefault()
      const newValue = [...value]
      newValue[index] = ''
      setValue(newValue)
      if (index > 0) focus(index - 1)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      if (index > 0) focus(index - 1)
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      if (index < maxLength - 1) focus(index + 1)
    }
  }

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const char = e.target.value.slice(-1)
    if (!char) return
    const newValue = [...value]
    newValue[index] = char
    setValue(newValue)
    if (index < maxLength - 1) focus(index + 1)
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const text = e.clipboardData.getData('text').replace(/\s/g, '')
    const newValue = [...value]
    for (let i = 0; i < Math.min(text.length, maxLength); i++) {
      newValue[i] = text[i] || ''
    }
    setValue(newValue)
    focus(Math.min(text.length, maxLength - 1))
  }

  return (
    <>
      {Array.from({ length: maxLength }, (_, i) => (
        <Slot
          key={i}
          ref={(el) => { refs.current[i] = el }}
          value={value[i]}
          onKeyDown={(e) => handleKeyDown(i, e)}
          onChange={(e) => handleChange(i, e)}
          onPaste={i === 0 ? handlePaste : undefined}
        />
      ))}
    </>
  )
}

interface SlotProps {
  value: string
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onPaste?: (e: React.ClipboardEvent) => void
}

const Slot = React.forwardRef<HTMLInputElement, SlotProps>(
  function Slot({ value, onKeyDown, onChange, onPaste }, ref) {
    return (
      <div className="relative">
        <input
          ref={ref}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={value}
          onKeyDown={onKeyDown}
          onChange={onChange}
          onPaste={onPaste}
          className={cn(
            'size-10 rounded-md border border-input bg-background text-center text-lg font-semibold text-foreground',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
            'transition-[border-color,box-shadow] duration-normal ease-standard',
            value && 'border-primary',
          )}
        />
      </div>
    )
  },
)

export function InputOTPSeparator({ className }: { className?: string }) {
  return (
    <div className={cn('text-muted-foreground', className)} aria-hidden="true">
      <svg width="12" height="4" viewBox="0 0 12 4" fill="none">
        <circle cx="2" cy="2" r="1.5" fill="currentColor" />
        <circle cx="10" cy="2" r="1.5" fill="currentColor" />
      </svg>
    </div>
  )
}
