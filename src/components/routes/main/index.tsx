import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Stats } from './components/stats'

export function Page() {
	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-2xl font-semibold tracking-tight">Main Dashboard</h1>
				<p className="text-sm text-muted-foreground">
					Placeholder content for the main page.
				</p>
			</div>

			<Stats />

			<Card>
				<CardHeader>
					<CardTitle>Recent Activity</CardTitle>
				</CardHeader>
				<CardContent className="space-y-2 text-sm text-muted-foreground">
					<p>Dummy event: Jane created a new workspace.</p>
					<p>Dummy event: API key was rotated successfully.</p>
					<p>Dummy event: Weekly report was generated.</p>
				</CardContent>
			</Card>
		</div>
	)
}
