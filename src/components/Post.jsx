import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/saviojks.png"
          />
          <div className={styles.authorInfo}>
            <strong>Sávio jks</strong>
            <span>Web Developer</span>
          </div>
          <time title="19 de dezembro as 12:13h" dateTime="2022-12-19 12:13:14">
            Publicado há 1h
          </time>
        </div>
      </header>
      <div className={styles.content}>
        <p> Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
        </p>
        <p>
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>👉 jane.design/doctorcare</p>
        <p>#novoprojeto #nlw #rocketseat</p>
      </div>
    </article>
  );
}
