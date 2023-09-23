import React from "react";
import { NewsArticle } from "../../entities";
import { NewsCard } from "../NewsCard";
import { Grid, Grow } from "@material-ui/core";

import { useStyles } from "./styles";

interface Props {
  activeAticleIndex: number;
  articles: NewsArticle[];
}

export const NewsCards: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {props.articles.map((article, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
              <NewsCard article={article} index={index} />
            </Grid>
          );
        })}
      </Grid>
    </Grow>
  );
};
