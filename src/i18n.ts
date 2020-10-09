import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
    en: {
        translation: {
            "API Documentation": "API Documentation",
            "Auto-Detect": "Auto-Detect",
            "Browser Selected": "Browser Selected",
            "Can Claim?": "Can Claim?",
            "Can Edit?": "Can Edit?",
            "Can Everyone create beacons and plot on your world?":
                "Can Everyone create beacons and plot on your world?",
            "Can Everyone edit blocks on your world (outside of plots)?":
                "Can Everyone edit blocks on your world (outside of plots)?",
            "Can Everyone warp/use portals to your world?": "Can Everyone warp/use portals to your world?",
            "Can Visit?": "Can Visit?",
            "Change Language": "Change Language",
            "Change Theme": "Change Theme",
            "Color FoundWithCount_plural": "{{ count }} Colors Found",
            "Color FoundWithCount": "{{ count }} Color Found",
            "Color-Cycling": "Color-Cycling",
            "Copy to Clipboard": "Copy to Clipboard",
            "Directions to help players find the portal to your world":
                "Directions to help players find the portal to your world",
            "Do you plan to renew this world?": "Do you plan to renew this world?",
            "Emoji FoundWithCount_plural": "{{ count }} Emojis Found",
            "Emoji FoundWithCount": "{{ count }} Emoji Found",
            "Forum Generator": "Forum Generator",
            "Forum Template Generator": "Forum Template Generator",
            "Generate Another": "Generate Another",
            "Generate Template": "Generate Template",
            "Generating Template...": "Generating Template...",
            "In-game Name_plural": "In-game Names",
            "In-game Name": "In-game Name",
            "Is Beacon compactness enabled?": "Is Beacon compactness enabled?",
            "Item FoundWithCount_plural": "{{ count }} Items Found",
            "Item FoundWithCount": "{{ count }} Item Found",
            "Loading Worlds...": "Loading Worlds...",
            "Page Not Found": "Page Not Found",
            "Portal Directions": "Portal Directions",
            "Post this in your post 'Body'": "Post this in your post 'Body'",
            "Post this in your post 'Title'": "Post this in your post 'Title'",
            "Search Color": "Search Colors",
            "Search Emoji": "Search Emojis",
            "Search Item": "Search Items",
            "Search World": "Search Worlds",
            "Sovereign Details": "Sovereign Details",
            "The Boundless Lexicon": "The Boundless Lexicon",
            "Unknown Error occured. Please try again later.": "Unknown Error occured. Please try again later.",
            "Will Renew?": "Will Renew?",
            "World FoundWithCount_plural": "{{ count }} Worlds Found",
            "World FoundWithCount": "{{ count }} World Found",
            "Your Boundless Forums Username": "Your Boundless Forums Username",
            Active: "Active",
            Blast: "Blast",
            Blink: "Blink",
            Body: "Body",
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
            No: "No",
            Permissions: "Permissions",
            Placid: "Placid",
            Rift: "Rift",
            Rugged: "Rugged",
            Savage: "Savage",
            Shock: "Shock",
            Temperate: "Temperate",
            Theme: "Theme",
            Title: "Title",
            Toxic: "Toxic",
            Turbulent: "Turbulent",
            Umbris: "Umbris",
            Unknown: "Unknown",
            Username: "Username",
            World_plural: "Worlds",
            World: "World",
            Yes: "Yes",
            Homeworld: "Homeworld",
            Exoworld: "Exoworld",
            "Creative World": "Creative World",
            "Sovereign World": "Sovereign World",
            "There is a new version of Boundlexx UI.": "There is a new version of Boundlexx UI.",
            "Click here to update.": "Click here to update.",

            "Active?": "Active?",
            "Boundless Specific": "Boundless Specific",
            "Clear All": "Clear All",
            "EU Central": "EU Central",
            "Has Colors?": "Has Colors?",
            "Is Locked?": "Is Locked?",
            "Is Resource?": "Is Resource?",
            "No Value": "No Value",
            "Orbiting World": "Orbiting World",
            "Public Visit?": "Public Visit?",
            "Requires # Level in Skill and a Pie_plural": "Requires {{ count }} Levels in Skill and a Pie",
            "Requires # Level in Skill_plural": "Requires {{ count }} Levels in Skill",
            "Requires # Level in Skill": "Requires {{ count }} Level in Skill",
            "Select Type": "Select Type",
            "Select World": "Select World",
            "US East": "US East",
            "US West": "US West",
            "World Class": "World Class",
            "World Type": "World Type",
            Australia: "Australia",
            Region: "Region",
            Tier: "Tier",
            Type: "Type",
        },
    },
    fr: {
        translation: {
            "API Documentation": "API Documentation",
            "Auto-Detect": "Auto-Detect",
            "Browser Selected": "Browser Selected",
            "Can Claim?": "Can Claim?",
            "Can Edit?": "Can Edit?",
            "Can Everyone create beacons and plot on your world?":
                "Can Everyone create beacons and plot on your world?",
            "Can Everyone edit blocks on your world (outside of plots)?":
                "Can Everyone edit blocks on your world (outside of plots)?",
            "Can Everyone warp/use portals to your world?": "Can Everyone warp/use portals to your world?",
            "Can Visit?": "Can Visit?",
            "Change Language": "Change Language",
            "Change Theme": "Change Theme",
            "Color FoundWithCount_plural": "{{ count }} Colors Found",
            "Color FoundWithCount": "{{ count }} Color Found",
            "Color-Cycling": "Color-Cycling",
            "Copy to Clipboard": "Copy to Clipboard",
            "Directions to help players find the portal to your world":
                "Directions to help players find the portal to your world",
            "Do you plan to renew this world?": "Do you plan to renew this world?",
            "Emoji FoundWithCount_plural": "{{ count }} Emojis Found",
            "Emoji FoundWithCount": "{{ count }} Emoji Found",
            "Forum Generator": "Forum Generator",
            "Forum Template Generator": "Forum Template Generator",
            "Generate Another": "Generate Another",
            "Generate Template": "Generate Template",
            "Generating Template...": "Generating Template...",
            "In-game Name_plural": "In-game Names",
            "In-game Name": "In-game Name",
            "Is Beacon compactness enabled?": "Is Beacon compactness enabled?",
            "Item FoundWithCount_plural": "{{ count }} Items Found",
            "Item FoundWithCount": "{{ count }} Item Found",
            "Loading Worlds...": "Loading Worlds...",
            "Page Not Found": "Page Not Found",
            "Portal Directions": "Portal Directions",
            "Post this in your post 'Body'": "Post this in your post 'Body'",
            "Post this in your post 'Title'": "Post this in your post 'Title'",
            "Search Color": "Search Colors",
            "Search Emoji": "Search Emojis",
            "Search Item": "Search Items",
            "Search World": "Search Worlds",
            "Sovereign Details": "Sovereign Details",
            "The Boundless Lexicon": "The Boundless Lexicon",
            "Unknown Error occured. Please try again later.": "Unknown Error occured. Please try again later.",
            "Will Renew?": "Will Renew?",
            "World FoundWithCount_plural": "{{ count }} Worlds Found",
            "World FoundWithCount": "{{ count }} World Found",
            "Your Boundless Forums Username": "Your Boundless Forums Username",
            Active: "Active",
            Blast: "Blast",
            Blink: "Blink",
            Body: "Body",
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
            No: "No",
            Permissions: "Permissions",
            Placid: "Placid",
            Rift: "Rift",
            Rugged: "Rugged",
            Savage: "Savage",
            Shock: "Shock",
            Temperate: "Temperate",
            Theme: "Theme",
            Title: "Title",
            Toxic: "Toxic",
            Turbulent: "Turbulent",
            Umbris: "Umbris",
            Unknown: "Unknown",
            Username: "Username",
            World_plural: "Worlds",
            World: "World",
            Yes: "Yes",
            Homeworld: "Homeworld",
            Exoworld: "Exoworld",
            "Creative World": "Creative World",
            "Sovereign World": "Sovereign World",
            "There is a new version of Boundlexx UI.": "There is a new version of Boundlexx UI.",
            "Click here to update.": "Click here to update.",

            "Active?": "Active?",
            "Boundless Specific": "Boundless Specific",
            "Clear All": "Clear All",
            "EU Central": "EU Central",
            "Has Colors?": "Has Colors?",
            "Is Locked?": "Is Locked?",
            "Is Resource?": "Is Resource?",
            "No Value": "No Value",
            "Orbiting World": "Orbiting World",
            "Public Visit?": "Public Visit?",
            "Requires # Level in Skill and a Pie_plural": "Requires {{ count }} Levels in Skill and a Pie",
            "Requires # Level in Skill_plural": "Requires {{ count }} Levels in Skill",
            "Requires # Level in Skill": "Requires {{ count }} Level in Skill",
            "Select Type": "Select Type",
            "Select World": "Select World",
            "US East": "US East",
            "US West": "US West",
            "World Class": "World Class",
            "World Type": "World Type",
            Australia: "Australia",
            Region: "Region",
            Tier: "Tier",
            Type: "Type",
        },
    },
    de: {
        translation: {
            "API Documentation": "API Documentation",
            "Auto-Detect": "Auto-Detect",
            "Browser Selected": "Browser Selected",
            "Can Claim?": "Can Claim?",
            "Can Edit?": "Can Edit?",
            "Can Everyone create beacons and plot on your world?":
                "Can Everyone create beacons and plot on your world?",
            "Can Everyone edit blocks on your world (outside of plots)?":
                "Can Everyone edit blocks on your world (outside of plots)?",
            "Can Everyone warp/use portals to your world?": "Can Everyone warp/use portals to your world?",
            "Can Visit?": "Can Visit?",
            "Change Language": "Change Language",
            "Change Theme": "Change Theme",
            "Color FoundWithCount_plural": "{{ count }} Colors Found",
            "Color FoundWithCount": "{{ count }} Color Found",
            "Color-Cycling": "Color-Cycling",
            "Copy to Clipboard": "Copy to Clipboard",
            "Directions to help players find the portal to your world":
                "Directions to help players find the portal to your world",
            "Do you plan to renew this world?": "Do you plan to renew this world?",
            "Emoji FoundWithCount_plural": "{{ count }} Emojis Found",
            "Emoji FoundWithCount": "{{ count }} Emoji Found",
            "Forum Generator": "Forum Generator",
            "Forum Template Generator": "Forum Template Generator",
            "Generate Another": "Generate Another",
            "Generate Template": "Generate Template",
            "Generating Template...": "Generating Template...",
            "In-game Name_plural": "In-game Names",
            "In-game Name": "In-game Name",
            "Is Beacon compactness enabled?": "Is Beacon compactness enabled?",
            "Item FoundWithCount_plural": "{{ count }} Items Found",
            "Item FoundWithCount": "{{ count }} Item Found",
            "Loading Worlds...": "Loading Worlds...",
            "Page Not Found": "Page Not Found",
            "Portal Directions": "Portal Directions",
            "Post this in your post 'Body'": "Post this in your post 'Body'",
            "Post this in your post 'Title'": "Post this in your post 'Title'",
            "Search Color": "Search Colors",
            "Search Emoji": "Search Emojis",
            "Search Item": "Search Items",
            "Search World": "Search Worlds",
            "Sovereign Details": "Sovereign Details",
            "The Boundless Lexicon": "The Boundless Lexicon",
            "Unknown Error occured. Please try again later.": "Unknown Error occured. Please try again later.",
            "Will Renew?": "Will Renew?",
            "World FoundWithCount_plural": "{{ count }} Worlds Found",
            "World FoundWithCount": "{{ count }} World Found",
            "Your Boundless Forums Username": "Your Boundless Forums Username",
            Active: "Active",
            Blast: "Blast",
            Blink: "Blink",
            Body: "Body",
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
            No: "No",
            Permissions: "Permissions",
            Placid: "Placid",
            Rift: "Rift",
            Rugged: "Rugged",
            Savage: "Savage",
            Shock: "Shock",
            Temperate: "Temperate",
            Theme: "Theme",
            Title: "Title",
            Toxic: "Toxic",
            Turbulent: "Turbulent",
            Umbris: "Umbris",
            Unknown: "Unknown",
            Username: "Username",
            World_plural: "Worlds",
            World: "World",
            Yes: "Yes",
            Homeworld: "Homeworld",
            Exoworld: "Exoworld",
            "Creative World": "Creative World",
            "Sovereign World": "Sovereign World",
            "There is a new version of Boundlexx UI.": "There is a new version of Boundlexx UI.",
            "Click here to update.": "Click here to update.",

            "Active?": "Active?",
            "Boundless Specific": "Boundless Specific",
            "Clear All": "Clear All",
            "EU Central": "EU Central",
            "Has Colors?": "Has Colors?",
            "Is Locked?": "Is Locked?",
            "Is Resource?": "Is Resource?",
            "No Value": "No Value",
            "Orbiting World": "Orbiting World",
            "Public Visit?": "Public Visit?",
            "Requires # Level in Skill and a Pie_plural": "Requires {{ count }} Levels in Skill and a Pie",
            "Requires # Level in Skill_plural": "Requires {{ count }} Levels in Skill",
            "Requires # Level in Skill": "Requires {{ count }} Level in Skill",
            "Select Type": "Select Type",
            "Select World": "Select World",
            "US East": "US East",
            "US West": "US West",
            "World Class": "World Class",
            "World Type": "World Type",
            Australia: "Australia",
            Region: "Region",
            Tier: "Tier",
            Type: "Type",
        },
    },
    it: {
        translation: {
            "API Documentation": "Documentazione API",
            "Auto-Detect": "Trova Automaticamente",
            "Browser Selected": "Mostra selezionato",
            "Can Claim?": "È lottizzabile?",
            "Can Edit?": "È modificabile?",
            "Can Everyone create beacons and plot on your world?":
                "Tutti possono creare un faro e reclamare lotti nel tuo mondo?",
            "Can Everyone edit blocks on your world (outside of plots)?":
                "Tutti possono modificare blocchi nel tuo mondo (fuori dai lotti)?",
            "Can Everyone warp/use portals to your world?":
                "Tutti possono teletrasportarsi/ usare portali verso il tuo mondo?",
            "Can Visit?": "È visitabile?",
            "Change Language": "Cambia Lingua",
            "Change Theme": "Cambia tema",
            "Color FoundWithCount_plural": "{{ count }} Colori trovati",
            "Color FoundWithCount": "{{ count }} Colore trovato",
            "Color-Cycling": "Color-Cycling",
            "Copy to Clipboard": "Copia negli appunti",
            "Directions to help players find the portal to your world":
                "Indicazioni per aiutare i giocatori a trovare un portale per il tuo mondo",
            "Do you plan to renew this world?": "Hai intenzione di rinnovare questo mondo?",
            "Emoji FoundWithCount_plural": "{{ count }} Emojis trovati",
            "Emoji FoundWithCount": "{{ count }} Emoji trovato",
            "Forum Generator": "Generatore forum",
            "Forum Template Generator": "Generatore modello forum",
            "Generate Another": "Crea  un altro",
            "Generate Template": "Crea un modello",
            "Generating Template...": "Creando un modello",
            "In-game Name_plural": "Nomi in gioco",
            "In-game Name": "Nome in gioco",
            "Is Beacon compactness enabled?": "Beacon compactness è attiva?",
            "Item FoundWithCount_plural": "{{ count }} Oggetti trovati",
            "Item FoundWithCount": "{{ count }} Oggetto trovato",
            "Loading Worlds...": "Caricamento mondi",
            "Page Not Found": "Pagina non trovata",
            "Portal Directions": "Indicazioni per il portale",
            "Post this in your post 'Body'": "Invia come corpo del post",
            "Post this in your post 'Title'": "Invia come titolo del post",
            "Search Color": "Cerca colori",
            "Search Emoji": "Cerca Emojis",
            "Search Item": "Cerca oggetti",
            "Search World": "Cerca mondi",
            "Sovereign Details": "Dettagli Sovereign",
            "The Boundless Lexicon": "The Boundless Lexicon",
            "Unknown Error occured. Please try again later.": "Errore sconsciuto. Per favore riprova più tardi",
            "Will Renew?": "Si rinnoverà?",
            "World FoundWithCount_plural": "{{ count }} Mondi trovati",
            "World FoundWithCount": "{{ count }} Mondo trovato",
            "Your Boundless Forums Username": "Il tuo username nel forum di Boundless",
            Active: "Attivo",
            Blast: "Esplosivo",
            Blink: "Blink",
            Body: "Corpo",
            Boundlexx: "Boundlexx",
            Brutal: "Brutale",
            Burn: "Bruciante",
            Chill: "Gelido",
            Coal: "Carbone",
            Color_plural: "Colori",
            Color: "Colore",
            Corrosive: "Corrosivo",
            Dark: "Scuro",
            Emoji_plural: "Emojis",
            Emoji: "Emoji",
            Error: "Errore",
            Fierce: "Feroce",
            ID_plural: "IDs",
            ID: "ID",
            Inactive: "Inattivo",
            Inhospitable: "Inospitale",
            Item_plural: "Oggetti",
            Item: "Oggetto",
            Language: "Lingua",
            Light: "Chiaro",
            Locked: "Chiuso",
            Lush: "Rigoglioso",
            Metal: "Metallo",
            No: "No",
            Permissions: "Permessi",
            Placid: "Aspro",
            Rift: "Rift",
            Rugged: "Rugged",
            Savage: "Savage",
            Shock: "Elettrico",
            Temperate: "Temperato",
            Theme: "Tema",
            Title: "Titolo",
            Toxic: "Tossico",
            Turbulent: "Turbolento",
            Umbris: "Umbris",
            Unknown: "Sconosciuto",
            Username: "Nome utente",
            World_plural: "Mondi",
            World: "Mondo",
            Yes: "Si",
            Homeworld: "Homeworld",
            Exoworld: "Exoworld",
            "Creative World": "Creative World",
            "Sovereign World": "Sovereign World",
            "There is a new version of Boundlexx UI.": "C'è una uova versione di Boundlexx UI.",
            "Click here to update.": "Clicca qui per aggiornare.",

            "Active?": "Active?",
            "Boundless Specific": "Boundless Specific",
            "Clear All": "Clear All",
            "EU Central": "EU Central",
            "Has Colors?": "Has Colors?",
            "Is Locked?": "Is Locked?",
            "Is Resource?": "Is Resource?",
            "No Value": "No Value",
            "Orbiting World": "Orbiting World",
            "Public Visit?": "Public Visit?",
            "Requires # Level in Skill and a Pie_plural": "Requires {{ count }} Levels in Skill and a Pie",
            "Requires # Level in Skill_plural": "Requires {{ count }} Levels in Skill",
            "Requires # Level in Skill": "Requires {{ count }} Level in Skill",
            "Select Type": "Select Type",
            "Select World": "Select World",
            "US East": "US East",
            "US West": "US West",
            "World Class": "World Class",
            "World Type": "World Type",
            Australia: "Australia",
            Region: "Region",
            Tier: "Tier",
            Type: "Type",
        },
    },
    es: {
        translation: {
            "API Documentation": "API Documentation",
            "Auto-Detect": "Auto-Detect",
            "Browser Selected": "Browser Selected",
            "Can Claim?": "Can Claim?",
            "Can Edit?": "Can Edit?",
            "Can Everyone create beacons and plot on your world?":
                "Can Everyone create beacons and plot on your world?",
            "Can Everyone edit blocks on your world (outside of plots)?":
                "Can Everyone edit blocks on your world (outside of plots)?",
            "Can Everyone warp/use portals to your world?": "Can Everyone warp/use portals to your world?",
            "Can Visit?": "Can Visit?",
            "Change Language": "Change Language",
            "Change Theme": "Change Theme",
            "Color FoundWithCount_plural": "{{ count }} Colors Found",
            "Color FoundWithCount": "{{ count }} Color Found",
            "Color-Cycling": "Color-Cycling",
            "Copy to Clipboard": "Copy to Clipboard",
            "Directions to help players find the portal to your world":
                "Directions to help players find the portal to your world",
            "Do you plan to renew this world?": "Do you plan to renew this world?",
            "Emoji FoundWithCount_plural": "{{ count }} Emojis Found",
            "Emoji FoundWithCount": "{{ count }} Emoji Found",
            "Forum Generator": "Forum Generator",
            "Forum Template Generator": "Forum Template Generator",
            "Generate Another": "Generate Another",
            "Generate Template": "Generate Template",
            "Generating Template...": "Generating Template...",
            "In-game Name_plural": "In-game Names",
            "In-game Name": "In-game Name",
            "Is Beacon compactness enabled?": "Is Beacon compactness enabled?",
            "Item FoundWithCount_plural": "{{ count }} Items Found",
            "Item FoundWithCount": "{{ count }} Item Found",
            "Loading Worlds...": "Loading Worlds...",
            "Page Not Found": "Page Not Found",
            "Portal Directions": "Portal Directions",
            "Post this in your post 'Body'": "Post this in your post 'Body'",
            "Post this in your post 'Title'": "Post this in your post 'Title'",
            "Search Color": "Search Colors",
            "Search Emoji": "Search Emojis",
            "Search Item": "Search Items",
            "Search World": "Search Worlds",
            "Sovereign Details": "Sovereign Details",
            "The Boundless Lexicon": "The Boundless Lexicon",
            "Unknown Error occured. Please try again later.": "Unknown Error occured. Please try again later.",
            "Will Renew?": "Will Renew?",
            "World FoundWithCount_plural": "{{ count }} Worlds Found",
            "World FoundWithCount": "{{ count }} World Found",
            "Your Boundless Forums Username": "Your Boundless Forums Username",
            Active: "Active",
            Blast: "Blast",
            Blink: "Blink",
            Body: "Body",
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
            No: "No",
            Permissions: "Permissions",
            Placid: "Placid",
            Rift: "Rift",
            Rugged: "Rugged",
            Savage: "Savage",
            Shock: "Shock",
            Temperate: "Temperate",
            Theme: "Theme",
            Title: "Title",
            Toxic: "Toxic",
            Turbulent: "Turbulent",
            Umbris: "Umbris",
            Unknown: "Unknown",
            Username: "Username",
            World_plural: "Worlds",
            World: "World",
            Yes: "Yes",
            Homeworld: "Homeworld",
            Exoworld: "Exoworld",
            "Creative World": "Creative World",
            "Sovereign World": "Sovereign World",
            "There is a new version of Boundlexx UI.": "There is a new version of Boundlexx UI.",
            "Click here to update.": "Click here to update.",

            "Active?": "Active?",
            "Boundless Specific": "Boundless Specific",
            "Clear All": "Clear All",
            "EU Central": "EU Central",
            "Has Colors?": "Has Colors?",
            "Is Locked?": "Is Locked?",
            "Is Resource?": "Is Resource?",
            "No Value": "No Value",
            "Orbiting World": "Orbiting World",
            "Public Visit?": "Public Visit?",
            "Requires # Level in Skill and a Pie_plural": "Requires {{ count }} Levels in Skill and a Pie",
            "Requires # Level in Skill_plural": "Requires {{ count }} Levels in Skill",
            "Requires # Level in Skill": "Requires {{ count }} Level in Skill",
            "Select Type": "Select Type",
            "Select World": "Select World",
            "US East": "US East",
            "US West": "US West",
            "World Class": "World Class",
            "World Type": "World Type",
            Australia: "Australia",
            Region: "Region",
            Tier: "Tier",
            Type: "Type",
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
        keySeparator: false,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18n;
