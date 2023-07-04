import React from "react"; 

class Tavling extends React.Component {
    render () {
        return (<main><script src = "../javascript/javaNSFK.js"></script>
        <div id = "search">
            <input id = "searchInput" type="text" placeholder="Sök efter tävlingar.."/>
            <button className = "fiskekort">Sök</button>
        </div>
        <div id = "tavling">
            <img src = "../images/ismete.jpg" id = "tavlProf" width = "150px"height = "150px"/>
            <div id = "tavlingInfo">
                <h1>Ismetetävling</h1>
                <p>Gädda</p>
                <p><img src = "../images/loc.png" id = "location"/> Norsjön</p>
            </div>
            <div id = "anmäl">
                <a id = "fiskekortA"><button id = "fiskekort" class = "fiskekort" onclick = "addTeams(1)">Anmäl lag</button></a>
                <div class = "popUp">Ditt lag är anmält!</div>
                <p><img src = "../images/prof.png" id = "location"/> <span id = "submittedTeams1">3</span>/12</p>
            </div>
        </div>
        <div id = "tavling">
            <img src = "../images/abborre.jpg" id = "tavlProf" width = "150px"height = "150px"/>
            <div id = "tavlingInfo">
                <h1>Abborretävling Umeå</h1>
                <p>Abborre</p>
                <p><img src = "../images/loc.png" id = "location"/> Norsjön</p>
            </div>
            <div id = "anmal">
                <a id = "fiskekortA"><button className = "fiskekort" onclick = "addTeams(2)">Anmäl lag</button></a>
                <p id = "fullt"><img src = "../images/prof.png" id = "location"/> <span id = "submittedTeams2">5</span>/12</p>
            </div>
        </div>
        <div id = "tavling">
            <img src = "../images/abborre.jpg" id = "tavlProf" width = "150px"height = "150px"/>
            <div id = "tavlingInfo">
                <h1>Abborretävling Umeå</h1>
                <p>Abborre</p>
                <p><img src = "../images/loc.png" id = "location"/> Norsjön</p>
            </div>
            <div id = "anmal">
                <a id = "fiskekortA"><button className = "fiskekort">Anmäl lag</button></a>
                <p id = "fullt"><img src = "../images/prof.png" id = "location"/> 12/12</p>
            </div>
        </div></main>)
    }
}
export default Tavling; 