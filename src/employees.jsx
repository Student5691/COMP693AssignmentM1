let zak = 'Zak Ruv'
let jes = 'Jessica Carter'
let frank = 'Frank Linsonton'
let robin = 'Robin Yewblund'
let erin = 'Erin Wabash'
const element = (
    <ul style={{'color': 'blue', 'fontSize': '18px'}}>
        <li>{zak}</li>
        <li>{jes}</li>
        <li>{robin}</li>
        <li>{erin}</li>
        <li>{frank.toLocaleUpperCase()}</li>
    </ul>
)
ReactDOM.render(element, document.getElementById('content'))