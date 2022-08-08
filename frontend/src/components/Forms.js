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

  const [output, setOutput] = useState([])
  const [result, setResult] = useState('')
  const [end, setEnd] = useState('')
  const [start, setStart] = useState('')

  const onSubmit = data => {
    let inputData = {
      inputNumber: parseInt(data.inputNumber)
    }
    const start = Date.now()
    api.post('calculus/', inputData).then(res => {
      // console.log(res.data.result)
      setResult(res.data.result)
      setEnd(Date.now())
      // console.log((end - start) / 1000)
      setOutput(output.concat(result))
      console.log(output)
    })

    // concat output array with result

    // setOutput(output => [
    //   ...output,
    //   {
    //     inputNumber: inputData.inputNumber,
    //     result: result,
    //     time: (end - start) / 1000
    //   }
    // ])
  }

  console.log(output)

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
    </div>
  )
}
