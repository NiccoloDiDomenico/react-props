// Import 
import style from "./Main.module.css"
import PostCard from "./PostCard";
import posts from "../data/posts";

// Functions
function printPosts() {
    return posts.map((curPost) => (
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