// Import
import style from "./Main.module.css"
import PostCard from "./PostCard";
import posts from "../data/posts";

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

function Main() {
    return (
        <main>
            {/* Blog section */}
            <section className="container">
                <div className="row">
                    {printPosts()}
                </div>
            </section>
        </main>
    );
};


export default Main;