import Forms from './components/Forms'
import Header from './components/Header'

function App() {
  return (
    <div className="bg-zinc-800 h-screen text-white">
      <Header />
      <section className="pt-24">
        <Forms />
      </section>
    </div>
  )
}

export default App
