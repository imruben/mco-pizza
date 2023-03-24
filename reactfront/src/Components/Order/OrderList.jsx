import { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import ButtonYellow from "../UI/ButtonYellow";

const api = "http://localhost:8000/api";

const OrderList = (props) => {
    const [orders, setOrders] = useState([]);
    const [currentOrders, setCurrentOrders] = useState([]);

    useEffect(() => {
        getAllOrders();
    }, []);

    const getAllOrders = () => {
        //get all orders from the api
        axios.get(`${api}/orders`).then((response) => {
            setOrders(response.data);

            //filter orders by the current ones (order_status = confirmed)
            let ordersfiltered = response.data.filter(
                (order) => order.order_status == "confirmed"
            );
            setCurrentOrders(ordersfiltered);
        });
    };

    const getHour = (date) => {
        let dateObj = new Date(date);
        let hour = dateObj.getHours();
        let minutes = dateObj.getMinutes();
        return `${hour}:${minutes}`;
    };

    return (
        <div className=" flex justify-center items-center h-auto w-full mt-2 ">
            <div className="flex flex-col ">
                <h2 className="font-handrawn text-6xl mt-10 mb-5">
                    Current Orders
                </h2>
                {currentOrders.length == 0 ? (
                    <span>There is no current orders</span>
                ) : (
                    ""
                )}
                {currentOrders.map((order) => {
                    return (
                        <div
                            key={order.id}
                            className="bg-cblack text-cwhite flex flex-col border rounded p-6 mb-5"
                        >
                            <div className="flex flex-row items-center text-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-cwhite text-5xl font-semibold self-start font-handrawn mb-2">
                                        {order.total_price}€
                                    </span>
                                    <span className="text-cyellow text-2xl font-semibold">
                                        Order number:{" "}
                                        <span className=" text-2xl  font-semibold  ">
                                            {order.id}
                                        </span>
                                    </span>
                                </div>
                                <img
                                    className="h-20 w-20"
                                    src="/img/delivery.gif"
                                    alt=""
                                />
                            </div>
                            <span>
                                Will be delivered in 20-25 minutes from{" "}
                                {getHour(order.created_at)}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default OrderList;
