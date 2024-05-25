let zak = 'Zak Ruv';
let jes = 'Jessica Carter';
let frank = 'Frank Linsonton';
let robin = 'Robin Yewblund';
let erin = 'Erin Wabash';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '18px'
  }
}, /*#__PURE__*/React.createElement("li", null, zak), /*#__PURE__*/React.createElement("li", null, jes), /*#__PURE__*/React.createElement("li", null, robin), /*#__PURE__*/React.createElement("li", null, erin), /*#__PURE__*/React.createElement("li", null, frank.toLocaleUpperCase()));
ReactDOM.render(element, document.getElementById('content'));