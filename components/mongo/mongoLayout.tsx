'use client'

import { useContext, useEffect, useState } from "react";
import Loading from "@/app/loading";
import { MongoFrame } from "./mongoFrame";
import { ErrorMSG } from "../error/Error";
import { Container, Title } from "./styles";
import { AuthContext } from "../contexts/authContext";
import { api } from "@/lib/api";


export type ContactData = {
    _id?: number,
    name: string,
    last_name: string,
    email: string,
    phone: string,
    message: string,
    dataContact?: Date,
}

export function MongoLayout() {
    const { user } = useContext(AuthContext)

    const [data, setData] = useState<ContactData[]>()
    const [status, setStatus] = useState<number>()

    useEffect(() => {
        async function fetchData() {
            try {
                const { data, status } = await api.get<ContactData[]>('/api/contact')
                setStatus(status)
                setData(data)
            } catch (error) {
                setStatus(error.response.status)
            }
        }
        fetchData()
    }, [])
    
    //Verify the data, if there is data the user is authenticated
    if (!data) {
        if (status === 400) {
            return <Container><ErrorMSG>Error in request parameters!</ErrorMSG></Container>;
        } else if (status === 401) {
            return <Container><ErrorMSG>User not authorized!</ErrorMSG></Container>
        } else {
            return <Container><Loading></Loading></Container>;
        }
    }

    if (!user) return <Loading></Loading>
      
    return (
        <Container>
            <Title>Bem vindo {user.name}</Title>
            <Title>Contacts Documents</Title>
            {data.map(({ _id, name, last_name, email, phone, message }, index) => {
                return <MongoFrame key={_id} name={name} last_name={last_name} email={email} phone={phone} message={message}></MongoFrame>
            })}
        </Container>
    )
}
