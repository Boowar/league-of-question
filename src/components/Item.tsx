import { FC, useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { IItem } from '../models/IItem'

interface ItemProps {
  name: string
  count: number
}

const Item:FC<ItemProps> = (props) => {
  const item = useTypedSelector(state => state.item.items)
  const count = useTypedSelector(state => state.counter)
  const {incCount, decCount, fetchItems, setCount} = useActions()
  useEffect(() => {setCount(props.count)},[])
  console.log('item',item)
  console.log('count',count)
  console.log('props',props)
  
  return (
    <div>
    <button onClick={()=> fetchItems()}>Получить список</button>
    <button onClick={()=> console.log(item)}>Name</button>
    {props.name}: {props.count} <button onClick={()=> incCount(1)}>+1</button>
    <button onClick={()=> decCount(1)}>-1</button>
    </div>
  )
}

export default Item