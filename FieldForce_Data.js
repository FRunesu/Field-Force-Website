/*
 * ============================================================
 *  FIELDFORCE AGRO SERVICES — CONTENT DATA FILE
 *  FieldForce_Data.js
 * ============================================================
 *
 *  This file controls ALL product lists and crop guide content
 *  on the FieldForce website.
 *
 *  HOW TO UPDATE THE WEBSITE:
 *  ─────────────────────────────────────────────────────────
 *  • To ADD a product:    Find its category below, add its
 *                         name inside the "items" list.
 *
 *  • To REMOVE a product: Find it and delete that line.
 *
 *  • To ADD a category:   Copy an existing category block,
 *                         change the id, name, and items.
 *
 *  • To ADD a crop guide: Copy an existing guide block at the
 *                         bottom and fill in the details.
 *
 *  • To UPDATE a table row in a crop guide: Find the guide,
 *    find the section, and edit the row inside "rows".
 *
 *  RULES:
 *  ─────────────────────────────────────────────────────────
 *  • Keep commas after every item except the last in a list.
 *  • Keep all text inside "quotes".
 *  • Do NOT change the words: FF_PRODUCTS or FF_CROP_GUIDES
 *    or FF_SOIL_PARAMETERS — the website depends on them.
 *  • Save this file, then refresh the website to see changes.
 * ============================================================
 */


/* ============================================================
   SECTION 1: PRODUCT CATEGORIES
   ============================================================
   Each category has:
     id       — internal identifier (no spaces, lowercase)
     name     — the heading shown on the website
     columns  — how many columns in the table (1, 2, or 3)
     items    — list of product names
   ============================================================ */

