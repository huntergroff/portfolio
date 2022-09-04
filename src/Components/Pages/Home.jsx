import React, {useContext} from 'react'
import { ThemeContext } from '../../App'

const Home = () => {
  console.log(ThemeContext);

  return (
    <div>
      <ThemeContext.Consumer>
        {value => <div>{value.theme}</div>}
      </ThemeContext.Consumer>
    </div>
  )
}

export default Home