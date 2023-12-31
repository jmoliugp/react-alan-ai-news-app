import React, { useEffect, useRef, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { NewsCards } from "./components/NewsCards";
import { NewsArticle } from "./entities";
import { useStyles } from "./styles";
import { InfoCards } from "./components/InfoCards";
import wordsToNumbers from "words-to-numbers";

interface CommandParams {
  command?: Command;
  articles?: NewsArticle[];
  rawSelectedArticleIndex?: string;
}

enum Command {
  NewHeadlines = "newHeadlines",
  Highlight = "highlight",
  Open = "open",
}

const ALAN_KEY = process.env.ALAN_KEY;

export function App() {
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>();
  const [activeArticle, setActiveArticle] = useState(-1);
  const classes = useStyles();
  const alanBtnInstance = useRef<any>(null);

  useEffect(() => {
    if (!ALAN_KEY) return;

    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key: ALAN_KEY,
        // @ts-ignore
        onCommand: ({
          command,
          articles,
          rawSelectedArticleIndex,
        }: CommandParams) => {
          if (command === Command.NewHeadlines) {
            setActiveArticle(-1);
            setNewsArticles(articles ?? []);
          }
          if (command === Command.Highlight) {
            setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
          }
          if (command === Command.Open) {
            if (!articles?.length || !rawSelectedArticleIndex) return;
            const rawIndex =
              rawSelectedArticleIndex.length > 2 // Not recognized as a number from voice recognition.
                ? wordsToNumbers(rawSelectedArticleIndex, {
                    fuzzy: true,
                  })
                : rawSelectedArticleIndex;

            if (rawIndex === null) {
              alanBtnInstance.current.playText(
                "Please try again, index was not recognized as a valid number..."
              );
              return;
            }
            const index =
              typeof rawIndex === "string" ? parseInt(rawIndex) : rawIndex;

            const article = articles[index - 1];
            if (!article) {
              alanBtnInstance.current.playText("Please try again...");
              return;
            }

            window.open(article.url, "_blank");
            alanBtnInstance.current.playText("Opening...");
          }
        },
      });
    }
  }, []);

  const alanLogoSrc =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEwIiBoZWlnaHQ9IjM2IiB2aWV3Qm94PSIwIDAgMjEwIDM2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMjIyXzExMDEpIj4KPHBhdGggZD0iTTYwLjM1MTggMzUuNTY1OUw3My44ODY0IDIuOTU2NTZIODAuODI3Mkw5NC40MDUxIDM1LjU2NTlIODcuMDMwNUw3NS45MjUyIDYuNzc2NTJINzguNzAxNkw2Ny41NTI5IDM1LjU2NTlINjAuMzUxOFpNNjcuMTE5MSAyOC41NzgyTDY4Ljk4NDQgMjIuODQ4M0g4NC42MDEyTDg2LjUxIDI4LjU3ODJINjcuMTE5MVoiIGZpbGw9IiMwRDE5NDAiLz4KPHBhdGggZD0iTTk3LjE0MTMgMzUuNTY1OVYxSDEwMy45MDlWMzUuNTY1OUg5Ny4xNDEzWiIgZmlsbD0iIzBEMTk0MCIvPgo8cGF0aCBkPSJNMTYxLjU1NCAzNS41NzgyTDE3NS4wODkgMi45Njg4MkgxODIuMDNMMTk1LjYwNyAzNS41NzgySDE4OC4yMzNMMTc3LjEyOCA2Ljc4ODc4SDE3OS45MDRMMTY4Ljc1NSAzNS41NzgySDE2MS41NTRaTTE2OC4zMjEgMjguNTkwNUwxNzAuMTg3IDIyLjg2MDVIMTg1LjgwNEwxODcuNzEyIDI4LjU5MDVIMTY4LjMyMVoiIGZpbGw9IiMwRDE5NDAiLz4KPHBhdGggZD0iTTE5OC44MjEgMzUuNTc4MlYyLjk2ODgySDIwNS44NDhWMzUuNTc4MkgxOTguODIxWiIgZmlsbD0iIzBEMTk0MCIvPgo8cGF0aCBkPSJNMTQ2LjEwMiAxMS44OTk3QzE0Ny44MjcgMTEuODk5NyAxNDkuMzY0IDEyLjI3NiAxNTAuNzExIDEzLjAyODZDMTUyLjA4NiAxMy43NTIzIDE1My4xNjQgMTQuODgxMyAxNTMuOTQ2IDE2LjQxNTVDMTU0LjcyOCAxNy45MjA3IDE1NS4xMTkgMTkuODYwMiAxNTUuMTE5IDIyLjIzMzlWMzUuNjA3N0gxNDguODExVjIzLjI3NkMxNDguODExIDIxLjM5NDQgMTQ4LjQyIDIwLjAwNSAxNDcuNjM4IDE5LjEwNzZDMTQ2Ljg4NCAxOC4yMTAyIDE0NS44MDUgMTcuNzYxNSAxNDQuNDA0IDE3Ljc2MTVDMTQzLjQwNiAxNy43NjE1IDE0Mi41MDMgMTcuOTkzMSAxNDEuNjk1IDE4LjQ1NjNDMTQwLjkxMyAxOC44OTA1IDE0MC4yOTMgMTkuNTcwNyAxMzkuODM1IDIwLjQ5NzFDMTM5LjQwMyAyMS40MjM0IDEzOS4xODggMjIuNjEwMiAxMzkuMTg4IDI0LjA1NzZWMzUuNjA3N0gxMzIuODhWMTIuMjQ3SDEzOC45MDVWMTguNzE2OEwxMzcuNzczIDE2Ljc2MjhDMTM4LjU1NCAxNS4xOTk3IDEzOS42NzMgMTMuOTk4NCAxNDEuMTI5IDEzLjE1ODlDMTQyLjU4NCAxMi4zMTk0IDE0NC4yNDIgMTEuODk5NyAxNDYuMTAyIDExLjg5OTdaIiBmaWxsPSIjMEQxOTQwIi8+CjxwYXRoIGQ9Ik0xMTUuNDc1IDM2QzExMy45MjMgMzYgMTEyLjQ5MiAzNS42OTg4IDExMS4xODQgMzUuMDk2NEMxMDkuOTA1IDM0LjQ2MzkgMTA4Ljg4NiAzMy42MjA2IDEwOC4xMjUgMzIuNTY2NEMxMDcuMzk0IDMxLjUxMjIgMTA3LjAyOSAzMC4zNTI2IDEwNy4wMjkgMjkuMDg3NkMxMDcuMDI5IDI3LjAzOTUgMTA3Ljg2NiAyNS4zODI5IDEwOS41NCAyNC4xMTc5QzExMS4yMTQgMjIuODUyOSAxMTMuNTEyIDIxLjk5NDUgMTE2LjQzNCAyMS41NDI3TDEyMi42ODkgMjAuNjM5MVYxOS42OTAzQzEyMi42ODkgMTguMzY1MSAxMjIuMzU0IDE3LjM3MTEgMTIxLjY4NCAxNi43MDg1QzEyMS4wMTUgMTYuMDQ1OSAxMTkuOTM0IDE1LjcxNDYgMTE4LjQ0MyAxNS43MTQ2QzExNy40MzggMTUuNzE0NiAxMTYuNjE2IDE1LjkxMDMgMTE1Ljk3NyAxNi4zMDE5QzExNS4zNjkgMTYuNjYzMyAxMTQuODgyIDE3LjAyNDggMTE0LjUxNiAxNy4zODYyQzExNC4xNTEgMTcuNzc3OCAxMTMuNzA4IDE4LjU3NTkgMTEzLjU4NiAxOC42OTY0SDEwOC41ODFDMTA4LjU4MSAxOC4zNDczIDEwOC41NTkgMTguMTgxMyAxMDguNTgxIDE3LjY0MjRDMTA4LjYxMiAxNi44ODk0IDEwOC45NzcgMTYuMDkxMSAxMDkuNjc3IDE1LjEyNzJDMTEwLjQwNyAxNC4xNjM0IDExMS41MTggMTMuMzM1MSAxMTMuMDEgMTIuNjQyNEMxMTQuNTAxIDExLjk0OTYgMTE2LjMyNyAxMS42MDMzIDExOC40ODggMTEuNjAzM0MxMjIuMDggMTEuNjAzMyAxMjUuMDg4IDEyLjQwMTQgMTI2LjczMiAxMy45OTc4QzEyOC4zNzYgMTUuNTk0MSAxMjkuMTk3IDE3LjY4NzQgMTI5LjE5NyAyMC4yNzc3VjM0LjQ2MzlDMTI5LjE5NyAzNC43NjUxIDEyOS4xOTcgMzUuNTQ4MiAxMjkuMTk3IDM1LjU0ODJIMTIyLjkxN0MxMjIuOTE3IDM1LjU0ODIgMTIyLjkxNyAzNC43NjUxIDEyMi45MTcgMzQuNDYzOVYzMi43MDE5QzEyMi4yNDcgMzMuNjY1NyAxMjEuMjg4IDM0LjQ2MzkgMTIwLjA0MSAzNS4wOTY0QzExOC44MjMgMzUuNjk4OCAxMTcuMzAxIDM2IDExNS40NzUgMzZaTTExNy4wMjcgMzEuNzA4QzExOC43MDEgMzEuNzA4IDEyMC4wNzEgMzEuMTY1OCAxMjEuMTM2IDMwLjA4MTVDMTIyLjIwMiAyOC45OTcyIDEyMi43MzQgMjcuNDE2IDEyMi43MzQgMjUuMzM3N1YyNC4zODlMMTE4LjE2OSAyNS4xMTE4QzExNi40MDMgMjUuMzgyOSAxMTUuMDY0IDI1LjgxOTYgMTE0LjE1MSAyNi40MjJDMTEzLjI2OCAyNy4wMjQ0IDExMi44MjcgMjcuNzYyMyAxMTIuODI3IDI4LjYzNThDMTEyLjgyNyAyOS41OTk2IDExMy4yMzggMzAuMzUyNiAxMTQuMDYgMzAuODk0N0MxMTQuODgyIDMxLjQzNjkgMTE1Ljg3MSAzMS43MDggMTE3LjAyNyAzMS43MDhaIiBmaWxsPSIjMEQxOTQwIi8+CjxwYXRoIGQ9Ik0zNi4wNjI3IDEuMDAwMjRIMjEuODc1OEw0LjAxMDg1IDM1LjU2NTlIMTcuODAzN0wzNi4wNjI3IDEuMDAwMjRaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMjIyXzExMDEpIi8+CjxwYXRoIGQ9Ik0zNS42MjYgMzUuNTY1OEwyOS4wNTggMjMuMjIwOUgxMC4zNzcyTDQuMDAwMDkgMzUuNTY1OEgzNS42MjZaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXJfMjIyXzExMDEpIi8+CjxwYXRoIGQ9Ik0xNy44MDI0IDM1LjU2NThMMjQuMzIzMiAyMy4yMjA5SDEwLjM4NzdMNC4wMTA1OCAzNS41NjU4SDE3LjgwMjRaIiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXJfMjIyXzExMDEpIi8+CjxwYXRoIGQ9Ik0yMS44NDgzIDFIMzYuMDM1Mkw1My45MDAyIDM1LjU2NTZINDAuMTA3NEwyMS44NDgzIDFaIiBmaWxsPSJ1cmwoI3BhaW50M19saW5lYXJfMjIyXzExMDEpIi8+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8yMjJfMTEwMSIgeDE9IjExLjk5MzciIHkxPSI0Mi4yMjU4IiB4Mj0iLTIuMDc0MzgiIHkyPSI4LjM3MzciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzE5NzBFMyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxMTVGQzYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzIyMl8xMTAxIiB4MT0iNDEuMDkwOSIgeTE9IjI2LjQ0ODciIHgyPSIzNy45MDEyIiB5Mj0iNDEuNDkzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2MkJCRkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDA5REZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhcl8yMjJfMTEwMSIgeDE9IjcuOTQ1OTkiIHkxPSIzNy4yMzE5IiB4Mj0iNS44MjIwNiIgeTI9IjI0LjMzNzQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzMyQkVGRiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1RUNDRkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyXzIyMl8xMTAxIiB4MT0iMTQuODU1IiB5MT0iMTAuMDM3NiIgeDI9IjMzLjY4ODciIHkyPSI0My40MzQzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM2MkJCRkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDA5REZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMjIyXzExMDEiPgo8cmVjdCB3aWR0aD0iMjA5IiBoZWlnaHQ9IjM1IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC41IDAuNSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K";
  const newsAvailable = newsArticles && newsArticles.length > 0;

  return (
    <div>
      <div className={classes.logoContainer}>
        <img src={alanLogoSrc} className={classes.alanLogo} alt={"alanLogo"} />
      </div>
      {newsAvailable ? (
        <NewsCards articles={newsArticles} activeAticleIndex={activeArticle} />
      ) : (
        <InfoCards />
      )}
    </div>
  );
}
