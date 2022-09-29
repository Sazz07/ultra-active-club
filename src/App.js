import Main from './components/Main/Main';
import Question1 from './components/Question1/Question1';
import Question2 from './components/Question2/Question2';
import Question3 from './components/Question3/Question3';

function App() {
  return (
    <div className="App">
    <div>
      <Main></Main>
    </div>
    <div className='mt-20 w-10/12 mx-auto shadow-2xl rounded-lg p-5'>
      <Question1></Question1>
    </div>
    <div className='my-10 w-10/12 mx-auto shadow-2xl rounded-lg p-5'>
      <Question2></Question2>
    </div>
    <div className='my-10 w-10/12 mx-auto shadow-2xl rounded-lg p-5'>
      <Question3></Question3>
    </div>
    </div>
  );
}

export default App;
