import data from './data';
import Header from "./components/Header"
import Card from "./components/Card"

export default function App() {
  const cards = data.map(item => <Card key={item.id} {...item} />)

  return (
    <div className="app">
      <Header />
      <main>
        {cards}
      </main>
    </div>
  )
}
