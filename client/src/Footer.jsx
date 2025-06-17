import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Stack,
  useTheme,
  styled,
} from "@mui/material";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const StyledFooter = styled(Box)(({ theme }) => ({
  background: "linear-gradient(45deg, #1a237e 30%, #283593 90%)",
  color: "#fff",
  padding: theme.spacing(8, 0),
  marginTop: "auto",
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: "#fff",
  margin: theme.spacing(0.5),
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.2)",
    color: "#90caf9",
  },
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(2),
  "&:hover": {
    color: "#90caf9",
    cursor: "pointer",
  },
}));

const Footer = () => {
  const theme = useTheme();

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <StyledFooter component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Overview */}
          <Grid item xs={12} sm={3}>
            <Box mb={3}>
              <img
                src="https://images.unsplash.com/photo-1563906267088-b029e7101114"
                alt="Company Logo"
                style={{ height: 60, marginBottom: theme.spacing(2) }}
              />
            </Box>
            <Typography variant="body1" mb={2}>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit.CADD, synergy, livewire 2025 
            </Typography>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography variant="h6" mb={2} fontWeight="bold">
              Stay Connected
            </Typography>
            <Stack spacing={2}>
              <ContactItem onClick={() => handleCopyToClipboard("+1 (555) 123-4567")}>
                <FaPhone style={{ marginRight: 8 }} />
                +1 (555) 123-4567
              </ContactItem>
              <ContactItem onClick={() => handleCopyToClipboard("contact@example.com")}>
                <FaEnvelope style={{ marginRight: 8 }} />
                contact@example.com
              </ContactItem>
              <ContactItem
                onClick={() =>
                  handleCopyToClipboard("123 Tech Street, Silicon Valley, CA")
                }
              >
                <FaMapMarkerAlt style={{ marginRight: 8 }} />
                123 Tech Street, Silicon Valley, CA
              </ContactItem>

              <Stack direction="row" spacing={1} mt={2}>
                <SocialButton aria-label="facebook">
                  <FaFacebook />
                </SocialButton>
                <SocialButton aria-label="twitter">
                  <FaTwitter />
                </SocialButton>
                <SocialButton aria-label="instagram">
                  <FaInstagram />
                </SocialButton>
                <SocialButton aria-label="linkedin">
                  <FaLinkedin />
                </SocialButton>
              </Stack>
            </Stack>
          </Grid>

          {/* Support */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" mb={2} fontWeight="bold">
              Support
            </Typography>
            <List>
              {["FAQ", "Help Center", "Documentation", "API Reference"].map((item) => (
                <ListItem key={item} sx={{ padding: 0.5 }}>
                  <ListItemText
                    primary={item}
                    sx={{ "&:hover": { color: "#90caf9", cursor: "pointer" } }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>

        <Typography variant="body2" align="center" mt={4}>
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </Typography>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
