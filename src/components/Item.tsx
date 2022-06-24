import { FC, useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { IItem } from '../models/IItem'

interface ItemProps {
  items: IItem[]
}

const Item:FC<ItemProps> = (props) => {
  const item = useTypedSelector(state => state)
  const {count} = useTypedSelector(state => state.counter)
  const {incCount, decCount, getItems} = useActions()
  useEffect(
    () => {
      getItems()
      console.log(item)
    }
  )
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