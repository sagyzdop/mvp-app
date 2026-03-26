import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const stats = [
	{ label: 'Active Users', value: '1,284' },
	{ label: 'Conversion', value: '3.8%' },
	{ label: 'Open Tickets', value: '12' },
]

export function Stats() {
	return (
		<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{stats.map((item) => (
				<Card key={item.label}>
					<CardHeader className="pb-2">
						<CardTitle className="text-sm font-medium text-muted-foreground">
							{item.label}
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-2xl font-bold">{item.value}</p>
					</CardContent>
				</Card>
			))}
		</div>
	)
}
