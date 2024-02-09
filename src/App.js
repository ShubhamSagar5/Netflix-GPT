
import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import AppStore from './Utilis/AppStore';

function App() {
  return (
    <div>
         <Provider store={AppStore}>
          <Body></Body>
         </Provider>
    </div>
  );
}

export default App;
