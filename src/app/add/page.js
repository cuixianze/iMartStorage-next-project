// "use client";

// import { useEffect, useState } from "react";

// export default function add(){

//     const [formData, setFormData] = useState({
//         name: "",
//         wareHouse: 0,
//         quantity: 0,
//         expiration_date: ""
//     })

    

//     const handleChange = (e) =>{
//         const {name, value} = e.target;
//         setFormData((prev)=>({
//             ...prev,
//             [name]:value
//         }));
//     }

//     const submitHandler = (e)=>{
//         e.preventDefault();

//         fetch("/api/",{
//             method: "POST",
//             body: JSON.stringify(formData)
//         })
//         console.log(formData);

//     }

//     return (
//         <form onSubmit={submitHandler}>
//             <label>
//                 Name:
//                 <input type="text" name="name" value={formData.name} onChange={handleChange} />
//             </label>
//             <label>
//                 Warehouse:
//                 <input type="number" name="wareHouse" value={formData.wareHouse} onChange={handleChange} />
//             </label>
//             <label>
//                 Quantity:
//                 <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} />
//             </label>
//             <label>
//                 Expiration Date:
//                 <input type="date" name="expiration_date" value={formData.expiration_date} onChange={handleChange} />
//             </label>
//             <button type="submit">Submit</button>
//         </form>
//     )
// }

"use client";

import { useEffect, useState } from "react";

export default function Add() {
    const [formData, setFormData] = useState({
        name: "",
        wareHouse: 0,
        quantity: 0,
        expiration_date: ""
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Name is required";
        if (formData.wareHouse <= 0) tempErrors.wareHouse = "Warehouse number must be greater than 0";
        if (formData.quantity <= 0) tempErrors.quantity = "Quantity must be greater than 0";
        if (!formData.expiration_date) tempErrors.expiration_date = "Expiration date is required";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setSubmitted(false);

        if (validate()) {
            fetch("/api/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                setSubmitted(true);
                console.log(data);
            })
            .catch(error => {
                console.error("Error:", error);
            });
        }
    };

    return (
        <form onSubmit={submitHandler} style={styles.form}>
            <div style={styles.field}>
                <label style={styles.label}>Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    style={styles.input}
                />
                {errors.name && <span style={styles.error}>{errors.name}</span>}
            </div>
            <div style={styles.field}>
                <label style={styles.label}>Warehouse:</label>
                <input 
                    type="number" 
                    name="wareHouse" 
                    value={formData.wareHouse} 
                    onChange={handleChange} 
                    style={styles.input}
                />
                {errors.wareHouse && <span style={styles.error}>{errors.wareHouse}</span>}
            </div>
            <div style={styles.field}>
                <label style={styles.label}>Quantity:</label>
                <input 
                    type="number" 
                    name="quantity" 
                    value={formData.quantity} 
                    onChange={handleChange} 
                    style={styles.input}
                />
                {errors.quantity && <span style={styles.error}>{errors.quantity}</span>}
            </div>
            <div style={styles.field}>
                <label style={styles.label}>Expiration Date:</label>
                <input 
                    type="date" 
                    name="expiration_date" 
                    value={formData.expiration_date} 
                    onChange={handleChange} 
                    style={styles.input}
                />
                {errors.expiration_date && <span style={styles.error}>{errors.expiration_date}</span>}
            </div>
            <button type="submit" style={styles.button}>Submit</button>
            {submitted && <p style={styles.success}>Form submitted successfully!</p>}
        </form>
    );
}

const styles = {
    form: {
        maxWidth: "400px",
        margin: "auto",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9"
    },
    field: {
        marginBottom: "1rem"
    },
    label: {
        display: "block",
        marginBottom: "0.5rem"
    },
    input: {
        width: "100%",
        padding: "0.5rem",
        borderRadius: "4px",
        border: "1px solid #ccc"
    },
    button: {
        padding: "0.5rem 1rem",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
    },
    error: {
        color: "red",
        fontSize: "0.875rem"
    },
    success: {
        color: "green",
        marginTop: "1rem"
    }
};
