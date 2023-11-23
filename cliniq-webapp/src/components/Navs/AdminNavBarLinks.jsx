import React from "react";
import { Link } from "react-router-dom";
import {Link as ScrollLink} from 'react-scroll'

function AdminNavBarLinks(props) {
    const cla = "mx-5 text-white text-md md:text-xl hover:border-b-[#3a4343] hover:border-b-4 hover:md:pb-4 hover:pb-2 hover:text-[#3a4343] duration-200"
    const link = props.arr
    return(
        <>
            {link.map((ele) => {
                // Modify the link paths based on your requirements
                if (ele === "Doctors") {
                    return (
                        <ScrollLink
                            key={ele}
                            className={cla}
                            activeClass="active"
                            to="Doctors"
                            spy={true}
                            smooth={true}
                            offset={-20}
                            duration={500}
                        >
                            {ele}
                        </ScrollLink>
                    );
                } else {
                    // Modify the link paths here
                    let path;
                    switch (ele) {
                        case "Dashoard":
                            path = "/dashboard";
                            break;
                        case "Check Appointments":
                            path = "/appointments";
                            break;
                        case "Users":
                            path = "/users";
                            break;
                        default:
                            path = `/${ele.toLowerCase()}`;
                            break;
                    }
                    return (
                        <Link key={ele} className={cla} to={path}>
                            {ele}
                        </Link>
                    );
                }
            })}
        </>
  )
}

export default AdminNavBarLinks