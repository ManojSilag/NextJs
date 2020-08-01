// import { withRouter } from "next/router";
import axios from "axios";

const Post = ({ id, comments }) => {
  return (
    <div>
      <h1>Comments for PostId {id}</h1>
      {comments.map((com) => {
        return (
          <div key={com.id}>
            <h4>{com.email}</h4>
            <p>{com.body}</p>
          </div>
        );
      })}
    </div>
  );
};

Post.getInitialProps = async ({ query }) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=1`
  );
  const { data } = res;
  return { ...query, comments: data };
};

export default Post;
