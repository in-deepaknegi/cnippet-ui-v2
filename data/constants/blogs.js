import Hero1 from "@/public/images/hero/hero11.jpg";
import Hero2 from "@/public/images/hero/hero9.jpg";
import Hero3 from "@/public/images/hero/hero10.jpg";
import Hero4 from "@/public/images/hero/hero7.jpg";
import Author1 from "@/public/images/profile/profile5.jpg";
import Author2 from "@/public/images/profile/profile3.jpg";
import Author3 from "@/public/images/profile/profile2.jpg";
import Author4 from "@/public/images/profile/profile1.jpg";

const posts = [
    {
        id: 1,
        title: "Boost your conversion rate",
        href: "#",
        img: Hero1,
        description:
            "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        date: "Feb 16, 2024",
        datetime: "2024-02-16",
        category: { title: "Marketing", href: "#" },
        author: {
            name: "Michael Foster",
            role: "Co-Founder / CTO",
            href: "#",
            imageUrl: Author1,
        },
    },
    {
        id: 2,
        title: "How to use search engine optimization to drive sales",
        href: "#",
        img: Hero2,
        description:
            "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde.",
        date: "Feb 12, 2024",
        datetime: "2024-02-12",
        category: { title: "Marketing", href: "#" },
        author: {
            name: "Lindsay Walton",
            role: "Front-end Developer",
            href: "#",
            imageUrl: Author2,
        },
    },
    {
        id: 3,
        title: "Improve your customer experience",
        href: "#",
        img: Hero3,
        description:
            "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        date: "Feb 14, 2024",
        datetime: "2024-02-14",
        category: { title: "Marketing", href: "#" },
        author: {
            name: "Cathy Mueller",
            role: "Director of Product",
            href: "#",
            imageUrl: Author3,
        },
    },
    {
        id: 4,
        title: "Improve your customer experience",
        href: "#",
        img: Hero4,
        description:
            "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
        date: "Feb 14, 2024",
        datetime: "2024-02-14",
        category: { title: "Marketing", href: "#" },
        author: {
            name: "Cathy Mueller",
            role: "Director of Product",
            href: "#",
            imageUrl: Author4,
        },
    },
    // More posts...
];

export default posts