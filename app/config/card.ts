import { CardConfig } from "../types";
import {
    TbTags,
    TbScreenShare,
    TbDeviceMobile,
    TbSpeakerphone,
    TbSeo,
    TbFileDollar,
    TbCameraPlus,
    TbCloudDataConnection,
    TbMailOpened,
  } from "react-icons/tb";

export const cardConfig: CardConfig = {
    mainCard: [
        {
            title: "Brand Identity",
            icon: TbTags,
        },
        {
            title: "Website Design",
            icon: TbScreenShare,
        },
        {
            title: "Mobile App Development",
            icon: TbDeviceMobile,
        },
        {
            title: "Social Media Management",
            icon: TbSpeakerphone,
        },
        {
            title: "Search Engine Optimization",
            icon: TbSeo,
        },
        {
            title: "Paid Advertising",
            icon: TbFileDollar,
        },
        {
            title: "Content Creation",
            icon: TbCameraPlus,
        },
        {
            title: "Cloud Hosting",
            icon: TbCloudDataConnection,
        },
        {
            title: "Email Marketing",
            icon: TbMailOpened,
        },
    ]
}