import React from 'react'
import About from './Components/about/About'
import Contacts from './Components/contact/Contacts'
import Skill from './Components/skills/Skill'
import Footer from './Components/footer/Footer'
import Navbar from './Components/navbar/Navbar'
import Home from './Components/home/Home'
import Services from './Components/services/Services'
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css'
import Work from './Components/work/Work'
import TemplateProvider from './templates/TemplateProvider'

const App = () => {

  return (
    <>
      <div className='App'>
        <TemplateProvider>
          <Navbar />

          <Switch>
            <Route  path='' component={Home} />
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/service' component={Services} />
            <Route exact path='/skill' component={Skill} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contacts} />
            {/* <Route exact path='/footer' component={Footer} /> */}
            <Route exact path='/work' component={Work} />
            <Route path="/*">
              <Redirect to="/" />
            </Route>
          </Switch>

        </TemplateProvider>

      </div>
    </>
  )
}

export default App

