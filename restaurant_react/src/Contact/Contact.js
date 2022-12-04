function Contact({firstname, lastname, email, message}) {
  return (
    <li>
      <h2>{firstname} {lastname}</h2>
      <p>{email}</p>
      <p>{message}</p>
    </li>
  );
}

export default Contact;