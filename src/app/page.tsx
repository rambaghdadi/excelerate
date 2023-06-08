"use client"
import {ProjectScope} from "@/utils/types"
import {useEffect, useState} from "react"

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  async function getScope() {
    setIsLoading(true)
    const response = await fetch(`http://localhost:3000/api/prompt`)
    const data = await response.json()
    const formattedData = JSON.parse(data.data) as ProjectScope
    setIsLoading(false)
  }

  useEffect(() => {
    // getScope()
  }, [])
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}
