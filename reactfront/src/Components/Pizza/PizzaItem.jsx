const PizzaItem = (props) => {
    // console.log(props.ingredients);

    return (
        <div className="bg-cblack text-cwhite flex flex-col border rounded p-6 mb-5">
            <div className="flex flex-row items-center text-center justify-between">
                <div>
                    <span className="text-cyellow text-2xl font-semibold">
                        {props.name}
                    </span>
                    <span className=" text-4xl font-handrawn font-semibold ml-4 ">
                        {props.price}€
                    </span>
                </div>
                <span
                    id={props.id}
                    onClick={props.addPizzaClickHandler}
                    className="material-icons-outlined rounded-full hover:bg-cyellow hover:text-cblack cursor-pointer"
                >
                    add
                </span>
            </div>
            <span>
                {props.ingredients.map((ing) => {
                    return <span key={ing.id}>{ing.name}, </span>;
                })}
            </span>
        </div>
    );
};

export default PizzaItem;