const FF_PRODUCTS = [

    /* ── Antiseptic Disinfectants & Detergents ── */
    {
        id: "antiseptic",
        name: "Antiseptic Disinfectants & Detergents",
        columns: 2,
        items: [
            "Bleach (Jik)",                        "Chlorine",
            "Dishwasher",                          "Hydrogen Peroxide (Zero Tol)",
            "Hypersan 5% Sodium Hydroxide Solution","Methylated Spirit",
            "Multipurpose Cleaner",                "Ph Down",
            "Ph Up",                               "Surf",
            "Teepol",                              ""
        ]
    },

    /* ── Fungicides ── */
    {
        id: "fungicides",
        name: "Fungicides",
        columns: 3,
        items: [
            "Acephate",               "Aliette",                  "Alvarion",
            "Amistar Top",            "Antracol",                 "Avicap (Captab/Dicarboximide)",
            "Azoxystrobin (Ortiva)",  "Bellis",                   "Benomyl (Benlate)",
            "Bion",                   "Blockade (Oxamyl)",        "Bravo",
            "Brilliant",              "Captan",                   "Carbaryl 85WP",
            "Copper Count",           "Copper Oxychloride",       "Crater MX 250SC / Ridomil Mix",
            "Curator",                "Defender (Bifenthrin)",    "Dithane M45 (Mancozeb 80%)",
            "Envigo 500SC",           "Evito 480SC",              "Evito-T",
            "Falicur / Folicur",      "Flint",                    "Folio Gold 440SC",
            "Hygrophos",              "Infinito",                 "Iprodione 25SC (Rovral)",
            "Kasugamycin",            "Kobe",                     "Kumulus (Wettable Sulphur)",
            "Liquicop",               "Luna Privilege (Rovral)",  "Mancozeb (Dithane M45 50WP)",
            "Mangle",                 "Melody Duo",               "Mycoguard",
            "Nativo 300SE (Dyrene)",  "Nimrod",                   "Opera",
            "Ordan",                  "Ortiva",                   "Oryx SC",
            "Previcur 725 SC",        "Propamocarb",              "Propiconazole / Propicon",
            "Prosper",                "Proxan",                   "Rayok",
            "Resilience (Rovral)",    "Rhizomic",                 "Ridomil Gold",
            "Scala (Rovral)",         "Shavit",                   "Sky",
            "Teldor (Rovral)",        "Tolciofos (Rizolex)",      "Trykosist",
            "Twist 500SC",            "Verita 711WG",             ""
        ]
    },

    /* ── Herbicides ── */
    {
        id: "herbicides",
        name: "Herbicides",
        columns: 3,
        items: [
            "Accent (Nicosulfron)",       "Accotab",                  "Agil",
            "Alachlor (Lasso)",           "Amitraz (Mitac)",          "Atrazine",
            "Authority",                  "Auxo (Buctril)",           "Basagran",
            "Baselline",                  "Blast",                    "Chaya Extra",
            "Classic / Clorimuron",       "Clomazone / Command",      "Cycocel",
            "Di Plus",                    "Dicamba",                  "Escort",
            "Fluazifop / Fusilade",       "Frontier Optima / 900EC",  "Fusilade Forte",
            "Fusilade Super",             "Galago / Mesotrione",      "Glyfos Envision (Kalachi)",
            "Glyphosate / Round Up",      "Grammoxone / Paraquat",    "Halosulfuron",
            "Imazethapyr / Pursuit",      "Lasso 48EC",               "Linuron",
            "Metolachlor",                "Metribuzin",               "Nicosulfuron",
            "Pendimethalin",              "Pivot / Imazethapyr",      "Prometryn",
            "Sencor / Sencorex",          "Simazine",                 "Terbufos",
            "Torpedo / Stomp",            "Trifluralin",              ""
        ]
    },

    /* ── Insecticides ── */
    {
        id: "insecticides",
        name: "Insecticides",
        columns: 3,
        items: [
            "Abamectin / Dynamec",        "Acephate",                 "Acetamiprid (Alice)",
            "Achta 1% EC",                "Actara",                   "Ampligo",
            "Anthar",                     "Aryna",                    "Aster Extrem",
            "Attitude",                   "Avaunt / Steward",         "Azodrin / Monocrotophos",
            "Bandit 40EC",                "Beauvitec",                "Belt",
            "Benavia",                    "Blanket 150 SC",           "Blast",
            "Blast Super",                "Borey",                    "Bravo 720SC",
            "Bulldog",                    "Cabaryl 85 WP",            "Calypso",
            "Cartap",                     "Centuar / Confidor",       "Chess",
            "Chlorfenapyr 36SC",          "Chlopyriphos / Dursban",   "Coragen",
            "Cypermethrin",               "Dash",                     "DDVP (Dichlorvos)",
            "Decis Forte",                "Deltaguard 2.5EC",         "Demise",
            "Diazinon",                   "Dimethoate",               "Dipel (Biobit/Bio-T-Plus)",
            "Dynamo",                     "EDB",                      "Fenamiphos",
            "Fenazaquin 20SC",            "Fenvalerate / Fortis",     "Fipronil",
            "Floramite",                  "Galmano Plus",             "Gaucho",
            "GF120",                      "Hurricane",                "Imidachloprid 200SL",
            "Karate Zeon 5CS / Lambda",   "Levo",                     "Lufenuron (Match/Judge)",
            "Macten",                     "Malathion 5% Dust",        "Malathion 50EC",
            "Malathion 50WP",             "Metham Sodium",            "Methamidophos",
            "Methomyl (Lannate)",         "Movento",                  "Nemesis",
            "Nimrod",                     "Orizon",                   "Othello Top",
            "Plesive Star",               "Prevail-P",                "Pride",
            "Prove",                      "Reducer",                  "Rhizoprotect",
            "Selecran 500EC",             "Serpenties",               "Smite",
            "Sorvigo",                    "Super Dash",               "Tetradition",
            "Thiamex",                    "Thunder",                  "Tide Ultra",
            "Tracer (Spinosad)",          "Triguard",                 "Velum Prime 40051",
            "Victory",                    "",                         ""
        ]
    },

    /* ── Fertilisers ── */
    {
        id: "fertilisers",
        name: "Fertilisers",
        columns: 2,
        items: [
            "Ammonium Nitrate (25% & 34.5%)",   "Ammonium Sulphate",
            "Best Bloom Plus",                   "Calcium Ammonium Nitrate",
            "Calcium Nitrate",                   "Cereal Blend",
            "Compound C",                        "Compound C (High C)",
            "Compound D (8:14:7)",               "Compound J (15:05:20)",
            "Floatfert",                         "Gene Boost (Omni Boost)",
            "Gypsum",                            "Intrablend",
            "Kelp P Max",                        "K-Humate",
            "Kyno POP WS",                       "KynoFulvate",
            "Lime",                              "Micromix",
            "Molybor",                           "Mono Ammonium Phosphate (MAP)",
            "Muriate of Potash",                 "Omni Boost",
            "Plant Start",                       "Potassium Nitrate",
            "Potassium Sulphate",                "Potato Super Top",
            "Single Super Phosphate",            "Sulphate of Potash (SOP)",
            "Tobacco Blend",                     "Tobacco Fert",
            "Urea 46%",                          "Veg OEMFF Fruit Fertiliser",
            "Veg OEMFF Growth Fertiliser",       "Vega Top",
            "Veni Bio Sulfur",                   "Winbloom",
            "Wingrow",                           "Winstart",
            "ZFC Deletor",                       ""
        ]
    },

    /* ── Plant Growth Regulators ── */
    {
        id: "plant-growth-regulators",
        name: "Plant Growth Regulators",
        columns: 2,
        items: [
            "Cuttar",                       "Cuperdem",
            "Decanol / Suckekill",          "Ethaphone / Etherill",
            "Flumetralin",                  "Fortafol D",
            "Gibberellic Acid",             "Liba",
            "Messenger",                    "Seradix (Dynaroot/Rootvax)",
            "Servian",                      "Spear Emamectin / Benzoate",
            "Superdash / Blast Super",      "Triger",
            "Verita 711WG",                 ""
        ]
    },

    /* ── Pheromones ── */
    {
        id: "pheromones",
        name: "Pheromones",
        columns: 2,
        items: [
            "DBM pheromones",                       "Delta Tuta Traps (Bucket/Funnel)",
            "Pherolure TA (3s)",                    "Tuta Pheromones (4s)",
            "Yellow Sticky Trap (15cm x 100m)",     "Yellow Sticky Trap (30cm x 100m)",
            "Bailer Twine",                         "Buckets with Lids (20lts)",
            "Flower Sleeves",                       "Hand Strapping 12mm x 2000m (Roll)",
            "Kutsaga Grow Mix Bag (60lts)",         "Last call TA (Tube)",
            "Newsprint A1 Sheets",                  "Poly Buckles (kg)",
            "Rubberbands Size (kg) All Sizes",      ""
        ]
    },

    /* ── Seed ── */
    {
        id: "seed",
        name: "Seed",
        columns: 1,
        items: [
            "Maize Seed - K2 PGS 51",
            "Mkushi Maize Seed - Mutsa",
            "Seedco SC649 (25kg)"
        ]
    },

    /* ── Wetting Agents & Surfactants ── */
    {
        id: "wetting-agents",
        name: "Wetting Agents & Surfactants",
        columns: 2,
        items: [
            "Agribuff (Hygrobuff/Spraybuff)",           "Allbuff",
            "Mineral Oil",                              "Silwet L77",
            "Silwet L77 Arysta",                        "Silwet RO208 / RO208",
            "Silwet Wetcit (Orange Oil 50g/l & Non-Ionic)", "Supawett (Volcano)",
            "TSA Wetter (Volcano)",                     "Volcano (Acetochlor Metrihuzine)",
            "Wettable Sulphur",                         "Wetter"
        ]
    },

    /* ── Preservatives ── */
    {
        id: "preservatives",
        name: "Preservatives",
        columns: 2,
        items: [
            "Aluminium Phosphide (Gastoxin) Tablets",   "Apron Star",
            "Baytan (Gaucho/Gaumano)",                  "Bioma Brady Fix (100g)",
            "Bioma Brady Peat (720g)",                  "Blue Dye (Seed Colourant)",
            "Chrysal AVB",                              "Formalin",
            "Galago",                                   "Gaucho",
            "Green Dye (Seed Colourant)",               "Monceren",
            "Red Dye (Seed Colourant)",                 "Seed Power",
            "Sporekill",                                ""
        ]
    },

    /* ── Veterinary Chemicals ── */
    {
        id: "veterinary",
        name: "Veterinary Chemicals",
        columns: 2,
        items: [
            "Alamycin",         "Hitet 200",
            "Triatix - Dip",    "Valbazen sheep - Dose",
            "Zerofan - Dosing Remedy", "Disnis"
        ]
    },

    /* ── Snake Repel ── */
    {
        id: "snake-repel",
        name: "Snake Repel",
        columns: 1,
        items: [
            "Snake repel"
        ]
    },

    /* ── Packaging & Supplies ── */
    {
        id: "packaging",
        name: "Packaging & Supplies",
        columns: 2,
        items: [
            "Buckets",              "Poly Buckles",
            "Rubberbands (All Sizes)", "Pannets",
            "Strapping",            "T2 Twine",
            "Knapsacks",            "Protective Clothing"
        ]
    }

]; /* ── END OF FF_PRODUCTS ── */




