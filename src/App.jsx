import { Header } from "./components/header";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Sávio jks"
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore tenetur beatae sit nemo doloribus dolorum architecto consequuntur commodi sequi, sed atque id fugit, aliquam exercitationem delectus, ducimus molestiae earum iure!"
            }
          />
          <Post
            author="Alessandra"
            content={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quae laboriosam repellendus deleniti aperiam consequatur minus, officiis ipsam ducimus. Nemo esse id suscipit, itaque dolorem natus quis iure repellat enim."
            }
          />
        </main>
      </div>
    </div>
  );
}

export default App;
