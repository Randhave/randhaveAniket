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
            <Route path='' component={Home} />
            <Route path='/' component={Home} />
            <Route exact path='randhaveAniket/home' component={Home} />
            <Route exact path='randhaveAniket/service' component={Services} />
            <Route exact path='randhaveAniket/skill' component={Skill} />
            <Route exact path='randhaveAniket/about' component={About} />
            <Route exact path='randhaveAniket/contact' component={Contacts} />
            {/* <Route exact path='/footer' component={Footer} /> */}
            <Route exact path='randhaveAniket/work' component={Work} />
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

