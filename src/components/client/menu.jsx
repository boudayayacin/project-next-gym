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
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useShoppingCart } from 'use-shopping-cart';
import CartModal from './shoppingCart/cartModal';
import { useRouter } from 'next/navigation';

function Menu() {
  const { handleCartClick, cartCount } = useShoppingCart();
  const router = useRouter()
  const { data: session } = useSession();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">B-GYM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Contact</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link as={Link} href="/client/pageAide">
              <HelpIcon /> Aide
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={() => router.push('/client/cartProducts')}>
              <ShoppingBasketIcon style={{ color: 'pink' }} /> Shopping Cart
            </Nav.Link>
            <button className="relative" onClick={() => handleCartClick()}>
              <ShoppingCartIcon color="primary" />
              <div className="rounded-full flex justify-center items-center bg-emerald-500 text-xs text-white absolute w-6 h-5 bottom-6 -right-1">
                {cartCount}
              </div>
            <CartModal />
            </button>
            {session ? (
              <Nav.Link className='btnnav' onClick={() => signOut()}>
                <LogoutIcon />
                <Button variant="warning" style={{ marginRight: '5px' }} id='buttons'>
                  Logout
                </Button>
              </Nav.Link>
            ) : (
              <Nav.Link onClick={() => signIn()}>
                <AccountCircleIcon />
                <Button variant="warning" style={{ marginRight: '5px' }} id='buttons'>
                  Login
                </Button>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
