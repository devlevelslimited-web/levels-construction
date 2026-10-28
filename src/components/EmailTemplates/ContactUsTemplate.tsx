import { Html, Body, Head, Img, Container, Text, Section, Row, Column, Hr, Tailwind, pixelBasedPreset } from 'react-email';
import { ContactUsEmailProps } from "@/types";

// Tailwind v4 ships its default palette in `oklch()`, which most email clients
// cannot render. Providing the teal shades as hex keeps the backgrounds visible
// in Gmail, Outlook, Apple Mail, etc.
const emailTailwindConfig = {
  presets: [pixelBasedPreset],
  theme: {
    extend: {
      colors: {
        teal: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
        },
      },
    },
  },
};


export default function ContactUsTemplate({ fullName, email, phone, subject, message }: ContactUsEmailProps) {
  return (
    <Html>
      <Tailwind config={emailTailwindConfig}>
        <Head />
        <Body className="bg-white">
          <Container className="max-sm:mt-0 mx-auto mt-8 w-full max-w-[640px]">
            <Section>
              <Section className="bg-teal-50 max-sm:px-2 px-6 py-4">
                <Section className="mb-3 px-6">
                  <Row>
                    <Column className="w-1/2 py-[7px] align-middle">
                      <Row>
                        <Column className="w-[46px] align-middle">
                          <Img
                            src={`https://res.cloudinary.com/s62ody7f/image/upload/v1793016916/levels_services_transparent_logo_only_zquhit.png`}
                            alt=""
                            width={46}
                            className="block h-[46px] w-[46px]"
                          />
                        </Column>
                      </Row>
                    </Column>
                    <Column align="right" className="w-1/2 py-[7px] align-middle">
                      <Text className="m-0 text-right font-sans text-[13px] leading-5">
                        <span className="text-slate-500">Levels Services Limited</span>
                      </Text>
                    </Column>
                  </Row>
                </Section>

                <Section className="bg-teal-100 max-sm:px-6 max-sm:py-12 rounded-xl px-10 py-20 text-left">
                  <Section className="mb-8">

                  </Section>
                  <Section className="mb-6 mt-0 max-w-[520px] text-left font-sans text-[16px] leading-6 text-slate-700 last:mb-0">
                      <Text>Hi Team,</Text>
                      <Text>There is a new contact form submission inquiry.</Text>
                      <Text>Here are their contact details along side their message</Text>

                  </Section>
                  <Hr className="my-4 border-t-2 border-teal-300"/>
                  <Section className="mb-6 mt-0 max-w-[520px] text-left font-sans text-[16px] leading-6 text-slate-700 last:mb-0">
                      <Row>
                          <Column>
                              <Text>Full Name: <strong>{fullName}</strong> </Text>
                          </Column>
                      </Row>
                      <Row>
                          <Column>
                              <Text>Email: <strong>{email}</strong> </Text>
                          </Column>
                      </Row>
                      <Row>
                          <Column>
                              <Text>Phone Number:     <strong>{phone}</strong> </Text>
                          </Column>
                      </Row>
                      <Row>
                          <Column>
                              <Text>Subject: <strong>{subject}</strong> </Text>
                          </Column>
                      </Row>
                      <Row>
                          <Column>
                              <Text>Message: <strong>{message}</strong> </Text>
                          </Column>
                      </Row>
                  </Section>
                      <Hr className="my-4 border-t-2 border-teal-300"/>
                  <Text className="mb-0 mt-8 text-left font-sans text-[13px] leading-5 text-slate-500">
                    Thanks,
                    <br />
                    Website Notification
                  </Text>
                </Section>

                {/* Footer */}
                <Section className="bg-teal-50">
                  <Row>
                    <Column className="px-6 py-10 text-center">

                    </Column>
                  </Row>
                </Section>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
