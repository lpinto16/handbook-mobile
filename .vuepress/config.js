module.exports = {
	title:"🎈 Handbook UX-UI",
	themeConfig: {
		nav: [
		{
	        text: 'Platforms',
	        items: [
	          { text: 'Website', link: '/guide/website/introduction' },
	          { text: 'Apps', link: '/guide/apps/introduction' }
	        ]
	      }
		],
		sidebar: {
			'/guide/website/': [
				['introduction', 'let\'s get started 🏁'],
				['essential', 'Essentials 👀'],
				['beautiful_ui', 'Beautiful UI 🖥'],
				['prototyping', 'Prototyping 🚀'],
				['assets', 'Assets 🛠'],
				['protips', 'Protips 🥠']
			],
			'/guide/apps/': [
				['introduction', 'let\'s get started🏁'],
				['essential', 'Essentials 👀'],
				['beautifului', 'Beautiful UI 📱'],
				['prototyping', 'Prototyping 🚀'],
				['assets', 'Assets 🛠'],
				['protips', 'Protips 🥠'],
			],

		}
	}
}