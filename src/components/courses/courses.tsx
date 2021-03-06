import { List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import useFetch from "../../hooks/useFetch/useFetch";

export default function Courses() {
    const courses = useFetch('https://sitemaroto.000webhostapp.com/wp-json/wp/v2/posts');
  return (
    <List component="nav" aria-label="main mailbox folders">
        {courses && courses.map((course, index) => (
        <ListItem key={index}>
          <ListItemText primary={course.title.rendered} />
        </ListItem>
        ))}
    </List>
  );
}