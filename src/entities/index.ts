export interface NewsArticle {
  author: string;
  content: string;
  description: string;
  publishedAt: Date;
  source: Source;
  title: string;
  url: string;
  urlToImage: string;
}

interface Source {
  id: string;
  name: string;
}

export const stubArticles: NewsArticle[] = [
  {
    author: "Haje Jan Kamps",
    content:
      "The USA might be the land of the automobile, with its grid-oriented cities, wide roads and interstates rolling off into the horizon. But cities that were not built for cars have narrow, winding and p… [+1845 chars]",
    description:
      "The future of mopeds and motorcycles is electric, Erik Buell says. He sees mopeds and motorcycles playing a greater role in transportation.",
    publishedAt: new Date("2023-09-17T02:44:00Z"),
    source: { id: "techcrunch", name: "TechCrunch" },
    title: "Erik Buell on the future of electric motorcycles | TechCrunch",
    url: "https://techcrunch.com/2023/09/17/the-future-of-electric-motorcycles/",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2023/09/Erik-Buell-CTO.jpg?resize=1200,800",
  },
  {
    author: "Anna Heim",
    content:
      "I love to read books located in cities I am about to visit. But when it comes to San Francisco and the Bay Area, I was really impressed with the wealth of choices available.\r\nMy colleague Walter Thom… [+1819 chars]",
    description:
      "San Francisco is in a constant state of reinvention, and the many books set in or based on the Bay Area help prove it.",
    publishedAt: new Date("2023-09-16T22:54:43Z"),
    source: { id: "techcrunch", name: "TechCrunch" },
    title:
      "9 book set around San Francisco from the TechCrunch+ crew | TechCrunch",
    url: "https://techcrunch.com/2023/09/17/9-books-set-around-san-francisco/",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2022/09/GettyImages-1418948404.jpg?resize=1200,800",
  },
  {
    author: "Kirsten Korosec",
    content:
      "Welcome back to The Station, your central hub for all past, present and future means of moving people and packages from Point A to Point B.\r\nI will be at the center of the startup universe this next … [+7997 chars]",
    description:
      "Welcome back to The Station, your central hub for all past, present and future means of moving people and packages from Point A to Point B.",
    publishedAt: new Date("2023-09-16T22:11:16Z"),
    source: { id: "techcrunch", name: "TechCrunch" },
    title:
      "An autoworkers strike trifecta and another speed bump for Cruise and Waymo | TechCrunch",
    url: "https://techcrunch.com/2023/09/17/an-autoworkers-strike-trifecta-and-another-speed-bump-for-cruise-and-waymo/",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2023/09/strike.jpeg?w=1080",
  },
  {
    author: "Mary Ann Azevedo and Christine Hall",
    content:
      "Welcome back to The Interchange, where we take a look at the hottest fintech news of the previous week. This week, we take a look at one startup layoff, another offering an employee ownership buyout … [+7398 chars]",
    description:
      "Once valued at over $2 billion, rent-to-own startup Divvy Homes conducted its third round of layoffs in a year's time.",
    publishedAt: new Date("2023-09-15T23:52:49Z"),
    source: { id: "techcrunch", name: "TechCrunch" },
    title:
      "Real estate tech companies continue to get hammered by high mortgage rates | TechCrunch",
    url: "https://techcrunch.com/2023/09/17/real-estate-tech-companies-continue-to-get-hammered-by-high-mortgage-rates/",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2018/05/gettyimages-487081644.jpg?resize=1200,801",
  },
  {
    author: "Aria Alamalhodaei",
    content:
      "The U.S. Air Force denied a recent request from Varda Space Industries to land its capsule at a Utah training area, pushing back the startup's plans to show off the fruits of its in-space manufacturi… [+3336 chars]",
    description:
      "The U.S. Air Force denied a recent request from Varda Space Industries to land its capsule at a Utah training area, pushing back the startup's plans to",
    publishedAt: new Date("2023-09-15T21:40:14Z"),
    source: { id: "techcrunch", name: "TechCrunch" },
    title:
      "Varda Space puts off orbital factory reentry pending Air Force and FAA green light | TechCrunch",
    url: "https://techcrunch.com/2023/09/15/varda-space-puts-off-orbital-factory-reentry-pending-air-force-and-faa-green-light/",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2023/05/varda-space-rocket-lab.jpeg?resize=1200,927",
  },
  {
    author: "Rebecca Szkutak",
    content:
      "My grandpa will turn 93 this November. He's my last living grandparent, and while he hasn't made it this far without any health complications, he's largely thriving and still able to maintain a garde… [+1110 chars]",
    description:
      "Bold creates personalized exercise programs for seniors to reduce injury. It's one of the latest companies expanding the eldertech sector.",
    publishedAt: new Date("2023-09-15T20:19:39Z"),
    source: { id: "techcrunch", name: "TechCrunch" },
    title: "Eldertech is expanding beyond reactive solutions | TechCrunch",
    url: "https://techcrunch.com/2023/09/16/eldertech-bold-personalization/",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2023/09/GettyImages-1454983428.jpg?resize=1200,764",
  },
  {
    author: "Anna Heim",
    content:
      "Welcome to the TechCrunch Exchange, a weekly startups-and-markets newsletter. Its inspired by the daily TechCrunch+ column where it gets its name. Want it in your inbox every Saturday? Sign up here.\r… [+640 chars]",
    description:
      "French battery maker Verkor secured more than €2 billion (around $2.1 billion) to build its Dunkirk gigafactory, which is set to be operational by 2025.",
    publishedAt: new Date("2023-09-15T20:04:25Z"),
    source: { id: "techcrunch", name: "TechCrunch" },
    title:
      "The future of batteries needs more than venture capital | TechCrunch",
    url: "https://techcrunch.com/2023/09/16/future-of-batteries-vc/",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2023/08/ev-battery-factories-2.jpg?resize=1200,675",
  },
  {
    author: "Walter Thompson",
    content:
      "California is the world's breadbasket, which means we collect, transport and store as much water as possible. About 12% of the energy produced in the state is used to pump water.\r\nThrifty CEOs are ju… [+4555 chars]",
    description:
      "It's shaping up to be a very busy week, so we'll be back on Friday, September 22 with a new TC+ Roundup.",
    publishedAt: new Date("2023-09-15T18:29:12Z"),
    source: { id: "techcrunch", name: "TechCrunch" },
    title:
      "TechCrunch+ Roundup: New life for old B2B leads, LatAm VC survey, treasury management basics | TechCrunch",
    url: "https://techcrunch.com/2023/09/15/techcrunch-roundup-a-new-life-for-old-b2b-leads-latam-vc-survey-treasury-management-basics/",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2023/09/GettyImages-497036450.jpg?resize=1200,800",
  },
  {
    author: "Kyle Wiggers",
    content:
      "Hey, friendly people, and welcome to Week in Review (WiR), TechCrunch's regular newsletter that aggregates the top tech news over the past few days. It's our humble opinion that there's no better pla… [+6465 chars]",
    description:
      "In this edition of TC's Week in Review (WiR) newsletter, we cover Apple's iPhone 15 announcements, casino hacks and California's proposed AV truck ban.",
    publishedAt: new Date("2023-09-15T01:12:43Z"),
    source: { id: "techcrunch", name: "TechCrunch" },
    title:
      "The iPhone 15 gets USB-C, a redesigned Cybertruck surfaces and California considers banning AV trucks | TechCrunch",
    url: "https://techcrunch.com/2023/09/16/the-iphone-15-gets-usb-c-a-redesigned-cybertruck-surfaces-and-california-considers-banning-av-trucks/",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2023/09/Apple-iPhone-15-Pro-Camera.jpg?resize=1200,786",
  },
  {
    author: "Haje Jan Kamps",
    content:
      "Welcome to Startups Weekly. Sign up here to get it in your inbox every Friday.\r\nI know its perhaps unfair to assume that angels have the same approach to investors as professional, institutional pre-… [+7330 chars]",
    description:
      "Welcome to Startups Weekly. Sign up here to get it in your inbox every Friday. I know it's perhaps unfair to assume that angels have the same approach to",
    publishedAt: new Date("2023-09-14T23:30:49Z"),
    source: { id: "techcrunch", name: "TechCrunch" },
    title: "How angel investors lose their money, in 7 easy steps | TechCrunch",
    url: "https://techcrunch.com/2023/09/15/how-angel-investors-lose-their-money-in-7-easy-steps/",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2023/09/The-Incantation-of-the-Money-Ring-of-Fire.jpg?resize=1200,673",
  },
];
