import { Box, Center, Input } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { DButton } from "../components/DButton";
import { useState } from "react";
import { login } from "../Services/login";


const Home = () => {  
    const [ email, setEmail ] = useState<string>('')

  return (

    <Box padding="25px">
      <Card>
        <Input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <Input placeholder="password" marginTop="15" />
        <Center>
          <DButton
            onClick={() => login(email)} />
        </Center>
      </Card>
    </Box>
  )
}

export default Home;