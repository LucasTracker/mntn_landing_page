import Header from "./sections/Header.jsx";
import Content from "./sections/Content.jsx";
import Hero from "./sections/Hero.jsx";

const App = () => {
    return (
        <div className="overflow-hidden">
            <Header />
            <Content />
            <Hero />
        </div>
    );
};

export default App;