import { useEffect } from 'react';

const MyComponent = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Code that uses localStorage
            const myData = localStorage.getItem('myData');
            // ...
        }
    }, []);

    return <div>MyComponent content</div>;
};

export default MyComponent;