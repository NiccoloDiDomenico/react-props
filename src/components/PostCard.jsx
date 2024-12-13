// Import
import style from "./PostCard.module.css"
import ReadMoreButton from "./ReadMoreButton";

function PostCard() {
    return (
        <div className={style.card}>
            {/* Card Image */}
            <div className={style.image}>
                <img src="../images/600x400.jpg" alt="" />
            </div>
            {/* Card Body */}
            <div className={style.content}>
                <h3>Titolo del Post</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia qui laudantium beatae, dolorum velit error expedita, quisquam illum officia, saepe ut cum ex alias autem eius animi omnis? Tenetur, nam?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, culpa? Rem ratione perspiciatis explicabo doloribus consectetur iure at? Aliquid veniam doloribus accusantium quos cumque at ullam.
                </p>
                <ReadMoreButton />
            </div>
        </div>
    );
};


export default PostCard;