'use client'

import { Button } from "@/styles/global-styles";

async function handleCVdownload(url: string) {
  try {
    const URL = url
    if (typeof window !== undefined){
      window.location.href= URL
    }
  } catch (error) {
    console.error(error.message)
  }
}

export function DownloadButton({ url }) {
  return (
    <Button $primary>
      <a onClick={() => handleCVdownload(url)}>Download CV</a>
    </Button>
  )
}