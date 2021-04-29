import "./App.css";
import profile from "./profile.jpg";
import { faEnvelope, faSmileBeam } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <body>
      <div className="App">
        <div className="position-image">
          <img className="image" src={profile} alt="Profile" height="140px" />
        </div>
        <div className="content">
          <h1 className="title">Hi.</h1>
          <h3 className="Iam">I am Lauriane.</h3>
          <p>
            Holder of a general engineering degree, enthusiastic and persevering
            person, I am recently a self-taught developer.{" "}
            <FontAwesomeIcon icon={faSmileBeam} color="black" />
          </p>
          <p>
            I am looking for an internship as a web developer -{" "}
            <span className="stack">Node.js</span> -{" "}
            <span className="stack">React</span> -
            <span className="stack">Typescript</span>.
          </p>
          <div className="icons">
            <a href="https://github.com/lololau">
              <FontAwesomeIcon icon={faGithub} size="2x" color="black" />
            </a>
            <a href="https://www.linkedin.com/in/lauriane-verhille/">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                color="rgb(0,119,181)"
              />
            </a>
            <a href="mailto:verhille.lauriane@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} size="2x" color="#EA4335" />
            </a>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
