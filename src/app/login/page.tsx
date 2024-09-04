"use client"
import TextField from "../components/form/TextField";
import { Footer } from "../components/navigation/Footer";
import { NavBar } from "../components/navigation/NavBar";


export const LoginPage = () => {
    return <>
        <header><NavBar variant={"primary"} /></header>
        <label className="focus:text-9xl focus-within:label" onFocus={(e) => { console.log("asdlkajskldjasl") }}>
            zxcznbxmczbn
            <input type="text" />
        </label>
        <div className="flex justify-center items-center mx-auto">
            <TextField type="password"></TextField>
        </div>

        <Footer variant="primary" />
    </>
}

export default LoginPage;   