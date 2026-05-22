export const moduleRegistry = {
  home: {
    id: "home",
    title: "Portal Home",
    entryRoute: "/portal",
    component: () => import("../modules/home/HomeModule"),
  },
  maps: {
    id: "maps",
    title: "Symbolic Maps",
    entryRoute: "/portal/maps",
    component: () => import("../modules/maps/MapsModule"),
  },
  chess: {
    id: "chess",
    title: "Chess Suite",
    entryRoute: "/portal/chess",
    component: () => import("../modules/chess/ChessPortalModule"),
  },
};

