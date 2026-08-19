export type PrivacySection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  closing?: string[];
  contactHref?: string;
};

export const privacyPolicy: {
  title: string;
  intro: string[];
  sections: PrivacySection[];
} = {
  title: "Privacy Policy",
  intro: [
    "Ferozsons Laboratories Limited (“Ferozsons”, “we”, “us” or “our”) respects your privacy and is committed to protecting the personal information you choose to share with us through our website.",
    "This Privacy Policy explains, in general terms, what information we may collect, how we may use it, and the steps we take to handle it responsibly.",
  ],
  sections: [
    {
      heading: "1. Information We May Collect",
      paragraphs: [
        "When you use our website, you may voluntarily provide personal information through forms or other communication channels. This may include:",
      ],
      bullets: [
        "your name;",
        "email address;",
        "telephone number;",
        "information submitted through our Contact Us page;",
        "information provided when applying for a job;",
        "information included in a product enquiry, complaint or product concern; and",
        "any other information you choose to provide to us.",
      ],
      closing: [
        "We may also receive limited technical information that is automatically generated when you visit a website, such as your IP address, browser type or device information.",
      ],
    },
    {
      heading: "2. How We Use Your Information",
      paragraphs: ["We may use the information you provide to:"],
      bullets: [
        "respond to your enquiries or requests;",
        "communicate with you regarding products or services;",
        "review and process job applications;",
        "assess and respond to product-related concerns or complaints;",
        "follow up where additional information may be required;",
        "maintain and improve the operation and security of our website; and",
        "comply with applicable legal, regulatory or business requirements.",
      ],
      closing: [
        "We will only use the information provided to us for appropriate business, administrative, regulatory or communication purposes.",
      ],
    },
    {
      heading: "3. Job Applications",
      paragraphs: [
        "If you apply for a position with Ferozsons through our website, we may collect information such as your name, contact details, CV, qualifications, employment history and any other information you submit as part of your application.",
        "This information may be used to assess your suitability for current or future employment opportunities and to communicate with you regarding your application.",
      ],
    },
    {
      heading: "4. Product Concerns and Safety Information",
      paragraphs: [
        "If you submit a product concern, complaint, adverse event or other product-related information, we may collect and use the information you provide to review, investigate and respond to the matter.",
        "Where necessary, such information may also be retained or shared with relevant departments, business partners or regulatory authorities in order to meet applicable product-safety, pharmacovigilance or regulatory requirements.",
      ],
    },
    {
      heading: "5. Sharing of Information",
      paragraphs: [
        "We do not sell your personal information.",
        "We may share information where reasonably necessary with:",
      ],
      bullets: [
        "relevant departments within Ferozsons;",
        "service providers that support our website or business operations;",
        "professional advisers;",
        "business or product partners where relevant to your enquiry; or",
        "governmental or regulatory authorities where required by law or applicable regulatory requirements.",
      ],
      closing: [
        "We expect information shared with third parties to be handled appropriately and only for the purposes for which it is provided.",
      ],
    },
    {
      heading: "6. Data Security",
      paragraphs: [
        "We take reasonable measures to protect personal information from unauthorized access, misuse, alteration, disclosure or loss.",
        "However, no method of transmitting or storing information electronically can be guaranteed to be completely secure.",
      ],
    },
    {
      heading: "7. Data Retention",
      paragraphs: [
        "We may retain personal information for as long as reasonably necessary to respond to your request, manage our business records, process an application, investigate a product concern or comply with applicable legal and regulatory requirements.",
        "Information that is no longer required may be deleted, securely destroyed or otherwise removed in accordance with our internal practices.",
      ],
    },
    {
      heading: "8. Third-Party Links",
      paragraphs: [
        "Our website contains links to websites operated by third parties.",
        "We are not responsible for the privacy practices, security or content of third-party websites. We encourage visitors to review the privacy policies of those websites before providing personal information.",
      ],
    },
    {
      heading: "9. Your Information",
      paragraphs: [
        "If you would like to ask a question about personal information you have provided to us, request that inaccurate information be corrected, or raise a privacy-related concern, you may contact us using the details provided below.",
        "Certain information may need to be retained where required for legal, regulatory, product-safety or legitimate business purposes.",
      ],
    },
    {
      heading: "10. Changes to This Privacy Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time to reflect changes in our website, business practices or applicable requirements.",
        "Any updated version will be posted on this page with a revised “Last Updated” date.",
      ],
    },
    {
      heading: "11. Contact Us",
      paragraphs: [
        "If you have any questions about this Privacy Policy or the way we handle information submitted through our website, please contact us.",
      ],
      contactHref: "/contact",
    },
  ],
};
