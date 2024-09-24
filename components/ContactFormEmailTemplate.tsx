import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Heading,
  Link,
} from "@react-email/components";
import * as React from "react";

interface ContactFormEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const ContactFormEmailTemplate = ({
  name,
  email,
  message,
}: ContactFormEmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>New contact form submission from SujayParkhe</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>SujayParkhe</Heading>
        <Text style={paragraph}>Hi Sujay Parkhe!</Text>
        <Text style={paragraph}>
          You have received a new contact form submission. Here are the details:
        </Text>
        <Text style={paragraph}>
          <strong>Name:</strong> {name}
          <br />
          <strong>Email:</strong> {email}
          <br />
          <strong>Message:</strong> {message}
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href={`mailto:${email}`}>
            Reply to {name}
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          The SujayParkhe Team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          Template by <Link href="https://sparkhe.dev">Sparkhe</Link>
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ContactFormEmailTemplate;

const main = {
  backgroundColor: "#FDF8F4",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#FF8008",
  borderRadius: "3px",
  color: "#FDF8F4",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#B7C1DB",
  fontSize: "12px",
};

const heading = {
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0 auto",
};
