import { useEffect, useState } from "react";

const CreatePizza = (props) => {
    const api = "http://localhost:8000/api";

    // const getFormattedPrice = (price) => `$${price.toFixed(2)}`;
    const [total, setTotal] = useState(0);
    const [prep, setPrep] = useState(0);
    const [ingredientsChecked, setIngredientsChecked] = useState(
        // new Array(props.ingredients.length).fill(false)
        new Array(8).fill(false)
    );
    const [addPizzaBtnEnabled, setAddPizzaBtnEnabled] = useState(false);

    //every time the ingredientsChecked state changes, we check if the minimum number of ingredients is selected
    useEffect(() => {
        //get the number of trues inside ingredientsChecked
        const numberOfTrues = ingredientsChecked.filter((ing) => ing === true);
        numberOfTrues.length >= 3
            ? setAddPizzaBtnEnabled(true)
            : setAddPizzaBtnEnabled(false);

        console.log(addPizzaBtnEnabled);
    }, [ingredientsChecked]);

    //every time the ingredientsChecked state changes, we update the total price
    const handleOnChange = (position) => {
        // console.log(props.ingredientsSelected);
        const updatedCheckedState = ingredientsChecked.map((item, index) =>
            index === position ? !item : item
        );
        setIngredientsChecked(updatedCheckedState);
        const totalPrice = updatedCheckedState.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                    // console.log(props.ingredients[index].price);
                    return sum + props.ingredients[index].price;
                }
                return sum;
            },
            0
        );
        setTotal(totalPrice);
        setPrep(totalPrice / 2);
    };

    const addPizza = () => {
        // get the ingredients that are checked
        let ingredientsPizzaOrder = [];
        ingredientsChecked.forEach((ing, index) => {
            if (ing === true) {
                ingredientsPizzaOrder.push(props.ingredients[index].name);
            }
        });

        let id = Math.random();
        let pizzaname = "Custom Pizza";
        let prepprice = total / 2;

        props.addPizzaToOrder(id, ingredientsPizzaOrder, total, pizzaname);
    };

    return (
        <>
            {props.showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-cyellow rounded-lg border-2 shadow-lg relative flex flex-col w-full bg-cblack  outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex flex-col items-start justify-between p-5   ">
                                    <span className="text-cyellow text-2xl font-semibold">
                                        Custom Pizza
                                    </span>
                                    <span className="text-cwhite text-md ">
                                        Select the ingredients that you want
                                        (minimum 3 ingredients)
                                    </span>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto text-cwhite">
                                    <ul className="grid w-full gap-6 md:grid-cols-3">
                                        {props.ingredients.map((ing, index) => {
                                            return (
                                                <li key={ing.id}>
                                                    <input
                                                        type="checkbox"
                                                        id={ing.id}
                                                        name={ing.id}
                                                        value={ing.id}
                                                        className="hidden peer"
                                                        checked={
                                                            ingredientsChecked[
                                                                index
                                                            ]
                                                        }
                                                        onChange={() =>
                                                            handleOnChange(
                                                                index
                                                            )
                                                        }
                                                        required=""
                                                    ></input>
                                                    <label
                                                        htmlFor={ing.id}
                                                        className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                                                    >
                                                        <div className="block">
                                                            <img
                                                                className="w-11 h-11"
                                                                src={`/img/ingredients/${ing.image_url}`}
                                                                alt=""
                                                            />
                                                            <span className="text-md">
                                                                {ing.price}€
                                                            </span>
                                                            <div className="w-full text-md font-semibold">
                                                                <span>
                                                                    {ing.name}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                {/*footer*/}

                                <div className=" flex flex-row justify-between p-6 border-t border-solid border-slate-200 rounded-b">
                                    <span className="self-center text-cwhite text-lg">
                                        Pizza price:{" "}
                                        <span className="font-semibold text-xl">
                                            {total}€{" "}
                                            <span className=" ml-4 text-base">
                                                +{prep}€ preparation costs
                                            </span>
                                        </span>
                                    </span>
                                    <div className="flex items-center justify-end">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={props.closeShowModal}
                                        >
                                            Close
                                        </button>
                                        <button
                                            disabled={!addPizzaBtnEnabled}
                                            className="disabled:opacity-25 bg-cyellow text-white active:bg-cwhite active:text-cblack font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={addPizza}
                                        >
                                            Add Pizza
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
};

export default CreatePizza;
