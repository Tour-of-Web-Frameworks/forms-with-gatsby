import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_API_KEY
)

export default async function handler(req, res) {
  const { name, email, reason } = req.body

  const { data, error } = await supabase
    .from("signups")
    .insert([
      {
        name: name,
        email: email,
        reason: reason,
      },
    ])
    .then(data => {
      console.log(`We received your signup request.`, req.body)
      return { data, error: null }
    })
}
