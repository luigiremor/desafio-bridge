import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import api from '../services/api'
import axios from 'axios'

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [result, setResult] = useState([])

  const onSubmit = data => {
    const start = Date.now()
    let inputData = {
      inputNumber: parseInt(data.inputNumber)
    }
    api.post('calculus/', inputData).then(res => {
      setResult({ result: res.data.result, time: (Date.now() - start) / 1000 })
    })
  }

  return (
    <div className="flex flex-col mx-24  lg:mx-96 gap-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 justify-start bg-white text-black rounded-sm p-4"
      >
        <label htmlFor="inputNumber" className="font-semibold">
          Adicione o valor a ser conferido
        </label>
        <input
          {...register('inputNumber', {
            pattern: /^[0-9]*$/,
            required: true
          })}
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
      {result.result ? (
        <div className="flex flex-col gap-2 justify-start bg-white text-black rounded-sm p-4 ">
          <p>
            <span className="font-semibold">Número de casos:</span>{' '}
            {result.result} {result.result === 1 ? 'caso' : 'casos'}
          </p>
          <p>
            <span className="font-semibold">Tempo de resposta:</span>{' '}
            {result.time} segundos
          </p>
        </div>
      ) : (
        <div className="text-center">
          <p>Nenhum resultado calculado</p>
        </div>
      )}
    </div>
  )
}
