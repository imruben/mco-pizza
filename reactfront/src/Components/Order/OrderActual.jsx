import { useEffect, useState } from "react";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
import ButtonDark from "../UI/ButtonDark";

const api = "http://localhost:8000/api";

const OrderActual = (props) => {
    const navigate = useNavigate();
    const confirmOrder = () => {
        let orderforApi = {
            order_status: "confirmed",
            total_price: props.order.order_price,
            user_id: "1",
        };
        console.log(orderforApi);

        axios
            .post(`${api}/orders`, orderforApi)
            .then((response) => {
                console.log(response.data);
                navigate("/orders");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    // console.log(props);
    return (
        <>
            <div
                className={`${
                    props.order.order_status != "pending" ? "hidden" : ""
                } self-center flex flex-col bg-cyellow rounded-md p-6 w-3/4 mb-5 `}
            >
                <h2 className="font-semibold font-handrawn text-4xl self-center mb-3">
                    Order
                </h2>

                {/* if there are pizzas added */}
                <div className="flex flex-col">
                    {props.order.pizzas.map((pizza) => {
                        return (
                            <div key={pizza.id} className="flex flex-col">
                                <span className="text-xl font-semibold">
                                    {pizza.name}
                                    <span className=" text-3xl font-handrawn font-semibold ml-4">
                                        {pizza.price}€
                                    </span>
                                </span>
                                <span className="text-white">
                                    {pizza.ingredients.join(", ")}
                                </span>
                            </div>
                        );
                    })}
                </div>

                <span className="font-semibold text-lg mt-2">
                    Preparation{" "}
                    <span className="font-bold text-3xl font-handrawn">
                        {props.order.preparation_price}€
                    </span>
                </span>
                <span className="self-end font-semibold text-xl mt-2">
                    <span className="font-bold text-5xl font-handrawn">
                        {props.order.order_price}€
                    </span>
                </span>
                <ButtonDark onClick={confirmOrder}>
                    <span className=" font-bold text-xl">Pay order</span>
                </ButtonDark>
            </div>
        </>
    );
};

export default OrderActual;
