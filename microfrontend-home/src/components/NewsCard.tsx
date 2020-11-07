import { Card, CardHeader, CardContent, Typography, CardMedia } from "@material-ui/core";
import * as React from "react";

export interface NewsCardProps {
    title: string;
    content: string;
    image: string;
}
export const NewsCard: React.FC<NewsCardProps> = ({content, image, title}) => {
    return (
        <Card>
            <CardHeader title={title} />
            <CardMedia image={image} title="card media"/>
            <CardContent>
                <Typography variant={"h3"}>
                    {content}
                </Typography>
            </CardContent>
        </Card>
    )
}