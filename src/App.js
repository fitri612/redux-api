import { LoadingBar } from 'react-redux-loading-bar';
import './App.css';
import CommentList from './features/comments/CommentList';

function App() {
  return (
    <div className="App">
      {/* <LoadingBar /> */}
      <CommentList />
    </div>
  );
}

export default App;
