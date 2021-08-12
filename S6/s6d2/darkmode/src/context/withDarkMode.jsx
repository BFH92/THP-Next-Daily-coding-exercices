import React from 'react'
import DarkModeContext from './DarkModeContext'

const withDarkMode = (Component) => (props) => (
  <DarkModeContext.Consumer>
    {(darkmode) => <Component {... props} darkModeData = {darkmode} />}
  </DarkModeContext.Consumer>
)

export default withDarkMode;