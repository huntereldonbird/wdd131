const year = document.querySelector("currentyear");

const today = new Date();

year.innerHTML = 'Last Modified :'


year.innerHTML = `Short: <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "short"
	}
).format(today)}</span>`;