import "semantic-ui-css/semantic.min.css";

import { Switch, Route } from "react-router-dom";
import DashbordUser from "./Components/Dashbord/DashbordUser";
import DashbordVet from "./Components/Dashbord/DashbordVet";

import PrivateRoute from "./Components/router/PrivateRoute";
import Edit from "./Components/editProfileVet";
import Home from "./home";
import Profile from "./Components/Profile";
import Forum from "./Components/Forum";
import "./App.css";
import CreatePostVet from "./Components/createPostVet";
import MyPosts from "./Components/Myposts";
import AllPub from "./Components/allPubs";
import CreatePubVet from "./Components/createPub";
import MyPub from "./Components/myPub";
import EditPubVet from "./Components/editpubvet";
import "./App.css";
import ForumPage from "./Components/pages/forum";
import Portfolio from "./Components/pages/Portfolio";
import SignInVet from "./Components/Sign/SignInVet";
import SignUpVet from "./Components/Sign/SignUpVet";
import SignUpUser from "./Components/Sign/SignUpUser";
import SignInUser from "./Components/Sign/SignInUser";
import Footer from "./Components/pages/Footer";
import NavbarHome from "./Components/navabar/navbarHome";
function App() {
  return (
    <div className="App">
      <NavbarHome />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/allpub" component={AllPub} />
        <Route path="/edit/:id" render={(props) => <Edit />} />
        <Route path="/post/createpostvet" component={CreatePostVet} />
        <Route path="/createpub" component={CreatePubVet} />
        <Route path="/mypub" component={MyPub} />
        <Route path="/editpub/:id" component={EditPubVet} />
        <Route path="/allposts" render={(props) => <Forum check={true} />} />
        <Route path="/mypost" render={(props) => <MyPosts check={false} />} />
        <Route path="/post/createpostuser" component={CreatePostVet} />
        <PrivateRoute path="/dashbordUser" component={DashbordUser} />
        <PrivateRoute path="/dashbordVet" component={DashbordVet} />
        <Route path="/forumpage" component={ForumPage} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/sign-up-veterinaire" component={SignUpVet} />
        <Route path="/sign-in-veterinaire" component={SignInVet} />
        <Route path="/sign-up-user" component={SignUpUser} />
        <Route path="/sign-in-user" component={SignInUser} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
