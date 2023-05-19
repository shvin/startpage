const defaultConfig = {
	username: "ashvin",
	terminal: {
		fixedHeight: true,
		backgroundColor: "#111414",
		windowColor: "#141718",
		glowColor: "#1e3e3d"
	},
	prompt: {
		ctrlC: true,
		placeholder: "cmd...",
		userColor: "green",
		atColor: "gray",
		hostColor: "magenta",
		promptColor: "magenta",
		promptSymbol: "❯",
		caretColor: "green",
		selectionBg: "#e8b195",
		selectionFg: "#16161e"
	},
	colors: {
		white: "#787c99",
		gray: "#686b75",
		black: "#32344a",
		red: "#f7768e",
		green: "#9ece6a",
		yellow: "#e0af68",
		blue: "#7aa2f7",
		cyan: "#449dab",
		magenta: "#ad8ee6",
		purple: "#b29aed",
		orange: "#e6973e"
	},
	fetch: {
		dateFormat: "MM/DD/YYYY",
		titleColor: "cyan",
		weatherUnit: "imperial",
		weatherAPIkey: "0b7cd1353f02d9664e967d7b4db40e98",
		weatherCity: "Atlanta"
	},
	urlLaunch: {
		target: "_self"
	},
	search: {
		default: "https://google.com/search?q=",
		target: "_self",
		shortcutRegex: "([A-Za-z0-9]+) (.*)",
		shortcuts: [
			{
				alias: "g",
				name: "Google Search",
				url: "https://google.com/search?q={}"
			},
			{
				alias: "d",
				name: "DuckDuckGo Search",
				url: "https://duckduckgo.com/?q={}"
			},
			{
				alias: "gh",
				name: "Github Search",
				url: "https://github.com/search?q={}"
			},
			{
				alias: "r",
				name: "Subreddit Search",
				url: "https://reddit.com/r/{}"
			},
			{
				alias: "w",
				name: "Wikipedia Search",
				url: "https://en.wikipedia.org/wiki/{}"
			}
		]
	},
	sections: [
		{
			title: "Home",
			color: "green",
			links: [
				{
					name: "Portfolio",
					url: "https://a.shvin.dev",
					icon: "mdi:web"
				},
				{
					name: "iCloud",
					url: "https://www.icloud.com/mail/",
					icon: "mdi:apple"
				},
				{
					name: "Gmail",
					url: "https://mail.google.com/mail/u/1/#inbox",
					icon: "mdi:gmail"
				},
				{
					name: "Outlook",
					url: "https://outlook.office.com/mail/inbox/",
					icon: "mdi:mail"
				}
			]
		},
		{
			title: "Dev",
			color: "magenta",
			links: [
				{
					name: "GitHub",
					url: "https://github.com/shvin",
					icon: "mdi:github"
				},
				{
					name: "Stories",
					url: "https://app.shortcut.com/flipstone/dashboard",
					icon: "mdi:server"
				},
				{
					name: "Dev.to",
					url: "https://dev.to",
					icon: "material-symbols:logo-dev"
				},
				{
					name: "Stack Overflow",
					url: "https://stackoverflow.com/",
					icon: "mdi:stack-overflow"
				}
			]
		},
		{
			title: "Social",
			color: "purple",
			links: [
				{
					name: "Slack",
					url: "https://flipstonetech.slack.com",
					icon: "mdi:slack"
				},
				{
					name: "Gather",
					url: "https://app.gather.town/app",
					icon: "mdi:account-group"
				},
				{
					name: "Reddit",
					url: "https://reddit.com",
					icon: "mdi:reddit"
				},
				{
					name: "LinkedIn",
					url: "https://www.linkedin.com/in/ashvinr03/",
					icon: "mdi:linkedin"
				}
			]
		},
		{
			title: "Entertainment",
			color: "cyan",
			links: [
				{
					name: "Steam",
					url: "https://steamcommunity.com/id/shvin/",
					icon: "mdi:steam"
				},
				{
					name: "Faceit",
					url: "https://www.faceit.com/en/home",
					icon: "mdi:gamepad-circle-left"
				},
				{
					name: "YouTube",
					url: "https://youtube.com",
					icon: "mdi:youtube"
				},
				{
					name: "RSI",
					url: "https://robertsspaceindustries.com/",
					icon: "mdi:space-station"
				}
			]
		},
		{
			title: "Tools",
			color: "blue",
			links: [
				{
					name: "Ergodox",
					url: "https://configure.zsa.io/ergodox-ez/layouts/qByVz/latest/0",
					icon: "mdi:keyboard-caps"
				},
				{
					name: "QMK",
					url: "https://config.qmk.fm/#/sofle/rev1/LAYOUT",
					icon: "mdi:apple-keyboard-option"
				},
				{
					name: "JSON Converter",
					url: "https://jhelvy.shinyapps.io/qmkjsonconverter/",
					icon: "mdi:json"
				},
				{
					name: "MonkeyType",
					url: "https://monkeytype.com/",
					icon: "mdi:typewriter"
				},
			]
		},
		{
			title: "Tech",
			color: "yellow",
			links: [
				{
					name: "ChatGPT",
					url: "https://chat.openai.com/chat",
					icon: "simple-icons:openai"
				},
				{
					name: "Calendar",
					url: "https://calendar.google.com/calendar/u/0/r",
					icon: "mdi:calendar"
				},
				{
					name: "Localhost",
					url: "http://localhost:8080/",
					icon: "mdi:lan"
				},
				{
					name: "KBDNews",
					url: "https://kbd.news/",
					icon: "mdi:keyboard"
				}
			]
		}
	]
}

export default defaultConfig
