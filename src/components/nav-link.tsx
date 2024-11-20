import { type LucideIcon } from "lucide-react"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../components/ui/sidebar"

interface NavbarItemProps {
  href: string
  icon?: LucideIcon // Membuat icon menjadi opsional
  children: React.ReactNode // Teks atau elemen lainnya sebagai children
}

export function NavbarItem({ href, icon: Icon, children }: NavbarItemProps) {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <a href={href} className="flex items-center space-x-2">
              {Icon && <Icon className="h-5 w-5" />} 
              <span>{children}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}
