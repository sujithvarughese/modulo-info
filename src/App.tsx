import {Link, Outlet} from "react-router";


const App = () => {


  return (
    <body style={{ maxWidth: "1024px", margin: "auto", padding: "32px"}}>
      <header style={{display: 'flex', justifyContent: 'center', padding: '10px', gap: '5%' }}>
        <Link to="/">About</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/termsandconditions">Terms and Conditions</Link>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>

      </footer>
    </body>
  )
}

export default App
