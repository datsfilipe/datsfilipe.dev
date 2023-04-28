'use client'
import { useEffect, useState } from 'react'

type Data = {
  slug: string;
  count: number;
}

const getViews = async (slug: string) => {
  const response = await fetch('/api/views', {
    method: 'GET'
  })
  const data = await response.json() as Data[]
  const viewsForSlug = data && data.find((view) => view.slug === slug)
  return new Number(viewsForSlug?.count || 0)
}

const ViewCounter = ({
  slug,
  trackView
}: {
  slug: string;
  trackView: boolean;
}) => {
  const [views, setViews] = useState<number | null>(null)

  useEffect(() => {
    const getData = async () => {
      const views = await getViews(slug)
      setViews(Number(views))
    }
    getData()
  }, [slug])

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      })

    if (trackView && process.env.ENVIRONMENT === 'production') {
      registerView()
    }
  }, [slug])

  return (
    <p className="font-sans text-sm text-neutral-500">
      {views ? `${views} views` : '​'}
    </p>
  )
}

export { ViewCounter }