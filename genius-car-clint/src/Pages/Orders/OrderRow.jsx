import React, { useEffect, useState } from "react";

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
  const { _id, serviceName, phone, price, massage, customer, service, status } =
    order;

  const [orderService, setOrderService] = useState({});

  useEffect(() => {
    fetch(
      `https://genius-car-server-santo123457.vercel.app/services/${service}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOrderService(data);
      });
  }, [service]);

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
          X
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {orderService?.img && (
                <img
                  src={orderService.img}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">
          Desktop Support Technician
        </span>
      </td>
      <td>${price}</td>
      <th>
        {status ? (
          <div className="btn btn-primary">{status}</div>
        ) : (
          <button
            onClick={() => handleStatusUpdate(_id)}
            className="btn btn-orange btn-xs"
          >
            pending
          </button>
        )}
      </th>
    </tr>
  );
};

export default OrderRow;
