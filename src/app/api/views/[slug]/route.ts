import { queryBuilder } from '@/lib/planetscale'

const getViews = async (slug: string) => {
  const data = await queryBuilder
    .selectFrom('views')
    .where('slug', '=', slug)
    .select(['count'])
    .execute()

  const views = !data.length ? 0 : Number(data[0].count)
  return views
}

export async function POST(_: Request, { params }: {
  params: { slug: string }
}) {
  try {
    const slug = params.slug
    if (!slug) {
      return new Response('Slug is requestuired.', {
        headers: { 'content-type': 'application/json' },
        status: 400,
      })
    }

    const views = await getViews(slug)

    await queryBuilder
      .insertInto('views')
      .values({ slug, count: 1 })
      .onDuplicateKeyUpdate({ count: views + 1 })
      .execute()

    return new Response(JSON.stringify({ total: views + 1 }), {
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

export async function GET(_: Request, { params }: {
  params: { slug: string }
}) {
  try {
    const slug = params.slug
    if (!slug) {
      return new Response('Slug is requestuired.', {
        headers: { 'content-type': 'application/json' },
        status: 400,
      })
    }

    const views = await getViews(slug)

    return new Response(JSON.stringify({ total: views }), {
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