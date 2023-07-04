import React from "react"; 

class Blimedlem extends React.Component {
    render () {
        return (<main>
            <div id = "search">
        <form id = "loggainDiv">
            <h1>Logga in</h1>
            <input id = "searchInput" type="text" placeholder="Mailadress"/><br/>
            <input id = "searchInput" type="text" placeholder="Lösenord"/><br/>
            <button id = "fiskekort">Logga&nbsp;in</button><br/><br/>
            <a href = "#sign" id = "registrera">Inte medlem? Registrera dig här!</a>
        </form>
        <form id = "blimedlemDiv">
            <h1 id = "sign">Bli medlem</h1>
            <input id = "searchInput" type="text" placeholder="Namn & efternam.."/>
            <input id = "searchInput" type="text" placeholder="Mailadress"/><br/>
            <input id = "searchInput" type="text" placeholder="Lösenord"/>
            <input id = "searchInput" type="text" placeholder="Adress.."/><br/>
            <input id = "searchInput" type="text" placeholder="Postkod.."/>
            <input id = "searchInput" type="text" placeholder="Ort.."/><br/>
            <input id = "searchInput" type="text" placeholder="Telefonnummer.."/>
            <input type = "checkbox"/><br/>
            <button id = "fiskekort">Registrera&nbsp;dig</button>
        </form>
    </div></main>)
    }
}
export default Blimedlem; 