import { FC } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const Item:FC = () => {
  const {count} = useTypedSelector(state => state.item)
  const {addCount, deductCount, getItems} = useActions()
  
  return (
    <div>
    <button onClick={()=> getItems}>Получить список</button>
    Item: {count} <button onClick={()=> addCount(1)}>add</button>
    <button onClick={()=> deductCount(1)}>deduct</button>
    </div>
  )
}

export default Item