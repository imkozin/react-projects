import {useState} from 'react';
import './TaskList.css'

const TaskList = () => {
    const [newItem, setNewItem] = useState('');
    const [items, setItems] = useState([]);

    const addItem = () => {
        
        if (!newItem) {
            alert('Enter a todo...');
            return;
        }

        const item = {
            id: Date.now(),
            value : newItem
        }
        setItems([...items, item]);
        setNewItem('');
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            addItem();
        }
    }

    const deleteItem = (id) => {
       const newArray = items.filter(item => item.id !== id);
       setItems(newArray);
    }

    return (
        <>
            <input onKeyDown={handleKeyDown} type="text" placeholder="Add a new todo" value={newItem} onChange={(e)=> setNewItem(e.target.value)}/>
            {items.length > 0 ? <div >
                {items.map(item => (
                    <span onClick={() => deleteItem(item.id)} key={item.id}>{item.value}</span>
                ))}
            </div> :
            <div>
                <p>You have no todo's left, yay!</p>
            </div>}
        </>
    )
}

export default TaskList;