'use client'
import { useEffect, useState } from "react";
import { Container, Title } from "./styles";
import axios from "axios";
import Loading from "@/app/loading";
import { MongoFrame } from "./mongoFrame";
import { ErrorMSG } from "../error/Error";

export type ContactData = {
    id: string,
    name: string,
    last_name: string,
    email: string,
    phone: string,
    message: string,
    dataContact?: Date,
}

export async function MongoLayout() {

    const [data, setData] = useState<ContactData[]>()
    const [status, setStatus] = useState(400)

    useEffect(() => {
        async function fetchData() {
            const { data, status }= await axios.get('/api/contact')
            setData(data)
            setStatus(status)
        }
        fetchData()
    }, [])

    if (!data) return <Loading></Loading>

    if (status !== 200) return <ErrorMSG></ErrorMSG>
    // const data:ContactData[] = await axios.get('/api/contact')
    
    return(
        <Container>
            <Title>Contacts - Documents</Title>
            {data.map(({id, name, last_name, email, phone, message}, index) => {
                return <MongoFrame key={index} id={id} name={name} last_name={last_name} email={email} phone={phone} message={message}></MongoFrame>
            })}
        </Container>
    )
}