import { getSession } from "next-auth/react";
export default async function handler(req, res) {
  const session = await getSession({ req });
  // console.log(session);
  return session
    ? res.status(200).json({ message: "Success", session })
    : res.status(401).json({ error: "User not signed in." });
}