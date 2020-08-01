import NavBar from "../components/NavBar";
import axios from "axios";
import Link from "next/link";

function Index({ data }) {
  return (
    <div>
      <NavBar />
      <h1>Index Page !!!!</h1>
      <ul>
        {data.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/post?id=${post.id}`} as="/manoj">
                <a> {post.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Index.getInitialProps = async (ctx) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return { data: res.data };
};

export default Index;
