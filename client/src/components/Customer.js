import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Customer() {
  const [customer, setCustomer] = useState([]);
  const params = useParams();
  useEffect(() => {
    const certainData = async () => {
        let res = axios.get(`http://localhost:8000/api/customer/${params.id}`);
        res = await res;
        setCustomer(res.data)
    }
    certainData();
  }, [params.id])
  return <div>
    <h2>{customer.name}</h2>
    <h3>{customer.email}</h3>
    <h3>{customer.password}</h3>
    <h3>{customer.phone_num}</h3>
    <p>{customer.description}</p>

  </div>;
}

export default Customer;
