import React from "react";
import "./Style.css"
function Footer () {
    return(
       <div className="">
        <div>
            <footer className="footer">
                <div className="inner-footer">
                 
                    <div className="quick-link">
                        <ul>
                            <li className="quick-item"><a href="">About us</a></li>
                            <li className="quick-item"><a href="">Services</a></li>
                            <li className="quick-item"><a href="">Contact us</a></li>
                            <li className="quick-item"><a href="">Tutorial</a></li>
                        </ul>
                    </div>
                </div>
                <div className="outer-footer">
                     <p>Copyright &copy; web coding pro. All Right Reserved</p>
                </div>
            </footer>
        </div>
       </div>
    )
}
export default Footer; 