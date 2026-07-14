import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    if (posts.length === 0) {
        return (
            <div className="min-h-[70vh] flex items-center">
                <Container>
                    <div className="text-center max-w-3xl mx-auto">

                        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
                            Welcome to <span className="text-blue-600">Blogify</span>
                        </h1>

                        <p className="text-lg text-gray-600 leading-8">
                            Share your thoughts, write beautiful blogs and explore
                            amazing content from other creators.
                        </p>

                        <div className="mt-10">
                            <h2 className="text-2xl font-semibold text-gray-700">
                                No Posts Yet 🚀
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Create your first blog post and start your journey.
                            </p>
                        </div>

                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="py-14 bg-gray-50">

            <Container>

                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold">
                        Latest Posts
                    </h1>

                    <p className="text-gray-500 mt-3">
                        Discover stories shared by our community.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <PostCard key={post.$id} {...post} />
                    ))}
                </div>

            </Container>

        </div>
    );
}

export default Home;