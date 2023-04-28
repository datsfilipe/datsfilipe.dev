import type { ImageResponseOptions } from 'next/dist/compiled/@vercel/og/types'
import { ImageResponse } from 'next/server'

export const runtime = 'edge'

const font = fetch(
  new URL('../../../../public/fonts/Raleway-Bold.ttf', import.meta.url)
).then((res) => res.arrayBuffer())

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title')
  const fontData = await font

  const options: ImageResponseOptions = {
    width: 1920,
    height: 1080,
    fonts: [
      {
        name: 'Roboto',
        data: fontData,
        style: 'normal',
      },
    ]
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundImage: 'url(http://localhost:3000/og-bg.png)',
        }}
      >
        <div
          style={{
            marginLeft: 190,
            marginRight: 190,
            display: 'flex',
            fontSize: 130,
            fontFamily: 'Roboto',
            letterSpacing: '-0.05em',
            fontStyle: 'normal',
            color: 'white',
            lineHeight: '120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {title}
        </div>
      </div>
    ),
    options
  )
}