import {api} from "../../main";

async function HomeController() {
	console.log('Home controller loaded');

	async function runTest() {
		const response = await api.test.publicGreeting.query({name: "Sasha"});
		console.log("Public Greeting Response", response);

		const response2 = await api.test.secretGreeting.query({name: "Odudniak"});
		console.log("Secret Greeting Response", response2);
		console.log("T2")
	}
	runTest();

	document.querySelector('#login-btn')?.addEventListener('click', () => {
		window.location.href = "/api/auth/google";
	})
}

export default HomeController;
