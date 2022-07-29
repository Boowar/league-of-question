import { FC } from 'react'
import { useActions } from '../hooks/useActions'

interface ItemProps {
  id: number | string
  name: string
  count: number
  onClick: any
}

const Item:FC<ItemProps> = (props) => {
  const {incCountItem, decCountItem, delItem} = useActions()
  console.log(props)
  return (
    <div>
    <button onClick={()=> delItem(props.id)}>Удалить</button>
    {props.name}: {props.count} 
    <button onClick={()=> incCountItem(props.id)}>+1</button>
    <button onClick={()=> decCountItem(props.id)}>-1</button>
    </div>
  )
}

export default Item