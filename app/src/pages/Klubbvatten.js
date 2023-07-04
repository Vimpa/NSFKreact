import React from "react"; 

class Klubbvatten extends React.Component {
    render () {
        return (
            <main> 
        <div id = "klubbv">
            <div id = "flugfiske">
                <h1>Flugfiske</h1>
                <div id = "cirkel">
                    <div id = "content">
                        <a class="hacke" id = "rubrik2">Hackestjärnen</a> 
                        <a class="sten" id = "rubrik">Stenträsket</a>
                    </div>
                    <div id = "content">
                        <a class="malan" id = "rubrik2">Malån</a>  
                        <a class="brun" id = "rubrik">Brunträsken</a> 
                    </div>
                </div> 
            </div>
            <div id = "sjoar">
                <h1>Spinnfiske</h1>
                <div id = "cirkel2">
                    <div id = "content">
                        <a class="bjarn" id = "rubrik">Bjärnstavatjärn</a>
                    </div>
                    <div id = "content">
                        <a class="katt" id = "rubrik">Kattöggeltjärn</a> 
                    </div>
                </div> 
            </div>
        </div>
        </main>
        )
    }
}
export default Klubbvatten; 