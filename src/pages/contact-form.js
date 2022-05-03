import React from "react"
import { useForm } from "react-hook-form"

const ContactForm = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => {
    // console.log(data)
    fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={`Jane Doe`} {...register("name")} />
      <input
        defaultValue={`jane@gatsbyjs.com`}
        {...register("email", { required: true })}
      />
      <select {...register("reason")}>
        <option value="Frontend performance">Frontend Performance</option>
        <option value="Developer Experience">Developer Experience</option>
        <option value="Build Performance">Build Performance</option>
      </select>
      <input type="submit" />
    </form>
  )
}

export default ContactForm
