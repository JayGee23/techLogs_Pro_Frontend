import {Outlet} from 'react-router-dom'

//Layout component will be across all pages - so could be used for navbar, header, footer.

const Layout = () => {
  return (
    <Outlet />
  )
}

export default Layout