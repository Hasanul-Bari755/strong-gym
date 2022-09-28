import React from 'react';

const Blog = () => {
    return (
        <div className='w-[90%] mx-auto my-10'>
            <h1 className='text-center text-5xl text-emerald-500 border-spacing-4 shadow-lg'>Question & Answer</h1>
            <div>
                 <div className='mt-5'>
                <h1 className='font-semibold text-3xl'>How does react work?</h1>
                <p>Let’s say one of your friends posted a photograph on Facebook. Now you go and like the image and then you started checking out the comments too. Now while you are browsing over comments you see that the likes count has increased by 100, since you liked the picture, even without reloading the page. This magical count change is because of ReactJS.React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. </p>
            </div>
            <div className='mt-5'>
                <h1 className='font-semibold text-3xl'>Difference between props and state in react?</h1>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
            <div className='mt-5'>
                    <h1 className='font-semibold text-3xl'>Why use useeffect hooks of react without load data?</h1>
                    <h6>1. Directly updating the DOM, and timers.</h6>
                    <h6>2. Setting up subscriptions</h6>
                    <h6>3.Can be lead to unwarranted side-effects.</h6>
                    <h6>4. Perform an action when state or props change</h6>
                    <h6>5. Clean up event listeners when the component unmounts.</h6>
            </div>
           </div>
        </div>
    );
};

export default Blog;