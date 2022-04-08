import { Container } from "@mui/material"
import RegisterCovid from "../components/form/RegisterCovid"
import Navbar from "../components/Home/Navbar"

const HomeMaster = () => {
    return <>
        <Navbar />
        <Container>
            <RegisterCovid />
        </Container>
    </>
}

export default HomeMaster