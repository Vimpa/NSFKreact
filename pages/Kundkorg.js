import React from "react"; 

class Kundkorg extends React.Component {
    render () {
        return (<main>
          <h1 className = "kundkorg">Kundkorg</h1>
          <table>
            <tr>
              <th>Varor</th>
              <th>Antal</th>
              <th>Rea</th>
              <th>Pris</th>
            </tr>
            <tr>
              <td>Abu Garcia haspelrulle</td>
              <td>1</td>
              <td>-15%</td>
              <td>399 kr</td>
            </tr>
            <tr>
                <td>Abu Garcia multirulle</td>
                <td>2</td>
                <td>-10%</td>
                <td>699 kr</td>
            </tr>
            <tr>
                <td>13 Fishing Fiskelina</td>
                <td>1</td>
                <td></td>
                <td>199 kr</td>
            </tr>  
            <tr>
                <td>Fiskespö jerk</td>
                <td>1</td>
                <td>-5%</td>
                <td>899 kr</td>
            </tr>    
          </table></main>)
    }
}
export default Kundkorg; 