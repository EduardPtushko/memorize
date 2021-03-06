export class ThemeModel {
	themes: EmojiMemoryTheme[] = [
		new EmojiMemoryTheme(
			'Animals',
			['πΆ', 'π―', 'π±', 'π­', 'π¦', 'π»', 'πΌ', 'π·', 'π¨', 'π΅', 'π¦', 'π'],
			'blue',
			8,
		),
		new EmojiMemoryTheme(
			'Halloween',
			['π»', 'π', 'π§', 'π·', 'πΈ', 'π¦', 'πͺ', 'πͺ', 'β', 'β°οΈ'],
			'orange',
			6,
		),
		new EmojiMemoryTheme('Suites', ['β οΈ', 'β£οΈ', 'β₯οΈ', 'β¦οΈ'], 'gray', 4),
		new EmojiMemoryTheme(
			'Sport',
			['β½οΈ', 'π', 'π', 'βΎοΈ', 'πΎ', 'π', 'π±', 'π', 'π', 'π₯', 'π₯', 'π'],
			'red',
			6,
		),
		new EmojiMemoryTheme(
			'Food',
			['π', 'π', 'π', 'π', 'π', 'π₯', 'π₯', 'π', 'π', 'π', 'π', 'π'],
			'blue',
			8,
		),
		new EmojiMemoryTheme(
			'Vehicles',
			[
				'π',
				'π',
				'π',
				'π',
				'π',
				'π',
				'π',
				'π',
				'π ',
				'π',
				'π',
				'βοΈ',
				'π³',
				'π',
				'π',
			],
			'purple',
			5,
		),
		new EmojiMemoryTheme(
			'Faces',
			[
				'π',
				'π',
				'π',
				'π',
				'π',
				'π',
				'π€',
				'π€©',
				'π€¬',
				'π₯Ά',
				'π€’',
				'π€ ',
				'π·',
				'π€',
				'π±',
				'π',
				'π₯΅',
				'π€‘',
				'π©',
				'π₯³',
			],
			'systemPink',
			7,
		),
	]

	chooseTheme(): EmojiMemoryTheme {}
}

class EmojiMemoryTheme {
	name: string
	emoji: string[]
	color: string
	numberOfPairs: number

	constructor(name: string, emoji: string[], color: string, numberOfPairs: number) {
		this.name = name
		this.color = color
		this.emoji = emoji
		this.numberOfPairs = numberOfPairs
	}
}
