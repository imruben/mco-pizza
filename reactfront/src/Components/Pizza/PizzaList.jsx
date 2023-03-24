import axios from "axios";
import { useEffect, useState } from "react";
import OrderActual from "../Order/OrderActual";
import CreatePizza from "./CreatePizza";

import PizzaItem from "./PizzaItem";

const PizzaList = (props) => {
    const api = "http://localhost:8000/api";

    //we get all the pizza's data every time the component is rendered
    useEffect(() => {
        getAllPizzas();
        getAllIngredients();
    }, []);

    //INGREDIENTS
    const [ingredients, setIngredients] = useState([]);

    //CURRENT ORDER
    const [currentOrder, setCurrentOrder] = useState({
        order_status: "",
        pizzas_price: 0,
        preparation_price: 0,
        order_price: 0,

        pizzas: [],
    });

    const resetOrder = () => {
        setCurrentOrder({
            order_status: "",
            pizzas_price: 0,
            preparation_price: 0,
            order_price: 0,
            pizzas: [],
        });
    };

    //PIZZAS
    const [pizzas, setPizzas] = useState([]);

    //MODAL CREATEPIZZA
    const [showModalCreatePizza, setshowModalCreatePizza] = useState(false);

    const getAllIngredients = async () => {
        await axios.get(`${api}/pizzas/ingredients`).then((ingredients) => {
            setIngredients(ingredients.data);
        });
    };

    //call the api to get all the pizzas and update the state
    const getAllPizzas = async () => {
        await axios.get(`${api}/pizzas`).then((pizzas) => {
            setPizzas(pizzas.data);
        });
    };

    //opens the modal to create a pizza with the pizza ingredients
    const addPremadePizza = (e) => {
        //get the pizza id from the button
        const pizzaid = e.target.id;
        const pizza = pizzas.find((pizza) => pizza.id == pizzaid);

        //get the ingredients array of the pizza from the api
        axios
            .get(`${api}/pizzas/${pizza.id}/ingredients`)
            .then((ingredients) => {
                console.log(ingredients.data);
                addPizzatoOrder(id, ingredients.data, pizza.price, pizza.name);
            });

        let id = Math.random();

        //add the pizza to the order
        //
    };

    const addCustomPizzaHandler = () => {
        openCreatePizza();
    };

    const addPizzatoOrder = (id, ingredients, price, name) => {
        //caculate the total price of the order
        let pizzasPrice = currentOrder.pizzas_price + price;
        let preparationPrice = currentOrder.preparation_price + price / 2;
        let totalPrice = pizzasPrice + preparationPrice;

        console.log(pizzasPrice, preparationPrice, totalPrice);

        //convert to number all the values and round 2 decimals
        preparationPrice = Number(preparationPrice.toFixed(2));
        totalPrice = Number(totalPrice.toFixed(2));

        console.log(
            typeof pizzasPrice,
            typeof preparationPrice,
            typeof totalPrice
        );

        //update the order's state
        setCurrentOrder((prevState) => ({
            ...prevState,
            order_status: "pending",
            pizzas_price: pizzasPrice,
            preparation_price: preparationPrice,
            order_price: totalPrice,
            pizzas: [
                ...prevState.pizzas,
                {
                    id: id,
                    name: name,
                    price: price,
                    ingredients: ingredients,
                },
            ],
        }));
    };

    //close the modal to add a pizza
    const closeCreatePizza = () => {
        setshowModalCreatePizza(false);
    };

    //opens the modal to add a pizza
    const openCreatePizza = () => {
        setshowModalCreatePizza(true);
    };

    return (
        <>
            <CreatePizza
                showModal={showModalCreatePizza}
                closeShowModal={closeCreatePizza}
                ingredients={ingredients}
                createPizzaHandler={addCustomPizzaHandler}
                addPizzaToOrder={addPizzatoOrder}
                resetOrder={resetOrder}
            />
            <div className=" flex justify-center items-center h-auto w-full mt-2 ">
                <div className="flex flex-col ">
                    <h2 className="font-handrawn text-6xl mb-5">Pizzas</h2>
                    {pizzas.map((pizza) => {
                        return (
                            <PizzaItem
                                key={pizza.id}
                                id={pizza.id}
                                name={pizza.name}
                                price={pizza.price}
                                ingredients={pizza.ingredients}
                                selected={pizza.selected}
                                addPizzaClickHandler={addPremadePizza}
                            />
                        );
                    })}
                    <div className="bg-cblack text-cwhite flex flex-col border rounded p-6 mb-5">
                        <div className="flex flex-row items-center text-center justify-between">
                            <div>
                                <span className="text-cyellow text-2xl font-semibold">
                                    Custom Pizza
                                </span>
                                <span className=" text-4xl font-handrawn font-semibold ml-4 ">
                                    2.00€
                                </span>
                            </div>
                            <span
                                onClick={openCreatePizza}
                                className="material-icons-outlined rounded-full hover:bg-cyellow hover:text-cblack cursor-pointer"
                            >
                                add
                            </span>
                        </div>
                        <span>Select the ingredients that you want!</span>
                    </div>
                    <OrderActual order={currentOrder} />
                </div>
            </div>
        </>
    );
};

export default PizzaList;
