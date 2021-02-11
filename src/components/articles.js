import React from "react"
import { Link } from "gatsby"
import Moment from "react-moment"

import { makeStyles } from "@material-ui/core/styles"
import { Typography, Grid, Card, Chip, CardActionArea, CardContent, CardMedia } from "@material-ui/core"

import LocalOfferIcon from "@material-ui/icons/LocalOffer"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  card: {
    height: "100%",
    borderRadius: "4px",
  },
  cardMedia: {
    height: 140,
  },
  cardTags: {
    marginLeft: theme.spacing(1),
  },
  cardTag: {
    marginLeft: theme.spacing(0.5),
  },
  cardDiscription: {
    marginTop: theme.spacing(1),
  },
}))

const Articles = props => {
  const classes = useStyles()
  const { article } = props

  return (
    <Grid item sm={4} className={classes.root}>
      <CardActionArea component="div" className={classes.card}>
        <Link to={"/" + article.articlesId}>
          <Card className={classes.card} raised={true}>
            <CardMedia
              className={classes.cardMedia}
              image={article.thumbnail.url}
              title={article.imageTitle}
            />
            <CardContent>
              <Typography
                variant="subtitle1"
                component="span"
                color="textSecondary"
              >
                <Moment format="YYYY/MM/DD" date={article.publishedAt} />
              </Typography>
              <Typography
                variant="inherit"
                color="textSecondary"
                className={classes.cardTags}
              >
                {article.category.map(category => (
                  <Chip
                    icon={<LocalOfferIcon />}
                    variant="outlined"
                    size="small"
                    label={category.name}
                    className={classes.cardTag}
                  />
                ))}
              </Typography>
              <Typography component="h2" variant="h6">
                {article.title}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </CardActionArea>
    </Grid>
  )
}

export default Articles