/* ============================================================
   SECTION 2: CROP PRODUCTION GUIDES
   ============================================================
   Each guide has:
     id       — internal identifier
     name     — accordion heading shown on website
     overview — bullet point list of key facts
     sections — tables of fertilizer / pest / weed info

   To add a table row, copy an existing row inside "rows"
   and fill in the cells. Each cell is a "quoted string".
   Use \n inside a cell to put text on a new line.
   ============================================================ */

const FF_CROP_GUIDES = [

    /* ════════════════════════════════
       GROUNDNUTS
    ════════════════════════════════ */
    {
        id: "groundnuts",
        name: "Groundnuts Production Guideline",
        overview: [
            { label: "Seed requirements", text: "Varies depending on seed size, planting dates and variety. About 100 kgs of seed is adequate to cover 1 hectare." },
            { label: "Soil pH",           text: "Groundnuts grow well on sandy soil and do not favour acidic soils. Preferred pH: 5.3–5.8." },
            { label: "Time of Planting",  text: "As soon as the first effective rains fall. Spacing: 30–45 cm between rows and 5–8 cm within rows." },
            { label: "Yield target",      text: "1.5–3.5 tonnes/ha depending on Good Agronomic Practices (GAPs)." }
        ],
        sections: [
            {
                title: "Fertilizer Requirements",
                headers: ["Application Type", "Product", "Nutrients", "Quantity/Ha", "Comments"],
                rows: [
                    ["Basal Dressing", "Compound C",  "5:15:12:11",    "300 kgs",  "All applied at planting"],
                    ["Top Dressing",   "Gypsum",       "22% Ca & 16% S","200 kgs",  "Top dress 8–12 WAP"],
                    ["Basal Dressing", "Compound D",  "7:14:7",         "300 kg",   "All applied at planting"],
                    ["Top Dressing",   "Gypsum",       "22Ca: 17.5%",   "200 kg",   "Top dress 8–12 WAP"]
                ]
            },
            {
                title: "Pest, Disease & Weed Management",
                headers: ["Problem", "Product", "Rate/Spray", "Application", "App/Ha"],
                rows: [
                    ["Broad leaved weeds",
                        "Basagran\nPrometryn\nTerbutryn",
                        "225 ml/16 lt\n200–300 ml/16 lt\n180–240 ml/16 lt",
                        "Post emergent after 3 leaf stage\nPre-emergent, apply soon after planting\nPre-emergent, high rates for heavy clays",
                        "3–5 lt\n3–4 lt\n2.5–3 lt"],
                    ["Grasses, Broadleaf weeds, Nutsedge suppression",
                        "Dual Magnum\nAlachlor\nAcetochlor\nStrongarm",
                        "104–152 ml/16 lt\n240–320 ml/16 lt\n80–120 ml/16 lt\n3 g/16 lt",
                        "Pre-emergent, apply immediately after planting\nPre-emergent, apply immediately after planting\nPre-emergent, apply immediately after planting\nPre-emergent — controls B/L weeds & grasses",
                        "1.3–1.9 lt\n3–4 lt\n1–1.5 lt\n30 g"],
                    ["Grasses only",
                        "Agil / Propaquizafop\nGallant super",
                        "100–130 ml/16 lt\n100–300 ml/16 lt",
                        "Post emergent to grasses. Higher rates for perennials\nPost emergent to grasses. Higher rates for perennials",
                        "1–2 lt\n1–4 lt"],
                    ["Seed dressing / Cutworms",
                        "Apron Star\nSeed dressing 80WP\nKarate Zeon\nDecis 2.5 EC\nThiram",
                        "250 g/100 kg seed\n—\n16–20 ml/16 lt\n8 ml/16 lt\n—",
                        "Mix with seed prior to planting\nMix 100 g in 500 ml water/100 kg seed\nApply at planting or spray over top soon after emergence\nApply at planting or spray over top soon after emergence\nSeed dressing",
                        "250 g\n100 g\n200 ml\n125 ml\n—"],
                    ["Aphids", "Dimethoate", "30 ml/16 lt", "Apply as full cover spray and repeat as necessary", "800–1000 ml"],
                    ["General insects, Heliothis, Bollworms, Crickets, Leaf eating caterpillars, Semi loopers, CMR beetles",
                        "Carbaryl\nMalathion\nCartap\nDichlovos\nAmpligo",
                        "45–60 g\n30 g\n50 g\n20 ml\n16 ml",
                        "Dilute 625 g–1 kg per 200 lt water when infection noticed\nMix 500 g per 100 lt water, repeat as necessary\nDilute 400 g in 100 lt water, do not exceed 2 kgs/season\nDilute 100 ml per 100 lt water, repeat as necessary\nDilute 150–200 ml per 200 lt water, ~2 sprays per season",
                        "1 kg\n500 g\n800 g\n200 ml\n200 ml"],
                    ["Cercospora Leaf Spot, Botrytis, Stem rot, Leaf rust & Blotch, Rust, Leaf Spots",
                        "Benomyl\nFolicur\nDithane M45\nWettable sulphur\nChlorothanonil",
                        "40 g\n10–30 ml\n100 g\n20–30 g\n30 ml",
                        "Full cover spray on first signs, repeat every 14 days\nFull cover spray on first signs, repeat every 14 days\nFull cover spray as preventative every 10–14 days\nAt first signs after every rain at 14 day intervals\nFull cover spray on first signs, repeat every 14 days",
                        "500–750 g\n500 ml\n1–2 kg\n200–400 g\n2 lt"],
                    ["Large Grain Borer", "Actellic gold dust", "25 g/50 kg grain", "Mix well with shelled grain and store in favourable conditions", "—"]
                ]
            }
        ]
    },

    /* ════════════════════════════════
       POTATOES
    ════════════════════════════════ */
    {
        id: "potatoes",
        name: "Potatoes Production Guideline",
        overview: [
            { label: "Seed requirements", text: "75–80 (30 kg pockets) per hectare is a good guideline." },
            { label: "Spacing",           text: "0.9 m between rows and 0.3 m within rows (~37 000 plants/ha)." },
            { label: "Time of Planting",  text: "Summer — November. Winter (first irrigated) — February to April. Spring — late July to early August." },
            { label: "Yield target",      text: "30–40 tonnes/ha; up to 60 tonnes/ha with heavier fertilization & GAPs." }
        ],
        sections: [
            {
                title: "Fertilizer Requirements",
                headers: ["Application Type", "Product", "Nutrients", "Quantity/Ha", "Comments"],
                rows: [
                    ["Basal Dressing",              "Compound C",       "5:15:12",  "1 500 kgs", "All applied at planting"],
                    ["Top Dressing (Split Apply AN)","AN 34.5%",         "—",        "200 kg",    "Split apply at 2–3 & 4–5 weeks after emergence"],
                    ["Top Dressing (Split Apply CN)","Calcium Nitrate",  "—",        "100 kg",    "75 kg before second ridging & 25 kg 3 weeks before lifting"],
                    ["Top Dressing (KNO3)",          "Potassium Nitrate","—",        "300 kg",    "Split apply at 4, 8 & 12 weeks after emergence"],
                    ["Soil Conditioning",            "Gypsum",           "—",        "300 kg",    "Apply all at or before planting"]
                ]
            },
            {
                title: "Pest, Disease & Weed Management",
                headers: ["Problem", "Product", "Rate/Spray", "Application", "App/Ha"],
                rows: [
                    ["Potato tuber moth", "Steward", "—", "FCS on first sign of mines on leaves, repeat as necessary", "0.25 lt"],
                    ["Broad Leaf weeds & grasses",
                        "Metribuzine\nMetolachlor\nAlachlor",
                        "1.1–1.5 lt/ha\n1.1–1.9 lt\n3.5–4 lt",
                        "Pre-emergent — DO NOT apply on soils <12% clay\nPre-emergent to both weeds and crop\nPre-emergent to both weeds and crop",
                        "1.1–1.5 lt\n1.1–1.9 lt\n3.5–4 lt"],
                    ["Mainly grasses",
                        "Agil\nGallant super",
                        "0.5–2 lt\n0.6–2.4 lt",
                        "Post emergent for annual & perennial grasses\nPost emergent for annual & perennial grasses",
                        "0.5–2 lt\n0.6–2.4 lt"],
                    ["Nematodes / Eelworms",
                        "Oxamyl\nVelum\nNemacure\nCarbofuran",
                        "20 lt\n900 ml/100–150 lt\n12.5 lt/100 lt\n20 kg",
                        "Split apply at 6–8 weeks after planting\nApply at planting, spray whole furrow area\nApply at planting, spray whole furrow area\nApply 200 g per 100 m row at planting",
                        "20 lt\n1.8 lt\n25 lt\n20 kg"],
                    ["White grubs", "Chlopyrifos 48EC", "500 ml/100 lt", "Dilute in 200 lt — spray whole furrow area at planting", "1 lt"],
                    ["Aphids, Leaf eaters, Leaf hoppers",
                        "Thunder\nDimethoate\nMalathion 25 WP",
                        "220 ml/100 lt\n400 ml/100 lt\n200 g/100 lt",
                        "Dilute in 200 lt water, FCS, repeat as necessary\nFCS repeat as necessary\nFCS repeat as necessary",
                        "0.33 lt\n0.8 lt\n0.4 kg"],
                    ["Early & Late Blight, Leaf spots",
                        "Azoxystrobin\nTebuconazole / Folicur\nCopper oxy",
                        "250 ml/100 lt\n75 ml/100 lt\n500 g/100 lt",
                        "FCS before symptoms appear, repeat as necessary\nApply as FCS preventative, repeat as necessary\nFCS when plants 150 mm tall, repeat as necessary",
                        "0.5 lt\n0.15 lt\n1 kg"],
                    ["Preventative (Leaf moulds)",
                        "Bravo / Chlorothanonil\nMancozeb / Dithane M45\nMetalaxyl + Mancozeb",
                        "1 lt/100 lt\n1 kg/100 lt\n1.25 kg/100 lt",
                        "FCS at 7–10 day intervals when disease threatens\nApply as FCS weekly, repeat as necessary\nFCS, ~2 sprays 10 days apart, max 4/season",
                        "2 lt\n1.5–2 kg\n2.5 kg"],
                    ["Red spider mites",
                        "Amitraz\nDimethoate 40EC\nAbamectin\nDiazinon",
                        "200 ml/100 lt\n400–500 ml/100 lt\n280 ml/100 lt\n190 ml/100 lt",
                        "FCS in 300–600 lt, repeat as necessary\nApply as FCS, repeat as necessary\nApply at first signs of infestation\nFCS at first signs",
                        "1.5 lt\n0.8–1 lt\n0.56 lt\n0.38 lt"],
                    ["Soil borne fungi", "Thiram 80WP", "75 g/50 kg seed", "Seed dressing treatment", "—"]
                ]
            }
        ]
    },

    /* ════════════════════════════════
       SUGAR BEANS
    ════════════════════════════════ */
    {
        id: "sugarbeans",
        name: "Sugar Bean Production Guideline",
        overview: [
            { label: "Climate",        text: "Optimal temperature 18–24°C. Sensitive to frost. Minimum 400–500 mm rainfall per season." },
            { label: "Soil",           text: "Well-drained sandy loam or clay loam. Ideal pH 5.0–6.5." },
            { label: "Varieties",      text: "Short season: 85–95 days. Medium: 95–104 days. Long: 105–115 days. Available: SC Bounty, PAN 148, Purple Cardinal, Bonus, Gloria, NUA 45." },
            { label: "Seed rate",      text: "80–100 kg/ha. Treat with Apron Star at 25 g per 10 kg seed." },
            { label: "Planting time",  text: "December/January to end of February in frost-free areas." },
            { label: "Spacing",        text: "45 cm inter-row, 7–10 cm in-row. Population: 150 000–220 000/ha. Depth: 2.5–5 cm." },
            { label: "Fertilizer",     text: "Compound D at 200–400 kg/ha. Apply 100 kg/ha Ammonium Nitrate when first flowers appear." },
            { label: "Harvesting",     text: "Maturity: 90–120 days. Harvest when pods turn yellow, moisture drops to 16%." }
        ],
        sections: [
            {
                title: "Insect & Pest Management",
                headers: ["Insects / Pests", "Damage", "Recommended Products"],
                rows: [
                    ["Bean Stem Maggot",  "Mines into stems causing wilting and drying",            "Diazinon 30EC, Apron Star seed dressing; Acetameprid / Imidacloprid follow-up spray"],
                    ["Cutworm",           "Damage stems on or beneath soil surface",                 "Fenveralate; Carbaryl 85WP; Lambda Cyhalothrin"],
                    ["Aphids",            "Vectors of viruses; distorted leaves and stunting",       "Dimethoate 40EC; Malathion 25WP; Diazinon 30EC"],
                    ["Red spider mite",   "Causes leaf defoliation",                                 "Dimethoate 40EC; Diazinon 30EC"],
                    ["Pod Borers",        "Bore circular holes through pods",                        "Karate Zeon or Lambda Cyhalothrin"],
                    ["Beetles; Leaf hoppers; Caterpillars; Semi-loopers", "Leaves voraciously eaten by larvae", "Carbaryl 85WP; Malathion 25WP"],
                    ["Bean Weevils",      "Bores into seed leaving it perforated",                  "Early harvest; grain protectants"]
                ]
            },
            {
                title: "Disease Management",
                headers: ["Disease", "Symptoms", "Recommended Remedies"],
                rows: [
                    ["Anthracnose",       "Black lesions on pods",                                   "Disease-free seed & rotation; Dithane M45 or Carbaryl 80WP"],
                    ["Bacterial Blight",  "Water-soaked spots with yellow halo",                     "Certified seed & rotation; Copper Oxychloride 85WP; Dithane M45"],
                    ["Seed Borne Diseases","Damping off or failure to germinate",                    "Use certified seed"],
                    ["Damping Off / Rust","Stem darkening; cortex decay; yellow lesions",            "Vitavax Plus or Thiram 80WP; Dithane M45; Bravo; Folicur"],
                    ["Bean Mosaic",       "Stunted growth, distorted leaves with mosaic blotches",   "Control Aphids using Dimethoate 40EC"]
                ]
            },
            {
                title: "Chemical Weed Management",
                headers: ["Product Name", "Active Ingredient", "Use Rate/Ha", "20 LT Knapsack Load", "Types of Weed Destroyed"],
                rows: [
                    ["Dual Magnum*",    "S-Metalachlor",         "1.1 lts", "82 ml",  "Broad leaved weeds and Annual grasses"],
                    ["Metribuzin",      "Metribuzin (Triazine)", "1.1 lts", "75 ml",  "Broad leaved weeds and Annual grasses"],
                    ["Lasso 48EC*",     "Alachlor",              "2.5 lts", "75 ml",  "Broad leaved weeds and Annual grasses"],
                    ["Fusilade Super*", "Fluazifop-p-butyl",     "1.5 lts", "75 ml",  "Grasses and Volunteer Wheat"],
                    ["Basagran",        "Bentazon",              "2–3 lts", "—",      "Broad leaved weeds and Yellow Nutsedge"],
                    ["Classic*",        "Clorimuron",            "45 g",    "5 g",    "Broad leaved weeds and Yellow Nutsedge"],
                    ["Command 4EC",     "Clomazone",             "1.5–2 lts","—",     "Annual Grasses, Volunteer Cereals, Wandering Jews"],
                    ["Metalachlor",     "Metalachlor",           "1.5–1.9 lts","—",   "Annual Grasses and Broad Leaved Weeds"]
                ],
                note: "* Dual Magnum and Lasso 48EC are pre-emergence; Fusilade Super and Classic are post-emergence."
            }
        ]
    },

    /* ════════════════════════════════
       TOMATOES
    ════════════════════════════════ */
    {
        id: "tomatoes",
        name: "Tomatoes Production Guideline",
        overview: [
            { label: "Seed requirements", text: "~150 g per hectare for a plant population of 20 000." },
            { label: "Spacing",           text: "1.5–2.0 m between rows; 0.3–0.5 m within rows." },
            { label: "Time of Planting",  text: "Anytime through the year in frost-free areas." },
            { label: "Yield target",      text: "40–100 tonnes/ha with Good Agronomic Practices." }
        ],
        sections: [
            {
                title: "Fertilizer Requirements",
                headers: ["Application Type", "Product", "Nutrients", "Quantity/Ha", "Comments"],
                rows: [
                    ["Basal Dressing",              "Compound C",       "5:15:12",  "600 kgs",   "All applied at planting or before transplanting"],
                    ["Top Dressing (Split Apply AN)","AN 34.5%",         "—",        "200 kg",    "Split apply at 2–3 & 5–6 WAP using cup 5"],
                    ["Top Dressing (Split Apply CN)","Calcium Nitrate",  "—",        "140 kg",    "Split apply from early/medium fruiting stage"],
                    ["Top Dressing (KNO3)",          "Potassium Nitrate","—",        "200 kg",    "Split apply at flowering & early fruiting stage"],
                    ["Soil Conditioning",            "Gypsum",           "—",        "300 kg",    "Apply at or before transplanting"],
                    ["Top Dressing",                 "Magnesium Sulphate","—",       "50–100 kg", "Seek agronomist guidance"]
                ]
            },
            {
                title: "Pest, Disease & Weed Management",
                headers: ["Problem", "Product", "Rate/Spray", "Application", "App/Ha"],
                rows: [
                    ["Broad Leaf weeds", "Metribuzine", "1.0–1.5 lt/ha", "Post directed spray 14 days after transplanting", "1.0–1.5 lt/ha"],
                    ["Mainly Grasses", "Metolachlor / Agil / Gallant super", "1.3–1.5 / 0.5–2.0 / 0.6–2.4 lt", "Various — see label", "Varies"],
                    ["Nematodes / Eelworms", "Oxamyl / Velum Prime / Solvigo / Nemacure", "3.2 / 0.4 / 0.6 / 12.5 lt", "Split apply 2 & 3–4 weeks after transplanting", "Varies"],
                    ["Cutworms", "Decis forte / Lambda / Chlopyrifos", "60 ml / 100 ml / 400 ml per 100 lt", "Drench at base of plant", "Varies"],
                    ["Leaf miners, Whiteflies, Aphids", "Thunder / Imidachloprid / Dimethoate / Acetamiprid", "220 / 220 ml / 0.5–0.8 lt / 15 g per 100 lt", "Dilute in 200 lt water, repeat as necessary", "Varies"],
                    ["Boll worms, Beetles", "Thunder / Carbaryl", "220 ml / 650 g per 100 lt", "Apply in 200 lt water, repeat as necessary", "0.33 lt / 1 kg"],
                    ["Leaf miners (Tuta Absoluta)", "Steward / Methomyl", "125 ml / 150 g per 100 lt", "Apply in 200–250 lt water, repeat as necessary", "0.25 lt / 0.3 kg"],
                    ["Early & Late Blight, Leaf spots", "Azoxystrobin / Folicur", "250 ml / 75 ml per 100 lt", "Full Cover Spray before symptoms appear", "0.5 lt / 0.15 lt"],
                    ["Preventative: Leaf moulds", "Copper oxychlo / Chlorothanonil / Dithane M45", "500 g / 1 lt / 1 kg per 100 lt", "Repeat at 7-day intervals as FCS", "Varies"],
                    ["Red Spider Mites", "Amitraz / Abamectin / Diazinon / Malathion", "750 / 280 / 190 / 120 ml per 100 lt", "FCS repeat at 7-day intervals", "Varies"],
                    ["Soil borne fungi", "Thiram 80WP", "75 g/50 kg seed", "Seed dressing treatment", "—"]
                ]
            }
        ]
    }

]; /* ── END OF FF_CROP_GUIDES ── */




