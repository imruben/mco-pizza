import Footer from "./UI/Footer";
import ButtonYellow from "./UI/ButtonYellow";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="home flex justify-center items-center h-full w-full  ">
                {/* <img
                    className="w-2/4 border border-2 rounded-xl"
                    src="/img/pizza_home.jpg"
                    alt=""
                /> */}
                <div className="flex flex-col items-center justify-around w-3/4 text-cwhite text-7xl sm:text-9xl">
                    <h1 className="font-handrawn text-center ">MCO PIZZERIA</h1>
                    <span className="text-5xl text-center">
                        Try out{" "}
                        <span className=" text-cyellow font-handrawn">NOW</span>
                        <br /> the new{" "}
                        <span className=" text-cyellow font-handrawn">
                            PIZZAS!
                        </span>
                    </span>
                    <Link to={"/orderpizza"}>
                        <ButtonYellow>
                            <span className="text-3xl font-semibold ">
                                Let's eat
                            </span>
                        </ButtonYellow>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
