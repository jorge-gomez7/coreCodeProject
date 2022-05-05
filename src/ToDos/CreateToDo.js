import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'


const URL = 'http://localhost:4000/api/'


const CompCreateToDo = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    
    const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(`${URL}todo`, {title: title, description: description})
        navigate('/')
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
           <h3>Create Tasks</h3>
           <h4>¿what plans do you have?</h4>
           <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Title</label>
                    <input
                        value={title}
                        onChange={ (e)=> setTitle(e.target.value)} 
                        type="text"
                        className='form-control'
                        placeholder="Let's start with your task title"
                    />
                 </div>   
                 <div className='mb-3'>
                     <label className='form-label'>Description</label>
                    <textarea
                        value={description}
                        onChange={ (e)=> setDescription(e.target.value)} 
                        type="text"
                        className='form-control'
                        placeholder='now, write a description for your task'
                    />                 
                 </div>
                 {/* <div className='mb-3'>
                     <label className='form-label'>Status</label>
                     <Select
                     value={status}
                     options={options}
                     onChange={valueOption}
                     />                   
                 </div>    */}
                 <button type='submit' className='btn btn-primary'>Add Task</button>                  
           </form>
        </div>
    )
}

export default CompCreateToDo