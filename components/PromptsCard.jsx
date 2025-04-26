"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptsCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
    return (
        <div className="promt_card">
            <div className="flex justify-center items-start gap-5">
                <div>
                    {/* <Image src={post.creator.image} alt="user_image" width={40} height={40} className="rounded-full object-contain" /> */}
                    <p>{post._id}</p>
                </div>
            </div>
        </div>
    )
}

export default PromptsCard