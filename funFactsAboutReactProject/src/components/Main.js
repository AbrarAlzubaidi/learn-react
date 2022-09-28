import React from "react";
import Header from "./Header";
import List from './List';
function Main(props){
    return (
        <main className={props.lightMode ? "light" : ""}>
            <Header />
            <List />
        </main>
    )
}
export default Main