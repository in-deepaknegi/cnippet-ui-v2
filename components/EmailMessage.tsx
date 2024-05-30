import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Tailwind,
    Text,
    Row,
    Column,
    Img,
    Link
} from '@react-email/components';
import * as React from 'react';

type MessageUsEmailProps = {
    name: string;
    email: string;
};

const MessageUsEmail = ({ name, email }: MessageUsEmailProps) => {
    const previewText = `Hi ${name}. Thanks for joining us at ui.cnippet.com!  We're happy to have you in our community of developers and designers who make great websites easily`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className='bg-white my-auto mx-auto font-swir'>
                    <Container className='my-20 mx-auto max-w-2xl'>
                        <Heading className='text-black text-3xl'>
                            Hi {name},
                        </Heading>


                        <Text className='text-base'>
                            Thanks for joining us at ui.cnippet.com!
                        </Text>
                        <Text className='text-base'>
                            We&apos;re happy to have you in our community of developers and designers who make great websites easily. At ui.cnippet.com, we focus on creating excellent website components and templates using React, Next.js, and TailwindCSS.
                        </Text>

                        <Heading className='text-black text-2xl'>
                            What&apos;s New?
                        </Heading>
                        <Text className='text-base'>
                            We are delighted to introduce our latest updates:
                        </Text>
                        <ul className='list-disc ml-3'>
                            <li>
                                <Text className='text-base'>
                                    <span className='font-semibold'>New Components</span>: Take a look at our newly added buttons, cards, modals, and more. These carefully crafted components are designed not only for easy integration and extensive customization in your projects, but also to provide a seamless and user-friendly experience for your website visitors.


                                </Text>
                                <Row>
                                    <Column className='px-2'>
                                        <Link href="https://ui.cnippet.com/components/hero">
                                            <Img src="https://ui.cnippet.com/images/components/hero.png" className='rounded-lg' alt="Cat" width="300" height="150" />
                                            <Heading className='text-black text-base font-semibold  mt-2'>
                                                Hero Section
                                            </Heading>
                                        </Link>
                                    </Column>
                                    <Column className='px-2'>
                                        <Link href="https://ui.cnippet.com/components/flyout-menu">
                                            <Img src="https://ui.cnippet.com/images/components/flyout.png" className='rounded-lg' alt="Cat" width="300" height="150" />
                                            <Heading className='text-black text-base font-semibold mt-2'>
                                                Flyout Menu
                                            </Heading>
                                        </Link>
                                    </Column>
                                    <Column className='px-2'>
                                        <Link href="https://ui.cnippet.com/components/footer">
                                            <Img src="https://ui.cnippet.com/images/components/footer.png" className='rounded-lg' alt="Cat" width="300" height="150" />
                                            <Heading className='text-black text-base font-semibold mt-2'>
                                                Footer
                                            </Heading>
                                        </Link>
                                    </Column>

                                </Row>
                            </li>
                            <li>
                                <Text className='text-base'>
                                    <span className=' font-semibold'>Templates</span>: In addition to our expansive library of components, our collection now includes new templates meticulously designed for various industries and purposes. Whether you are working on a portfolio, an e-commerce site, or a corporate website, we have everything you need to create a stunning and professional online presence that will captivate your audience and elevate your brand.
                                </Text>
                            </li>
                        </ul>

                        <Heading className='text-black text-2xl'>
                            Exclusive Offer for You!
                        </Heading>
                        <Text className='text-base'>
                            As a thank you for joining us, we’re happy to give you a 50% discount on our Pro section. You can get premium parts and templates to boost your projects. Just use the code WELCOME50 when you buy to get this deal.
                        </Text>


                        <Heading className='text-black text-2xl'>
                            Get Started
                        </Heading>
                        <Text className='text-base'>
                            Visit our website to explore all the new components, templates, and features we have to offer. You will find comprehensive and detailed documentation as well as real-life examples to help you make the most of our diverse range of offerings.
                        </Text>


                        <Text className='text-sm font-semibold'>
                            Best regards, <br />
                            The Cnippet Ui Team.
                        </Text>

                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default MessageUsEmail;