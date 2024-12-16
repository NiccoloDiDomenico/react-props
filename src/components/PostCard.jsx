// Import
import style from "./PostCard.module.css"
import ReadMoreButton from "./ReadMoreButton";

// function getColorTag(post) {

// }

function PostCard({ title, image, content, tags }) {
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
                <div>
                    {tags.map((curTag, index) => (
                        <span key={index} className={curTag}>{curTag}</span>
                    ))}
                </div>
                <ReadMoreButton />
            </div>
        </div>
    );
};


export default PostCard;