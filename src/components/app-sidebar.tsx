import * as React from "react"
import {
    AudioWaveform,
    Command,
    Frame,
    GalleryVerticalEnd,
    LayoutDashboard,
    SquareTerminal,
} from "lucide-react"

import { NavMain } from "../components/nav-main"
import { NavProjects } from "../components/nav-projects"
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarRail,
} from "../components/ui/sidebar"
import { NavbarItem } from "./nav-link"

// This is sample data.
const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "Acme Inc",
            logo: GalleryVerticalEnd,
            plan: "Enterprise",
        },
        {
            name: "Acme Corp.",
            logo: AudioWaveform,
            plan: "Startup",
        },
        {
            name: "Evil Corp.",
            logo: Command,
            plan: "Free",
        },
    ],
    navMain: [
        {
            title: "Playground",
            url: "#",
            icon: SquareTerminal,
            isActive: false,
            items: [
                {
                    title: "History",
                    url: "#",
                },
                {
                    title: "Starred",
                    url: "#",
                },
                {
                    title: "Settings",
                    url: "#",
                },
            ],
        },
    ],
    projects: [
        {
            name: "Design Engineering",
            url: "#",
            icon: Frame,
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <h1 className="px-2 text-2xl font-bold">Vokasi <span className="text-blue-500">Hub</span> </h1>
            </SidebarHeader>
            <SidebarContent>
                <NavbarItem href="/dashboard" icon={LayoutDashboard}>Dashboard</NavbarItem>
                <NavMain items={data.navMain}/>
                <NavProjects projects={data.projects} />
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}
