import {NavLink, Outlet } from "react-router-dom"

export const Layout = () =>{
    return <>
    <header>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/search'>Search</NavLink></li>
            <li><NavLink to='/gallery'>Gallery</NavLink></li>
        </ul>
    </header>
    <main>
    <Outlet/>
    </main>
    <footer>

    </footer>
    </>
}