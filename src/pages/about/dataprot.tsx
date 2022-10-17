import React from "react"
import { Container } from "react-bootstrap"
import BaseLayout from "../../components/static/BaseLayout"
import MainHeading from "../../components/static/MainHeading"

const DataProtectionPage = () => {
  return (
    <BaseLayout pageTitle="Data protection | ReInHerit Digital Hub">
      <MainHeading
        breadCrumb={[
          { label: "About", value: "/about" },
          { label: "Data protection", value: "/about/dataprot" },
        ]}
      >
        Data protection 
      </MainHeading>
      <Container fluid className="bg-white shadow p-sm-3 p-md-4 rounded">
        <h2>A. Introduction</h2>
        <p>
        We (the ReInHerit Consortium) value your privacy and are committed to protecting your privacy and handling your data in an open and 
        transparent manner, also in compliance with the EU General Data Protection Regulation (GDPR). This privacy statement:
            <ul>
            <li>explains which information we are collecting, how we are managing it, and your rights under data protection law,</li>
            <li>in this statement, by 'personal data' we refer to any information related to you; by "processing" we refer to any operation performed on the data.</li>
            <li>According to the Transparency Principle, this document will provide you with information about the processing of your 
              personal data as required by Art. 12, 13, and 14 of the GDPR.</li>
            </ul>
        </p>
        <h2>B. Who we are</h2> 
        <p>The ReInHerit consortium includes 12 partners from 7 EU countries. The Bank of Cyprus Cultural Foundation is the project coordinator and the University of Graz is responsible 
          for the development of the Digital Hub and are acting as the data controller within the meaning of the GDPR.</p>
        <p>Any question or if you want to exercise any of your rights, should be directed to these two Consortium partners. You can contact us at:</p>
        <ul>
          <li><a href="mailto: digitalhub.reinherit@gmail.com">Digital Hub support email</a>, maintained by staff at the University of Graz,</li>
          <li><a href="mailto: chiara.zuanni@uni-graz.at">Chiara Zuanni</a>, responsible at the University of Graz,</li>
          <li><a href="mailto: info@cultural.bankofcyprus.com">Bank of Cyprus</a>, coordinator of the ReInHerit project.</li>
        </ul>
        <h2>C. What information we collect</h2>
        <p>We use analytics to monitor the number of visitors to the site and its use (e.g. page views, navigation paths). If you visit the Hub, 
          the following types of personal information may be collected and used:
        </p>
        <ul>
          <li>
            information about your computer including your IP address,
            geographical location, browser type and version, and operating
            system;
          </li>
          <li>
            information about your visits to and use of this website including
            the referral source, length of visit, page views, and website
            navigation paths;
          </li>
          <li>
            information, such as your GitHub username or Twitter username, that you enter in
            order to join the Networking Hub;
          </li>
          <li>
            information that you provide for us with the intention of publishing
            it on our website, which might include digital objects for the online collections and your email 
            (to be contacted only for clarificaitons in relation to the digital objects you submit to the Hub);
          </li>
          <li>
            information contained in any communications that you send to us by
            email;
          </li>
        </ul>
        <h2>D. Using your personal information</h2>
        <p>
          Personal information submitted to us through our website will be used
          for the purposes specified in this policy or on the relevant pages of
          the website. We may use your personal information for the following:
        </p>
        <ul>
          <li>managing the ReInHerit Digital Hub;</li>
          <li>enabling your use of the Forum available on our website;</li>
          <li>
            gather statistical information about our users
            (without any identifying information) for the purpose of reporting on the project reach;
          </li>
          <li>keeping our website secure and prevent fraud;</li>
        </ul>
        <p>
          If you submit personal information for publication on our website, we
          will publish and otherwise use that information in accordance with the
          license you grant to us.
        </p>
        <p>
          Before you disclose to us the personal information of another person,
          you must obtain that person's consent to both the disclosure and the
          processing of that personal information in accordance with this policy
        </p>
        <h2>E. Disclosing personal information</h2>
        <p>
          We may disclose your personal information to any of the consortium
          members reasonably necessary for the purposes set out in this policy.
        </p>
        <p>We may disclose your personal information:</p>
        <ul>
          <li>to the extent that we are required to do so by law;</li>
          <li>
            in connection with any risk situation in the Networking Hub;
          </li>
         </ul>
        <p>
          We will not provide your personal information to third parties.
        </p>
        <h2>F. International data transfers</h2>
        <p>
            Information that we collect may be stored, processed in, and
            transferred between any of the countries in which we operate in
            order to enable us to use the information in accordance with this
            policy.
          </p>
          <p>
            Personal information that you publish on our website or submit for
            publication on our website may be available, via the internet,
            around the world. We cannot prevent the use or misuse of such
            information by others.
          </p>
        <h2>G. Retaining personal information</h2>
          <p>
            Personal information that we process for any purpose or purposes
            shall not be kept for longer than is necessary for that purpose or
            those purposes.
          </p>
        <h2>H. Security of your personal information</h2>
        <p>We use social networks identifiers (GitHub, Twitter) to enable your login in the Forum. We store your username, 
          and we do not directly collect further information, nor will we ever ask you to submit a password or further personal information.</p>
        <h2>I. Amendments</h2>
        <p>
          We may update this policy in the course of the project. You should check this page occasionally to
          ensure you are aware of any changes to this policy.
        </p>
        <h2>J. Your rights</h2>
        <p>The GDPR grants you certain rights with regards to the processing of your personal data. These rights include:
        <ul>
          <li>Access (Art. 15 of the GDPR): you have the right to obtain confirmation as to whether we process your personal data, 
            as well as information about how we process it. </li>
          <li>Rectification (Art. 16 of the GDPR): if your personal data that we process are incomplete or inaccurate, you have the right 
            to request rectification of such data without undue delay.</li>
          <li>Erasure ("right to be forgotten" – Art. 17 of the GDPR): in certain circumstances (e.g. if your data are processed unlawfully
             or unnecessarily) you may request erasure of your personal data.</li>
          <li>Restriction of processing (Art. 18 of the GDPR): in certain circumstances (e.g. if you contest accuracy of your data 
            that we process or lawfulness of the processing) you may request restriction of processing of your data. Such data will not 
            be erased, but in principle can only be processed with your consent;</li>
            <li>Data portability (Art. 20 of the GDPR): in certain circumstances, you may request transmission of your data to another 
              controller in a structured, commonly used and machine-readable format;</li>
            <li>Right to object (Art. 21 of the GDPR): if you did not consent to the processing, or if it is not necessary to comply 
              with a legal obligation, you may always object to it, in which case we shall no longer process your data.</li>
            <li>Right to withdraw your consent to the processing of your personal data at any time (Art. 7(3) of the GDPR). The withdrawal of consent will not affect the lawfulness of processing based on consent before its withdrawal.</li>
        </ul>
        </p>
        <p>On the ReInHerit Digital Hub these rights pertain mainly to the use of the Forum, where you can register with a GitHub/Twitter account.</p>
        <h2>K. Third party websites</h2>
        <p>
          Our website includes hyperlinks to, and details of, third party
          websites. We have no control over, and are not responsible for, the
          privacy policies and practices of third parties.
        </p>
        <h2>L. Cookies</h2>
        <p>Our website uses cookies. A cookie is a file containing an identifier
          (a string of letters and numbers) that is sent by a web server to a
          web browser and is stored by the browser. The identifier is then sent
          back to the server each time the browser requests a page from the
          server. Cookies may be either “persistent” cookies or “session”
          cookies: a persistent cookie will be stored by a web browser and will
          remain valid until its set expiry date, unless deleted by the user
          before the expiry date; a session cookie, on the other hand, will
          expire at the end of the user session, when the web browser is closed.
          Cookies do not typically contain any information that personally
          identifies a user.
        </p>
        <p>In particular, we use Google Analytics on our website to recognize 
          a computer when a user visits the website, track users as they navigate the website, 
          so to analyse and improve the website's usability and accessibility.</p>
          <p>When you first visit the website, a pop-up will ask your consent to the use of cookies. 
            Most browsers allow you to delete cookies.
          </p>
      </Container>
    </BaseLayout>
  )
}

export default DataProtectionPage
