import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom';
import intl from 'react-intl-universal';
import _ from "lodash";
import http from "axios";

import Info from "./Info";
import './App.css';

const SUPPOER_LOCALES = [
  {
    name: "English",
    value: "en-US"
  },
  {
    name: "简体中文",
    value: "zh-CN"
  }
];

class App extends Component {
  state = {initDone: false}

  componentDidMount() {
    this.loadLocales();
  }

  loadLocales() {
    let currentLocale = intl.determineLocale({
      urlLocaleKey: "lang",
      cookieLocaleKey: "lang"
    });
    if (!_.find(SUPPOER_LOCALES, { value: currentLocale })) {
      currentLocale = "en-US";
    }
    console.log(currentLocale)
    http
      .get(`locales/${currentLocale}.json`)
      .then(res => {
        console.log("App locale data", res.data);
        // init method will load CLDR locale data according to currentLocale
        return intl.init({
          currentLocale,
          locales: {
            [currentLocale]: res.data
          }
        });
      })
      .then(() => {
        // After loading CLDR locale data, start to render
        this.setState({ initDone: true });
      });
  }

  render() {
    return (
      this.state.initDone &&
      <HashRouter>
        <div className="App">
          <Header/>
            <Info
              // text={this.state.text}
              // onChange={this.onChange}
            />
          <Bottom/>
        </div>
      </HashRouter>
    );
  }
}

const Header = () => {
  return (
    <header className="App-header">
      {/*<img src={logo} className="App-logo" alt="logo" />*/}
      <h1 className="App-title">{intl.get("APP_TITLE")}</h1>
    </header>
  )
}

const Bottom = () => {
  return (
    <p className="App-intro" style={{marginTop:"3em"}}>
      {intl.getHTML("BOTTOM_INFO")}
    </p>
  )
}

export default App;
