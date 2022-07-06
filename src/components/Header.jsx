import PropTypes from 'prop-types'


const Header = ({titulo}) => {
  return (
    <header className='header'>
    <h1> {titulo}</h1>
  
    </header>
  )
}

// Header.PropTypes = {
//     titulo: PropTypes.string.isRequired
// }

// Header.defaultProps = {
//     titulo: "fabricio"

// }

export default Header