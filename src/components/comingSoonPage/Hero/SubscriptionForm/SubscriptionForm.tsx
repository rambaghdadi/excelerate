"use client"
import Button from "@/components/general/atoms/Button/Button"
import TextInput from "@/components/general/atoms/TextInput/TextInput"
import FormQuestion from "@/components/general/molecules/FormQuestion/FormQuestion"
import {FormEvent} from "react"

export default function SubscriptionForm() {
  function addToMarketingList(e: FormEvent) {
    e.preventDefault()
  }
  return (
    <form onSubmit={addToMarketingList}>
      <FormQuestion label="Stay in the loop" htmlFor="subscribe">
        <TextInput type="email" id="subscribe" name="subscribe" />
      </FormQuestion>
      <Button type="submit">Subscribe</Button>
    </form>
  )
}
