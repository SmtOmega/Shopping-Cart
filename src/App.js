import Navbar from './Navbar'
import CartItemsContainer from './CartItemsContainer'
import './App.css';
import {useGlobalContext} from './context'

function App() {
  const {loading} = useGlobalContext()
  if(loading){
    return(
      <div className="loading">
        <h1>Loading Items....</h1>
      </div>
    )
  }
  return (
    <>
      <Navbar />
      <CartItemsContainer />
    </>
  );
}

export default App;
