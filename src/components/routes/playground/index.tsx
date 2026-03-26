import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function Page() {
	return (
		<div className="space-y-6">
			<div>
				<h1 className="text-2xl font-semibold tracking-tight">Playground</h1>
				<p className="text-sm text-muted-foreground">
					A simple sandbox page with fake controls and outputs.
				</p>
			</div>

			<div className="grid gap-4 lg:grid-cols-2">
				<Card>
					<CardHeader>
						<CardTitle>Input Panel</CardTitle>
					</CardHeader>
					<CardContent className="space-y-3">
						<Input placeholder="Enter a prompt" />
						<Textarea placeholder="Add extra context..." rows={5} />
						<Button type="button">Run Dummy Action</Button>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Output Preview</CardTitle>
					</CardHeader>
					<CardContent className="space-y-2 text-sm text-muted-foreground">
						<p>Result status: completed</p>
						<p>Tokens used: 245</p>
						<p>Latency: 1.2s</p>
						<p>
							This is placeholder text representing a generated response from the
							playground tool.
						</p>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}
