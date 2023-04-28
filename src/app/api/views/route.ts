import { queryBuilder } from '@/lib/planetscale'

export async function GET() {
  try {
    const data = await queryBuilder
      .selectFrom('views')
      .select(['slug', 'count'])
      .execute()

    return new Response(JSON.stringify(data), {
      headers: { 'content-type': 'application/json' },
      status: 200,
    })
  } catch (e: unknown) {
    return new Response(JSON.stringify(e), {
      headers: { 'content-type': 'application/json' },
      status: 500,
    })
  }
}