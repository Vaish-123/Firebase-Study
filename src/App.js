import './App.css';
import { Firebase } from './Firebase/config';

function App() {
  return (
    <div>
      <h1>Welcome user</h1>
      <button onClick={() => {
        Firebase.firestore().collection('products').get().then(snapshot => {
          snapshot.forEach((obj) => {
            console.log(obj.data());
          })
        })
      }}>CLick</button>
    </div>
  );
}

export default App;