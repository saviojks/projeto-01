import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1587620931276-d97f425f62b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Sávio jks</strong>
              <time
                title="19 de dezembro as 12:13h"
                dateTime="2022-12-19 12:13:14"
              >
                Cerca há 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Sávio, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <samp>20</samp>
          </button>
        </footer>
      </div>
    </div>
  );
}
