import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import { Header } from "../../components/Header";
import { NavLink } from "react-router";
import { OrdersGrid } from "./OrdersGrid";
import "./OrdersPage.css";

export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("/api/orders?expand=products").then((response) => {
      setOrders(response.data);
    });
  }, []);

  return (
    <>
      <title>Orders</title>
      <link rel="icon" type="image/svg+xml" href="/images/orders-favicon.png" />

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders} />
      </div>
    </>
  );
}
