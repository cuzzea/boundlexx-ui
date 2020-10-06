import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
    en: {
        translation: {
            "API Documentation": "API Documentation",
            "Auto-Detect": "Auto-Detect",
            "Browser Selected": "Browser Selected",
            "Change Language": "Change Language",
            "Change Theme": "Change Theme",
            "Color FoundWithCount_plural": "{{ count }} Colors Found",
            "Color FoundWithCount": "{{ count }} Color Found",
            "Color-Cycling": "Color-Cycling",
            "Emoji FoundWithCount_plural": "{{ count }} Emojis Found",
            "Emoji FoundWithCount": "{{ count }} Emoji Found",
            "In-game Name_plural": "In-game Names",
            "In-game Name": "In-game Name",
            "Item FoundWithCount_plural": "{{ count }} Items Found",
            "Item FoundWithCount": "{{ count }} Item Found",
            "Page Not Found": "Page Not Found",
            "Search Color": "Search Colors",
            "Search Emoji": "Search Emojis",
            "Search Item": "Search Items",
            "Search World": "Search Worlds",
            "The Boundless Lexicon": "The Boundless Lexicon",
            "World FoundWithCount_plural": "{{ count }} Worlds Found",
            "World FoundWithCount": "{{ count }} World Found",
            Active: "Active",
            Blast: "Blast",
            Blink: "Blink",
            Boundlexx: "Boundlexx",
            Brutal: "Brutal",
            Burn: "Burn",
            Chill: "Chill",
            Coal: "Coal",
            Color_plural: "Colors",
            Color: "Color",
            Corrosive: "Corrosive",
            Dark: "Dark",
            Emoji_plural: "Emojis",
            Emoji: "Emoji",
            Error: "Error",
            Fierce: "Fierce",
            ID_plural: "IDs",
            ID: "ID",
            Inactive: "Inactive",
            Inhospitable: "Inhospitable",
            Item_plural: "Items",
            Item: "Items",
            Language: "Language",
            Light: "Light",
            Locked: "Locked",
            Lush: "Lush",
            Metal: "Metal",
            Placid: "Placid",
            Rift: "Rift",
            Rugged: "Rugged",
            Savage: "Savage",
            Shock: "Shock",
            Temperate: "Temperate",
            Theme: "Theme",
            Toxic: "Toxic",
            Turbulent: "Turbulent",
            Umbris: "Umbris",
            World_plural: "Worlds",
            World: "World",
        },
    },
    fr: {
        translation: {
            "API Documentation": "API Documentation",
            "Auto-Detect": "Auto-Detect",
            "Browser Selected": "Browser Selected",
            "Color FoundWithCount_plural": "{{ count }} Colors Found",
            "Color FoundWithCount": "{{ count }} Color Found",
            "Color-Cycling": "Color-Cycling",
            "Emoji FoundWithCount_plural": "{{ count }} Emojis Found",
            "Emoji FoundWithCount": "{{ count }} Emoji Found",
            "In-game Name_plural": "In-game Names",
            "In-game Name": "In-game Name",
            "Item FoundWithCount_plural": "{{ count }} Items Found",
            "Item FoundWithCount": "{{ count }} Item Found",
            "Page Not Found": "Page Not Found",
            "Search Color": "Search Colors",
            "Search Emoji": "Search Emojis",
            "Search Item": "Search Items",
            "Search World": "Search Worlds",
            "The Boundless Lexicon": "The Boundless Lexicon",
            "World FoundWithCount_plural": "{{ count }} Worlds Found",
            "World FoundWithCount": "{{ count }} World Found",
            Active: "Active",
            Blast: "Blast",
            Blink: "Blink",
            Boundlexx: "Boundlexx",
            Brutal: "Brutal",
            Burn: "Burn",
            Chill: "Chill",
            Coal: "Coal",
            Color_plural: "Colors",
            Color: "Color",
            Corrosive: "Corrosive",
            Dark: "Dark",
            Emoji_plural: "Emojis",
            Emoji: "Emoji",
            Error: "Error",
            Fierce: "Fierce",
            ID_plural: "IDs",
            ID: "ID",
            Inactive: "Inactive",
            Inhospitable: "Inhospitable",
            Item_plural: "Items",
            Item: "Items",
            Light: "Light",
            Locked: "Locked",
            Lush: "Lush",
            Metal: "Metal",
            Placid: "Placid",
            Rift: "Rift",
            Rugged: "Rugged",
            Savage: "Savage",
            Shock: "Shock",
            Temperate: "Temperate",
            Toxic: "Toxic",
            Turbulent: "Turbulent",
            Umbris: "Umbris",
            World_plural: "Worlds",
            World: "World",
        },
    },
    de: {
        translation: {
            "API Documentation": "API Documentation",
            "Auto-Detect": "Auto-Detect",
            "Browser Selected": "Browser Selected",
            "Color FoundWithCount_plural": "{{ count }} Colors Found",
            "Color FoundWithCount": "{{ count }} Color Found",
            "Color-Cycling": "Color-Cycling",
            "Emoji FoundWithCount_plural": "{{ count }} Emojis Found",
            "Emoji FoundWithCount": "{{ count }} Emoji Found",
            "In-game Name_plural": "In-game Names",
            "In-game Name": "In-game Name",
            "Item FoundWithCount_plural": "{{ count }} Items Found",
            "Item FoundWithCount": "{{ count }} Item Found",
            "Page Not Found": "Page Not Found",
            "Search Color": "Search Colors",
            "Search Emoji": "Search Emojis",
            "Search Item": "Search Items",
            "Search World": "Search Worlds",
            "The Boundless Lexicon": "The Boundless Lexicon",
            "World FoundWithCount_plural": "{{ count }} Worlds Found",
            "World FoundWithCount": "{{ count }} World Found",
            Active: "Active",
            Blast: "Blast",
            Blink: "Blink",
            Boundlexx: "Boundlexx",
            Brutal: "Brutal",
            Burn: "Burn",
            Chill: "Chill",
            Coal: "Coal",
            Color_plural: "Colors",
            Color: "Color",
            Corrosive: "Corrosive",
            Dark: "Dark",
            Emoji_plural: "Emojis",
            Emoji: "Emoji",
            Error: "Error",
            Fierce: "Fierce",
            ID_plural: "IDs",
            ID: "ID",
            Inactive: "Inactive",
            Inhospitable: "Inhospitable",
            Item_plural: "Items",
            Item: "Items",
            Light: "Light",
            Locked: "Locked",
            Lush: "Lush",
            Metal: "Metal",
            Placid: "Placid",
            Rift: "Rift",
            Rugged: "Rugged",
            Savage: "Savage",
            Shock: "Shock",
            Temperate: "Temperate",
            Toxic: "Toxic",
            Turbulent: "Turbulent",
            Umbris: "Umbris",
            World_plural: "Worlds",
            World: "World",
        },
    },
    it: {
        translation: {
            "API Documentation": "API Documentation",
            "Auto-Detect": "Auto-Detect",
            "Browser Selected": "Browser Selected",
            "Color FoundWithCount_plural": "{{ count }} Colors Found",
            "Color FoundWithCount": "{{ count }} Color Found",
            "Color-Cycling": "Color-Cycling",
            "Emoji FoundWithCount_plural": "{{ count }} Emojis Found",
            "Emoji FoundWithCount": "{{ count }} Emoji Found",
            "In-game Name_plural": "In-game Names",
            "In-game Name": "In-game Name",
            "Item FoundWithCount_plural": "{{ count }} Items Found",
            "Item FoundWithCount": "{{ count }} Item Found",
            "Page Not Found": "Page Not Found",
            "Search Color": "Search Colors",
            "Search Emoji": "Search Emojis",
            "Search Item": "Search Items",
            "Search World": "Search Worlds",
            "The Boundless Lexicon": "The Boundless Lexicon",
            "World FoundWithCount_plural": "{{ count }} Worlds Found",
            "World FoundWithCount": "{{ count }} World Found",
            Active: "Active",
            Blast: "Blast",
            Blink: "Blink",
            Boundlexx: "Boundlexx",
            Brutal: "Brutal",
            Burn: "Burn",
            Chill: "Chill",
            Coal: "Coal",
            Color_plural: "Colors",
            Color: "Color",
            Corrosive: "Corrosive",
            Dark: "Dark",
            Emoji_plural: "Emojis",
            Emoji: "Emoji",
            Error: "Error",
            Fierce: "Fierce",
            ID_plural: "IDs",
            ID: "ID",
            Inactive: "Inactive",
            Inhospitable: "Inhospitable",
            Item_plural: "Items",
            Item: "Items",
            Light: "Light",
            Locked: "Locked",
            Lush: "Lush",
            Metal: "Metal",
            Placid: "Placid",
            Rift: "Rift",
            Rugged: "Rugged",
            Savage: "Savage",
            Shock: "Shock",
            Temperate: "Temperate",
            Toxic: "Toxic",
            Turbulent: "Turbulent",
            Umbris: "Umbris",
            World_plural: "Worlds",
            World: "World",
        },
    },
    es: {
        translation: {
            "API Documentation": "API Documentation",
            "Auto-Detect": "Auto-Detect",
            "Browser Selected": "Browser Selected",
            "Color FoundWithCount_plural": "{{ count }} Colors Found",
            "Color FoundWithCount": "{{ count }} Color Found",
            "Color-Cycling": "Color-Cycling",
            "Emoji FoundWithCount_plural": "{{ count }} Emojis Found",
            "Emoji FoundWithCount": "{{ count }} Emoji Found",
            "In-game Name_plural": "In-game Names",
            "In-game Name": "In-game Name",
            "Item FoundWithCount_plural": "{{ count }} Items Found",
            "Item FoundWithCount": "{{ count }} Item Found",
            "Page Not Found": "Page Not Found",
            "Search Color": "Search Colors",
            "Search Emoji": "Search Emojis",
            "Search Item": "Search Items",
            "Search World": "Search Worlds",
            "The Boundless Lexicon": "The Boundless Lexicon",
            "World FoundWithCount_plural": "{{ count }} Worlds Found",
            "World FoundWithCount": "{{ count }} World Found",
            Active: "Active",
            Blast: "Blast",
            Blink: "Blink",
            Boundlexx: "Boundlexx",
            Brutal: "Brutal",
            Burn: "Burn",
            Chill: "Chill",
            Coal: "Coal",
            Color_plural: "Colors",
            Color: "Color",
            Corrosive: "Corrosive",
            Dark: "Dark",
            Emoji_plural: "Emojis",
            Emoji: "Emoji",
            Error: "Error",
            Fierce: "Fierce",
            ID_plural: "IDs",
            ID: "ID",
            Inactive: "Inactive",
            Inhospitable: "Inhospitable",
            Item_plural: "Items",
            Item: "Items",
            Light: "Light",
            Locked: "Locked",
            Lush: "Lush",
            Metal: "Metal",
            Placid: "Placid",
            Rift: "Rift",
            Rugged: "Rugged",
            Savage: "Savage",
            Shock: "Shock",
            Temperate: "Temperate",
            Toxic: "Toxic",
            Turbulent: "Turbulent",
            Umbris: "Umbris",
            World_plural: "Worlds",
            World: "World",
        },
    },
};

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        resources,
        fallbackLng: "en",
        debug: true,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18n;
