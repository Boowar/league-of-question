import { FC } from 'react'
import { useActions } from '../hooks/useActions'

interface ItemProps {
  id: number | string
  name: string
  count: number
}

const Item:FC<ItemProps> = (props) => {
  const {incCountItem, decCountItem, fetchItems, addItem} = useActions()
  
  return (
    <div>
    <button onClick={()=> fetchItems()}>Получить список</button>
    <button onClick={()=> addItem(String(prompt()))}>Добавить</button>
    {props.name}: {props.count} 
    <button onClick={()=> incCountItem(props.id)}>+1</button>
    <button onClick={()=> decCountItem(props.id)}>-1</button>
    </div>
  )
}

export default Item