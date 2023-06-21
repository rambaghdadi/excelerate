import {NextResponse} from "next/server"
import {Configuration, OpenAIApi, ResponseTypes} from "openai-edge"
import {OpenAIStream, StreamingTextResponse} from "ai"
import {prompt} from "@/utils/prompt"
import {IPromptArgs} from "@/utils/types"

export async function POST(req: Request) {
  const body = await req.json()
  const formData: IPromptArgs = body.formData

  const userPrompt = prompt({
    brief: formData.brief,
    goal: formData.goal,
    budget: formData.budget,
    currency: formData.currency,
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

  try {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    })

    const openai = new OpenAIApi(configuration)
    const res = await openai.createChatCompletion({
      model: "gpt-3.5-turbo-16k",
      // stream: true,
      messages: [
        {
          role: "user",
          content: userPrompt,
        },
      ],
      temperature: 0,
    })

    const data = (await res.json()) as ResponseTypes["createChatCompletion"]
    const JSONResponse = data.choices[0]?.message?.content
    return NextResponse.json({data: JSONResponse}, {status: 200})

    // const stream = OpenAIStream(res)
    // return new StreamingTextResponse(stream, {status: 200})
  } catch (err) {
    const e = err as Error
    return NextResponse.json({message: e.message}, {status: 400})
  }
}
