import React, { useState } from 'react'

export const Form = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue("")
        console.log(value);
    }
  return (
    <form onSubmit={handleSubmit} action="" className='flex items-center justify-between gap-3 mt-5'>
        <input onChange={(e) => setValue(e.target.value)} value={value} type="text" placeholder='Add your List' className='w-full rounded-md font-semibold bg-gray-300' required />

        <button type='submit' className='w-[120px] bg-purple-600 py-2 rounded-md font-bold text-zinc-100 cursor-pointer '>
            Add Task
        </button>
    </form>
  )
}
