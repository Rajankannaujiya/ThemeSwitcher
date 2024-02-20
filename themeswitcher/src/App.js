import { useState, useEffect } from 'react';
import './App.css';
import { ThemeProvider } from './context/theme';
import ThemeBtn from './Components/ThemeBtn';
import Card from './Components/Card';

function App() {
  const [themeMode, setThemeMode] = useState("light")
  const darkTheme = () => {
    setThemeMode("dark");
  }
  const lightTheme = () => {
    setThemeMode("light");
  }

  // actual change in a theme  is made using classic javascript

  useEffect(() => {
    const container = document.querySelector('.Main');
    container.classList.remove("light", "dark");
    container.classList.add(themeMode);
  }, [themeMode])


  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className='mainContainer'>
        <div className='Main'>
          <h1>themeSwitcher</h1>
          <div className='full'>
            <ThemeBtn />
          </div>
          <div className='card'>
            <Card />
          </div>
        </div>
      </div>

    </ThemeProvider>

  )
}

export default App;
