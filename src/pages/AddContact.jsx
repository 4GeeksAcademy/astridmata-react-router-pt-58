import React, { useState } from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer";



export const AddContact = () => {
    const { store, dispatch } = useGlobalReducer()





    let [data, setData] = useState({
        name: "", email: "", phone: "", address: ""
    })



    const formChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value})
    }


    const forSubmit = (e) => {
        e.preventDefault()
///validaciopn pero deben ser todos los campos dentro del if 
        if (!data.email || !data.name ) {
            alert ("todos los campos son obligatorios")
            return;
        }


        fetch("", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...data, agenda_slug: "astrid"
            })
            .then(response) //seguir trabajando 
            .then((newContact)=> {
                dispatch({
                    type: "add_contact",
                    payload: newContact
                })
            })
            .cath() // seguir trabajando 
        })


    }

    return (
        <div className='container'>
            <h2>Add Contact</h2>
            <form className="row g-3" onSubmit={forSubmit}>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder='@email' value={data.email} onChange={formChange} name="email"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputname" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="inputname" value={data.name} onChange={formChange} name="name"/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">phone</label>
                    <input type="text" className="form-control" id="inputAddress2" />
                </div>
               
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            </form>



        </div>
    )
}
