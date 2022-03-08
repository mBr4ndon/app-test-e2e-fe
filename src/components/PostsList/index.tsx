import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { api } from '../../services/api';

import './styles.css';

type Post = {
    id: string;
    title: string;
    description?: string;
    created_at: Date;
}

const socket = io('http://localhost:3333');

export function PostsList() {

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        api.get<Post[]>('/posts').then(response => {
            setPosts(response.data);
        })
    }, []);
    
    useEffect(() => {
        socket.on('new_post', (newPost: Post) => {
            const newPostsArray = posts.concat(newPost);
            setPosts(posts => posts.concat(newPost));
        });
    }, []);

    return (
        <div className="list-posts">
            {
                posts.map(post => (
                    <div className="post" key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post?.description || 'No description'}</p>
                    </div>         
                ))
            }
        </div>
    );
}