import { Kbd } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function KbdPage() {
  return (
    <ComponentDoc
      name="Kbd" description="Displays a keyboard shortcut or keycap. Use inside text to indicate key combinations."
      preview={
        <div className="flex items-center gap-2 text-sm">
          Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to search
        </div>
      }
      code={`Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to search`}
      props={[
        { name: 'children', type: 'ReactNode', defaultVal: '—', description: 'Key label or icon' },
      ]}
      variants={
        <div className="space-y-6">
          <Row label="Common shortcuts">
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span><Kbd>Ctrl</Kbd> + <Kbd>C</Kbd></span>
              <span><Kbd>⌘</Kbd> + <Kbd>V</Kbd></span>
              <span><Kbd>Ctrl</Kbd> + <Kbd>S</Kbd></span>
              <span><Kbd>Shift</Kbd> + <Kbd>⌘</Kbd> + <Kbd>P</Kbd></span>
            </div>
          </Row>
          <Row label="Single keys">
            <div className="flex flex-wrap items-center gap-2">
              <Kbd>Esc</Kbd>
              <Kbd>Enter</Kbd>
              <Kbd>Tab</Kbd>
              <Kbd>Space</Kbd>
              <Kbd>Delete</Kbd>
              <Kbd>↑</Kbd>
              <Kbd>↓</Kbd>
              <Kbd>←</Kbd>
              <Kbd>→</Kbd>
            </div>
          </Row>
        </div>
      }
    />
  )
}
