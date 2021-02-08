// import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';



// const LogIn = (props) => {

//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")

//     const handleEmailChange = (event) => {
//         setEmail(event.target.value);
//     }

//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value);
//     }

//     const handleSubmit = () => {
//         this.props.logUserDetails(email, password)
//     }

//     //need to add email address and password validation
//     //need to add preventDefault for submit button and error messages to pop up if input values are not valid
//     //need to pass the submitted information back up to the App.js state so user details can be globally available through the app for api calls to db

//     return (
//         <div>
//             <h2>Please Log In to access your Tutor Portal</h2>
//             <Form>
//                 <Form.Group controlId="loginFormEmail">
//                     <Form.Control type="email" placeholder="Email Address" size="lg" value={email} onChange={handleEmailChange} />
//                 </Form.Group>

//                 <Form.Group controlId="loginFormPassword">
//                     <Form.Control type="password" placeholder="Password" size="lg" value={password} onChange={handlePasswordChange} />
//                 </Form.Group>

//                 <Button variant="secondary" type="submit" size="lg" onSubmit={handleSubmit}>
//                     Submit
//                 </Button>
//             </Form>

//         </div>
//     );
// };

// export default LogIn;