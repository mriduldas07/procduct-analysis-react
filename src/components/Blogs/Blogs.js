import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <h2>Questions: What is context API?</h2>
            <h3>Answer: </h3>
            <p>The React Context API is a structure that enables you to exchange unique details and assists in solving prop-drilling from one level to another level of your application.The React Context API is a way for a React app to effectively produce global variables that can be passed around.Context is also watch as an easier, lighter approach to state management using Redux.React.createContext() is all you need. It returns a consumer and a provider.Context provides a way to pass data through the component tree without having to pass props down manually at every level.</p>
        </div>
    );
};

export default Blogs;