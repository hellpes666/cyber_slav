import { Header, Hero, Story, UniqueProjectCards, Map } from "./components";
export default function App() {
    return (
        <div>
            <Header />
            <Hero />
            <Story />
            <UniqueProjectCards />
            <Map />
            {/* <div className="h-[10000px]"></div> */}
        </div>
    );
}
