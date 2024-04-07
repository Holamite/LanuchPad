export interface NavUtilType {
  name: string;
  url: string;
}

export const NavUtil: NavUtilType[] = [
  {
    name: "Home",
    url: "/?home=true",
  },
  {
    name: "Swap",
    url: "/swap?swap=true&create=true",
  },
  {
    name: "Launchpad",
    url: "?pad=true",
  },
  {
    name: "Token",
    url: "/token?token=true&create=true",
  },
];

export const LaunchpadUtil = [
  {
    name: "Explore Pads",
    url: "/pad?pad=true&pads=true",
  },
  {
    name: "My Pads",
    url: "/pad/user-pad?pad=true&user=true",
  },
  {
    name: "Create Pad",
    url: "/create?pad=true",
  },
];
