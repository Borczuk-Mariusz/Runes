import type { Rune, PuzzleVariant } from "./types";

export const puzzleVariants: PuzzleVariant[] = [
  {
    id: "ashes_of_abundance",
    name: "Variant I: Ashes of Abundance",
    haiku: [
      "Wealth turns into grain,",
      "Torch ignites dawn's sudden hail,",
      "Seed of man hears breath."
    ],
    secretSequence: [0, 11, 5, 23, 8, 21, 19, 3, 12],
    truth: [
      `The herds grew fat on the blood of the earth. The people feasted in the long summer, believing the grain would always rise and the bellies would always fill like they used to do. They danced around fires that never dimmed, drunk on their own ease despite the horrors they had caused to others.

Then the sky split open. It was not a sunrise. It was a wound. The light that poured through was cold and sharp as a flint blade. Sun turned red and began to bleed. The golden fields withered in a single breath. The cattle fell where they stood, their eyes bursting from within. Eyes turned white like milk. The cycle of seasons snapped like a dry twig.

Chaos ate the tribe. Neighbors tore at each other for the last rotting roots. The old songs died in throats choked with ash. On the highest peak, the Shaman stood alone. She laughed a dry, broken sound. She saw the truth that comfort had blinded them to: could anyone prevent the end, or was she blessed to become the One?`
    ]
  },
  {
    id: "frost_giants_wrath",
    name: "Variant II: Frost Giant's Wrath",
    haiku: [
      "Still ice brings storm hail,",
      "Need binds deep ocean waters,",
      "Sun strikes cold despair."
    ],
    secretSequence: [10, 8, 9, 20, 15],
    truth: [
      `The glaciers moved from the northern realm not as slow ice, but as living jaws. Entire kingdoms were swallowed in a single night of silence. The fires in the hearths turned to blue frost, and breath froze inside lungs before a cry could be uttered.

They prayed to the sun, but the sun was a pale eye blind to their agony. The ancient giants had awakened from their obsidian slumbers to reclaim the bone-cold earth. Only those who yielded their pride to the freezing waters survived to whisper the secret names of the icy gods.`
    ]
  },
  {
    id: "world_tree_rebirth",
    name: "Variant III: World Tree Rebirth",
    haiku: [
      "Yew tree guards the seed,",
      "Birch horns shield ancestral home,",
      "Joy blooms at the end."
    ],
    secretSequence: [12, 21, 17, 14, 22, 7],
    truth: [
      `Deep beneath the world's ruined mantle, the sacred Yew tree held its breath. When all mortal crowns lay buried in dust, the hidden seed sprouted through stone.

The wild elk stood guard over the sapling as ancient spirits rode across the starlit sky. Out of death's cold silence, the ancestral hearth burned once more, bright with unyielding joy and eternal renewal.`
    ]
  },
  {
    id: "forge_of_star_metal",
    name: "Variant IV: Forge of Star-Metal",
    haiku: [
      "Torch kindles wild strength,",
      "Justice blade forged in the dark,",
      "Daybreak crowns the fire."
    ],
    secretSequence: [5, 1, 16, 23],
    truth: [
      `In the subterranean chambers beneath the anvil mountain, Svarog hammered the star-metal. With every blow, sparks ignited the darkness.

The blacksmith gods demanded sacrifice—not of blood, but of pride. When the blade of divine justice was quenched in the waters of life, the morning light broke through the cavern ceiling, crowning the worthy in everlasting fire.`
    ]
  },
  {
    id: "tides_of_deep_stream",
    name: "Variant V: Tides of the Deep Ocean",
    haiku: [
      "Ocean speaks in dreams,",
      "Breath of gods gifts human soul,",
      "Ice yields harvest cycles."
    ],
    secretSequence: [20, 13, 3, 6, 19, 10, 11],
    truth: [
      `The sea remembers everything the land forgot. Beneath the black waves, ancient voices sang of forgotten tides.

Those who listened to the ocean's whisper surrendered their waking minds to the deep flow. The waves washed clean the bloodied soil, leaving behind crystal shells inscribed with the names of those destined to endure the great flood.`
    ]
  },
  {
    id: "dawn_of_solar_rays",
    name: "Variant VI: Dawn of Solar Rays",
    haiku: [
      "Sunlight breaks the dawn,",
      "Golden rays herald morning,",
      "Joy fills all the earth."
    ],
    secretSequence: [15, 23, 7],
    truth: [
      `When Sol's chariot surged past the morning mist, the shadows that had blanketed the valley dissolved into golden dust.

The wild steeds thundered across the meadows, kindling the dormant seeds deep within the soil. Families gathered at the hearths, singing songs that had not been heard since the age of elders.`
    ]
  }
];

