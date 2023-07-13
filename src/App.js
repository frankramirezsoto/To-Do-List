import './App.css';
import Header from './components/Header';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App bg-cyan-200 font-mono h-full'>
      <main>
        <header className='mb-5 container mx-auto' >
          <Header></Header>
        </header>

        <main className='mb-5'>
          <TaskList />
        </main>

        <footer>
          <Footer />
        </footer>

      </main>
    </div>
  );
}

export default App;
