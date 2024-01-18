import './App.scss'
import Card from './components/Card'

function App() {
  return (
    <>
      <div className='container'>
        <div className="col-3">
          <Card
            title="Card Title"
            content="Some quick example text to build on the card title and make up the bulk of the card's content."
            href="#"
          >
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Some image" />
          </Card>
        </div>
      </div>
      <div className='container mt-3'>
        <div className="col-4">
          <Card
            title="Card Title"
            content="Some quick example text to build on the card title and make up the bulk of the card's content."
            href="http://netology.ru"
          />
        </div>
      </div >
      <div className='container mt-3'>
        <div className="col-2">
          <Card
            title="Card Title"
            content="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </div>
      </div >
    </>
  )
}

export default App