/* ============================================================
   SECTION 3: SOIL PARAMETERS
   ============================================================
   Each entry has a "name" and an "explanation".
   Add, remove or edit rows as needed.
   ============================================================ */

const FF_SOIL_PARAMETERS = [
    { name: "pH (0.01 M CaCl2)",              explanation: "Measures how acidic or alkaline the soil is. Affects nutrient availability and microbial activity." },
    { name: "Soil Organic Carbon (SOC)",       explanation: "Indicates the amount of carbon from decomposed organic matter. A key indicator of soil health, fertility, and biological life." },
    { name: "Soil Organic Matter (SOM)",       explanation: "Improves soil structure, water-holding capacity, and the ability to retain nutrients. Essential for resilient, productive soils." },
    { name: "Exchangeable Acidity (EA)",       explanation: "Measures harmful acid ions (H⁺ and Al³⁺) that can limit root growth and nutrient uptake, especially in low pH soils." },
    { name: "Electrical Conductivity (EC)",    explanation: "Reflects the salt levels in soil. High EC can reduce water absorption and damage crops — especially in dry conditions." },
    { name: "Available Phosphorus (P) (Bray/Olsen)", explanation: "Critical for root growth, early plant development, and energy transfer." },
    { name: "Exchangeable Potassium (K)",      explanation: "Supports plant water regulation, improves drought tolerance, enzyme activity, and fruit and seed development." },
    { name: "Exchangeable Calcium (Ca)",       explanation: "Builds strong cell walls and supports root development. Also helps balance other nutrients." },
    { name: "Exchangeable Magnesium (Mg)",     explanation: "A central part of chlorophyll — vital for photosynthesis and supporting plant growth." },
    { name: "Exchangeable Sodium (Na)",        explanation: "Excess sodium can damage soil structure and reduce plant productivity." },
    { name: "Exchangeable Aluminium (Al)",     explanation: "Can be toxic to plant roots in acidic soils, reducing root growth and nutrient uptake." },
    { name: "Plant Available Zinc (Zn)",       explanation: "Supports hormone production, enzyme function, and healthy root development. Often low in sandy soils." },
    { name: "Plant Available Copper (Cu)",     explanation: "Important for reproductive growth (flowering and fruiting) and enzyme activity." },
    { name: "Available Manganese (Mn)",        explanation: "Aids in photosynthesis and helps protect plants from disease." },
    { name: "Available Iron (Fe)",             explanation: "Essential for chlorophyll formation and energy transfer." },
    { name: "Available Nickel (Ni)",           explanation: "Required in trace amounts for nitrogen metabolism and enzyme function." },
    { name: "Available Boron (B)",             explanation: "Essential for flowering, seed formation, and strong cell walls. Can be deficient in sandy or over-limed soils." },
    { name: "TEB %Ca",                         explanation: "Shows the share of calcium among the soil's Total Exchangeable Bases. Affects structure and nutrient balance." },
    { name: "TEB %Mg",                         explanation: "Indicates magnesium's share in nutrient-holding sites. Important for photosynthesis and soil balance." },
    { name: "TEB %K",                          explanation: "Percentage of potassium in base saturation. Affects fruit quality and disease resistance." },
    { name: "TEB %Na",                         explanation: "Shows sodium levels relative to other cations. High values can signal structural issues in soil." },
    { name: "Cation Exchange Capacity (CEC)",  explanation: "Ability of soil to hold and exchange nutrients. Higher CEC means better nutrient retention." },
    { name: "Ca:Mg Ratio",                     explanation: "Balance between calcium and magnesium — used to assess soil structure and nutrient availability." },
    { name: "P:Zn Ratio",                      explanation: "Used to assess phosphorus and zinc balance. Imbalances can limit crop response to fertiliser." }
]; /* ── END OF FF_SOIL_PARAMETERS ── */
