import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <h2>Questions: What is context API?</h2>
            <h3>Answer: </h3>
            <p>The React Context API is a structure that enables you to exchange unique details and assists in solving prop-drilling from one level to another level of your application.The React Context API is a way for a React app to effectively produce global variables that can be passed around.Context is also watch as an easier, lighter approach to state management using Redux.React.createContext() is all you need. It returns a consumer and a provider.Context provides a way to pass data through the component tree without having to pass props down manually at every level.</p>
            <h2>Questions: What is Semantic tag?</h2>
            <h3>Answer: </h3>
            <p>
            The HTML semantics refers to the tags that provide meaning to an HTML page rather than just presentation. It makes HTML more comprehensible by better defining the different sections and layout of web pages. This article will focus on What is Semantics in HTML.The main characteristic of a semantic element is that it clearly communicated its meaning to both the developer and the browser. These elements clearly define its content.
            Example of some semantic tag: header, nav, section, article, aside, footer etc.</p>
        </div>
    );
};

export default Blogs;