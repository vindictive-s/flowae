import React from "react";
import Structure from "../(shared)/Structure";
import { neuropolitical } from "../fonts";

export const metadata = {
  title: "Services",
  description:
    "Welcome to our Privacy Policy page, where we prioritize the protection and security of your personal information. At our branding agency, we are committed to maintaining the highest standards of privacy and confidentiality. This policy outlines how we collect, use, and safeguard the data you provide to us.",
  alternates: {
    canonical: "https://flowae.io/privacy-policy",
  },
};

type Props = {};

const page = (props: Props) => {
  return (
    <Structure>
      <h1
        className={`${neuropolitical.className} text-4xl md:text-6xl tracking-tighter text-left md:text-center`}
      >
        Privacy Policy
      </h1>
      <div className="max-w-[700px] bg-bl-900 bg-opacity-60 backdrop-blur-sm flex flex-col text-left gap-10 text-md md:text-xl p-8 rounded-2xl">
        <h2>
          This Privacy Policy is provided by Flowae, LLC ("Flowae," "we," "us,"
          or "our"), a branding agency operating under the website
          https://flowae.io. This Policy outlines how we process users' ("user,"
          "you," or "your") data. By subscribing to our offerings or accessing
          our website, you agree to the data processing practices described in
          this Policy. If you do not agree with these practices, you should not
          use our services. Flowae, LLC is the data controller for the purposes
          of the General Data Protection Regulation (GDPR).
        </h2>
        <ol className="flex flex-col text-left gap-10 list-decimal p-4">
          <li>
            <strong>DATA COLLECTION</strong>
            <br /> When you subscribe to our offerings, we collect certain
            personal data from you to fulfill your request. This data includes
            but is not limited to: to third parties. However, we may disclose
            your data to:
            <ul className="p-4">
              <li>
                a. Personal data such as name, email address, phone number, and
                other contact details.
              </li>
              <li>
                b. Tracking data such as Internet Protocol Address (IP Address),
                browser type, device information, and location information.
              </li>
              <li>
                c. History of previous transactions Statistical information
                Cookie data that we collect automatically Data you provide when
                contacting us
              </li>
            </ul>
          </li>
          <li>
            <strong>HOW WE USE COLLECTED DATA</strong>
            <br /> We use the data we collect for the following purposes:{" "}
            <ul className="p-4">
              <li>
                a. Your contact data is used to send you updates, news,
                promotions (newsletters), and respond to your requests.
              </li>
              <li>
                b. Non-personal information is used to pinpoint your location
                and enforce our Terms and Conditions Cookie information helps
                improve your website experience and tailor advertisements to
                your preferences.
              </li>
              <li>
                c. Statistical data helps us identify areas for improvement and
                feature development on the website
              </li>
            </ul>
          </li>
          <li>
            <strong>DISCLOSURE OF DATA</strong>
            <br /> We do not share your data for marketing purposes or sell it
            to third parties. However, we may disclose your data to:
            <ul className="p-4">
              <li>
                a. Third-party service providers who perform tasks for us, with
                the understanding that they can only use the data for the task
                given to them.
              </li>
              <li>
                b. Regulating authorities when required by law or for suspected
                fraudulent activities.
              </li>
              <li>
                c. Business transfers, such as mergers or acquisitions, where
                data may be transferred to the merging entity.
              </li>
            </ul>
          </li>
          <li>
            <strong>COOKIES AND OTHER TRACKING TECHNOLOGIES</strong>
            <br /> We use cookies and other tracking technologies to store and
            track data about your preferences, activities, and login
            information. You can deactivate cookies through your browser
            settings, but it may limit your access to certain features.
          </li>
          <li>
            <strong>MARKETING</strong>
            <br /> We may send you marketing emails, including promotions and
            offers. You can opt-out of marketing emails using the unsubscribe
            link/button in the emails.
          </li>
          <li>
            <strong>DATA SECURITY</strong>
            <br /> We implement physical and technical measures to protect your
            data, but we cannot guarantee complete security against hackers. You
            are advised to keep your login data confidential.
          </li>
          <li>
            <strong>DATA RETENTION</strong>
            <br /> We retain your data as long as you are subscribed to our
            offerings and partially retain it for seven (7) years after
            termination to comply with regulatory requirements and enforce our
            Terms and Conditions.
          </li>
          <li>
            <strong>USER RIGHTS UNDER GDPR</strong>
            <br /> You have the right to: Modify or update your data in your
            account settings. Request a printable copy of the data we hold about
            you. Request the deletion of your personal data. Stop us from
            further processing your data. Report us to a regulating authority if
            you believe your data is being mishandled.
          </li>
          <li>
            <strong>LEGAL BASIS FOR DATA PROCESSING</strong>
            <br /> We process your data based on consent, providing services,
            compliance with regulations, legitimate interest, safeguarding
            users' lives, and public interest.
          </li>
          <li>
            <strong>LEGAL BASIS FOR DATA PROCESSING</strong>
            <br /> We process your data based on consent, providing services,
            compliance with regulations, legitimate interest, safeguarding
            users' lives, and public interest.
          </li>
          <li>
            <strong>THIRD PARTY LINKS</strong>
            <br /> We are not responsible for the content or privacy practices
            of third-party links or adverts on our website.
          </li>
          <li>
            <strong>THIRD PARTY LINKS</strong>
            <br /> We are not responsible for the content or privacy practices
            of third-party links or adverts on our website.
          </li>
          <li>
            <strong>UPDATES</strong>
            <br /> This Policy is subject to frequent updates, posted on this
            page.
          </li>
          <li>
            <strong>UPDATES</strong>
            <br /> This Policy is subject to frequent updates, posted on this
            page.
          </li>
        </ol>
      </div>
      <div className="p-2 my-auto bg-wh-100 bg-opacity-30 backdrop-blur-sm flex justify-center items-center rounded-full border-2 border-wh-100 border-opacity-20">
        <div className="p-2 shadow-md bg-grainy-rect bg-center bg-cover bg-opacity-60 flex justify-center items-center rounded-full">
          <div className="h-[80px] w-[20px] shadow-md bg-bl-900 bg-opacity-90 backdrop-blur-sm rounded-full flex flex-col justify-center items-center"></div>
        </div>
      </div>
    </Structure>
  );
};

export default page;
