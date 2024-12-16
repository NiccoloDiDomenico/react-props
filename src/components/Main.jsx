// Import
import style from "./Main.module.css"
import PostCard from "./PostCard";
import posts from "../data/posts";
import PostTags from "./postTags";

// Functions
function printPosts() {
    // Filtra i post pubblicati 
    const publishedPosts = posts.filter((curPost) => curPost.published)
    // console.log(publishedPosts);

    // Mappa solo i post filtrati
    return publishedPosts.map((curPost) => (
        <div className="col" key={curPost.id}>
            <PostCard
                title={curPost.title}
                image={curPost.image}
                content={curPost.content}
                tags={curPost.tags}
                published={curPost.published}
            />
        </div>
    ));
};

const getSingleTags = () => {
    const tags = [];
    posts.forEach((curPost) => {
        curPost.tags.forEach((curTag) => {
            if (!tags.includes(curTag)) {
                tags.push(curTag);
            }
        });
    });
    return tags;
}

    function Main() {
        return (
            <main>
                {/* Blog section */}
                <section className="container">
                    <div className="row">
                        {printPosts()}
                    </div>
                </section>
                <section className="container pt-3 text-center">
                    <h3>Tutti tag</h3>
                    {getSingleTags().map((curTag, index) => (
                        <PostTags 
                        key={index} 
                        tagName={curTag} 
                        />
                    ))}
                </section>
            </main>
        );
    };


    export default Main;