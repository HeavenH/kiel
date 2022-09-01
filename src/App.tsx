import type { User } from "./types";
import UserDisplay from "./components/UserDisplay";
import { gql, useQuery } from "@apollo/client";

const GET_USER = gql`
  query {
    users {
      id
      name
      messages {
        body
      }
    }
  }  
`;

function App() {
  const { data } = useQuery<{ users: User[] }>(GET_USER)

  console.log("data", data)
  return (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center">
      {
        data?.users.map((user, index) => <UserDisplay user={user} key={index} /> )
      }
    </div>
  )
}

export default App
