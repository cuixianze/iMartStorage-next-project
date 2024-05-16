// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";



// export default function Storage(props){

//     const [plist, setPlist] = useState({});
//     const [loading, setLoading] = useState(true)


//     useEffect(()=>{
//         fetchData();
//         console.log(props.params.id)
//         console.log(plist)
        
//     },[])

//     const fetchData = async () =>{
//         const res = await fetch(`/api/?warehous=${props.params.id}`);
//         const jsonData = await res.json();
//         setPlist(jsonData);
//         setLoading(false);
//     }

//     const addOnClickHanddler = (key) => {
//         const updatePlist = {...plist};
//         plist[key].quantity += 1;
//         setPlist(updatePlist);

//         const data = {
//             name: plist[key].name,
//             quantity: plist[key].quantity,
//             direction: "+",
//         }

//         fetch('/api/update',{
//             method: "POST",
//             body: JSON.stringify(data)
//         })
//     }

//     const minusOnClickHanddle = (key) =>{
//         const updatePlist = {...plist};
//         plist[key].quantity -= 1;
//         setPlist(updatePlist);
//     }
    
//     const deleteOnClickHandler = async (key) => {
//         const data = {
//             name : plist[key].name,
//             wareHouse : props.params.id
//         }
//         const res = await fetch('/api/delete',{
//             method: 'POST',
//             body: JSON.stringify(data)
//         })

//         const products = await res.json();
//         console.log(products);
//         setPlist(products)
//     }
    

    
    


//     return(
//         <div>
            
//             {props.params.id}
//             {/* {result.array.forEach(element => {
//                 <div>result[element]</div>
//             })} */}
//             <ul>
//                 {loading ? 
//                     <div>로딩중</div>
//                 :
//                 Object.keys(plist).map(key => (
//                     <li key={key}>
//                         <div>Product Name: {plist[key].name}</div>
//                         <div>Quantity: {plist[key].quantity}</div>
//                         <button onClick={()=>addOnClickHanddler(key)}>+</button>
//                         <button onClick={()=>minusOnClickHanddle(key)}>-</button>
//                         <div>Expiration Date: {plist[key].expiration_date}</div>
//                         <button onClick={()=>deleteOnClickHandler(key)}>Delete</button>
//                     </li>
//                 ))
//                 }

//                 {}
//             </ul>
//             <Link href="/add/"><button>Add</button></Link>
//         </div>
        
//     )
// }

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Storage(props) {
    const [plist, setPlist] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const res = await fetch(`/api/?warehous=${props.params.id}`);
        const jsonData = await res.json();
        setPlist(jsonData);
        setLoading(false);
    };

    const addOnClickHandler = (key) => {
        const updatedPlist = { ...plist };
        updatedPlist[key].quantity += 1;
        setPlist(updatedPlist);

        const data = {
            name: plist[key].name,
            quantity: plist[key].quantity,
            direction: "+",
        };

        fetch('/api/update', {
            method: "POST",
            body: JSON.stringify(data),
        });
    };

    const minusOnClickHandler = (key) => {
        const updatedPlist = { ...plist };
        updatedPlist[key].quantity -= 1;
        setPlist(updatedPlist);
    };

    const deleteOnClickHandler = async (key) => {
        const data = {
            name: plist[key].name,
            wareHouse: props.params.id,
        };
        const res = await fetch('/api/delete', {
            method: 'POST',
            body: JSON.stringify(data),
        });

        const products = await res.json();
        setPlist(products);
    };

    return (
        <div style={styles.container}>
            <h1>Warehouse: {props.params.id}</h1>
            <ul style={styles.list}>
                {loading ? (
                    <div style={styles.loading}>Loading...</div>
                ) : (
                    Object.keys(plist).map(key => (
                        <li key={key} style={styles.listItem}>
                            <div style={styles.productName}>Product Name: {plist[key].name}</div>
                            <div>Quantity: {plist[key].quantity}</div>
                            <button style={styles.button} onClick={() => addOnClickHandler(key)}>+</button>
                            <button style={styles.button} onClick={() => minusOnClickHandler(key)}>-</button>
                            <div>Expiration Date: {plist[key].expiration_date}</div>
                            <button style={styles.deleteButton} onClick={() => deleteOnClickHandler(key)}>Delete</button>
                        </li>
                    ))
                )}
            </ul>
            <Link href="/add/">
                <button style={styles.addButton}>Add</button>
            </Link>
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
    },
    list: {
        listStyleType: 'none',
        padding: 0,
    },
    listItem: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '10px',
        margin: '10px 0',
        backgroundColor: '#f9f9f9',
    },
    productName: {
        fontWeight: 'bold',
    },
    button: {
        margin: '5px',
        padding: '5px 10px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: 'white',
        cursor: 'pointer',
    },
    deleteButton: {
        margin: '5px',
        padding: '5px 10px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#dc3545',
        color: 'white',
        cursor: 'pointer',
    },
    addButton: {
        margin: '20px 0',
        padding: '10px 20px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#28a745',
        color: 'white',
        cursor: 'pointer',
    },
    loading: {
        fontSize: '18px',
        color: '#888',
    },
};
