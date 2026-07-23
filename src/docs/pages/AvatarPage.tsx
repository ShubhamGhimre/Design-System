import { Avatar } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function AvatarPage() {
  return (
    <ComponentDoc
      name="Avatar" description="Displays a user avatar with fallback support. Built on Radix UI Avatar."
      radixPrimitive="@radix-ui/react-avatar"
      preview={<Avatar fallback="JD" />}
      code={`<Avatar src="/avatar.jpg" alt="User" fallback="JD" />`}
      usage={`<Avatar fallback="AB" size="sm" />
<Avatar fallback="CD" size="md" />
<Avatar fallback="EF" size="lg" />`}
      props={[
        { name: 'src', type: 'string', defaultVal: '—', description: 'Image source URL' },
        { name: 'alt', type: 'string', defaultVal: '—', description: 'Alt text for the image' },
        { name: 'fallback', type: 'string', defaultVal: '—', description: 'Initials to show when no image' },
        { name: 'size', type: '"sm" | "md" | "lg"', defaultVal: '"md"', description: 'Avatar size' },
      ]}
      variants={
        <Row label="Sizes">
          <Avatar fallback="SM" size="sm" />
          <Avatar fallback="MD" size="md" />
          <Avatar fallback="LG" size="lg" />
        </Row>
      }
    />
  )
}
