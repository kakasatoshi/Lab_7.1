import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBootstrap from "react-bootstrap/Navbar"; // Đổi tên import từ react-bootstrap

const MyNavbar = () => {
  // Đổi tên component
  return (
    <>
      <NavbarBootstrap bg="primary" data-bs-theme="dark">
        <Container>
          <NavbarBootstrap.Brand href="/">Show</NavbarBootstrap.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Products</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
            <Nav.Link href="#pricing">Orders</Nav.Link>
            <Nav.Link href="/add-product">Add Product</Nav.Link>
            <Nav.Link href="#pricing">Admin Products</Nav.Link>
          </Nav>
        </Container>
      </NavbarBootstrap>

      <br />
    </>
  );
};

export default MyNavbar;
