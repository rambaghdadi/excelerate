import {NextResponse} from "next/server"
import {Configuration, OpenAIApi} from "openai"
import {prompt} from "@/utils/prompt"
import {IPromptArgs} from "@/utils/types"

export async function POST(req: Request) {
  const body = await req.json()
  const formData: IPromptArgs = body.formData

  const userPrompt = prompt({
    brief: formData.brief,
    goal: formData.goal,
    budget: formData.budget,
    currency: "USD",
    deadline: formData.deadline,
    employees: [
      {title: "Partner", rate: 100},
      {title: "Director", rate: 80},
      {title: "Senior Manager", rate: 50},
      {title: "Manager", rate: 30},
      {title: "Analyst", rate: 10},
    ],
    industry: formData.industry,
    projectStartDate: formData.projectStartDate,
    sector: formData.sector,
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

  return NextResponse.json({data}, {status: 200})
}
