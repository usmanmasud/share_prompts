"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Profile from "@components/Profile";


const Profile = () => {

    const handleEdit = () => { }
    const handleDelete = async () => { }

    return (
        <Profile name="My" desc="Welcome to your PromptAI profile page" data={[]} handleEdit={handleEdit} handleDelete={handleDelete} />
    )
}

export default Profile