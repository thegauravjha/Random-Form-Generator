import './App.css';
import FormList from './Components/FormList';
import Navbar from "./Components/Navbar"

function App() {
    return (
        <div>
            <Navbar />
            <div className='main-container'>
                <FormList />
            </div>
        </div>
    );
}

export default App;
