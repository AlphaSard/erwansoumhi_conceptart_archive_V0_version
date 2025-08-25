"use client";
export default function Error({ error }: { error: Error }) {
	return (
		<div className="max-w-2xl mx-auto p-6">
			<h2 className="text-xl font-semibold">Erreur</h2>
			<pre className="mt-2 whitespace-pre-wrap text-sm">
				{String(error?.message)}
			</pre>
		</div>
	);
}
