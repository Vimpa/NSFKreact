import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer>
        <div class = "footerText">
            Kontakta oss <br/>
            Om klubben <br/><br/>
            Senast uppdaterad 2023-01-30
            <br/>
            <a href = "https://www.norsjosfk.se/">klubbens nuvarande webbplats</a>
        </div>
        <div class = "footerImg">
            <img src = "../images/insta.png" class = "footerIcon" alt = "insta"/>
            <img src = "../images/info.png" class = "footerIcon" alt = "info"/>
        </div>
    </footer>
        ); 
    }

}

export default Footer; 