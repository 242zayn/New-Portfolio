const PAGE_PREFIX = "Sarvesh Sharma";
const PAGE_DESCRIPTION =
  "Hello! I am Sarvesh , a programmer who also ventures into the world of design. I consider myself a quick learner, easily adaptable to current needs. I offer services as a web developer, creating efficient and personalized digital solutions to meet the demands of my clients.";
const PAGE_URL = "https://services.davidquintr.com/";

const MetadataBase = {
  default: {
    metadataBase: new URL(PAGE_URL),
    description: PAGE_DESCRIPTION,
    icons: {
      icon: [
        { url: "/image1.png" },
        { url: "/image1.png", media: "(prefers-color-scheme: dark)" },
      ],
    },
  },
  openGraph: {
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    sitename: PAGE_PREFIX,
    images: [
      {
        url: `${PAGE_URL}thumbnail-full.png`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    description: PAGE_DESCRIPTION,
    images: [`${PAGE_URL}thumbnail-full.png`],
  },
};

const createPageMetadata = (pageTitle: string) => ({
  title: `${pageTitle} | ${PAGE_PREFIX} `,
  ...MetadataBase.default,
  openGraph: {
    title: `${pageTitle} | ${PAGE_PREFIX} `,
    ...MetadataBase.openGraph,
  },
  twitter: {
    title: `${pageTitle} | ${PAGE_PREFIX} `,
    ...MetadataBase.twitter,
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: true,
      follow: false,
    },
  },
});

const Metadata = createPageMetadata("Sarvesh Sharma");

export default Metadata;
