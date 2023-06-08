import {NextResponse} from "next/server"
import {Configuration, OpenAIApi} from "openai"
import {prompt} from "@/utils/prompt"

export async function GET() {
  const userPrompt = prompt({
    brief: "New pricing and packaging strategy",
    goal: "The goal of the project is to identify the effectiveness of their current subscription plans and identify a set of recommendations to improve customer upgrades, maximise customer lifetime value and reduce churn.",
    budget: 500000,
    currency: "USD",
    deadline: "July 9, 2014",
    employees: [
      {title: "Partner", rate: 100},
      {title: "Director", rate: 80},
      {title: "Senior Manager", rate: 50},
      {title: "Manager", rate: 30},
      {title: "Analyst", rate: 10},
    ],
    industry: "Media & Entertainment",
    projectStartDate: "July 8, 2013",
    sector: "Technology",
  })
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })

  const openai = new OpenAIApi(configuration)
  const res = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: userPrompt,
      },
    ],
    temperature: 0,
  })
  const data = res.data.choices[0].message?.content

  return NextResponse.json({data})
}
