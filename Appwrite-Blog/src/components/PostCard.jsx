import React from "react";
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config";

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>

            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2">

                <img
                    src={appwriteService.getFilePreview(featuredImage)}
                    alt={title}
                    className="w-full h-56 object-cover"
                />

                <div className="p-5">

                    <h2 className="text-xl font-bold text-gray-800 line-clamp-2">
                        {title}
                    </h2>

                    <p className="mt-3 text-sm text-gray-500">
                        Read more →
                    </p>

                </div>

            </div>

        </Link>
    );
}

export default PostCard;