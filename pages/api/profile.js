import jwt from "jsonwebtoken";
import config from "../../config/base"

export default function handler(
  req,
  res
) {
  if (req.method !== 'POST') {
    res.status(405).send({message: 'Only POST requests allowed'})
    return
  }
  const {token} = req.body

  const decoded = jwt.verify(token, config.jwtPrivateKey);

  res.status(200).json({address: decoded.address})
}
