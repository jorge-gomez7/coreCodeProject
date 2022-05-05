import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URL = 'http://localhost:4000/api/'


const CompShowToDos = () => {
    
    const [todos, setTodo] = useState([]);

    
    useEffect( ()=>{
        getToDo()
    },[])

    //procedimineto para mostrar todos los ToDos
    const getToDo = async () => {
        const res = await axios.get(`${URL}todos`)
        setTodo(res.data)
    }

    //procedimineto para eliminar un ToDo
    const deleteToDo = async (id) => {
       await axios.delete(`${URL}todo/${id}`)
       getToDo()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>                    
                    <table className='table'>
                        <thead className=''>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { todos.map ( (todo) => (
                                <tr key={ todo.id}>
                                    <td> { todo.title } </td>
                                    <td> { todo.description } </td>
                                    <td> { todo.status } </td>
                                    <td>
                                        <Link to={`/todo/${todo.id}`} className='btn'><i className="fas fa-edit"></i></Link>
                                        <button onClick={ ()=>deleteToDo(todo.id) } className='btn ms-2'><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>                    
                </div>    
            </div>
            <div className="row">
                <div className="col">
                    <Link to="/todo" className='btn btn-primary mt-2 mb-2 text-right'>Add New Task <i className="fas fa-plus"></i></Link>
                </div>                
            </div>
        </div>
    )

}

export default CompShowToDos