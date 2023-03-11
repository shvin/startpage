const defaultConfig = {
	username: "ashvin",
	terminal: {
		fixedHeight: true,
		backgroundColor: "#121317",
		windowColor: "#1e212b",
		glowColor: "#394a99"
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
		white: "#e2e2e2",
		gray: "#686b75",
		black: "#16161e",
		red: "#ec6183",
		green: "#44e3b0",
		yellow: "#ede07e",
		blue: "#35aee6",
		cyan: "#58ede1",
		magenta: "#d469e0",
		purple: "#b29aed",
		orange: "#e6973e"
	},
	fetch: {
		dateFormat: "MM/DD/YYYY",
		titleColor: "yellow",
		weatherAPIkey: "0b7cd1353f02d9664e967d7b4db40e98",
		weatherCity: "Ottawa"
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
				alias: "b",
				name: "Brave Search",
				url: "https://search.brave.com/search?q={}"
			},
			{
				alias: "gh",
				name: "Github Search",
				url: "https://github.com/search?q={}"
			},
			{
				alias: "s",
				name: "Stack Overflow Search",
				url: "https://stackoverflow.com/search?q={}"
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
			title: "General",
			color: "green",
			links: [
				{
					name: "Portfolio",
					url: "https://a.shvin.dev",
					icon: "mdi:web"
				},
				{
					name: "Devmail",
					url: "https://mail.google.com/mail/u/0/#inbox",
					icon: "mdi:email-lock"
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
					name: "GitLab",
					url: "https://gitlab.com",
					icon: "ph:gitlab-logo-simple-fill"
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
					name: "Twitter",
					url: "https://twitter.com/",
					icon: "mdi:twitter"
				},
				{
					name: "Spotify",
					url: "https://volt.fm/shvin",
					icon: "mdi:spotify"
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
			title: "Gaming",
			color: "cyan",
			links: [
				{
					name: "Steam",
					url: "https://steamcommunity.com/id/st1gged/",
					icon: "mdi:steam"
				},
				{
					name: "IGN",
					url: "https://ign.com",
					icon: "mdi:currency-sign"
				},
				{
					name: "RPS",
					url: "https://rockpapershotgun.com/",
					icon: "ph:toilet-paper-bold"
				},
				{
					name: "NexusMods",
					url: "https://www.nexusmods.com/",
					icon: "mdi:file-cog"
				}
			]
		},
		{
			title: "Tools",
			color: "blue",
			links: [
				{
					name: "PDF Editor",
					url: "https://simplepdf.eu/",
					icon: "mdi:file-pdf"
				},
				{
					name: "QMK",
					url: "https://config.qmk.fm/#/sofle/rev1/LAYOUT",
					icon: "mdi:apple-keyboard-option"
				},
				{
					name: "JSON",
					url: "https://jhelvy.shinyapps.io/qmkjsonconverter/",
					icon: "mdi:json"
				},
				{
					name: "Mtype",
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
					name: "3DPrint",
					url: "https://thingiverse.com",
					icon: "mdi:cube"
				},
				{
					name: "Crypto",
					url: "https://coinmarketcap.com/",
					icon: "mdi:bitcoin"
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
