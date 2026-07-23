import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator, MenubarLabel } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function MenubarPage() {
  return (
    <ComponentDoc
      name="Menubar" description="A horizontal menu bar with dropdown menus. Built on Radix UI Menubar."
      radixPrimitive="@radix-ui/react-menubar"
      preview={
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New File</MenubarItem>
              <MenubarItem>Open...</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Save</MenubarItem>
              <MenubarItem>Save As...</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Exit</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarLabel>Actions</MenubarLabel>
              <MenubarItem>Undo</MenubarItem>
              <MenubarItem>Redo</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Cut</MenubarItem>
              <MenubarItem>Copy</MenubarItem>
              <MenubarItem>Paste</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      }
      code={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New File</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Save</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
      props={[
        { name: 'Menubar', type: '—', defaultVal: '—', description: 'Root container for the menubar' },
        { name: 'MenubarMenu', type: '—', defaultVal: '—', description: 'Contains a trigger and its associated content' },
        { name: 'MenubarTrigger', type: '—', defaultVal: '—', description: 'The button that opens the menu' },
        { name: 'MenubarContent', type: '—', defaultVal: '—', description: 'The dropdown content' },
        { name: 'MenubarItem', type: '—', defaultVal: '—', description: 'An item within the content' },
        { name: 'MenubarSeparator', type: '—', defaultVal: '—', description: 'Separator line between items' },
        { name: 'MenubarLabel', type: '—', defaultVal: '—', description: 'Label for a section of items' },
      ]}
      variants={
        <div className="space-y-6">
          <Row label="File Menu">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>New File</MenubarItem>
                  <MenubarItem>Open...</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Save</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </Row>
          <Row label="Edit Menu">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Undo</MenubarItem>
                  <MenubarItem>Redo</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </Row>
        </div>
      }
    />
  )
}
