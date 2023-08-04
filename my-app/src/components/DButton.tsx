import { Button } from "@chakra-ui/react"

interface IDButton {
    onClick: () => void
}

export const DButton = ({ onClick }: IDButton) => {
    return (
        <Button onClick={onClick} colorScheme="teal" size="sm" width="100px" marginTop="5px">
            Login
        </Button>
    )
}