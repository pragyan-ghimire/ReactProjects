
import './App.css'
import DisplayEquation from './components/DisplayEquation';
import NormalButtons from './components/NormalButtons'
import SpecialButtons from './components/SpecialButtons'

function App() {
  const normalNum = [1,2,3,4,5,6,7,8,9,0];
  const specialBtn = ['DEL','AC','X','/','+','-','='];
  return (
    <>
    <div className="container">
      <DisplayEquation/>
      <div className="btnElements">
        <div className="normalBtnElements">
        {
          normalNum.map((num, index)=>{
            return <NormalButtons key={index} number={num} />
          })
        }
        </div>
        <div className="specialBtnElements">
        {
          specialBtn.map((btn, index)=>{
            return <SpecialButtons key={index} button={btn} />
          })
        }
        </div>
     
      </div>
    </div>
    </>
  )
}

export default App
