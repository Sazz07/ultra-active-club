import Main from './components/Main/Main';
import Question1 from './components/Question1/Question1';

function App() {
  return (
    <div className="App">
    <div>
      <Main></Main>
    </div>
    <div className='mt-20 w-10/12 mx-auto shadow-2xl rounded-lg p-5'>
      <Question1></Question1>
    </div>

    </div>
  );
}

export default App;