export const prophecies = puzzleVariants[0].haiku;
export const theTruth = puzzleVariants[0].truth;
export const runes: Rune[] = [
  {
    symbol: "ᚠ",
    name: "Fehu",
    meaning: "Wealth, Cattle, Circulating Life Force",
    color: "#FFD700",
    colorName: "Molten Gold",
    reasoning: "Radiant golden shimmer representing abundance, liquid wealth, and the vital spark of prosperity.",
    whisper: "Wealth flows to those who share it wisely..."
  },
  {
    symbol: "ᚢ",
    name: "Uruz",
    meaning: "Wild Ox, Primal Vitality, Earth Strength",
    color: "#B87333",
    colorName: "Primal Bronze",
    reasoning: "Deep bronze and rich earth, embodying the untamed muscle and fierce vigor of the ancient aurochs.",
    whisper: "The untamed strength of the wild ox awakens..."
  },
  {
    symbol: "ᚦ",
    name: "Thurisaz",
    meaning: "Thorn, Giant, Defense",
    color: "#FF003C",
    colorName: "Crimson Flame",
    reasoning: "Fierce blood-red of Thor's lightning strike and the protective thorn against chaotic forces.",
    whisper: "Beware the thorns that guard the sacred threshold..."
  },
  {
    symbol: "ᚨ",
    name: "Ansuz",
    meaning: "God, Divine Breath, Revelation",
    color: "#4169E1",
    colorName: "Royal Blue",
    reasoning: "Sacred blue of the heavens, representing Perun's breath and divine inspiration.",
    whisper: "Listen for the divine whisper in the wind..."
  },
  {
    symbol: "ᚱ",
    name: "Raidho",
    meaning: "Journey, Cosmic Order, Sun Chariot",
    color: "#70E000",
    colorName: "Emerald Path",
    reasoning: "Vibrant moss green of the winding trail and the steady rhythm of a noble journey.",
    whisper: "Your path aligns with the rhythm of the cosmos..."
  },
  {
    symbol: "ᚲ",
    name: "Kenaz",
    meaning: "Torch, Fire, Illumination",
    color: "#FF5500",
    colorName: "Blazing Ember",
    reasoning: "Fiery orange-red of the blacksmith's torch, burning away darkness to reveal hidden truth.",
    whisper: "The torch of knowledge banishes the shadows of ignorance..."
  },
  {
    symbol: "ᚷ",
    name: "Gebo",
    meaning: "Gift, Sacred Bond, Harmonious Exchange",
    color: "#F72585",
    colorName: "Rose Quartz",
    reasoning: "Vibrant rose pink representing heartfelt exchange, hospitality, and sacred soul bonds.",
    whisper: "A gift given freely binds souls across time..."
  },
  {
    symbol: "ᚹ",
    name: "Wunjo",
    meaning: "Joy, Harmony, Perfection",
    color: "#FFEA00",
    colorName: "Sunbeam Gold",
    reasoning: "Warm golden sunlight radiating pure joy, perfection, and emotional harmony.",
    whisper: "Joy is the light that conquers all shadows..."
  },
  {
    symbol: "ᚺ",
    name: "Hagalaz",
    meaning: "Hail, Storm, Destruction",
    color: "#48CAE4",
    colorName: "Storm Ice",
    reasoning: "Glacial tempest blue-gray of shattering hailstones and nature's transformative power.",
    whisper: "From the shattering storm, the new world is forged..."
  },
  {
    symbol: "ᚾ",
    name: "Nauthiz",
    meaning: "Need, Friction, Constraint",
    color: "#E65100",
    colorName: "Smoldering Ember",
    reasoning: "Fiery charcoal orange of friction sticks kindled in times of dire survival and intense need.",
    whisper: "Necessity and friction forge the strongest steel..."
  },
  {
    symbol: "ᛁ",
    name: "Isa",
    meaning: "Ice, Stillness, Preservation",
    color: "#E0FAFF",
    colorName: "Crystalline Frost",
    reasoning: "Pale diamond-cyan ice representing absolute stillness, focus, and quiet preservation.",
    whisper: "In perfect stillness, the deepest truths emerge..."
  },
  {
    symbol: "ᛃ",
    name: "Jera",
    meaning: "Harvest, Solar Cycle, Ripe Grain",
    color: "#FFB703",
    colorName: "Harvest Amber",
    reasoning: "Glowing amber of ripe barley fields and the sweet reward of seasonal patience.",
    whisper: "The harvest rewards those who respect the seasons..."
  },
  {
    symbol: "ᛇ",
    name: "Eihwaz",
    meaning: "Yew Tree, World Tree, Death",
    color: "#9D4EDD",
    colorName: "Mystic Yew Violet",
    reasoning: "Deep otherworldly purple of the sacred yew tree, bridging the nine realms of life and death.",
    whisper: "Death is but a doorway; the roots hold fast..."
  },
  {
    symbol: "ᛈ",
    name: "Perthro",
    meaning: "Change, Mystery, Fate",
    color: "#6F2DBD",
    colorName: "Arcane Indigo",
    reasoning: "Deep mysterious indigo-violet of the cosmic dice cup and the secret threads of fate.",
    whisper: "The dice of fate tumble in the deep mystery..."
  },
  {
    symbol: "ᛉ",
    name: "Algiz",
    meaning: "Elk Horns, Protection, Sedge Grass",
    color: "#52B788",
    colorName: "Jade Sanctuary",
    reasoning: "Protective jade green of the guardian elk antlers and resilient marsh reed grass.",
    whisper: "The gods' protection shields those who stand tall..."
  },
  {
    symbol: "ᛊ",
    name: "Sowilo",
    meaning: "Sun, Sol's Rays, Victorious Light",
    color: "#FF9E00",
    colorName: "Solar Plasma",
    reasoning: "Brilliant, blinding orange-gold of the victorious midday sun driving away darkness.",
    whisper: "The sun's victory shines upon the worthy..."
  },
  {
    symbol: "ᛏ",
    name: "Tiwaz",
    meaning: "Svarog, Justice, Honor",
    color: "#E0E1DD",
    colorName: "Star-Forged Steel",
    reasoning: "Gleaming polished silver of Tyr's sacrificed hand and the unyielding blade of truth.",
    whisper: "Justice cuts both ways; stand firm in honor..."
  },
  {
    symbol: "ᛒ",
    name: "Berkano",
    meaning: "Birch Goddess, Vernal Growth, Renewal",
    color: "#80FFDB",
    colorName: "Vernal Birch",
    reasoning: "Fresh glowing mint-green of spring birch shoots, symbolizing birth and gentle rebirth.",
    whisper: "From the bare earth, new beginnings bloom..."
  },
  {
    symbol: "ᛖ",
    name: "Ehwaz",
    meaning: "Trust, Partnership, Swift Movement",
    color: "#C67D0A",
    colorName: "Stallion Bronze",
    reasoning: "Rich chestnut copper of the galloping stallion, representing trust and effortless momentum.",
    whisper: "Swift movement brings change; trust the ride..."
  },
  {
    symbol: "ᛗ",
    name: "Mannaz",
    meaning: "Human, Collective, Mankind",
    color: "#E07A5F",
    colorName: "Human Ochre",
    reasoning: "Warm terracotta ochre of human clay, representing social unity and enlightened mind.",
    whisper: "In unity and self-awareness, mankind finds strength..."
  },
  {
    symbol: "ᛚ",
    name: "Laguz",
    meaning: "Water, Intuition, Flow",
    color: "#06B6D4",
    colorName: "Deep Ocean Cyan",
    reasoning: "Glowing oceanic cyan of deep tidal waters, intuition, and emotional currents.",
    whisper: "Life flows like water; trust your intuition..."
  },
  {
    symbol: "ᛜ",
    name: "Ingwaz",
    meaning: "Gestating Seed, Fertility, Peace",
    color: "#10B981",
    colorName: "Fertile Emerald",
    reasoning: "Vibrant emerald green of the hidden germinating seed awaiting its time to sprout.",
    whisper: "Within the seed, a great forest waits to grow..."
  },
  {
    symbol: "ᛟ",
    name: "Othala",
    meaning: "Ancestral Home, Hearth, Inheritance",
    color: "#C1121F",
    colorName: "Ancestral Hearth Red",
    reasoning: "Deep blood-red of the ancestral hearth fire, family legacy, and sacred homeland.",
    whisper: "The hearth fire remembers the ancestors..."
  },
  {
    symbol: "ᛞ",
    name: "Dagaz",
    meaning: "Daybreak, Breakthrough, Awakening",
    color: "#F78C6B",
    colorName: "Dawn Aurora",
    reasoning: "Luminous coral dawn pink, heralding the moment night turns into triumphant day.",
    whisper: "Each dawn brings a breakthrough of light..."
  }
];