import Chat from'./Components/Chat';
import Examples from './Components/ListGroup';
import './App.css';
function App() {
    return (
         <div className="App">
          
          <Examples items={["Receita 1 mais longa", "Receita 2", "Receita 3", "Receita 4 mais longa ainda de todas"]} />
             <Chat />
     </div>

  );
}

export default App;