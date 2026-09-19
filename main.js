const userForm = document.getElementById("userForm");

userForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("userName").value;
  const email = document.getElementById("userEmail").value;

  const userData = {
    name: name,
    email: email
  };

  localStorage.setItem("userData", JSON.stringify(userData));

  userForm.reset();

  const modalElement = document.getElementById("userModal");
  const modal = bootstrap.Modal.getInstance(modalElement);
  modal.hide();
});