
import Container from "react-bootstrap/Container";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';




const SearchBar = () => {
    return (
    <Container className="pt-5 mt-5">
        <Form className="d-flex">
        <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
    </Form>
  </Container>
  );
};

export default SearchBar;