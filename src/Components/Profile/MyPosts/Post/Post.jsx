import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" className={s.avatar}/>
            {props.message}
            <div>
                <button>Like {props.likesCount}</button>
                <button>Dislike </button>
            </div>
        </div>
    )
}

export default Post;