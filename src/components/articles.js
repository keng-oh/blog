import React from "react"
import { Link } from "gatsby"
import Moment from "react-moment"

import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import Chip from "@material-ui/core/Chip"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Hidden from "@material-ui/core/Hidden"

import LocalOfferIcon from "@material-ui/icons/LocalOffer"

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
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
    <Grid item>
      <CardActionArea component="div" disableRipple>
        <Link to={article.articlesId}>
          <Card className={classes.card}>
            <CardContent className={classes.cardDetails}>
              <Typography component="h2" variant="h5">
                {article.title}
              </Typography>
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
                    color="primary"
                    label={category.name}
                    className={classes.cardTag}
                  />
                ))}
              </Typography>
              <Typography
                variant="subtitle1"
                className={classes.cardDiscription}
                paragraph
              >
                {article.description}
              </Typography>
            </CardContent>
            {article.thumbnail ? (
              <Hidden xsDown>
                <CardMedia
                  className={classes.cardMedia}
                  image={article.thumbnail.url}
                  title={article.imageTitle}
                />
              </Hidden>
            ) : (
              <></>
            )}
          </Card>
        </Link>
      </CardActionArea>
    </Grid>
  )
}

export default Articles
