import React,{useEffect,useState} from "react";
import { loadScript } from "./utility/LoadScripts";

function handleChange(e,state,setState) {
    setState({
        ...state,
        [e.target.name]:e.target.value
    });
}

function Login(props) {
    let [state,setState]=useState({
        renderRecaptcha:true,
        email:'',
        password:''
    });

    function handleSubmit(token) {
        console.log({token,state});
    }
    
    try{
        useEffect(()=>{
            function getToken(token) {
                handleSubmit(token);
                window.grecaptcha.reset();
            }

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
        <form method="post">
            <label htmlFor="email">Email</label><br/><input type="email" name="email" id="email" value={state.email} onChange={e=>handleChange(e,state,setState)} /><br/>
            <label htmlFor="password">password</label><br/><input type="password" name="password" id="password" value={state.password} onChange={e=>handleChange(e,state,setState)} /><br/>
            <input type="button" value="Sign In" onClick={e=>{
                e.preventDefault();
                window.grecaptcha.execute();
            }} />
            <div id="recaptcha_div"></div>
            <div id="box_script"></div>
        </form>
    );
}

export default Login;