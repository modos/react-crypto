import './App.css';
import {Link} from 'react-router-dom';
import Footer from './components/footer';
import { useSelector, useDispatch } from 'react-redux'
import {change} from './features/theme'
import { useEffect } from 'react';

function App() {

  const count = useSelector((state) => state.theme.value);
  const dispatch = useDispatch()

  function toggleTheme() {
    if (count) {
      document.getElementsByClassName('main')[0].style.backgroundImage = `url(${require('./assets/background.png')})`
    }else {
      document.getElementsByClassName('main')[0].style.backgroundImage = `url(${require('./assets/lightbg.png')})`
    }
    
    dispatch(change());
}

  useEffect(() => {
    if (count) {
      document.getElementsByClassName('main')[0].style.backgroundImage = `url(${require('./assets/background.png')})`
    }else {
      document.getElementsByClassName('main')[0].style.backgroundImage = `url(${require('./assets/lightbg.png')})`
    }
  })
  
  return (
    
    <div className='App'>
      <div className='main'>

        <div className='nav'>
          <button className='theme-button' onClick={() => toggleTheme()}>Change Theme</button>
        </div>

        <div className='heading'>
          <div>
            <h1>Search & <p>Buy <span className='crypto-text'>Crypto</span></p></h1>
            <p className='sub-heading'>shahid beheshti university</p>
            <p className='sub-heading'>IE final project</p>
            <Link to="/search"><button className='search-button'>Search More</button></Link>
          </div>
        </div>

        <Footer />

      </div>
    </div>
  );
}

export default App;
