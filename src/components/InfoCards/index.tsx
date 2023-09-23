import React from "react";
import { Grid, Grow, Typography } from "@material-ui/core";

import { cards } from "./cards";
import { useStyles } from "./styles";

export const InfoCards: React.FC = () => {
  const classes = useStyles();

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {cards.map((infoCard) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <Typography variant="h5">{infoCard.title}</Typography>
                {infoCard.info && (
                  <Typography variant="h6">
                    <strong>{infoCard.title.split(" ")[2]}</strong>
                  </Typography>
                )}
                <Typography variant="h6">
                  Try saying: <br /> <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Grow>
  );
};
