import styles from './Comment.module.css'

import { ThumbsUp, Trash } from "phosphor-react"
import { Avatar } from './Avatar'

export function Comment(props) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/henriquemanieri.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Kevin Malone</strong>
                            <time title="11 de Maio ãs 04:20" dateTime="2022-08-20">Publicado a 1h</time>
                        </div>
                        <button title="Deletar Comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{props.content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>
        </div>

    )
}