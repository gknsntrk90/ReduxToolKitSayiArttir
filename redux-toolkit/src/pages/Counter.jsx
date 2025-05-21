import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import { decrease, increase, setCount } from '../app/counterSlice'
import { useDispatch, useSelector } from 'react-redux'



const Counter = () => {
    const dispatch = useDispatch();
    // STORE'A ABONE OLMA
    const state = useSelector((store) => store.counterReducer);
  return (
    <div>
        <h1>{state.count}</h1>
        <Stack direction='horizontal' gap={2}>
    <Button variant='danger' onClick={() => dispatch(decrease())}>Azalt</Button>
    <Button variant='success' onClick={() => dispatch(increase())}>Arttır</Button>
    <Button variant='secondary' onClick={() => dispatch(setCount(0))}>Sıfırla</Button>
    </Stack>
    </div>
  )
}

export default Counter;