import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Account from './components/Account.js';

import Home from './Pages/Home.js';
import Skills from './Pages/Skills.js';
import Projects from './Pages/Projects.js';
import Resume from './Pages/Resume.js';

const NavBar = styled.div`
  height: 80vh;
  width: 11vw;
  background-color: #ffffff;
  border-radius: 1em;
  padding: 1em;
  margin-right: 1em;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DataArea = styled.div`
  height: 80vh;
  width: 70vw;
  background-color: #ffffff;
  border-radius: 1em;
  padding: 1em;
  margin-left: 1em;
`;

const Profile = styled.div`
  display: block;
  text-align: center;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
`;

const NavigationItem = styled(NavLink).attrs((props) => ({
  exact: true,
}))`
  text-decoration: none;
  color: #000000;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 50vh;
  padding: 1em;

  &:hover {
    background-color: #ccc;
  }

  &[aria-current='page'] {
    color: #ffffff;
    background-color: ${({ theme }) => theme.info};
  }
`;

const Navigation = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
  height: 100%;
  display: flex;
  flex-direction: column;

  ${NavigationItem}:not(:last-child) {
    margin-bottom: 0.5em;
  }
`;

const Accounts = styled.div`
  display: flex;
  flex-direction: column;

  ${Account}:not(:last-child) {
    margin-bottom: 0.5em;
  }
`;

export default function App() {
  return (
    <Router>
      <NavBar>
        <Profile>
          <ProfileImage
            src='https://avatars1.githubusercontent.com/u/37279570?s=60&v=4'
            alt='Jacob Evans'
            height={200}
            width={200}
          />
          <h1>Jacob Evans</h1>
        </Profile>
        <Navigation>
          <NavigationItem to='/'>
            <FontAwesomeIcon icon={['fas', 'home']} size='2x' />
            <h3>Home</h3>
          </NavigationItem>
          <NavigationItem to='/skills'>
            <FontAwesomeIcon icon={['fas', 'list-ul']} size='2x' />
            <h3>Skills</h3>
          </NavigationItem>
          <NavigationItem to='/projects'>
            <FontAwesomeIcon icon={['fas', 'archive']} size='2x' />
            <h3>Projects</h3>
          </NavigationItem>
          <NavigationItem to='/resume'>
            <FontAwesomeIcon icon={['far', 'file-alt']} size='2x' />
            <h3>Resume</h3>
          </NavigationItem>
        </Navigation>
        <Accounts>
          <Account
            icon={<FontAwesomeIcon icon={['fab', 'codepen']} size='2x' />}
            name='Codepen'
            link='https://codepen.io/jwepdx'
          />
          <Account
            icon={<FontAwesomeIcon icon={['fab', 'github']} size='2x' />}
            name='Github'
            link='https://github.com/jwepdx'
          />
          <Account
            icon={<FontAwesomeIcon icon={['far', 'envelope']} size='2x' />}
            name='Email'
            link='mailto:jacobwevanspdx@gmail.com'
          />
        </Accounts>
      </NavBar>
      <DataArea>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/skills' component={Skills} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/resume' component={Resume} />
          <Route path='*' render={() => <Redirect to='/' />} />
        </Switch>
      </DataArea>
    </Router>
  );
}
