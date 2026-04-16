import Clock from './componentes/Clock';
import Weather from './componentes/Weather';
import Notes from './componentes/Notes';
import './App.css'

function App() {
  return (
    <div className='dashboard'>
      <header>
        <h1>⋆. 𐙚˚࿔ Notes 𝜗𝜚˚⋆</h1>
      </header>
      
      <main className='grid'>
        <Clock/>
        <Weather/>
        <Notes/>
      </main>
    </div>
  );
}

export default App