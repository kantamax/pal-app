'use client'

import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import '../../styles/reset.min.css'
import '../../styles/globals.css'
import '../../styles/style.scss'
import Image from 'next/image'
import Link from 'next/link'

// metadata をここで定義
const metadata = {
  title: 'タイトル',
  description: 'ここに説明が入ります。',
}

// Emotion styled
const Nav = styled.nav`
  display: flex;
  gap: 80px;
  ul {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`

// ここでグローバルスタイルを定義
const globalStyles = css`
  html {
    font-size: 62.5%;
    height: -webkit-fill-available;
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  * {
    outline: none;
  }
  body {
    font-family: 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.5;
    }
`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Global styles={globalStyles} />
        <Nav>
          <Link href="/">
            <Image src="./logo.svg" alt="logo" width={150} height={80} />
          </Link>
          <ul>
            <li>dummy</li>
            <li>dummy</li>
            <li>dummy</li>
            <li>dummy</li>
          </ul>
        </Nav>
        {children}
      </body>
    </html>
  )
}