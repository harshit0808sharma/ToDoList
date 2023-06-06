import './ToDoList.css';

const ToDoList = (props) =>{
    const deleteItems = () =>{
        console.log('deleted');
    }
    return (
        <>
        <div className="todo_style">
            <li onClick={() => {props.onSelect(props.id)}}> <button className="clear"> + </button> {props.text}</li>
        </div>
        </>
    )
}
export default ToDoList;