import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import api from '../services/api'

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [output, setOutput] = useState([])

  const onSubmit = data => {
    const start = Date.now()
    let inputData = {
      number: parseInt(data.number)
    }
    api.post('calculus/', inputData).then(res => {
      setOutput({
        number: parseInt(data.number),
        result: res.data.result,
        time: (Date.now() - start) / 1000
      })
    })
  }

  return (
    <div className="flex flex-col mx-8  lg:mx-96 gap-4 bg-zinc-800 h-full">
      <div className="flex flex-col gap-2 justify-start bg-white text-black rounded-sm p-4">
        <p>Olá, tudo bem?</p>
        <p>
          Me chamo Luigi e esse é o meu desafio do processo seletivo do
          laboratório bridge
          <span className="text-blue-500">_</span>!
          <br />
        </p>
        <p className="font-semibold">
          Para testar a aplicação insira um número inteiro k, assim será
          calculado o número de inteiros positivos n menores que k, para os
          quais n e n + 1 têm o mesmo número de divisores positivos.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 justify-start bg-white text-black rounded-sm p-4"
      >
        <label htmlFor="number" className="font-semibold">
          Insira o valor a ser conferido
        </label>
        <input
          {...register('number', {
            pattern: /^[0-9]*$/,
            required: true,
            min: {
              value: 1
            }
          })}
          type="text"
          id="number"
          placeholder="Digite um valor inteiro positivo"
          className="bg-white text-black rounded-sm p-2 outline-blue-500 border"
          {...(errors.number && {
            className: '  p-2 rounded-sm outline-red-500 border border-red-500'
          })}
        />
        {errors.number && (
          <p className="text-red-500">
            O valor deve ser um número inteiro positivo maior que 1
          </p>
        )}

        <button
          onClick={handleSubmit(onSubmit)}
          className="bg-blue-600 rounded-md p-2  text-white hover:bg-blue-800"
        >
          Calcular
        </button>
      </form>
      {output.result != null ? (
        <div className="flex flex-col gap-2 justify-start bg-white text-black rounded-sm p-4">
          <p>
            <span className="font-semibold">Valor conferido:</span>{' '}
            {output.number}
          </p>
          <p>
            <span className="font-semibold">Número de casos:</span>{' '}
            {output.result} {output.result === 1 ? 'caso' : 'casos'}
          </p>
          <p>
            <span className="font-semibold">Tempo de resposta:</span>{' '}
            {output.time} segundos
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
