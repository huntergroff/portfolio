import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import { MenuItems } from './Content/MenuItems';

function App() {
  return (
    <body>
      <Header />
      <Routes>
        {MenuItems.map((menuItem, index) => {
                    return (
                        <Route exact path={menuItem.link} element={menuItem.element} />
                    );
                })
            }
      </Routes>
    </body>
  );
}

export default App;
