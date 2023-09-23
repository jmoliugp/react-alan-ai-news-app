const newsApiKey = process.env.NEWS_API_KEY;
let savedArticles = [];

//--------------------------------------------------------------------------------------
// Voice command controllers
//--------------------------------------------------------------------------------------

// News by source.
intent("Give me the news from $(source* (.*))", async (p) => {
  try {
    const source = p.source.value;
    const articles = await getNews({ source });

    p.play({ command: "newHeadlines", articles });
    p.play(`Here are the (latest|recent) news from ${p.source.value}.`);

    p.play("Would you like me to read the headlines?");
    p.then(confirmation);
  } catch (error) {
    p.play("Sorry, please try searching for news from a different source.");
  }
});

// News by term.
intent("what's up with $(term* (.*))", async (p) => {
  try {
    const term = p.term.value;
    const articles = await getNews({ term });

    p.play({ command: "newHeadlines", articles });
    p.play(`Here are the (latest|recent) news from ${p.source.value}.`);

    p.play("Would you like me to read the headlines?");
    p.then(confirmation);
  } catch (error) {
    p.play("Sorry, please try searching for news from a different source.");
  }
});

// News by Categories
const CATEGORIES = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];
const CATEGORIES_INTENT = `${CATEGORIES.map(
  (category) => `${category}~${category}`
).join("|")}|`;

intent(
  `(show|what is|tell me|what's|what are|what're|read) (the|) (recent|latest|) $(N news|headlines) (in|about|on|) $(C~ ${CATEGORIES_INTENT})`,
  `(read|show|get|bring me|give me) (the|) (recent|latest) $(C~ ${CATEGORIES_INTENT}) $(N news|headlines)`,
  async (p) => {
    try {
      const category = p.C.value;
      const articles = await getNews({ category });

      if (!articles.length) {
        p.play("Sorry, please try searching for a different category.");
        return;
      }

      savedArticles = articles;

      p.play({ command: "newHeadlines", articles });

      if (p.C.value) {
        p.play(`Here are the (latest|recent) articles on ${p.C.value}.`);
      } else {
        p.play(`Here are the (latest|recent) news`);
      }

      p.play("Would you like me to read the headlines?");
      p.then(confirmation);
    } catch (error) {
      p.play("Sorry, please try searching for news from a different category.");
    }
  }
);

//--------------------------------------------------------------------------------------
// Networking functions
//--------------------------------------------------------------------------------------

const getNews = async ({ category, term, source }) => {
  const apiUrl = "https://newsapi.org/v2/top-headlines";
  try {
    const params = {
      apiKey: newsApiKey,
      ...(source && { sources: source.toLowerCase().split(" ").join("-") }),
      ...(term && { q: term }),
      ...(category && { category }),
    };

    const response = await api.axios.get(apiUrl, {
      params,
      headers: {
        "User-Agent": "AlanAI Voice App",
      },
    });

    const articles = response.data.articles;
    if (articles && articles.length > 0) {
      return articles;
    } else {
      throw new Error("No news articles found for the source.");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//--------------------------------------------------------------------------------------
// Util functions
//--------------------------------------------------------------------------------------

const confirmation = context(() => {
  intent("yes", async (p) => {
    for (let i = 0; i < savedArticles.length; i++) {
      p.play({ command: "highlight", article: savedArticles[i] });
      p.play(`${savedArticles[i].title}`);
    }
  });

  intent("no", (p) => {
    p.play("Sure, sounds good to me.");
  });
});

intent("open (the|) (article|) (number|) $(number* (.*))", (p) => {
  if (p.number.value) {
    p.play({
      command: "open",
      number: p.number.value,
      articles: savedArticles,
    });
  }
});

intent("(go|) back", (p) => {
  p.play("Sure, going back");
  p.play({ command: "newHeadlines", articles: [] });
});
