/**
 * Component Registry
 *
 * This file lists all available shadcn/ui components for reference during code generation.
 * DO NOT import from this file - it's for documentation only.
 * Always import components directly from their individual files:
 *
 * ✅ import { Button } from '@/components/ui/button'
 * ❌ import { Button } from '@/components/ui/registry'
 */

export const AVAILABLE_COMPONENTS = [
  'accordion',
  'alert',
  'alert-dialog',
  'aspect-ratio',
  'avatar',
  'badge',
  'breadcrumb',
  'button',
  'button-group',
  'calendar',
  'card',
  'carousel',
  'chart',
  'checkbox',
  'collapsible',
  'command',
  'context-menu',
  'dialog',
  'drawer',
  'dropdown-menu',
  'empty',
  'field',
  'form',
  'hover-card',
  'input',
  'input-group',
  'input-otp',
  'item',
  'kbd',
  'label',
  'menubar',
  'navigation-menu',
  'pagination',
  'popover',
  'progress',
  'radio-group',
  'resizable',
  'scroll-area',
  'select',
  'separator',
  'sheet',
  'sidebar',
  'skeleton',
  'slider',
  'sonner',
  'spinner',
  'switch',
  'table',
  'tabs',
  'textarea',
  'toggle',
  'toggle-group',
  'tooltip',
] as const

export type AvailableComponent = (typeof AVAILABLE_COMPONENTS)[number]

/**
 * Component Import Examples
 *
 * Always import components individually from their files:
 *
 * Basic components:
 * ```typescript
 * import { Button } from '@/components/ui/button'
 * import { Input } from '@/components/ui/input'
 * import { Label } from '@/components/ui/label'
 * import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card'
 * ```
 *
 * Form components:
 * ```typescript
 * import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form'
 * import { Checkbox } from '@/components/ui/checkbox'
 * import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
 * import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
 * import { Textarea } from '@/components/ui/textarea'
 * ```
 *
 * Dialog and overlay components:
 * ```typescript
 * import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
 * import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from '@/components/ui/sheet'
 * import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
 * import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction, AlertDialogCancel } from '@/components/ui/alert-dialog'
 * ```
 *
 * Navigation components:
 * ```typescript
 * import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
 * import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
 * import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/ui/navigation-menu'
 * import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb'
 * ```
 *
 * Data display components:
 * ```typescript
 * import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'
 * import { Badge } from '@/components/ui/badge'
 * import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
 * import { Skeleton } from '@/components/ui/skeleton'
 * import { Progress } from '@/components/ui/progress'
 * ```
 *
 * Feedback components:
 * ```typescript
 * import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
 * import { Sonner } from '@/components/ui/sonner' // Toast notifications
 * import { Spinner } from '@/components/ui/spinner'
 * ```
 *
 * Layout components:
 * ```typescript
 * import { Separator } from '@/components/ui/separator'
 * import { ScrollArea } from '@/components/ui/scroll-area'
 * import { Resizable, ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
 * import { AspectRatio } from '@/components/ui/aspect-ratio'
 * ```
 *
 * Advanced components:
 * ```typescript
 * import { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator, CommandShortcut } from '@/components/ui/command'
 * import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
 * import { Chart } from '@/components/ui/chart'
 * import { Calendar } from '@/components/ui/calendar'
 * ```
 */

