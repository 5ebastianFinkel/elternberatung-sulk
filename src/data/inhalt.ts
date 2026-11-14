// Alle Texte der Startseite an einem Ort.
// Alles in [eckigen Klammern] ist ein Platzhalter und muss noch von Verena kommen.

export const praxis = {
	name: 'Verena Sulk',
	vorname: 'Verena',
	marke: 'Elternberatung Sulk',
	rolle: 'Schlafberaterin',
	ort: 'Münster',
	// Platzhalter: echte Adresse und Nummer eintragen
	email: 'name@example.com',
	telefon: '[Telefonnummer]',
	instagram: '[Instagram-Link]',
	kurz: 'Schlafberatung für Familien mit Babys und Kleinkindern in Münster – bei dir zu Hause oder online.',
};

export const seo = {
	titel: 'Verena Sulk – Schlafberatung in Münster',
	beschreibung:
		'Verena Sulk, Eltern- und Schlafberatung in Münster. Hilfe bei Schlafproblemen von Babys und Kleinkindern – bindungsorientiert, ohne Schreienlassen, vor Ort oder online.',
};

export const kontaktLink = `mailto:${praxis.email}?subject=${encodeURIComponent(
	'Anfrage Kennenlerngespräch'
)}`;

export const themen = [
	'Dein Kind wacht nachts alle ein, zwei Stunden auf.',
	'Das Einschlafen dauert jeden Abend über eine Stunde.',
	'Dein Kind schläft nur an der Brust, mit Fläschchen oder auf dem Arm ein.',
	'Die Tagschläfe sind kurz – oder fallen ganz aus.',
	'Der Tag beginnt für euch um fünf Uhr morgens.',
	'Dein Kind soll ins eigene Bett oder Zimmer umziehen.',
];

export const ansatz =
	'Ich arbeite bindungsorientiert und ohne Schreienlassen. Wir verändern nur so viel, wie sich für dich und dein Kind richtig anfühlt – Schritt für Schritt.';

export const ueberMich = {
	titel: 'Hallo, ich bin Verena',
	absaetze: [
		'Bevor ich etwas vorschlage, höre ich zu: Wie sieht euer Tag aus, was habt ihr schon ausprobiert, und was soll sich ändern? Aus dem Schlafprotokoll deines Kindes und unserem Gespräch entsteht ein Plan, der zu eurer Familie passt – nicht zu einem Ratgeber.',
		'[Zwei, drei Sätze zu Verenas Ausbildung, ihrer Erfahrung und warum sie Schlafberaterin geworden ist.]',
	],
	fotoAlt: 'Porträt von Verena Sulk',
};

export const ablauf = [
	{
		titel: 'Kennenlernen',
		dauer: 'ca. 20 Minuten',
		text: 'In einem kostenlosen Telefonat erzählst du, wo es hakt. Ich sage dir ehrlich, ob und wie ich helfen kann.',
	},
	{
		titel: 'Schlafprotokoll',
		dauer: 'eine Woche',
		text: 'Du notierst, wann dein Kind schläft, wach ist und isst. Dazu kommt ein kurzer Fragebogen zu eurem Alltag.',
	},
	{
		titel: 'Beratung',
		dauer: 'ca. 90 Minuten',
		text: 'Wir sprechen bei dir zu Hause in Münster oder per Video. Am Ende hast du einen Plan, den du umsetzen kannst.',
	},
	{
		titel: 'Begleitung',
		dauer: 'zwei Wochen',
		text: 'Ich bin für deine Fragen da, per Nachricht oder Telefon. Wenn etwas nicht passt, ändern wir den Plan.',
	},
];

export const angebote = [
	{
		titel: 'Schlafberatung für Babys',
		fuer: '4 bis 12 Monate',
		umfang: [
			'Auswertung von Schlafprotokoll und Fragebogen',
			'Beratung bei dir zu Hause oder per Video',
			'Schriftlicher Plan für euren Alltag',
			'Zwei Wochen Begleitung',
		],
		preis: '[Preis]',
	},
	{
		titel: 'Schlafberatung für Kleinkinder',
		fuer: '1 bis 6 Jahre',
		umfang: [
			'Auswertung von Schlafprotokoll und Fragebogen',
			'Beratung bei dir zu Hause oder per Video',
			'Schriftlicher Plan, auch für Abendrituale und Familienbett',
			'Zwei Wochen Begleitung',
		],
		preis: '[Preis]',
	},
	{
		titel: 'Babyschlaf verstehen',
		fuer: 'Schwangerschaft bis 4 Monate',
		umfang: [
			'Ein Gespräch, gern mit Partnerin oder Partner',
			'Was in den ersten Monaten normal ist',
			'Schlafumgebung und erste Abendroutine',
		],
		preis: '[Preis]',
	},
];

export const fragen = [
	{
		frage: 'Muss mein Kind dabei weinen?',
		antwort:
			'Nein. Ich arbeite ohne Schreienlassen. Dein Kind darf Gefühle zeigen – und du bleibst an seiner Seite.',
	},
	{
		frage: 'Ab welchem Alter ist eine Schlafberatung sinnvoll?',
		antwort:
			'Eine Beratung mit Plan ist meist ab etwa vier Monaten sinnvoll. Für die Zeit davor gibt es „Babyschlaf verstehen“: Da geht es darum, was normal ist und was dir jetzt hilft.',
	},
	{
		frage: 'Klappt die Beratung auch online?',
		antwort:
			'Ja. Die Beratung per Video funktioniert genauso gut wie vor Ort. Hausbesuche mache ich in Münster und Umgebung.',
	},
	{
		frage: 'Was, wenn wir den Plan nicht durchhalten?',
		antwort:
			'Dafür gibt es die Begleitung. Wenn etwas nicht zu euch passt, ändern wir den Plan – ohne schlechtes Gewissen.',
	},
];

export const kontakt = {
	titel: 'Erzähl mir, wo es gerade hakt',
	text: 'Das Kennenlerngespräch ist kostenlos und unverbindlich. Schreib mir eine Mail, ich melde mich bei dir.',
	cta: 'Kennenlerngespräch anfragen',
};

export const rechtliches = [
	// Platzhalter: Impressum und Datenschutzerklärung sind in Deutschland Pflicht
	{ titel: 'Impressum', href: '#' },
	{ titel: 'Datenschutz', href: '#' },
];
