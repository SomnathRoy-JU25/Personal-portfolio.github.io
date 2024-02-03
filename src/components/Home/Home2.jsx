import React from "react";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import myImg from "../../Assets/My Photo.jpg";

function Home2() {
  return (
    <div className="relative py-70" id="about">
      <div className="container mx-auto">
        <div className="flex flex-row">
          <div className="md:w-2/3 lg:w-3/4 xl:w-4/5 text-white pt-100 pb-20 text-center">
            <h1 className="text-3xl pt-8">
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="pt-50 text-lg text-left">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Software Development Tools and Technologies
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Express.js</b>
              </i>
            </p>
          </div>

          <div className="md:w-1/3 lg:w-1/4 p-2 pt-4 ml-auto">
            <Tilt>
              <img src={myImg} className="img-fluid rounded-2xl" alt="avatar" />
            </Tilt>
          </div>

        </div>

        <div className="text-center pt-25 text-white">
          <h1>FIND ME ON</h1>
          <p>
            Feel free to <span className="purple">connect </span>with me
          </p>
          <ul className="flex flex-row justify-center space-x-4 pt-15 relative pl-0">
            <li className="inline-block pr-15 pl-15">
              <a
                href="https://github.com/MrSomnathRoy"
                target="_blank"
                rel="noreferrer"
                className="text-purple-800 relative w-10 h-10 flex items-center justify-center text-lg leading-10 bg-white border-2 border-purple-800 rounded-full transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="inline-block pr-15 pl-15">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="text-purple-800 relative w-10 h-10 flex items-center justify-center text-lg leading-10 bg-white border-2 border-purple-800 rounded-full transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="inline-block pr-15 pl-15">
              <a
                href="https://www.linkedin.com/in/somnath-roy-jadavpur-university/"
                target="_blank"
                rel="noreferrer"
                className="text-purple-800 relative w-10 h-10 flex items-center justify-center text-lg leading-10 bg-white border-2 border-purple-800 rounded-full transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="inline-block pr-15 pl-15">
              <a
                href="https://www.instagram.com/somnath_roy0340"
                target="_blank"
                rel="noreferrer"
                className="text-purple-800 relative w-10 h-10 flex items-center justify-center text-lg leading-10 bg-white border-2 border-purple-800 rounded-full transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home2;


// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// // import myImg from "../../Assets/avatar.svg";
// import myImg from "../../Assets/My Photo.jpg";

// import Tilt from "react-parallax-tilt";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

// function Home2() {
//   return (
//     <Container fluid className="relative py-70" id="about">
//       <Container>
//         <Row>
//           <Col md={8} className="text-white pt-100 pb-20 text-center">
//             <h1 className="text-2xl pt-10">
//               LET ME <span className="purple"> INTRODUCE </span> MYSELF
//             </h1>
//             <p className="pt-50 text-lg text-left">
//               I fell in love with programming and I have at least learnt
//               something, I think… 🤷‍♂️
//               <br />
//               <br />I am fluent in classics like
//               <i>
//                 <b className="purple"> C++, Javascript. </b>
//               </i>
//               <br />
//               <br />
//               My field of Interest's are building new &nbsp;
//               <i>
//                 <b className="purple">Web Technologies and Products </b> and
//                 also in areas related to{" "}
//                 <b className="purple">
//                   Software Development Tools and Technologies
//                 </b>
//               </i>
//               <br />
//               <br />
//               Whenever possible, I also apply my passion for developing products
//               with <b className="purple">Node.js</b> and
//               <i>
//                 <b className="purple">
//                   {" "}
//                   Modern Javascript Library and Frameworks
//                 </b>
//               </i>
//               &nbsp; like
//               <i>
//                 <b className="purple"> React.js and Express.js</b>
//               </i>
//             </p>
//           </Col>

//           <Col md={4} className="myAvtar p-2">
//             <Tilt>
//               <img src={myImg} className="img-fluid rounded-2xl" alt="avatar" />
//             </Tilt>
//           </Col>
//         </Row>
//         <Row>
//           <Col md={12} className="text-center pt-25 text-white">
//             <h1>FIND ME ON</h1>
//             <p>
//               Feel free to <span className="purple">connect </span>with me
//             </p>
//             <ul className="flex flex-row justify-center space-x-4 pt-15 relative pl-0">
//               <li className="inline-block pr-15 pl-15">
//                 <a
//                   href="https://github.com/MrSomnathRoy"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="text-purple-800 relative w-10 h-10 flex items-center justify-center text-lg leading-10 bg-white border-2 border-purple-800 rounded-full transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
//                 >
//                   <AiFillGithub />
//                 </a>
//               </li>
//               <li className="inline-block pr-15 pl-15">
//                 <a
//                   href="https://twitter.com/"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="text-purple-800 relative w-10 h-10 flex items-center justify-center text-lg leading-10 bg-white border-2 border-purple-800 rounded-full transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
//                 >
//                   <AiOutlineTwitter />
//                 </a>
//               </li>
//               <li className="inline-block pr-15 pl-15">
//                 <a
//                   href="https://www.linkedin.com/in/somnath-roy-jadavpur-university/"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="text-purple-800 relative w-10 h-10 flex items-center justify-center text-lg leading-10 bg-white border-2 border-purple-800 rounded-full transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
//                 >
//                   <FaLinkedinIn />
//                 </a>
//               </li>
//               <li className="inline-block pr-15 pl-15">
//                 <a
//                   href="https://www.instagram.com/somnath_roy0340"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="text-purple-800 relative w-10 h-10 flex items-center justify-center text-lg leading-10 bg-white border-2 border-purple-800 rounded-full transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
//                 >
//                   <AiFillInstagram />
//                 </a>
//               </li>
//             </ul>
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }
// export default Home2;
