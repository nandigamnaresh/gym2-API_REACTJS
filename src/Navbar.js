import React from 'react';
import { Link } from 'react-router-dom';








function Navbar({ part, lim }) {

    const chinna = (e) => {
        part(e.target.value)
    }



    const chinna1 = (e) => {
        lim(e.target.value)
    }






    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light  p-3" style={{ backgroundColor: "#B1C9EF" }}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">


                            <li class="nav-item">
                                <Link to='/' class="nav-link active ms-3"  >BODYPARTS</Link>
                            </li>

                            <li class="nav-item">
                                <Link to='/b-list' class="nav-link active ms-3" >BODYPARTS-LISTS</Link>
                            </li>

                            <li class="nav-item">
                                <Link to='/e-list' class="nav-link active ms-3" >EQUIPMENT-LISTS</Link>
                            </li>

                            <li class="nav-item">
                                <Link to='/t-list' class="nav-link active ms-3" >TARGET-LISTS</Link>
                            </li>

                            <li class="nav-item">
                                <Link to='/exer' class="nav-link active ms-3" >EXERCISES</Link>
                            </li>


                        </ul>


                        <form class="d-flex">
                            <input class="form-control me-2" type="number" placeholder="Search Limit" aria-label="Search" onChange={chinna1} />
                            <input class="form-control me-2" type="search" placeholder="Search Part" aria-label="Search" onChange={chinna} />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar