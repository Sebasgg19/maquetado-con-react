import React from "react";
import Header from "../../components/Header";
import { Button } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import padlock from "../../assets/others/padlock.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Login() {
  return (
    <div className="col-xs">
      <Header />
      <div className="col-auto  d-flex justify-content-center align-items-center mainform_login">
        <form action="" className="form">
          <div className="col-12 p-5 text-center">
            <img src={padlock} alt="padlockIcon" />
            <h1 className='h1form_login'>Ingresar</h1>
          </div>
          <div className="form-group col-lg">
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="Correo Electrónico"
            />
          </div>
          <div className="form-group col-lg">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Contraseña"
            />
          </div>
          <div className="text-center">
                    <div className="col-lg">
                    <Button 
                    variant="contained" 
                    className="btnstart_login" 
                    color="secondary" 
                    type="submit"
                    >
                    Comenzar a crear playlists
                    </Button>
                    </div>
                </div>
                <div className="my-5 text-center">
                    <a href='#' className='passforget_login'>¿Has olvidado la contraseña?</a>
                </div>
                <hr/>
                <div className="col-12 my-5 text-center">
                    <p>¿No tienes cuenta?</p>
                    <Button className='registerbtn_login' selected style={{
                        color: "#009688",
                    }} 
                    variant="outlined" 
                    type="submit">
                    REGISTRATE
                    </Button>
                </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
