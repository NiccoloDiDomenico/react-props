// Import 
import style from "./Main.module.css"
import PostCard from "./PostCard";

function Main() {
    return (
        <main>
            <section>
                <div className="row">
                    <div className="col">
                        <PostCard />
                    </div>
                </div>
            </section>
        </main>
    );
};


export default Main;