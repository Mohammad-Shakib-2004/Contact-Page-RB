// Add event listener for form submission
document.getElementById('enquiryForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const responseMessage = document.getElementById('responseMessage');

  // Reset any previous errors
  clearErrors();

  // Basic validation with specific error messages
  let isValid = true;

  if (name === "") {
    showError('nameError', 'Please enter your name.');
    isValid = false;
  }
  if (!validateEmail(email)) {
    showError('emailError', 'Please enter a valid email address.');
    isValid = false;
  }
  if (message === "") {
    showError('messageError', 'Please enter a message.');
    isValid = false;
  }

  if (!isValid) return;

  // Create mailto link (for demo purposes; usually AJAX would be preferable here)
  const mailtoLink = `mailto:rongberong@gmail.com?subject=Enquiry from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage:%0D%0A${message}`;

  // Display loading animation or spinner
  showLoading(true);

  // Simulate sending the email (use AJAX in production)
  setTimeout(() => {
    window.location.href = mailtoLink; // Redirect to mailto link

    // Display success message
    responseMessage.textContent = "Your enquiry has been sent successfully!";
    responseMessage.classList.add('success');
    responseMessage.classList.remove('hidden');

    // Clear the form
    document.getElementById('enquiryForm').reset();
    showLoading(false); // Hide loading animation

  }, 2000); // Simulate delay for UX

  // Functions for validation, errors, and UI updates
  function validateEmail(email) {
    const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.classList.add('visible');
  }

  function clearErrors() {
    document.querySelectorAll('.error').forEach(el => {
      el.textContent = '';
      el.classList.remove('visible');
    });
  }

  function showLoading(isLoading) {
    const spinner = document.getElementById('spinner');
    spinner.classList.toggle('hidden', !isLoading);
  }
});
