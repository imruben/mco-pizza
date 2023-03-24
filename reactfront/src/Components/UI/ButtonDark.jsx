const ButtonDark = (props) => {
    return (
        <button
            onClick={props.onClick}
            className="text-cblack bg-cwhite hover:text-cwhite hover:bg-cblack rounded-lg hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 text-sm px-5 py-2.5 text-center mt-2 w-2/4 self-center shadow-xl "
        >
            {props.children}
        </button>
    );
};

export default ButtonDark;
