<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{

    public function index()
    {
        $orders = Order::all();
        return $orders;
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $order = new Order();
        $order->order_status = $request->order_status;
        $order->total_price = $request->total_price;
        $order->user_id = $request->user_id;

        if ($order->save()) return "Order created successfully";
        else return "Order creation failed";
    }

    public function show($id)
    {
        $order = Order::find($id);
        return $order;
    }

    public function edit(Order $order)
    {
        //
    }

    public function update(Request $request)
    {
        $order = Order::findorFail($request->id);

        $order->order_status = $request->order_status;
        $order->total_price = $request->total_price;
        $order->user_id = $request->user_id;

        $order->update();
        return $order;
    }

    public function destroy($id)
    {
        $order = Order::destroy($id);
        return $order;
    }
}
