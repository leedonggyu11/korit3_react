import Counter2 from "./components/Counter2";
import Hatching from "./components/Hatching";
import Counter from "./components/Counter";
import './App.css';

function App() {
  return (
    <>
      <Counter2 />   {/* 가장 상단에 위치 */}
      <Hatching />
      <Counter />
    </>
  );
}
  
export default App;
