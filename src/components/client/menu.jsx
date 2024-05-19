'use client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import Button from 'react-bootstrap/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSession, signIn, signOut } from 'next-auth/react'
function Menu(){
  const { data: session } = useSession()
    return(
      <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">B-GYM</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#features">Contact</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link as={Link} href="/client/pageAide"><HelpIcon />Aide</Nav.Link>
        <div className="ms-auto">
        
        {session? <Nav.Link className='btnnav' onClick={() => signOut()}><LogoutIcon/><Button  variant="warning" style={{marginRight: '5px'}} id='buttons'>logout </Button>
        </Nav.Link>
: <Nav.Link onClick={() => signIn()}><AccountCircleIcon/><Button variant="warning" style={{marginRight: '5px'}} id='buttons'>login</Button></Nav.Link>
}
      {/* <Button variant="warning" style={{marginRight: '5px'}} id='buttons'>Login</Button> */}
    </div>
        </Nav>
      </Container>
    </Navbar>
    );
}
export default Menu ;