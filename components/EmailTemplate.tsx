import * as React from "react";

interface EmailTemplateProps {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ firstname, lastname, email, message }) => (
  <div>
    <h2>
      Contact from {firstname} {lastname}!
    </h2>
    <p>Email: {email}</p>
    <p>---</p>
    <p>Message: {message}</p>
  </div>
);

export default EmailTemplate;
