import { Card, CardContent, CardHeader, Container, Grid } from "@material-ui/core";
import React from "react";
import { NewsCard, NewsCardProps } from "./components/NewsCard";

const news: NewsCardProps[] = [
  {
    title: "News 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate fermentum nulla, sit amet venenatis nibh mollis eget. Aliquam erat volutpat. Sed ut gravida urna. Proin at porttitor risus, id vulputate nisi. Etiam in placerat arcu, sit amet venenatis tellus. Sed a venenatis ipsum, ac commodo enim. Cras gravida mi nec tempus porttitor. Sed tellus ligula, pellentesque eu lectus vitae, scelerisque aliquam mauris. Curabitur eget dictum velit, et rhoncus libero. Nunc aliquet, massa nec condimentum condimentum, erat mi elementum nisl, nec dignissim nisl lorem quis leo. Aliquam vitae leo lectus. Aenean convallis magna et eros condimentum feugiat. Etiam eget est ante. Etiam semper feugiat mauris, et cursus lorem tempor nec.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/150px-BBC_News_2019.svg.png"
  }
]
export default function Root(props) {
  return (
    <Container>
      <Grid container spacing={3}>
        {news.map(newsRecord => (
          <Grid item lg={6} xs={12}>
            <NewsCard {...newsRecord} />
          </Grid>
        ))}
      </Grid>

    </Container>
  )
}
