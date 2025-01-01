const marbleGlassMedia = [
  {
    id: 1,
    name: "Emperador Dark Marble",
    image: "/assets/craft-1.jpeg",
    range: "₹400 - ₹600 per sq. ft.",
    description:
      "Rich brown marble with intricate light veins, perfect for walls and flooring.",
  },
  {
    id: 2,
    name: "Green Guatemala Marble",
    image: "/assets/craft-2.jpeg",
    range: "₹600 - ₹900 per sq. ft.",
    description: "Vibrant green marble with a unique, forest-like texture.",
  },
];

const luxuryWhiteMedia = [
  {
    id: 3,
    name: "White Carrara Marble",
    image: "https://example.com/images/white-carrara.jpg",
    range: "₹500 - ₹700 per sq. ft.",
    description:
      "Classic white marble with grey veining, ideal for flooring and countertops.",
  },
  {
    id: 4,
    name: "Calacatta Gold Marble",
    image: "",
    range: "₹800 - ₹1200 per sq. ft.",
    description: "Luxurious marble with bold gold veining on a white base.",
  },
];

const modernShadesMedia = [
  {
    id: 5,
    name: "Black Marquina Marble",
    image: "https://example.com/images/black-marquina.jpg",
    range: "₹700 - ₹1000 per sq. ft.",
    description:
      "Striking black marble with white streaks, ideal for luxury interiors.",
  },
  {
    id: 6,
    name: "Pink Marble",
    image: "https://example.com/images/pink-marble.jpg",
    range: "₹500 - ₹800 per sq. ft.",
    description:
      "Delicate pink marble with soft white veins, perfect for accent pieces.",
  },
];

const premiumCollectionMedia = [
  {
    id: 7,
    name: "Statuario Marble",
    image: "https://example.com/images/statuario.jpg",
    range: "₹1500 - ₹2000 per sq. ft.",
    description:
      "Premium white marble with dramatic grey veining, often used for statement pieces.",
  },
  {
    id: 8,
    name: "Onyx Marble",
    image: "https://example.com/images/onyx.jpg",
    range: "₹1200 - ₹1800 per sq. ft.",
    description:
      "Translucent marble with unique patterns, often used for backlit installations.",
  },
];

export const categories = [
  {
    price:"2500-5000",
    category: "exterior-design",
    background: "/assets/craft-2.jpeg",
    media: marbleGlassMedia,
  },
  {
    price:"2500-5000",

    category: "interior-design",
    background: "/assets/craft-1.jpeg",
    media: luxuryWhiteMedia,
  },
  {
    price:"2500-5000",

    category: "Modern Shades",
    background: "/images/modern-shades-bg.png",
    media: modernShadesMedia,
  },
  {
    price:"2500-5000",

    category: "Premium Collection",
    background: "/images/premium-collection-bg.png",
    media: premiumCollectionMedia,
  },
];
