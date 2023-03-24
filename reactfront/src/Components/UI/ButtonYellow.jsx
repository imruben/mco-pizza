const ButtonYellow = (props) => {
    return (
        <button className="text-cwhite bg-cyellow focus:ring-4 focus:outline-none focus:ring-cgreen  shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:text-cblack ">
            {props.children}
        </button>
    );
};

export default ButtonYellow;
