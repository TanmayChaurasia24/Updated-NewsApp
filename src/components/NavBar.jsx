import React, { Component } from 'react'
import { Link } from "react-router-dom";
export class NavBar extends Component {
    render() {
        const {mode,Togglemode} = this.props;
        return (
            <div>
                <nav className={`navbar navbar-expand-lg navbar-${mode==='light'?'light':'dark'} bg-${mode==='light'?'light':'dark'}`}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Updated</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item"><Link className="nav-link " to="/business">Business</Link></li>
                                <li className="nav-item"><Link className="nav-link " to="/entertainment">Entertainment</Link></li>
                                <li className="nav-item"><Link className="nav-link " to="/general">General</Link></li>
                                <li className="nav-item"><Link className="nav-link " to="/health">Health</Link></li>
                                <li className="nav-item"><Link className="nav-link " to="/science">Science</Link></li>
                                <li className="nav-item"><Link className="nav-link " to="/sports">Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link " to="/technology">Technology</Link></li>.
                            </ul>
                        </div>
                        <div className="form-check form-switch d-flex align-items-center" style={{marginRight: 20}}>
                        <input className="form-check-input mx-3" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={Togglemode}/>
                        <label className={`form-check-label text-${mode==='dark'?'light':'dark'}`} htmlFor="flexSwitchCheckDefault">{mode==='dark'?'Light Mode':'Dark Mode'}</label>
                    </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar
