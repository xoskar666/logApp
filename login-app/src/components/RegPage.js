import "../styles/loginPage.css";
import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import axios from 'axios';
import { setUserSession } from '../utils/session';
import Unauthorize from './Unauthorize'

export default function RegPage() {
  const [imie, setImie] = useState('')
  const [nazwisko, setNazwisko] = useState('')
  const [login, setLogin] = useState('')
  const [pwd, setPwd] = useState('')
  const [showModal, setShowModal] = useState(false);
  

  const handleUtworz = () => {
    axios.post(`http://localhost:4000/register`, { imie: imie, nazwisko: nazwisko, login: login, pwd: pwd}).then(response => {
    window.location = location.href;
    setShowModal(true);
    });
  }

  return (
    <div className="app-main">
      <div className="shadow"></div>
      <div className="app-vertical-center container">
        <div className="login-main col-10 col-sm-8 col-md-8 col-lg-4">
          <div className="login-title">
            <h3>Utworz darmowe konto!</h3>
          </div>
          <div className="login-content">
            <form className="login-form">
              <Form.Control
                type="text"
                className="form-control"
                placeholder="Imie"
                style={{ }}
                onChange={(e) => setImie(e.target.value)}
              />
              <Form.Control
                type="text"
                className="form-control"
                placeholder="Nazwisko"
                style={{ marginTop: "5px" }}
                onChange={(e) => setNazwisko(e.target.value)}
              />
              <Form.Control
                type="text"
                className="form-control"
                placeholder="Login"
                style={{ marginTop: "5px" }}
                onChange={(e) => setLogin(e.target.value)}
              />
              <Form.Control
                type="password"
                className="form-control"
                placeholder="Hasło"
                onChange={(e) => setPwd(e.target.value)}
                style={{ marginTop: "5px" }}
              />
              <Button className="w-10" style={{ marginTop: "20px" }} onClick={handleUtworz}>
                Utworz konto
              </Button>

            </form>
            {showModal && <h1>Pomyślna rejestracja</h1>}
          </div>
        </div>
      </div>
    </div>
  );
}