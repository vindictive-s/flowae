import type { Icon } from "react-icons"

import { Icons } from "@/(shared)/Icons";

export type NavItem = {
    title: string
    href: string
    disabled?: boolean
}

export type MainNavItem = NavItem

export type NavConfig = {
    mainNav: MainNavItem[]
}

export type SiteConfig = {
    links: {
      twitter: string
      instagram: string
      tiktok: string
      pinterest: string
      linkedin: string
    }
}

export type ProcessItem = {
    title: string
    count: string
    icon: any
}

export type MainProcessItem = ProcessItem

export type ProcessConfig = {
    mainProcess: MainProcessItem[]
}

export type CardItem = {
    title: string
    icon: any
}

export type MainCardItem = CardItem

export type CardConfig = {
    mainCard: MainCardItem[]
}

export type ServicesItem = {
    type: string
    title: string
    price: string
    description: string
}

export type MainServicesItem = ServicesItem

export type ServicesConfig = {
    mainServices: MainServicesItem[]
}

export type AboutItem = {
    background: string
    description: string
}

export type MainAboutItem = AboutItem

export type AboutConfig = {
    mainAbout: MainAboutItem[]
}