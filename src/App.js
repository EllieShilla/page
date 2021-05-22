import img1 from './image/Grumpy_Cat_by_Gage_Skidmore.jpg';
import './App.css';

function FIO(){
  return <h2 className="FIO">Фамилия Имя Отчество</h2>
}

function Inf(){
return (<div className="Inf">
  <p><span>Телефон: </span>12345</p>
  <p><span>Email: </span>12345@mail.com</p>
  </div>)
}

function Opt(props) {
  return <li>{props.opt}</li>
}

function App() {
  let opt1="Опыт1";
  let opt2="Опыт2";

  return (
    <div className="App">
      <div>
      <h1>Персональная страница</h1>
      <div className="ImgDiv">
      <img src={img1} alt={"img1"}/>
      </div>
      <FIO/>
      <Inf/>
      <h2>Опыт работы</h2>
      <Opt opt={opt1}/>
      <Opt opt={opt2}/>
      </div>
    </div>
  );
}

export default App;
