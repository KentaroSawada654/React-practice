import React from "react"; //reactというライブラリからreactを読み込む
import ReactDom from "react-dom"; //reactDomというライブラリからreactDomを読み込む。でDOMを扱うために
import App from "./App.jsx";

//ReactDomのrender関数を使い、画面に反映
ReactDom.render(<App />, document.getElementById("root"));
