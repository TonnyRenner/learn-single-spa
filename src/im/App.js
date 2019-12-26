import React from 'react';

function getAMap() {
  var isLoaded = true
  return new Promise(function (resolve, reject) {
    if (isLoaded) {
      window.AMap.plugin(['AMap.MouseTool', 'AMap.PolyEditor'], () => {
        resolve(window.AMap)
      })
      return
    }

    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.src = 'http://webapi.amap.com/maps?v=1.4.3&key=key&callback=$$$maptcinit&plugin=AMap.MouseTool'
    // script.onload = resolve
    script.onerror = reject
    script.onload = function () {
      isLoaded = true
      resolve(window.AMap)
    }
    document.head.appendChild(script)
  })
}

class App extends React.PureComponent {
  state = {
    jsLoaded: false
  }

  async componentDidMount() {
    await getAMap('http://im.uat1.rs.com/v2/static/js/index.js').then(() => {
      this.state({
        jsLoaded: true
      });
      new window.RSWebIM(this.imContainer).start();
    });
  }

  render() {
    return (
      <div id="im-box" ref={(node) => { this.imContainer = node; }}></div>
    );
  }
}

export default App;