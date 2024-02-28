import React from 'react'
import styles from '../../styles/styles';
import { navItems } from '../../static/data';
import { Link } from 'react-router-dom';

const NavBar = (active) => {
    console.log(active);
  return (
    <div className={`${styles.normalFlex}`}>
        {
           navItems && 
            navItems.map((i,index)=> (
                <div className="flex">
                    <Link to = {i.url} className={`${ active === index + 1 ? "text-[#d6249b]"
                    : "text-[#fff]"
                    } font-[500] px-6 cursor-pointer`}
                    >
                        {i.title}
                    </Link>
                    </div>
            ))
           
        }
      
    </div>
  )
}

export default NavBar
