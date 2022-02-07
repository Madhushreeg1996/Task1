import React from 'react';
import logo from '../images/logo.png';
//import styles from '../Styles/front.css';
function Header()
{
    return(
    
    <div><table>
            <tr>
               <td style={{height:"15vmin"}}></td> 
              <td><tr><td></td><td><img className ="logosize" src ={logo} alt ="logo" /></td></tr> </td> 
              <td style={{color:"white", fontSize:"1em", paddingLeft:"1em"}} >Menu</td>
            </tr>
        </table></div> 
    )

}
export default Header;