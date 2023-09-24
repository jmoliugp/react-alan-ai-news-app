import React, { useRef } from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { NewsArticle } from "../../entities";
import { useStyles } from "./styles";
import classNames from "classnames";

interface Props {
  article: NewsArticle;
  activeArticle: number;
  index: number;
}

const DEFAULT_ARTICLE_THUMBNAIL =
  "https://img.freepik.com/free-vector/breaking-news-concept_23-2148500601.jpg?w=2000&t=st=1695089460~exp=1695090060~hmac=7a56ae906e6dfd76edb1b14d014c9f38801bf16c1517bcdbd72ee53877755d53";

export const NewsCard: React.FC<Props> = ({
  article,
  activeArticle,
  index,
}) => {
  const date = new Date(article.publishedAt).toDateString();
  const classes = useStyles();
  const gridElementRef = useRef<any>(null);

  const isActive = activeArticle === index;
  if (isActive && gridElementRef.current !== null) {
    gridElementRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const activeStyle = isActive ? classes.activeCard : null;

  return (
    <Card
      ref={gridElementRef}
      className={classNames(classes.card, activeStyle)}
    >
      <CardActionArea href={article.url} target="_blank">
        <CardMedia
          className={classes.media}
          image={article.urlToImage ?? DEFAULT_ARTICLE_THUMBNAIL}
        />
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {date}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {article.source.name}
          </Typography>
        </div>
        <Typography
          className={classes.title}
          component="h2"
          gutterBottom
          variant="h5"
        >
          {article.title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {article.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary">
            Learn More
          </Button>
          <Typography variant="h5" color="textSecondary" component="h2">
            {index + 1}
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
