import React,{useEffect, useState} from "react";
import { loadScript } from "./utility/LoadScripts";

function getToken(token) {
    console.log(token);
}

function Home(props) {
    let [state,setState]=useState({
        renderRecaptcha:true
    });
    try{
        useEffect(()=>{
            if(state.renderRecaptcha){
                window.onloadRecaptcha=()=>{
                    window.grecaptcha.render('recaptcha_div', {
                        'sitekey' : process.env.REACT_APP_SITE_KEY,
                        'callback' : getToken,
                        'size':'invisible'
                        });
                }
                loadScript();
                setState({
                    ...state,
                    renderRecaptcha:false
                });
            }
        },[state,setState]);
    }catch(err){
        console.log(err);
    }
    return (
        <div className="">
            <h1>Home Page.</h1>
            <div id="recaptcha_div"></div>
            <div id="box_script"></div>
        </div>
    );
}

export default Home;