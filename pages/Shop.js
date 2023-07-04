import React from "react"; 

class Shop extends React.Component {
    render () {
        return (<main><div id = "sortering">
        <p><img src = "../images/sort.png" id = "sort" width="15px" height = "15px"/> Sortera&nbsp;efter: populära </p>
    </div>
    <div id = "shop">
    <li id = "left">
        <ul><a>Kastspön</a></ul>
        <ul>Metspön</ul>
        <ul>Rullar</ul>
        <ul>Klubbartiklar</ul>
        <ul>Fiskelina</ul>
        <ul>Övrigt</ul>
    </li>
    <div id = "right">
        <div class = "shopImage">
            <div class = "shoptext">
                <h1 class = "rubrik">Fiskespö</h1>
                <p class = "pris">199 kr</p>
            </div>
            <p class = "tillagd">Tillagd i varukorgen!</p>
            <button class = "kop">Köp</button>
        </div>
        <div class = "shopImage">
            <div class = "shoptext">
                <h1 class = "rubrik">multirulle</h1>
                <p class = "pris">199 kr</p>
            </div>
            <p class = "tillagd">Tillagd i varukorgen!</p>
            <button class = "kop">Köp</button>
        </div>
        <div class = "shopImage">
            <div class = "shoptext">
                <h1 class = "rubrik">Fiskelina</h1>
                <p class = "pris">199 kr</p>
            </div>
            <p class = "tillagd">Tillagd i varukorgen!</p>
            <button class = "kop">Köp</button>
        </div>
        
    </div>
    </div></main>)
    }
}
export default Shop; 