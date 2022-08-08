import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [data, setData] = useState([])

  const onSubmit = data => {
    console.log(data)
    setData(data)
  }

  console.log('renderizou')

  return (
    <div className=" bg-white text-black rounded-sm mx-32 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 justify-start "
      >
        <label htmlFor="inputNumber" className="font-semibold">
          Adicione o valor a ser conferido
        </label>
        <input
          {...register('inputNumber', { pattern: /^[0-9]*$/, required: true })}
          type="text"
          id="inputNumber"
          placeholder="Digite o valor a ser conferido"
          className="bg-white text-black rounded-sm p-2 outline-blue-500 border"
          {...(errors.inputNumber && {
            className: '  p-2 rounded-sm outline-red-500 border border-red-500'
          })}
        />
        {errors.inputNumber && (
          <p className="text-red-500">
            O valor deve ser um número inteiro positivo
          </p>
        )}

        <button
          onClick={handleSubmit(onSubmit)}
          className="bg-blue-600 rounded-md p-2  text-white hover:bg-blue-800"
        >
          Confirmar
        </button>
      </form>
    </div>
  )
}
