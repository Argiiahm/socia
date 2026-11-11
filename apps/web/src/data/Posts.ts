import { PostType } from "@/types/PostTypes";

export const posts: PostType[] = [
  {
    id: 1,
    name: "Nadia Putri",
    username: "@nadiaputri",
    avatar: "NP",
    time: "2h",
    content:
      "Finished the Kintsugi icon set after six weeks. 240 icons, one stroke weight, zero regrets. The process thread is below, and the full set is live in my store today.",
    likes: "842",
    comments: "64",
    reposts: "118",
    type: "product",
    product: {
      name: "Kintsugi Icon Set",
      description: "240 SVG Icons · Figma · React · Digital",
      price: "$29",
    },
  },
  {
    id: 2,
    name: "Rafi Santoso",
    username: "@rafibuilds",
    avatar: "RS",
    time: "4h",
    content:
      "Hot take: your landing page does not need a hero video. It needs one sentence a stranger can repeat to a friend. Everything else is decoration.",
    likes: "1,260",
    comments: "212",
    reposts: "301",
    type: "text",
  },
  {
    id: 3,
    name: "Dev Patel",
    username: "@devwrites",
    avatar: "DP",
    time: "6h",
    content:
      "Published a new piece on why I cut my newsletter from weekly to fortnightly, and why subscribers stayed.",
    likes: "513",
    comments: "38",
    reposts: "90",
    type: "article",
    article: {
      category: "SIGNAL & NOISE",
      title: "The quiet case for slower newsletters",
      description:
        "Why our best readers stopped wanting more issues and started asking for better ones.",
      readTime: "7 min read",
      reactions: "1.2k reactions",
    },
  },
  {
    id: 4,
    name: "Sarah Miller",
    username: "@sarahdesign",
    avatar: "SM",
    time: "8h",
    content:
      "A little reminder for designers: don't chase trends. Build something that feels right, works beautifully, and solves a real problem.",
    likes: "329",
    comments: "42",
    reposts: "56",
    type: "text",
  },
];
