function html(email) {
	const ikona = email.unread ? "closed" : "opened";
	return `<div class="email">
        <div class="email__head">
            <button class="email__icon email__icon--${ikona}"></button>
            <div class="email__info">
                <div class="email__sender">${email.sender.name}</div>
                <div class="email__subject">${email.subject}</div>
            </div>
            <div class="email__time">${email.time}</div>
        </div>
        <div class="email__body"></div>
    </div>`;
}

const ninbox = document.querySelector("#neprectene");
const pinbox = document.querySelector("#prectene");

fetch("https://apps.kodim.cz/daweb/trening-api/apis/emails")
	.then((response) => response.json())
	.then((data) => {
		const nemails = data.emails.filter((email) => email.unread);
		const pemails = data.emails.filter((email) => !email.unread);

		ninbox.innerHTML = nemails.map(html).join("");
		pinbox.innerHTML = pemails.map(html).join("");
	});
