document.getElementById('enquiryForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting the default way

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Create a mailto link with the user's input
  const mailtoLink = `mailto:rongberong@gmail.com?subject=Enquiry from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage:%0D%0A${message}`;

  // Redirect to the mailto link
  window.location.href = mailtoLink;

  // Display a response message
  document.getElementById('responseMessage').textContent = "Your enquiry has been sent!";
  document.getElementById('responseMessage').classList.remove('hidden');

  // Clear the form
  document.getElementById('enquiryForm').reset();
});
