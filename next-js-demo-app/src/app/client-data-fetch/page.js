'use client'
import { useEffect, useState } from "react";



export default function ClientSideDataFetch() {
    const [data, setData] = useState([]);
    const [error, setErrro] = useState("");
    const [loading, setLoading] = useState(false);

    async function fetchUserData() {
        try {
            setLoading(true)
            const apiResponse = await fetch('https://dummyjson.com/users');
            const result = await apiResponse.json();
            if(result.users){
                setData(result.users);
                setLoading(false)
            }
            
        }
        catch (error) {
            setLoading(false);
            setErrro(error.response.data.message)
            console.log("Error while fetching data", error)
        }
    }

    useEffect(()=>{
        fetchUserData()
    },[]);

    if(error){
        return <h1>{error}</h1>
    }

    if(loading){
        return <h1>Data is loading...</h1>
    }
    
    return (
        <div className="h-10">
            <h1>Client side data fetching: User List page</h1>
            {
                data && data.map((item, index) => {
                    return (
                        <div key={index}>
                            <img src={item.image} alt="Image not available" />
                            Name : {item.firstName} {item.lastName}
                        </div>
                    )
                })
            }
        </div>
    )
}