import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import theme from './ui/Theme.js';
import Header from './ui/Header';
import LandingPage from './LandingPage';

import Footer from './ui/Footer';
import Services from './Services.js';
import Software from './CustomSoftware.js';
import MobileApp from './MobileApp.js';
import Website from './Website..js';
import Revolution from './Revolution.js';
import About from './About.js';
import Contact from './Contact.js';
import Estimate from './Esitmate.js';

function App() {
  // usestate for tabs
  const [value, setValue] = useState(0);

  // track menu item
  const [selectIndex, setSelectIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectIndex={selectIndex}
          setSelectIndex={setSelectIndex}
        />
        <Switch>
          <Route
            exact
            path='/'
            component={() => (
              <LandingPage
                setValue={setValue}
                setSelectIndex={setSelectIndex}
              />
            )}
          />

          <Route
            path='/services'
            component={() => (
              <Services setValue={setValue} setSelectIndex={setSelectIndex} />
            )}
          />
          <Route
            path='/customsoftware'
            component={() => (
              <Software setValue={setValue} setSelectIndex={setSelectIndex} />
            )}
          />
          <Route
            path='/mobileapps'
            component={() => (
              <MobileApp setValue={setValue} setSelectIndex={setSelectIndex} />
            )}
          />
          <Route
            path='/websites'
            component={() => (
              <Website setValue={setValue} setSelectIndex={setSelectIndex} />
            )}
          />
          <Route
            path='/revolution'
            component={() => <Revolution setValue={setValue} />}
          />
          <Route
            path='/about'
            component={() => <About setValue={setValue} />}
          />
          <Route
            path='/contact'
            component={() => <Contact setValue={setValue} />}
          />
          <Route
            path='/estimate'
            component={() => <Estimate setValue={setValue} />}
          />
        </Switch>
        <Footer setValue={setValue} setSelectIndex={setSelectIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

// render={(props) => (
//   <LandingPage
//     {...props}
//     setValue={setValue}
//     setSelectIndex={setSelectIndex}
//   />
// )}
