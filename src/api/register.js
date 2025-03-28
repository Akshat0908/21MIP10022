import axios from "axios";

export async function registerCompany() {
  const payload = {
    companyName: "VIT Bhopal",
    ownerName: "Akshat",
    rollNo: "21MIP10022",
    ownerEmail: "akshat.agrawal2021@vitbhopal.ac.in",
    accessCode: "bLQemf",
  };
  const response = await axios.post("http://20.244.56.144/test/register", payload);
  return response.data;
}
