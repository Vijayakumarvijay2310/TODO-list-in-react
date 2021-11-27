
import './App.css';
import Form from './components/form'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

function App() {

  const notify =() => {
    toast('delete column')
  }
 

  return (
    <>
    <div>
      <Form></Form>
        </div>
        <button onClick={notify}>Notify!</button>
        </>
  );
}

export default App;
