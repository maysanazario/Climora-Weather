import './App.css'
import ItemWeather from './Components/ItemWeather'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

function App() {
  return (
    <div className='w-screen h-screen bg-linear-to-bl from-violet-500 to-fuchsia-500 flex justify-center'>
    <div className="h-screen grid gap-y-12 bg-slate-600/25 place-content-center">
      <h1 className='text-5xl font-bold text-violet-50'>Previsão do Tempo</h1>
      <div className="input_bt w-full h-10.5 flex place-content-center">
          <input className='rounded-l-lg bg-indigo-50 w-9/10 h-full' type="text" name="" id="" />
          <button className='w-1/10 h-full flex items-center justify-center bg-indigo-50 rounded-r-lg hover:bg-indigo-100'><MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
</button>
      </div>
      <div className="linha border border-indigo-50 w-full"></div>
      <div className="mx-auto w-2/3 text-center grid grid-cols-1 gap-x-6 gap-y-5">
      <h2 className='text-3xl font-semibold text-indigo-50 text-left'>Capitais</h2>
      <table>
        <thead>
          <tr>
            <th className='text-sm font-extralight text-justify'>Min</th>
            <th className='text-sm font-extralight text-justify'>Max</th>
            <th className='text-sm font-extralight text-justify'>Cidade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='text-xl font-bold'>18º</td>
            <td className='text-xl font-bold'>27º</td>
            <td className='text-xl font-bold'>Rio de Janeiro</td>
          </tr>
          <tr>
            <td className='text-xl font-bold'>18º</td>
            <td className='text-xl font-bold'>27º</td>
            <td className='text-xl font-bold'>Rio de Janeiro</td>
          </tr>
          <tr>
            <td className='text-xl font-bold'>18º</td>
            <td className='text-xl font-bold'>27º</td>
            <td className='text-xl font-bold'>Rio de Janeiro</td>
          </tr>
          <tr>
            <td className='text-xl font-bold'>18º</td>
            <td className='text-xl font-bold'>27º</td>
            <td className='text-xl font-bold'>Rio de Janeiro</td>
          </tr>
          <tr>
            <td className='text-xl font-bold'>18º</td>
            <td className='text-xl font-bold'>27º</td>
            <td className='text-xl font-bold'>Rio de Janeiro</td>
          </tr>
        </tbody>
      </table>
      </div>
      
    </div>
      
    </div>

  )
}

export default App
