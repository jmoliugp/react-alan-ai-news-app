import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { NewsCards } from "./components/NewsCards";

const ALAN_KEY = process.env.ALAN_KEY;

export function App() {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    if (!ALAN_KEY) return;

    alanBtn({
      key: ALAN_KEY,
      // @ts-ignore
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <h1>Alan AI News application</h1>
      <NewsCards articles={newsArticles} />
    </div>
  );
}
