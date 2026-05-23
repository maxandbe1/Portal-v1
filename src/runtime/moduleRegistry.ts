import { lazy } from "react";

export const moduleRegistry = {
  home: {
    id: "home",
    title: "Portal Home",
    entryRoute: "/portal",
    component: lazy(() => import("../modules/home/HomeModule")),
  },
  maps: {
    id: "maps",
    title: "Symbolic Maps",
    entryRoute: "/portal/maps",
    component: lazy(() => import("../modules/maps/MapsModule")),
  },
  chess: {
    id: "chess",
    title: "Chess Suite",
    entryRoute: "/portal/chess",
    component: lazy(() => import("../modules/chess/ChessPortalModule")),
  },
};
