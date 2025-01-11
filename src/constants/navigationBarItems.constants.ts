interface NavBarItem {
    id: number;
    title: NavBarItemsNames;
    routerPath: string;
}

enum NavBarItemsNames {
    HOME = "home",
    MY_RECIPES = "myRecipes",
    WORLD_KITCHEN = "worldKitchen", 
    INJESTION = "injestion",
    SETTINGS = "settings"
}

export const NAV_BAR_ITEMS: NavBarItem[] = [
    {
        id: 1,
        title: NavBarItemsNames.HOME,
        routerPath: '/',
    },
    {
        id: 2,
        title: NavBarItemsNames.MY_RECIPES,
        routerPath: '/my-recipes',
    },
    {
        id: 3,
        title: NavBarItemsNames.WORLD_KITCHEN,
        routerPath: '/world-kitchen',
    },
    {
        id: 4,
        title: NavBarItemsNames.INJESTION,
        routerPath: "/ingestion",
    },
    {
        id: 5,
        title: NavBarItemsNames.SETTINGS,
        routerPath: '/settings',
    }
]
