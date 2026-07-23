import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '../layout/RootLayout'
import { HomePage } from '../pages/HomePage'
import { GettingStartedPage } from '../pages/GettingStartedPage'
import { AccordionPage } from '../pages/AccordionPage'
import { AlertPage } from '../pages/AlertPage'
import { AlertDialogPage } from '../pages/AlertDialogPage'
import { AspectRatioPage } from '../pages/AspectRatioPage'
import { AttachmentPage } from '../pages/AttachmentPage'
import { AvatarPage } from '../pages/AvatarPage'
import { BadgePage } from '../pages/BadgePage'
import { BreadcrumbPage } from '../pages/BreadcrumbPage'
import { BubblePage } from '../pages/BubblePage'
import { ButtonPage } from '../pages/ButtonPage'
import { ButtonGroupPage } from '../pages/ButtonGroupPage'
import { CalendarPage } from '../pages/CalendarPage'
import { CardPage } from '../pages/CardPage'
import { CarouselPage } from '../pages/CarouselPage'
import { ChartPage } from '../pages/ChartPage'
import { CheckboxPage } from '../pages/CheckboxPage'
import { CollapsiblePage } from '../pages/CollapsiblePage'
import { ComboboxPage } from '../pages/ComboboxPage'
import { CommandPage } from '../pages/CommandPage'
import { ContextMenuPage } from '../pages/ContextMenuPage'
import { DataTablePage } from '../pages/DataTablePage'
import { DatePickerPage } from '../pages/DatePickerPage'
import { DialogPage } from '../pages/DialogPage'
import { DirectionPage } from '../pages/DirectionPage'
import { DropdownMenuPage } from '../pages/DropdownMenuPage'
import { EmptyPage } from '../pages/EmptyPage'
import { FieldPage } from '../pages/FieldPage'
import { HoverCardPage } from '../pages/HoverCardPage'
import { InputPage } from '../pages/InputPage'
import { InputGroupPage } from '../pages/InputGroupPage'
import { InputOTPPage } from '../pages/InputOTPPage'
import { ItemPage } from '../pages/ItemPage'
import { KbdPage } from '../pages/KbdPage'
import { LabelPage } from '../pages/LabelPage'
import { MarkerPage } from '../pages/MarkerPage'
import { MenubarPage } from '../pages/MenubarPage'
import { MessagePage } from '../pages/MessagePage'
import { MessageScrollerPage } from '../pages/MessageScrollerPage'
import { NativeSelectPage } from '../pages/NativeSelectPage'
import { NavigationMenuPage } from '../pages/NavigationMenuPage'
import { PaginationPage } from '../pages/PaginationPage'
import { PopoverPage } from '../pages/PopoverPage'
import { ProgressPage } from '../pages/ProgressPage'
import { RadioGroupPage } from '../pages/RadioGroupPage'
import { ResizablePage } from '../pages/ResizablePage'
import { ScrollAreaPage } from '../pages/ScrollAreaPage'
import { SelectPage } from '../pages/SelectPage'
import { SeparatorPage } from '../pages/SeparatorPage'
import { SheetPage } from '../pages/SheetPage'
import { SidebarPage } from '../pages/SidebarPage'
import { SkeletonPage } from '../pages/SkeletonPage'
import { SliderPage } from '../pages/SliderPage'
import { SonnerPage } from '../pages/SonnerPage'
import { SpinnerPage } from '../pages/SpinnerPage'
import { SwitchPage } from '../pages/SwitchPage'
import { TablePage } from '../pages/TablePage'
import { TabsPage } from '../pages/TabsPage'
import { TextareaPage } from '../pages/TextareaPage'
import { ToastPage } from '../pages/ToastPage'
import { TogglePage } from '../pages/TogglePage'
import { ToggleGroupPage } from '../pages/ToggleGroupPage'
import { TooltipPage } from '../pages/TooltipPage'
import { TypographyPage } from '../pages/TypographyPage'
import { ThemesPage } from '../pages/ThemesPage'
import { NotFoundPage } from '../pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/getting-started', element: <GettingStartedPage /> },
      { path: '/component/accordion', element: <AccordionPage /> },
      { path: '/component/alert', element: <AlertPage /> },
      { path: '/component/alert-dialog', element: <AlertDialogPage /> },
      { path: '/component/aspect-ratio', element: <AspectRatioPage /> },
      { path: '/component/attachment', element: <AttachmentPage /> },
      { path: '/component/avatar', element: <AvatarPage /> },
      { path: '/component/badge', element: <BadgePage /> },
      { path: '/component/breadcrumb', element: <BreadcrumbPage /> },
      { path: '/component/bubble', element: <BubblePage /> },
      { path: '/component/button', element: <ButtonPage /> },
      { path: '/component/button-group', element: <ButtonGroupPage /> },
      { path: '/component/calendar', element: <CalendarPage /> },
      { path: '/component/card', element: <CardPage /> },
      { path: '/component/carousel', element: <CarouselPage /> },
      { path: '/component/chart', element: <ChartPage /> },
      { path: '/component/checkbox', element: <CheckboxPage /> },
      { path: '/component/collapsible', element: <CollapsiblePage /> },
      { path: '/component/combobox', element: <ComboboxPage /> },
      { path: '/component/command', element: <CommandPage /> },
      { path: '/component/context-menu', element: <ContextMenuPage /> },
      { path: '/component/data-table', element: <DataTablePage /> },
      { path: '/component/date-picker', element: <DatePickerPage /> },
      { path: '/component/dialog', element: <DialogPage /> },
      { path: '/component/direction', element: <DirectionPage /> },
      { path: '/component/dropdown-menu', element: <DropdownMenuPage /> },
      { path: '/component/empty', element: <EmptyPage /> },
      { path: '/component/field', element: <FieldPage /> },
      { path: '/component/hover-card', element: <HoverCardPage /> },
      { path: '/component/input', element: <InputPage /> },
      { path: '/component/input-group', element: <InputGroupPage /> },
      { path: '/component/input-otp', element: <InputOTPPage /> },
      { path: '/component/item', element: <ItemPage /> },
      { path: '/component/kbd', element: <KbdPage /> },
      { path: '/component/label', element: <LabelPage /> },
      { path: '/component/marker', element: <MarkerPage /> },
      { path: '/component/menubar', element: <MenubarPage /> },
      { path: '/component/message', element: <MessagePage /> },
      { path: '/component/message-scroller', element: <MessageScrollerPage /> },
      { path: '/component/native-select', element: <NativeSelectPage /> },
      { path: '/component/navigation-menu', element: <NavigationMenuPage /> },
      { path: '/component/pagination', element: <PaginationPage /> },
      { path: '/component/popover', element: <PopoverPage /> },
      { path: '/component/progress', element: <ProgressPage /> },
      { path: '/component/radio-group', element: <RadioGroupPage /> },
      { path: '/component/resizable', element: <ResizablePage /> },
      { path: '/component/scroll-area', element: <ScrollAreaPage /> },
      { path: '/component/select', element: <SelectPage /> },
      { path: '/component/separator', element: <SeparatorPage /> },
      { path: '/component/sheet', element: <SheetPage /> },
      { path: '/component/sidebar', element: <SidebarPage /> },
      { path: '/component/skeleton', element: <SkeletonPage /> },
      { path: '/component/slider', element: <SliderPage /> },
      { path: '/component/sonner', element: <SonnerPage /> },
      { path: '/component/spinner', element: <SpinnerPage /> },
      { path: '/component/switch', element: <SwitchPage /> },
      { path: '/component/table', element: <TablePage /> },
      { path: '/component/tabs', element: <TabsPage /> },
      { path: '/component/textarea', element: <TextareaPage /> },
      { path: '/component/toast', element: <ToastPage /> },
      { path: '/component/toggle', element: <TogglePage /> },
      { path: '/component/toggle-group', element: <ToggleGroupPage /> },
      { path: '/component/tooltip', element: <TooltipPage /> },
      { path: '/component/typography', element: <TypographyPage /> },
      { path: '/themes', element: <ThemesPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
