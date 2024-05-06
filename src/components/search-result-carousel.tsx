export default function SearchResultCarousel() {
	return (
		<div className='overflow-scroll bg-slate-100'>
			<div className='flex gap-2'>
				{data.map((item) => (
					<div key={item.id} className='size-120pxr shrink-0 rounded-md bg-slate-200'>
						{item.title}
					</div>
				))}
			</div>
		</div>
	)
}

// function CarouselButton() {

// }
// test data
const data = [
	{ createdAt: '2023-10-20T02:28:54.226Z', author: 'Vera Pollich', title: 'Rag Mop', id: '1' },
	{ createdAt: '2023-10-20T01:02:15.028Z', author: 'Geoffrey Kihn', title: 'Check On It', id: '2' },
	{ createdAt: '2023-10-19T13:45:27.891Z', author: 'Kathryn Kemmer', title: 'Bette Davis Eyes', id: '4' },
	{ createdAt: '2023-10-19T16:19:41.608Z', author: 'Salvador Harber', title: 'Feel Like Making Love', id: '5' },
	{ createdAt: '2023-10-19T16:08:19.207Z', author: 'Lamar MacGyver I', title: 'Philadelphia Freedom', id: '6' },
	{ createdAt: '2023-10-20T00:18:56.509Z', author: 'Elijah Wisoky', title: 'Disturbia', id: '7' },
	{ createdAt: '2023-10-19T06:43:32.792Z', author: 'Leslie Daniel', title: '12th Street Rag', id: '8' },
	{ createdAt: '2023-10-20T01:09:47.161Z', author: 'Kayla Connelly II', title: "It's My Party", id: '9' },
	{ createdAt: '2023-10-20T04:03:14.299Z', author: 'Eduardo West', title: 'Hero', id: '10' },
	{ createdAt: '2023-10-19T18:29:11.206Z', author: 'Tom Borer', title: 'Stronger', id: '11' },
	{ createdAt: '2023-10-19T07:45:28.462Z', author: 'Toby McLaughlin', title: 'My Sweet Lord', id: '12' },
	{ createdAt: '2023-10-19T09:13:17.660Z', author: 'Jordan Schuster', title: 'Use Somebody', id: '13' },
	{ createdAt: '2023-10-19T20:27:02.822Z', author: 'Lana Prohaska', title: 'Baby Come Back', id: '14' },
	{ createdAt: '2023-10-19T16:39:23.048Z', author: 'Christian Leannon DDS', title: 'Pop Muzik', id: '15' },
	{ createdAt: '2023-10-20T04:24:43.715Z', author: 'Patsy Oberbrunner', title: "You're Still the One", id: '16' },
	{ createdAt: '2023-10-19T21:58:35.802Z', author: 'Erika Will', title: 'Thriller', id: '17' },
	{ createdAt: '2023-10-19T22:50:02.931Z', author: 'Sheila Welch', title: 'YMCA', id: '18' },
	{ createdAt: '2023-10-20T04:10:16.783Z', author: 'Miss Maxine Langosh', title: "Jive Talkin'", id: '19' },
	{ createdAt: '2023-10-19T06:39:25.368Z', author: 'Florence Casper', title: 'You make Me Wanna', id: '20' },
]
