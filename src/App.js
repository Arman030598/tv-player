import Login from './pages/login/Login'
import './App.css';
import Container from "./layout/container/Container";
import {Route,BrowserRouter,Switch} from 'react-router-dom'
import ChannelList from "./pages/channel-list/ChannelList";
import Player from "./pages/player/Player";

function App() {
  return (
      <BrowserRouter>
      
        <div className="App">
            <Switch>
                <Route exact path={"/"}>
                    <Container>
                        <Login/>
                    </Container>
                </Route>
                <Route path={"/channel-list"}>
                    <Container>
                        <ChannelList/>
                    </Container>
                </Route>
                <Route path={"/player-component"}>
                    <Container>
                        <Player/>
                    </Container>
                </Route>
            </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
