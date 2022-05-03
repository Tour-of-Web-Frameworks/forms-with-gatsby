export default function handler(req, res) {
  console.log(`We received your signup request.`, req.body)
  res.json(`👍`)
}
