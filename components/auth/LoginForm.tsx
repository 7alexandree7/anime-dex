"use client";

import { useState } from "react"


export const LoginForm = () => {

    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ email, password });
    }


    return (
        <></>
    )
}