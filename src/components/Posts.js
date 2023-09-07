import React from 'react'

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading ...</h2>
    }


    return (
        <div className="mb-4 mx-auto row">
            {posts.map(post => (
                <div key={post.id} className="col-sm-12 col-md-6 col-lg-4">
                    <h3>{post.title.substring(0, 20)}</h3>
                    <p>{post.body.substring(0, 170)}</p>
                </div>

            ))}
        </div>
    )
}

export default Posts
