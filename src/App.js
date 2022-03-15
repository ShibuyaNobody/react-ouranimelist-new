import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Carousel from 'react-bootstrap/Carousel';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Home from './components/pages/Home';
import Services from './components/pages/Services';

function App() {
  return (
    <>
    <div className='body'>
    <Router>
        <Navbar />
        {/* <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/marketing' component={Marketing} />
          <Route path='/consulting' component={Consulting} />
        </Switch> */}
      </Router>
      <div className='bar'>
                {/* <form className="searchBar" action="index.html" method="POST">
                    <input type="text" name=""placeholder="Search"/>
                    <input type="submit" formaction="search.html" name="" value="Go"/>
                </form> */}
        <img className='logoImage' src={ require('./components/images/ouranimelist_icon_pog.png') } />
      </div>
        <form className="searchBar" action="index.html" method="POST">
           <input type="text" name=""placeholder="Search"/>
          <input type="submit" formaction="search.html" name="" value="Go"/>
        </form>
      {/* <Row>
        <Col>Yes</Col>
      </Row> */}
    <Container>
    <Row style={{ marginTop: 30 }}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ require('./components/images/gintama.jpg') }
                  alt="Gintama"
                />
                <Carousel.Caption>
                  <h3>Gintama</h3>
                  <p>Action, Comedy, Sci-Fi</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ require('./components/images/k-on.jpg') }
                  alt="K-on"
                />

                <Carousel.Caption>
                  <h3>K-on</h3>
                  <p>Comedy, Slice of Life</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ require('./components/images/blueperiod.jpg') }
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Blue Period</h3>
                  <p>Drama, Slice of Life</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>

          {/* Personal Suggestions */}
          <div className='suggestion-box'>
          <Row style={{ marginTop: 5 }}>
            <h3>Your Personal Anime Suggestions</h3>
          </Row>
          <Row style={{ marginTop: 30 }}>
            <Col xs={2} md={6} lg={{ span: 4 }} >
              <div className='personalSuggestion'></div>
            </Col>
            <Col xs={12} md={6} lg={{ span: 8 }}>
              <p>Odd Taxi is set in an anthropomorphic animal world and tells the narrative of Odokawa, a 41-year-old walrus taxi driver whose parents abandoned him while he was in elementary school, leaving him socially awkward. However, he generally has chats with various animal occupants while riding in his cab around Tokyo, where the story is set. Odokawa's interactions with these individuals lead to a series of riddles and acts of violence, including the disappearance of a high school student. The police have been following leads back to him as a result of the missing girl case, and both the yakuza and policemen are now on his tail.</p>
              <p><b>Original Run:</b> April 6, 2021 - June 29, 2021</p>
              <p><b>Episodes:</b> 13</p>
            </Col>
          </Row>
          </div>

          {/* Shounen Suggestions */}
          <Row style={{ marginTop: 30 }}>
            <h4>Shounen Suggestions</h4>
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="./components/images/naruto.jpg" />
              </Card>
              <Card>
                <Card.Img variant="top" src="./components/images/naruto.jpg" />
              </Card>
              <Card>
                <Card.Img variant="top" src="./components/images/naruto.jpg" />
              </Card>
              <Card>
                <Card.Img variant="top" src="./components/images/naruto.jpg" />
              </Card>
              <Card>
                <Card.Img variant="top" src="./components/images/naruto.jpg" />
              </Card>
              <Card>
                <Card.Img variant="top" src="./components/images/naruto.jpg" />
              </Card>
              <Card>
                <Card.Img variant="top" src="./components/images/naruto.jpg" />
              </Card>
              <Card>
                <Card.Img variant="top" src="./components/images/naruto.jpg" />
              </Card>
            </CardGroup>
          </Row>

          {/* Shoujo Suggestions */}
          <Row style={{ marginTop: 30 }}>
            <h4>Shoujo Suggestions</h4>
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="./components/images/naruto.jpg" />
              </Card>
              <Card>
                <Card.Img variant="top" src="./components/images/naruto.jpg" />
              </Card>
              <Card>
                <Card.Img variant="top" src="./components/images/naruto.jpg" />
              </Card>
              <Card>
                <Card.Img variant="top" src="./components/images/naruto.jpg" />
              </Card>
              <Card>
                <Card.Img variant="top" src="./components/images/naruto.jpg" />
              </Card>
              <Card>
                <Card.Img variant="top" src="./components/images/naruto.jpg" />
              </Card>
              <Card>
                <Card.Img variant="top" src="./components/images/naruto.jpg" />
              </Card>
              <Card>
                <Card.Img variant="top" src="./components/images/naruto.jpg" />
              </Card>
            </CardGroup>
          </Row>

          {/* Footer */}
          {/* <Row className='footer' style={{ marginTop: 30, span: 12 }}>
            <h8>Designed and Managed by <a className='dogesmirk' href="https://github.com/DogeSmirkers" target="_blank"><i>Team DogeSmirk</i> <img src="./components/images/dogesmirk.jpg" alt="" height="16px" width="auto"/></a></h8>
          </Row> */}
    </Container>
    <div className='footer'>
        <h8>Designed and Managed by <a className='dogesmirk' href="https://github.com/DogeSmirkers" target="_blank"><i>Team DogeSmirk</i> <img src="./components/images/dogesmirk.jpg" alt="" height="16px" width="auto"/></a></h8>
      </div>
    </div>
    </>
  );
}

export default App;