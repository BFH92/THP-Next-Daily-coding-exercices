import React, {useContext} from 'react'
import DarkModeContext from '../../context/DarkModeContext';
import withDarkMode from '../../context/DarkModeContext/WithDarkMode';
import Switch from '@material-ui/core/Switch';

const Btn = ({darkModeData}) => {
  const SwitchMode = useContext(DarkModeContext)
  return(
  <>

  {darkModeData.darkMode === "enabled" ? <Switch checked={true} onClick={SwitchMode.ToLightMode}> light mode </Switch> : <Switch checked={false} onClick={SwitchMode.ToDarkMode }> Dark mode</Switch>}
  </>
)}

export default withDarkMode(Btn);