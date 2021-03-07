import './App.css';
import R003 from './components/R003';
import Jquery from './components/Jquery';

function App() {
  let name = '사오정';
  let age = 9999;
  console.log(`내 이름은 ${name}이고, ${age}살이다`);
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>HTML 적용하기</p>
      <R003 name='홍길동' />
      <Jquery />
    </div>
  );
}

export default App;
