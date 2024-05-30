// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
// import Page4 from '../src/Components/Page4/Page4';
// import Page3 from '../src/Components/Page3/Page3';
// import Page5 from '../src/Components/Page5/Page5';
// import Page6 from '../src/Components/Page6/Page6';

// const App = () => {
//     const pages = ['/page3', '/page4', '/page5', '/page6'];
//     const [currentPageIndex, setCurrentPageIndex] = useState(0);

//     const navigate = useNavigate();

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentPageIndex((prevIndex) => {
//                 const newIndex = (prevIndex + 1) % pages.length;
//                 navigate(pages[newIndex]);
//                 return newIndex;
//             });
//         }, 3000);

//         return () => clearInterval(timer);
//     }, [navigate]);

//     return (
//         <Routes>
//             <Route path="/page4" element={<Page4 />} />
//             <Route path="/page3" element={<Page3 />} />
//             <Route path="/page5" element={<Page5 />} />
//             <Route path="/page6" element={<Page6 />} />
//             <Route path="/" element={<Page4 />} /> {/* Default route */}
//         </Routes>
//     );
// };

// const MainApp = () => (
//     <Router>
//         <App />
//     </Router>
// );

// export default MainApp;
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Page4 from '../src/Components/Page4/Page4';
// import Page3 from '../src/Components/Page3/Page3';
// // import page5 from '../src/Components/'
// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/page4" element={<Page4 />} />
//                 <Route path="/page3" element={<Page3 />} />
//                 <Route path="/" element={<Page4 />} />
//             </Routes>
//         </Router>

//     );
// }

// export default App;
// import React from 'react'
// import Page6 from '../src/Components/Page6/Page6'
// function App() {
//     return (
//         <div>
//             <Page6 />
//         </div>
//     )
// }
// export default App;

// import React from 'react'
import Page5 from '../src/Components/Page5/Page5'
function App() {
    return (
        <div>
            <Page5 />
        </div>
    )
}
export default App;
// import React from 'react';