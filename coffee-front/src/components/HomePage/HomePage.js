import React, { useState, useRef,useEffect} from 'react';
import { Row,Col,Container,Image,Button,InputGroup,FormControl,Alert,Fade } from 'react-bootstrap';
import axios from 'axios'
import RecentBooks from '../Books/RecentBooks';
const HomePage = () => {
    const [newsletter, setNewsletter] = useState("");
    const [success,setSuccess] = useState(false)
    const inputRef = useRef([]);

    useEffect(() => {
        inputRef.current[0] = onSubscribe;

      }, []);
      
    function onSubscribe(text){
        setNewsletter(text)
    }

    function handleSubscribe(event){
        inputRef.current[0](event.target.value);
    }

    function storeEmail(text){
        let formData = new FormData()
        formData.append('email',text)
        axios.post("http://127.0.0.1:8000/api/newsletter/", formData,{
            headers: {
                'accept': 'application/json',
                'content-type': 'multipart/form-data'
             }
        })
        .then(resp=>{
            console.log(resp.data)
            setSuccess(true)
        
        })
        .catch(err=>{
            console.log(err)
        })
    }
    function handleStoring(){
        storeEmail(newsletter)
        setNewsletter("")
        
    }
    return(
        <Container>
        <Row className="py-3">
            <Col>
            <Image style={{width:"250px"}} src="../potential_logo2.gif" rounded />
            </Col>
        </Row>
        <Row className="py-3">
        <Col lg={6} sm={6} xs={6}>
            <Button href="/list" variant="outline-dark" size="lg" block>
                Coffee Shops
            </Button>
        </Col>
        <Col lg={6} sm={6} xs={6}>
            <Button href="/books" variant="outline-dark" size="lg" block>
                Libros
            </Button>
        </Col>
        </Row>
        <hr></hr>
        <Row className="py-5">
            <Col>
                <h1>Sobre Nosotros</h1>
                <center><p style={{width:"90%"}}className="py-3">
                    Brindamos informacion sobre los mejores Coffee Shops de Puerto Rico. 
                    Hemos colaborado con algunos Coffee Shops para proveerle a nuestros 
                    clientes libros de manera gratuita siguiendo la dinamica <b>"Deja uno, llevate uno!"</b>. 
                </p></center>
            </Col>
        </Row>
        <hr></hr>
        <Row className="py-5">
            <Col>
                <h1>¿Como funciona?</h1>
                <Row className="py-3">
                    <Col lg={6}>
                    <Image style={{width:"400px"}} src="../brainwriting.png" rounded />
                    </Col>
                    <Col lg={6}>
                    <Image style={{width:"400px"}} src="../brainwriting2.png" rounded />
                    </Col>
                </Row>
            </Col>
        </Row>
        <hr></hr>
        <Row className="py-5">
            <Col>
                <h1>Libros Recientes</h1>
                <center>
                    <br></br><br></br>
                    <RecentBooks/>
                </center>
            </Col>
            
        </Row>
        <hr></hr>
        <Row className="py-5">
            <Col md={{ span: 6, offset: 3 }}>
            <h1>Newsletter</h1>
            {success &&
                <React.Fragment>
                    
                    <Alert style={{transition: "width 2s"}} variant='dark' onClose={() => setSuccess(false)} dismissible>
                        Gracias por subscribirte a nuestro newsletter!
                    </Alert>
                </React.Fragment>
            }
            <Image style={{width:"50px"}} src="../newsletter_animation.gif" rounded />
          
                <InputGroup className="mb-3 py-3">
                    <FormControl
                    onChange={handleSubscribe}
                    value={newsletter}
                    placeholder="Email"
                    />
                    <InputGroup.Append>
                    <Button onClick={handleStoring} variant="outline-dark">Subscribete</Button>
                    </InputGroup.Append>
                </InputGroup>
         
            </Col>
        </Row>
        </Container>
    );
}

export default HomePage;