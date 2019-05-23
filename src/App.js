import React, { Component } from 'react';

import './style.css';

class App extends Component {
  state = {
    count: 1,
    layout: 'vertical-layout',
  };

  addVideo() {
    const element = document.querySelector('.col-participants');
    const video = document.createElement('div');
    video.setAttribute('id', 'subscriber');
    video.setAttribute('class', 'video');
    video.appendChild(document.createTextNode('video'));
    element.appendChild(video);

    this.setState({ count: element.childElementCount });
  }

  removeVideo() {
    const element = document.getElementById('subscriber');
    if (element) element.parentNode.removeChild(element);

    this.setState({
      count: document.querySelector('.col-participants').childElementCount,
    });
  }

  setLayout(layout) {
    this.setState({ layout });
  }

  render() {
    const { count, layout } = this.state;

    return (
      <React.Fragment>
        <div id="banner" />

        <div id="box-player" className={count > 4 ? 'col-reverse' : ''}>
          <div className={`col-participants ${layout}`}>
            <div id="publisher" className="video">
              Publisher
            </div>
          </div>
          <div
            id="col-presentation"
            className={layout == 'camera-presentation' ? 'start' : ''}
          >
            <div id="presentation">Presentation</div>
          </div>
        </div>

        <div id="control">
          <a onClick={() => this.addVideo()}>+ Video</a>
          <a onClick={() => this.removeVideo()}>- Video</a>
          <a onClick={() => this.setLayout('vertical-layout')}>vertical</a>
          <a onClick={() => this.setLayout('horizontal-layout')}>horizontal</a>
          <a onClick={() => this.setLayout('side-by-side')}>side-by-side</a>
          <a onClick={() => this.setLayout('camera-presentation')}>
            presentation
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
