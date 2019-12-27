import React, { Component } from 'react';

function getAMap(src) {
  // var isLoaded = true
  return new Promise(function (resolve, reject) {
    // if (isLoaded) {
    //   window.AMap.plugin(['AMap.MouseTool', 'AMap.PolyEditor'], () => {
    //     resolve(window.AMap)
    //   })
    //   return
    // }

    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.src = src;
    // script.onload = resolve
    script.onerror = reject
    script.onload = function () {
      // isLoaded = true
      resolve()
    }
    document.head.appendChild(script)
  })
}

class App extends Component {
  async componentDidMount() {
    getAMap('http://im.uat1.rs.com/v2/static/js/index.js').then((res) => {
      new window.RSWebIM(document.getElementById("im-root")).start();
    });
  }

  render() {
    return (
      <div id="im-root" ref={(node) => { this.imContainer = node; }}></div>
    );
  }
}

export default App;
