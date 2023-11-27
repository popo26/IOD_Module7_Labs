import { useEffect, useReducer } from "react"; // continued on next slide
import axios from "axios"; // first do 'npm install axios' - alternative to fetch
//import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function PostListReducer() {
  const [postsResult, dispatch] = useReducer(reducer, {
    loading: true,
    posts: [],
    error: "",
  });
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      });
  }, []);

  //   ● Extension: Include the PostList component and style
  // using MUI cards and grids
  return (
    <div className="PostList componentBox">
      <Grid container spacing={2} my={2}>
        {postsResult.loading ? (
          <div>Loading posts...</div>
        ) : (
          postsResult.posts.map((post) => (
            <Grid item xs={4} key={post.id}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Post #{post.id}: {post.title}
                  </Typography>
                  <Typography variant="body2">{post.body}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}

        <div className="error">{postsResult.error}</div>
      </Grid>
    </div>
  );
}

function reducer(postsResult, action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { loading: false, posts: action.payload, error: "" };
    case "FETCH_ERROR":
      return { loading: false, posts: [], error: action.payload };
    default:
      return { ...postsResult, loading: false };
  }
}
