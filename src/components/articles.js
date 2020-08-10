import React from "react"
import { Link } from "gatsby"
import Moment from "react-moment"

import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Hidden from "@material-ui/core/Hidden"

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
})

const Articles = props => {
  const classes = useStyles()
  const { article } = props

  return (
    <Grid item>
      <CardActionArea component="div" disableRipple>
        <Link to={article.id}>
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  {article.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  <Moment format="YYYY/MM/DD" date={article.publishedAt} />
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {article.description}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {article.category.map(category => category.name)}
                </Typography>
                <Typography variant="subtitle1">Continue reading...</Typography>
              </CardContent>
            </div>
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
