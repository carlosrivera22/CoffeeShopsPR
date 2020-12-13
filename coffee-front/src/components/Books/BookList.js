import Book from './Book'
import { useEffect, useRef, useState } from "react"
import { Container, Row,Col } from "react-bootstrap";
import { connect } from 'react-redux';
import { loadBooks } from "../../actions/books";
import SearchInput from '../SearchInput';
import DropdownInput from '../DropdownInput'
const BookList = (props) => {
    const [books, setBooks] = useState(props.books);
    const inputRef = useRef([]);
    const [no_results_text, setNoResultsText] = useState("")

    //call api to get list of shops
    useEffect(() => {
        props.dispatch(loadBooks());
        inputRef.current[0] = onSearchText;
    },[]);

    useEffect(() => {

        if (props.books.length > 0) {
            setBooks(props.books);
        }
      }, [props.books]);

    function onSearchText(text,props){
        let filtered;
        if(text){
            filtered = props.books.filter((book)=>
            book.title.toLowerCase().includes(text.toLowerCase())
            || book.author.toLowerCase().includes(text.toLowerCase())
            );
            setNoResultsText("")
            setBooks(filtered)
            if(filtered.length === 0){
                setNoResultsText("No hay Resultados")
            }
        }else{
        setBooks(props.books)
     
    }
        
    }

    function handleSearch(event) {
        inputRef.current[0](event.target.value, props);
      }
    
    return (
       
        <Container>
            <Row className="px-3">
                <DropdownInput/>
                <SearchInput  handleSearch={handleSearch}/>
            </Row>
            <Row className="py-3">
                {books.map((book, index) => (
                    
                    <Col className="py-5" lg={4} md={6}>
                        <Book key={index} image={book.image} {...book} />
                    </Col>  
               
                ))}
                <h1>{no_results_text}</h1>
             
            </Row>
           
        </Container>
    );
};
const mapStateToProps = (state) => ({
    books: state.books
  });
export default connect(mapStateToProps)(BookList)