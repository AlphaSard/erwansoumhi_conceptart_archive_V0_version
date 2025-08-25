"use client"

export default function ErrorPage({ error }: { error: unknown }) {
	return (
		<div className="mx-auto max-w-3xl p-6">
			<h2 className="text-xl font-semibold">Erreur</h2>
			<pre className="mt-2 whitespace-pre-wrap text-sm">
				{String((error as { message?: string })?.message ?? error)}
			</pre>
		</div>
	)
}
