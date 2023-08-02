const products = [
  {
    name: "Care",
    description:
      "Care is a Digital Public Good enabling TeleICU & Decentralised Administration of Healthcare Capacity across States.",
    link: "https://care.ohc.network/",
    repo: "care_fe",
    stack: [],
  },
  {
    name: "Ayushma AI",
    description:
      "Ayushma is a digital AI health and nursing assistant to help Nurses and Doctors in the most remote parts of the world.",
    link: "https://ayushma.ohc.network/",
    repo: "ayushma_fe",
    stack: [],
  },
  {
    name: "Leaderboard",
    description:
      "Leaderboard collects data from GitHub and Slack to show off the work of our open source contributors.",
    link: "https://contributors.ohc.network/",
    repo: "leaderboard",
    stack: [],
  },
  {
    name: "Medibase",
    description: "A ",
    link: "https://medibase.ohc.network/",
    repo: "medibase",
    stack: [],
  },
  {
    name: "TeleICU Middleware",
    description:
      "Middleware to help tunnel CCTV Streams, ONVIF APIs and Patient Vitals for TeleICU.",
    link: "https://github.com/coronasafe/teleicu_middleware/",
    repo: "teleicu_middleware",
    stack: [],
  },
  {
    name: "ZoomDrive",
    description:
      "A GitHub Action to download Zoom recordings periodically and upload to Google Drive.",
    link: "https://zoomdrive.ohc.network/",
    repo: "zoomdrive",
    stack: [],
  },
  {
    name: "Metabase Manager",
    description:
      "Use Metabase Manager to synchronize your Metabase instance. You can copy question cards from the source instances to destination instances.",
    link: "",
    repo: "metabase_manager",
    stack: [],
  },
  {
    name: "Care Dashboard",
    description:
      "A dashboard to visualize capacity, oxygen, asset and patient analytics.",
    link: "https://care-dashboard.vercel.app/",
    repo: "care_dashboard",
    stack: [],
  },
].map((product) => ({
  ...product,
  image: `/logos/${product.repo}.svg`,
  bg_image: `/logos/${product.repo}_bg.svg`,
  github: `https://github.com/coronasafe/${product.repo}`,
}));

export type Product = (typeof products)[0];

export default products;
