import axios from "axios";

export async function getAuthToken(clientID, clientSecret) {
  const payload = {
    companyName: "VIT Bhopal",
    clientID,
    clientSecret,
    ownerName: "Akshat",
    ownerEmail: "akshat.agrawal2021@vitbhopal.ac.in",
    rollNo: "21MIP10022",
  };
  const response = await axios.post("http://20.244.56.144/test/auth", payload);
  return response.data.access_token;
}
