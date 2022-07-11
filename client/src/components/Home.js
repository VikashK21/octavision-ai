import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const [user, setUser] = useState({data: [], msg: ""});
  const navigate = useNavigate();

  useEffect(() => {
    const bringingD = async () => {
        try {
            const res = await axios.get('http://localhost:8000/api/customers');
            setUser(pre => ({...pre, data: res.data}));
        } catch (err) {
            setUser(pre => ({...pre, msg: err.message}))            
        }
    }
    bringingD();
  }, [])
  return (
    <div>
        {
            user.data.length>0 && 
            user.data.map(ele => <div key={ele.id}>
                <button onClick={() => navigate(`/${ele.id}`)}>{ele.name}</button>
            </div>)
        }
    </div>
  );
}

export default Home;
