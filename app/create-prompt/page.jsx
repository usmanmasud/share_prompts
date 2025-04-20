"use client"

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from '@components/Form'

const CreatePrompt = () => {
    const [submiting, setSubmiting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: ']'
    });

    const CreatePrompt = async (e) => {

    }

    return (
        <Form
            type="Create"
            post={post}
            setPost={setPost}
            submitting={submiting}
            handleSubmit={CreatePrompt}
        />
    )
}

export default CreatePrompt