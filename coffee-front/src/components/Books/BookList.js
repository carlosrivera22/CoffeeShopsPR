import Book from './Book'
import { useEffect, useRef, useState } from "react"
import { Container, Row,Col } from "react-bootstrap";
import { connect } from 'react-redux';
import { loadBooks } from "../../actions/books";
import SearchInput from '../SearchInput';
import DropdownInputShops from '../DropdownInputShops'

const BookList = (props) => {
    const [books, setBooks] = useState(props.books);
    const [shop, setShop] = useState("")
    const inputRef = useRef([]);
    const [no_results_text, setNoResultsText] = useState("")

    //call api to get list of shops
    useEffect(() => {
        props.dispatch(loadBooks());
        inputRef.current[0] = onSearchText;
        inputRef.current[1] = onDropdownSelect;
    },[]);

    useEffect(() => {

        if (props.books.length > 0) {
            setBooks(props.books);
        }
      }, [props.books]);

    function onSearchText(text,props,shop){
        let filtered;
        if(text && shop === ""){
            filtered = props.books.filter((book)=>
            book.title.toLowerCase().includes(text.toLowerCase())
            || book.author.toLowerCase().includes(text.toLowerCase())
            );
            setNoResultsText("")
        }
        else if(text){
            filtered = props.books.filter((book)=>
            (book.title.toLowerCase().includes(text.toLowerCase())
            || book.author.toLowerCase().includes(text.toLowerCase()))
            && book.shop.name === shop
            );
            setNoResultsText("")

        }else{
            if(shop === ""){
                filtered = props.books
            }else{
                filtered = props.books.filter((book) =>
                book.shop.name === shop)
            }
            setNoResultsText("")
        }
        if (filtered.length === 0){
            setNoResultsText("No hay Resultados")
          }
        setBooks(filtered);
        }
        

    function handleSearch(event) {
        inputRef.current[0](event.target.value, props,shop);
      }
    

    function onDropdownSelect(text,props){
        let selection;
        console.log(text)
        if(text !== 'Todos'){
            setShop(text)

            selection = props.books.filter((book) =>
            book.shop.name.includes(text) 
            );
            setNoResultsText("")
        } else{
            setShop("")
            selection = props.books
            setNoResultsText("")
        }
        if(selection.length === 0){
            setNoResultsText("No hay Resultados")
        }
        setBooks(selection)
        
    }

    function handleDropdown(event){
        console.log(event.target.value)
        inputRef.current[1](event.target.value,props)
    }

    return (
       
        <Container>
            <h1 className="py-3"><b>LIBROS</b></h1>
            <Row className="px-5 py-3">
                <DropdownInputShops handleDropdown={handleDropdown}/>
                <SearchInput  handleSearch={handleSearch}/>
            </Row>
            <h1 className="py-1">{shop}</h1>
            <hr></hr>
            <Row>
                {books.map((book, index) => (
                    
                    <Col key={index} className="py-3" lg={4} md={6}>
                        <Book className="px-3" image={book.image} {...book} />
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