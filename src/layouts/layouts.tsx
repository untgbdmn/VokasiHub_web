import { PropsWithChildren } from "react"
import { AppSidebar } from "../components/app-sidebar"
import {
    SidebarInset,
    SidebarProvider,
} from "../components/ui/sidebar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import UserAdmin from "../assets/pictures/man.png"
export function Layouts({ children }: PropsWithChildren ) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <Header />
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}

function Header() {
    return (
        <header className="bg-sidebar flex h-fit py-1.5 text-white shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4 justify-between w-full">
                <div className="flex w-full justify-end items-center">
                    <NavProfile />
                </div>
            </div>
        </header>
    )
}

function NavProfile() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="flex flex-row-reverse items-center justify-center gap-3">
                    <img src={UserAdmin} alt="" className="w-8 h-8" />
                    <div className="flex flex-col items-end">
                        <h1 className="font-bold text-sm">Administrator</h1>
                        <span className="text-xs font-normal">administrator@admin.com</span>
                    </div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="">
                <DropdownMenuLabel>
                    <div className="flex flex-col items-center">
                        <h1 className="text-base font-bold">Administrator</h1>
                        <span className="text-xs font-normal">administrator@admin.com</span>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Log Out</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export function BannerHead({children}: PropsWithChildren) {
    return (
        <div className="mt-5 py-2 px-2 border shadow-lg rounded-md flex flex-col justify-center bg-white">
            <h1 className="text-xs font-normal">VokasiHub Panel</h1>
            <h1 className="font-bold text-lg text-sidebar-primary">{children}</h1>
        </div>
    )
}
