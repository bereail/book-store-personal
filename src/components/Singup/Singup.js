import React, { useContext, useRef, useState } from "react";

import "./Singup.css";
import { useNavigate } from "react-router";
import { useAuth } from "../services/authentication/authentication.context";
import ToggleTheme from "../ui/ToggleTheme";
import { ThemeContext } from "../services/theme/theme.context";
import ComboLanguage from "../ui/ComboLanguage/ComboLanguage";
import useTranslation from "../custom/useTranslation/useTranslation";

const Singup = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rol: "user",
    });

    const { signup } = useAuth();
    const { theme } = useContext(ThemeContext);
    const navigation = useNavigate();
    const translate = useTranslation();
    const [error, setError] = useState("");

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const alertSignup = (valueAlert) => {
        valueAlert.current.focus();
        valueAlert.current.style.borderColor = "red";
        valueAlert.current.style.outline = "none";
    }

    const registerOnClick = () => {
        if (emailRef.current.value.length === 0) {
            alertSignup(emailRef);
            return;
        }
        if (passwordRef.current.value.length === 0) {
            alertSignup(passwordRef);
            return;
        }
    }

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setError("");
        const { email, password } = formData;

        if (!email || !password) {
            alert(translate("errorComplete"));
            return;
        }

        try {
            await signup(formData.email, formData.password, formData.rol);
            navigation("/registered");
        } catch (error) {
            console.log(error.code);
            if (error.code === "auth/internal-error") {
                setError(translate("errorEmail"));
            } else if (error.code === "auth/weak-password"){
                setError(translate("errorPassword"));
            } else if (error.code === "auth/email-already-in-use" ){
                setError(translate("errorRegisted"));
            }
        }

        setFormData({
            email: "",
            password: "",
        });
    }

    const goToLogin = () => {
        navigation("/login");
    }

    return (
        <div className="signup-container">
            <div className={`signup-box ${theme === "dark" && "signup-box-dark"}`}>
                <ComboLanguage />
                <h4 className={`${formData.email.length === 0 && "red-text"}`}>
                    {translate("register")}
                </h4>
                <form onSubmit={handleSignup}>
                    <div className="input-container">
                        <div className="input-container">
                            <input
                                className="input-control"
                                placeholder="Email"
                                type="email"
                                onChange={onChange}
                                required
                                name="email"
                                value={formData.email}
                                ref={emailRef}
                            />
                        </div>
                        <div className="input-container">
                            <input
                                className="input-control"
                                placeholder={translate("password")}
                                type="password"
                                name="password"
                                value={formData.password}
                                ref={passwordRef}
                                onChange={onChange}
                            />
                        </div>
                        <div className="input-container">
                            <select name="rol">
                                <option value="user">{translate("student")}</option>
                                <option value="admin">{translate("admin")}</option>
                            </select>
                        </div>
                        <button onClick={registerOnClick} className="signin-button" type="submit">
                            {translate("signup")}
                        </button>
                        <p>
                            {translate("account")} <button className="signin-button" onClick={goToLogin}>Login</button>
                        </p>
                        <ToggleTheme />
                    </div>
                </form>
                {error && <p>{error}</p>}
            </div>
        </div>
    );
}

export default Singup;