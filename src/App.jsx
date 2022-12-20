import { Header } from "./components/header";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

const posts = [
  {
    id: "0ed5d3d0-ea69-4c4d-a21d-6a38a8d68925",
    author: {
      name: "Sávio jks",
      avatarUrl: "http://github.com/saviojks.png",
      role: "Full Steak",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          " Acabei de subir mais um projeto no meu portifa. É um projeto que fiz",
      },
      {
        type: "paragraph",
        content:
          "no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
      { type: "link", content: "#novoprojeto" },
      { type: "link", content: "#nlw 👋" },
    ],
    publishedAt: new Date("2022-12-16T18:08:10.786Z"),
  },
  {
    id: "01d8ca39-9fa6-4d44-a7e6-226ca1a8bd06",
    author: {
      name: "Diego #",
      avatarUrl: "http://github.com/diego3.png",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          " Acabei de subir mais um projeto no meu portifa. É um projeto que fiz",
      },
      {
        type: "paragraph",
        content:
          "no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
      { type: "link", content: "#novoprojeto" },
      { type: "link", content: "#nlw 👋" },
    ],
    publishedAt: new Date("2022-12-16T18:18:37.053Z"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post author={post.author} content={post.content} />;
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
