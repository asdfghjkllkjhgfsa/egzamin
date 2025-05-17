import './App.css'
import CardList from './components/CardList'

function App(props) {

  return (
    <>
       <div className="header">
            <div className="container">
                <div className="b">
                  <h1>Exclusive</h1>
                </div>
                <div className="a">
                  <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                    </ul>
                </nav>
                </div>
            </div>
        </div>
       <CardList></CardList>
    </>
  )
}

export default App
