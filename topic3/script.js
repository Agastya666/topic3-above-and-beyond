// Store login credentials for different users
const users = [
	{
		username: "Agastya",
		password: "123",
		page: "admin.html",
	},
	{
		username: "Angad",
		password: "123",
		page: "user1.html",
	},
    {
		username: "Kanishk",
		password: "123",
		page: "user2.html",
	},
];

// Login form submit event listener
$("#login-form").submit(function(event) {
	event.preventDefault();
	const username = $("#username").val();
	const password = $("#password").val();
	const user = users.find(user => user.username === username && user.password === password);
	if (user) {
		window.location.href = user.page;
	} else {
		alert("Invalid login credentials");
	}
});
