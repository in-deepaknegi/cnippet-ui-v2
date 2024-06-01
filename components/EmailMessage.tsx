import {
    Body,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
    Tailwind
} from "@react-email/components";
import * as React from "react";

interface WelcomeEmailProps {
    name: string;
    email: string;
};

export const WelcomeEmail = ({ name, email }: WelcomeEmailProps) => (
    <Html>
        <Head />
        <Preview>Thanks for joining us at Cnippet Ui. Hi {name}</Preview>
        <Tailwind>
            <Body className="mx-auto font-swir">
                <Container className=" max-w-[60%] mx-auto">
                    <Section className="mt-8 flex flex-row">
                        <Img
                            src={`https://ui.cnippet.com/images/meta/logo-full.png`}
                            width="160"
                            height="40"
                            alt="Cnippet Ui"
                        />
                    </Section>
                    <Heading className="text-2xl my-7 text-black font-swim">
                        Thanks for joining us at Cnippet Ui.
                    </Heading>
                    <Text className="text-base text-black my-5">
                        Hi {name}
                    </Text>

                    <Text className="text-base text-black my-5">
                        We&apos;re happy to have you in our community of developers and designers who make great websites easily. At Cnippet Ui, we focus on creating excellent website components and templates using React, Next.js, and TailwindCSS.
                    </Text>

                    <Heading className="text-xl my-5 text-black font-swim">
                        What&apos;s New?
                    </Heading>
                    <Text className="text-base text-black my-5">
                        We are delighted to introduce our latest updates:
                    </Text>

                    <ul>
                        <li>
                            <Text className="text-base text-black my-5">
                                <span className="font-semibold">New Components</span>: Take a look at our newly added buttons, cards, modals, and more. These carefully crafted components are designed not only for easy integration and extensive customization in your projects, but also to provide a seamless and user-friendly experience for your website visitors.
                            </Text>
                        </li>
                        <li>
                            <Text className="text-base text-black my-5">
                                <span className="font-semibold">Templates</span>: In addition to our expansive library of components, our collection now includes new templates meticulously designed for various industries and purposes. Whether you are working on a portfolio, an e-commerce site, or a corporate website, we have everything you need to create a stunning and professional online presence that will captivate your audience and elevate your brand.
                            </Text>
                        </li>
                    </ul>

                    <Heading className="text-xl my-5 text-black font-swim">
                        Exclusive Offer for You!
                    </Heading>
                    <Text className="text-base text-black my-5">
                        As a thank you for joining us, we&apos;re happy to give you a 50% discount on our Pro section. You can get premium parts and templates to boost your projects. Just use the code WELCOME50 when you buy to get this deal.
                    </Text>


                    <Heading className="text-xl my-5 text-black font-swim">
                        Get Started
                    </Heading>
                    <Text className="text-base text-black my-5">
                        Visit our website to explore all the new components, templates, and features we have to offer. You will find comprehensive and detailed documentation as well as real-life examples to help you make the most of our diverse range of offerings.
                    </Text>



                    <Text className="text-sm text-black">
                        If you didn&apos;t request this email, there&apos;s nothing to worry about, you
                        can safely ignore it.
                    </Text>

                    <Section>
                        <Row className="w-full px-2 mt-4 mb-8">
                            <Column style={{ width: "66%" }}>
                                <Img
                                    src={`https://ui.cnippet.com/images/meta/logo-full.png`}
                                    width="160"
                                    height="40"
                                    alt="Cnippet Ui"
                                />
                            </Column>
                            <Column>
                                <Section>
                                    <Row>
                                        <Column>
                                            <Link href="https://github.com/in-deepaknegi">
                                                <Img
                                                    src={`https://ui.cnippet.com/images/meta/github.png`}
                                                    width="32"
                                                    height="32"
                                                    alt="github"
                                                    className="inline ml-10"
                                                />
                                            </Link>
                                        </Column>
                                        <Column>
                                            <Link href="https://www.instagram.com/cnippetui/">
                                                <Img
                                                    src={`https://ui.cnippet.com/images/meta/instagram.png`}
                                                    width="32"
                                                    height="32"
                                                    alt="Instagram"
                                                    className="inline ml-10"
                                                />
                                            </Link>
                                        </Column>
                                    </Row>
                                </Section>
                            </Column>
                        </Row>
                    </Section>

                    <Section>
                        <Link
                            className="text-gray-400 underline"
                            href="https://slackhq.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Our blog
                        </Link>
                        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                        <Link
                            className="text-gray-400 underline"
                            href="https://slack.com/legal"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Policies
                        </Link>
                        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                        <Link
                            className="text-gray-400 underline"
                            href="https://slack.com/help"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Help center
                        </Link>
                        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                        <Link
                            className="text-gray-400 underline"
                            href="https://slack.com/community"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-auth="NotApplicable"
                            data-linkindex="6"
                        >
                            Slack Community
                        </Link>
                        <Text className="text-xs text-gray-400 mb-16 text-left">
                            ©2022 Cnippet Ui, LLC, a product of Cnippet. <br />
                            All rights reserved.
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>

    </Html>
);


export default WelcomeEmail;