import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function ResizablePage() {
  return (
    <ComponentDoc
      name="Resizable" description="A resizable panel layout using react-resizable-panels."
      preview={
        <ResizablePanelGroup orientation="horizontal" className="h-48 rounded-lg border border-border">
          <ResizablePanel defaultSize={33}>
            <div className="flex h-full items-center justify-center p-4 text-sm text-muted-foreground">Left Panel</div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={33}>
            <div className="flex h-full items-center justify-center p-4 text-sm text-muted-foreground">Center Panel</div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={34}>
            <div className="flex h-full items-center justify-center p-4 text-sm text-muted-foreground">Right Panel</div>
          </ResizablePanel>
        </ResizablePanelGroup>
      }
      code={`<ResizablePanelGroup orientation="horizontal">
  <ResizablePanel defaultSize={50}>
    Panel A
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={50}>
    Panel B
  </ResizablePanel>
</ResizablePanelGroup>`}
      props={[
        { name: 'ResizablePanelGroup', type: '—', defaultVal: '—', description: 'Root container. Accepts direction (horizontal/vertical)' },
        { name: 'ResizablePanel', type: '—', defaultVal: '—', description: 'A resizable panel. Accepts defaultSize, minSize, maxSize' },
        { name: 'ResizableHandle', type: '—', defaultVal: '—', description: 'Draggable handle between panels. Accepts withHandle prop' },
      ]}
      variants={
        <Row label="Horizontal split with 3 panels">
          <ResizablePanelGroup orientation="horizontal" className="h-40 rounded-lg border border-border">
            <ResizablePanel defaultSize={33}>
              <div className="flex h-full items-center justify-center p-4 text-sm text-muted-foreground">A</div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={33}>
              <div className="flex h-full items-center justify-center p-4 text-sm text-muted-foreground">B</div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={34}>
              <div className="flex h-full items-center justify-center p-4 text-sm text-muted-foreground">C</div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </Row>
      }
    />
  )
}
