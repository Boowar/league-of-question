import { FC } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { IItem } from '../models/IItem'

interface ItemProps {
  id: number | string
  name: string
  count: number
}

const Item:FC<ItemProps> = (props) => {
  const item = useTypedSelector(state => state.item.items)
  const index = item.findIndex(item =>  item.id === props.id)
  console.log(item[index].id)
  const {incCountItem, decCountItem, fetchItems} = useActions()
  
  return (
    <div>
    <button onClick={()=> fetchItems()}>Получить список</button>
    <button onClick={()=> console.log('item')}>Name</button>
    {props.name}: {props.count} 
    <br/>
    {item[index].name}:{item[index].count}
    <button onClick={()=> incCountItem(props.id)}>+1</button>
    <button onClick={()=> decCountItem(props.id)}>-1</button>
    </div>
  )
}

export default Item