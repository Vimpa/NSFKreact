import React from "react"; 

class Home extends React.Component {
    render() {
        return (
        <main>
        <div className = "background">
            <header className = "rubriken">Norsjö sportfiskeklubb</header>
            <p>Välkommen till Norsjö sportfiskeklubbs hem på nätet!</p>
            <div id = "draggable">Drag me around</div>
        </div>
        <div className = "nyheter">
            <div className = "nyhet" id = "nyhet" onmouseover = "hoverNyheter()" onmouseout="hoverOutNyheter()">
                <div className = "datum">30 jan</div>
                <a><img src = "../images/nyhet1.png" className = "nyhet1" alt = "nyhet1"/></a>
                <p className = "title">Säsongsstart flugfiske</p>
                <p><img src = "../images/loc.png" className = "location" alt = "location1"/>Malån, Skeppträskån</p>
                <img src = "../images/pilH.png" className = "pilH" alt = "pil"/>
                <img src = "../images/pilV.png" className = "pilV" alt = "pil"/>
            </div>
    
            <div className = "nyhet" id = "nyhet" onmouseover = "hoverNyheter()" onmouseout="hoverOutNyheter()">
                <div className = "datum">3 feb</div>
                <a><img src = "../images/nyhet2.png" className = "nyhet2" alt = "nyhet2"/></a>
                <p className = "title">Bild 3</p>
                <p><img src = "../images/loc.png" className = "location" alt = "location2"/>Klubblokalen - Norsjö</p>
            </div> 
        </div>
        <div className = "content">
            <div className = "content1">
                <div className = "text">
                    <h1 className = "del">Våra vatten</h1>
                    <hr/>
                    <p className = "del">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Suspendisse a tortor a urna mollis pellentesque. 
                        Morbi condimentum libero ut elit blandit, eget vulputate libero hendrerit.<br/><br/> 
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    
                        Phasellus varius viverra neque et hendrerit.Aliquam urna eros, accumsan et lacinia et, mollis vel est. Proin et ullamcorper erat. <br/><br/>Fusce et metus porttitor, lacinia tellus in, venenatis felis. Suspendisse maximus lobortis lectus, sit amet rutrum lacus consequat gravida. 
                        
                        Ut interdum nunc sit amet interdum semper. Praesent at aliquam massa. Aenean tristique augue sit amet leo tristique, vel cursus lacus sodales. Vivamus gravida massa erat, ac finibus ante tincidunt className.
                    </p>
                </div>
                <div className = "image">
                    <p className = "hidden">Våra vatten</p>
                    <img src = "../images/malan.png" className = "del" alt = "malan"/>
                </div>
            </div>
            <div className = "content1">
                <div className = "image">
                    <p className = "hidden">Shop</p>
                    <img src = "../images/shopp.jpg" className = "del" alt = "shop"/>
                </div>
                <div className = "text">
                    <h1 className = "del">Shop</h1>
                    <hr/>
                    <p className = "del">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Suspendisse a tortor a urna mollis pellentesque. 
                        Morbi condimentum libero ut elit blandit, eget vulputate libero hendrerit.<br/><br/> 
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    
                        Phasellus varius viverra neque et hendrerit.Aliquam urna eros, accumsan et lacinia et, mollis vel est. Proin et ullamcorper erat. <br/><br/>Fusce et metus porttitor, lacinia tellus in, venenatis felis. Suspendisse maximus lobortis lectus, sit amet rutrum lacus consequat gravida. 
                        
                        Ut interdum nunc sit amet interdum semper. Praesent at aliquam massa. Aenean tristique augue sit amet leo tristique, vel cursus lacus sodales. Vivamus gravida massa erat, ac finibus ante tincidunt className.
                    </p>
                </div>
            </div>
            <div className = "content1">
                <div className = "text">
                    <h1 className = "del">Tävlingar</h1>
                    <hr/>
                    <p className = "del">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Suspendisse a tortor a urna mollis pellentesque. 
                        Morbi condimentum libero ut elit blandit, eget vulputate libero hendrerit.<br/><br/> 
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    
                        Phasellus varius viverra neque et hendrerit.Aliquam urna eros, accumsan et lacinia et, mollis vel est. 
                        Proin et ullamcorper erat. <br/><br/>Fusce et metus porttitor, lacinia tellus in, venenatis felis. 
                        Suspendisse maximus lobortis lectus, sit amet rutrum lacus consequat gravida. 
                        
                        Ut interdum nunc sit amet interdum semper. Praesent at aliquam massa. 
                        Aenean tristique augue sit amet leo tristique, vel cursus lacus sodales. Vivamus gravida massa erat, 
                        ac finibus ante tincidunt className.
                        </p>
                </div>
                <div className = "image">
                    <p className = "hidden">Tävlingar</p>
                    <img src = "../images/tavl.jpeg" className = "del" alt = "tavling"/>
                </div>
            </div>
        </div>
        <video controls>
            <source src="../images/fiske.mp4" type="video/mp4"/>
        </video>; 
        </main>
        ); 
    }
}
export default Home; 