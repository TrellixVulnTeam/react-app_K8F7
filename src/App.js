import './App.scss';
import NameList from './Components/NameList/NameList';
import InforCard from './Components/InfoCard/InfoCard';
import { BrowserRouter, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import data from './Data/Data';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NameList />}/>
          {data.map(item => {
            return <Route key={item.id} path={`/users/${item.id}`} element={<InforCard id={item.id}/>} />
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
