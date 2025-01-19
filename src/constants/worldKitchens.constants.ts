interface WorldKitchensItem {
  id: number;
  title: WorldKitchensItemsNames;
  routePath: string;
}

enum WorldKitchensItemsNames {
  American = "americanCuisine",
  Armenian = "armenianCuisine",
  Belarusian = "belarusianCuisine",
  Greek = "greekCuisine",
  Georgian = "georgianCuisine",
  European = "europeanCuisine",
  Indian = "indianCuisine",
  Italian = "italianCuisine",
  Caucasian = "caucasianCuisine",
  Mexican = "mexicanCuisine",
  German = "germanCuisine",
  Russian = "russianCuisine",
  Mediterranean = "mediterraneanCuisine",
  Thai = "thaiCuisine",
  Turkish = "turkishCuisine",
  Uzbek = "uzbekCuisine",
  Ukrainian = "ukrainianCuisine",
  French = "frenchCuisine",
  Japanese = "japaneseCuisine",
}

export const WORLD_KITCHENS_ITEMS: WorldKitchensItem[] = [
  {
    id: 1,
    title: WorldKitchensItemsNames.American,
    routePath: "/world-kitchen/american",
  },
  {
    id: 2,
    title: WorldKitchensItemsNames.Armenian,
    routePath: "/world-kitchen/armenian",
  },
  {
    id: 3,
    title: WorldKitchensItemsNames.Belarusian,
    routePath: "/world-kitchen/belarusian",
  },
  {
    id: 4,
    title: WorldKitchensItemsNames.Greek,
    routePath: "/world-kitchen/greek",
  },
  {
    id: 5,
    title: WorldKitchensItemsNames.Georgian,
    routePath: "/world-kitchen/georgian",
  },
  {
    id: 6,
    title: WorldKitchensItemsNames.European,
    routePath: "/world-kitchen/european",
  },
  {
    id: 7,
    title: WorldKitchensItemsNames.Indian,
    routePath: "/world-kitchen/indian",
  },
  {
    id: 8,
    title: WorldKitchensItemsNames.Italian,
    routePath: "/world-kitchen/italian",
  },
  {
    id: 9,
    title: WorldKitchensItemsNames.Caucasian,
    routePath: "/world-kitchen/caucasian",
  },
  {
    id: 10,
    title: WorldKitchensItemsNames.Mexican,
    routePath: "/world-kitchen/mexican",
  },
  {
    id: 11,
    title: WorldKitchensItemsNames.German,
    routePath: "/world-kitchen/german",
  },
  {
    id: 12,
    title: WorldKitchensItemsNames.Russian,
    routePath: "/world-kitchen/russian",
  },
  {
    id: 13,
    title: WorldKitchensItemsNames.Mediterranean,
    routePath: "/world-kitchen/mediterranean",
  },
  {
    id: 14,
    title: WorldKitchensItemsNames.Thai,
    routePath: "/world-kitchen/thai",
  },
  {
    id: 15,
    title: WorldKitchensItemsNames.Turkish,
    routePath: "/world-kitchen/turkish",
  },
  {
    id: 16,
    title: WorldKitchensItemsNames.Uzbek,
    routePath: "/world-kitchen/uzbek",
  },
  {
    id: 17,
    title: WorldKitchensItemsNames.Ukrainian,
    routePath: "/world-kitchen/ukrainian",
  },
  {
    id: 18,
    title: WorldKitchensItemsNames.French,
    routePath: "/world-kitchen/french",
  },
  {
    id: 19,
    title: WorldKitchensItemsNames.Japanese,
    routePath: "/world-kitchen/japanese",
  },
];
