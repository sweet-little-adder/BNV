export default function handler(
  req,
  res
) {
  if (req.method !== 'POST') {
    res.status(405).send({message: 'Only POST requests allowed'})
    return
  }

  const {message} = req.body
  const nonce = "abc"
  res.status(200).json({data: nonce})
}
