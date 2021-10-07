import React from "react";

const Post = (props) => {
    console.log(props);
    return(
        <div>
            <h1>Название планеты:{props.posts.name}</h1>
            <p>Период вращения планеты:{props.posts.notation_period}</p>
            <button>Подробнее</button>
        </div>
    )
}

export default Post;
