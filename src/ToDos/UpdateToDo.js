import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Select from 'react-select'

const URL = 'http://localhost:4000/api/'

const CompUpdateToDo = () => {
    const [title, setTitle] = useState('')    
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('')    
    const navigate = useNavigate()
    const {id} = useParams()
    

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.patch(`${URL}todo/${id}`, {
            title: title,
            description: description,
            status: status
        })
        navigate('/')
    }

    useEffect( ()=>{
        getToDoById()
    },[])

    const getToDoById = async () => {
        const res = await axios.get(`${URL}todo/${id}`)
        setTitle(res.data.title)
        setDescription(res.data.description)
        setStatus(res.data.status)
    }

    const options = [
        {value: 'Pendiente', label: 'Pendiente'},
        {value: 'Finalizado', label: 'Finalizado'}
    ]

    const valueOption = ({value}) =>{
        console.log(value)
        setStatus(value)
        
    }

    return (
        <div className="container">
        <h3>Update Task</h3>
        <form onSubmit={update}>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                    value={title}
                    onChange={ (e)=> setTitle(e.target.value)}
                    type="text"
                    className="form-control"                        
                />
            </div>
            <div className="mb-3">
                <label  className="form-label">Description</label>
                <textarea
                    value={description}
                    onChange={ (e)=> setDescription(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>
            <div className='mb-3'>
                     <label className='form-label'>Status</label>
                     <Select
                     value={status.value}
                     options={options}
                     onChange={valueOption}
                     />                   
                 </div> 
            <button type="submit" className="btn btn-primary">Update</button>
        </form>
    </div>
    )

}

export default CompUpdateToDo