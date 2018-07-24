import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

class PrivacyPolicy extends Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Privacy Policy | M8 Documents</title>
        </Helmet>

        <div>
          <h1>Privacy Policy</h1>

          <p>
            M8 values your privacy. This privacy policy ("Policy") applies to M8
            Web sites and applications. This Policy explains how your personal
            information is collected, used, and disclosed by M8.
          </p>

          <h2>PERSONAL INFORMATION COLLECTED</h2>

          <p>
            We collect information from you in various ways when you use our
            Sites and Applications. We may collect personal information you
            directly provide on our Sites. In addition, we may collect personal
            information from you as a user of our Applications.
          </p>
          <p>
            In addition, when you visit our Sites some information may be
            automatically collected. For example, it is standard for your Web
            browser to automatically send information to every Web site you
            visit including ours. That information includes your computer's
            Internet Protocol (IP) address, access times, browser type and
            language, and referring Web site addresses. We may also collect
            information about your computer's operating system and information
            about your usage and activity on our Sites. We use this information,
            which does not identify individual users, to analyze trends, to
            administer the site, to track users’ movements around the site and
            to gather demographic information about our user-base as a whole.
          </p>

          <h2>COOKIES</h2>
          <p>
            We may automatically collect certain information through the use of
            "cookies." Cookies are small data files that are stored on your hard
            drive by a Web site. Among other things, the use of cookies helps us
            to improve our Sites and your experience. We use cookies to see
            which areas and features are most popular, to count the number of
            computers accessing our Sites, to personalize your experience, and
            to remember your preferences.
          </p>

          <p>
            We link the information we store in cookies to any personally
            identifiable information you submit while on our site. If your
            browser is set not to accept cookies or if you reject a cookie, you
            may not be able to access certain features or services of our Sites.
            The use of cookies by our service providers is not covered by our
            privacy statement. We do not have access or control over these
            cookies. Our service providers use session ID cookies to collect
            data in order to enable us to provide a better user experience.
          </p>

          <h2>USE OF PERSONAL INFORMATION WE COLLECT</h2>

          <p>
            We use your personal information to provide you with services, to
            operate and improve our Sites and Applications, to send you
            messages, and for other purposes described in this Policy or
            disclosed to you on our Sites or in connection with our services. We
            may also share your personal information with certain marketing
            partners. For example, our marketing partners may want to contact
            you to tell you about new offers, products or services. We may also
            use the information we collect from you on our Sites and
            Applications: to personalize and improve your experience on our
            Sites and with our Applications; to respond to comments and
            questions and provide customer service; to deliver service messages
            and other services and content you request and to send information
            related to accounts and services, including confirmations, notices,
            updates, alerts, and support; and to conduct an aggregated analysis
            of the performance of promotions. M8 may store and process personal
            information in the United States and other countries.
          </p>

          <h2>SHARING OF PERSONAL INFORMATION</h2>
          <p>
            We do not share your personal information with third parties other
            than as described above and as follows: with third party vendors,
            marketing partners, consultants and other service providers
            ("Service Providers") who are working on our behalf or in
            conjunction with us and need access to your information to carry out
            their work for us; to (a) comply with laws or respond to lawful
            requests and legal process, (b) to protect the rights and property
            of M8, our agents, members, and others including to enforce our
            agreements, policies and terms of use, or (c) in the good faith
            belief that disclosure is needed to respond to an emergency or
            protect the personal safety of any person; and in connection with
            any merger, sale of company assets, financing, or acquisition of all
            or a portion of our business to another company. In any such event,
            we will provide notice if your data is transferred and becomes
            subject to a different privacy policy.
          </p>

          <h2>SECURITY OF YOUR PERSONAL INFORMATION</h2>

          <p>
            M8 takes reasonable security measures to protect your personal
            information to prevent loss, misuse, unauthorized access,
            disclosure, alteration, and destruction. Please be aware, however,
            that despite our efforts, no security measures are impenetrable.
          </p>
          <p>
            If you use a password on our Site, you are responsible for keeping
            it confidential. Do not share it with any other person. If you
            believe your password has been misused, please advise us
            immediately.
          </p>

          <h2>QUESTIONS ABOUT THIS POLICY</h2>
          <p>
            If you have any questions regarding this Policy, please contact us
            at privacy@m8agency.com.
          </p>

          <h2>CHANGES TO THIS POLICY</h2>
          <p>
            M8 may change this Policy from time to time. If we make any changes
            to this Policy, we will change the "Last updated" date below.
          </p>

          <p>
            <em>Last updated on November 29, 2016.</em>
          </p>
        </div>
      </Layout>
    );
  }
}

export default PrivacyPolicy;
