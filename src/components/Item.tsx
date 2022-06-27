import { FC, useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { IItem } from '../models/IItem'

interface ItemProps {
  items: IItem[]
}

const Item:FC<ItemProps> = (props) => {
  const item = useTypedSelector(state => state.item.items)
  const {count} = useTypedSelector(state => state.counter)
  const {incCount, decCount, getItems} = useActions()
  console.log('item',item)
  console.log('count',count)
  return (
    <div>
    <button onClick={()=> getItems()}>Получить список</button>
    <button onClick={()=> console.log(item)}>Name</button>
    Item: {count} <button onClick={()=> incCount(1)}>+1</button>
    <button onClick={()=> decCount(1)}>-1</button>
    </div>
  )
}

export default Item