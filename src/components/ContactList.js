import React from "react";
import Contact from "./Contact";
const users = [
    {
        name:"Charlotte Ramos",
        image:"https://randomuser.me/api/portraits/women/10.jpg",
        online: false
    },
    {
        name:"Kristen Walker",
        image:"https://randomuser.me/api/portraits/women/88.jpg",
        online:false
    },
    {
        name:"Pauline Mitchelle",
        image:"https://randomuser.me/api/portraits/women/17.jpg",
        online: true
    },
    {
        name:"Minnie Bowman",
        image:"https://randomuser.me/api/portraits/women/67.jpg",
        online: false
    },
    {
        name:"Terra Vasquez",
        image:"https://randomuser.me/api/portraits/women/71.jpg",
        online: true
    }

]

const ContactList = () => (
    <div>
        {users.map((user,index) => <Contact name={user.name} image={user.image} online={user.online} keys={index}/>
        )}
    </div>
)

export default ContactList;