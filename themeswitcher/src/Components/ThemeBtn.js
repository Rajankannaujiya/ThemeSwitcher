import React from 'react'
import useTheme from '../context/theme'


function ThemeBtn() {
  const {themeMode,darkTheme,lightTheme}=useTheme();
 const onChangeBtn=(e)=>{
  const darkModeStatus=e.currentTarget.checked
  if(darkModeStatus){
    darkTheme()
  }
  else{
    lightTheme()
  }
 } 
  return (
    <div>
    <input type='checkbox' value=""className='theme' onChange={onChangeBtn} checked={themeMode==="dark"}/>
      
    </div>
  )
}

export default ThemeBtn