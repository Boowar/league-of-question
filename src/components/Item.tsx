import React, { FC } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const Item:FC = () => {
  const {count} = useTypedSelector(state => state.item)
  const {addCount, deductCount} = useActions()
  return (
    <div>Item: {count} <button onClick={()=> addCount(1)}>add</button><button onClick={()=> deductCount(1)}>deduct</button></div>
  )
}

export default Item