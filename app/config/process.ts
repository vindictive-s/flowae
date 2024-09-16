import { ProcessConfig } from "../types";
import { BsSearch, BsCompass, BsPuzzle, BsWindowFullscreen, BsJournalBookmark, BsRocketTakeoff, BsGear } from "react-icons/bs";

export const processConfig: ProcessConfig = {
    mainProcess: [
        {
            title: "Discovery & Research",
            count: "01",
            icon: BsSearch,
        },
        {
            title: "Brand Strategy",
            count: "02",
            icon: BsCompass,
        },
        {
            title: "Brand Identity Design",
            count: "03",
            icon: BsPuzzle,
        },
        {
            title: "Visual Applications",
            count: "04",
            icon: BsWindowFullscreen,
        },
        {
            title: "Brand Guidelines",
            count: "05",
            icon: BsJournalBookmark,
        },
        {
            title: "Brand Launch & Communication",
            count: "06",
            icon: BsRocketTakeoff,
        },
        {
            title: "Ongoing Brand Management",
            count: "07",
            icon: BsGear,
        }
    ]
}