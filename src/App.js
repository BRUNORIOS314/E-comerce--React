import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <NavBar>
    </NavBar>
    <ItemListContainer productos='mis porductos'></ItemListContainer>
    </>
  );
}

export default App;
