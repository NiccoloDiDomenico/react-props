// Import
import style from "./PostCard.module.css"
import ReadMoreButton from "./ReadMoreButton";

function PostCard({ title, image, content, tags, published }) {
    return (
        <div className={style.card}>
            {/* Card Image */}
            <div className={style.image}>
                <img src={image} alt="" />
            </div>
            {/* Card Body */}
            <div className={style.content}>
                <h3>{title}</h3>
                <p>{content}</p>
                <span>{tags}</span>
                <ReadMoreButton />
            </div>
        </div>
    );
};


export default PostCard;