import { Box, Link } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const FooterWrapper = styled(Box)({
    display: 'flex',
    flex: 1,
    padding: '2rem 0',
    borderTop: '1px solid #eaeaea',
    justifyContent: 'center',
    alignItems: 'center'
})

export const FooterLink = styled(Link)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1
})

export const FooterLogo = styled('span')({
    height: '1em',
    marginLeft: '0.5rem',
})