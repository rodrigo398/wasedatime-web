import React from "react";
import {
  StyledHeader,
  StyledParagraph,
  StyledBold,
} from "@app/components/PrivacyPolicy";

const TermsOfService = () => (
  <div className="bg-light-bgMain dark:bg-dark-bgMain p-6 md:py-24 md:px-60">
    <StyledHeader headerType="h2" centered>
      TERMS OF SERVICE
    </StyledHeader>
    <StyledParagraph centered>Last updated January 18, 2021</StyledParagraph>

    <StyledHeader headerType="h4" centered>
      1. Terms
    </StyledHeader>

    <StyledParagraph>
      By accessing this Website, accessible from https://wasedatime.com, you are
      agreeing to be bound by these Website Terms and Conditions of Use and
      agree that you are responsible for the agreement with any applicable local
      laws. If you disagree with any of these terms, you are prohibited from
      accessing this site. The materials contained in this Website are protected
      by copyright and trade mark law.
    </StyledParagraph>

    <StyledHeader headerType="h4" centered>
      2. Use License
    </StyledHeader>

    <StyledParagraph>
      Permission is granted to temporarily download one copy of the materials on
      WasedaTime's Website for personal, non-commercial transitory viewing only.
      This is the grant of a license, not a transfer of title, and under this
      license you may not:
    </StyledParagraph>

    <ul className="text-light-text2 dark:text-dark-text2">
      <li>
        <StyledParagraph>・modify or copy the materials;</StyledParagraph>
      </li>
      <li>
        <StyledParagraph>
          ・use the materials for any commercial purpose or for any public
          display;
        </StyledParagraph>
      </li>
      <li>
        <StyledParagraph>
          ・attempt to reverse engineer any software contained on WasedaTime's
          Website;
        </StyledParagraph>
      </li>
      <li>
        <StyledParagraph>
          ・remove any copyright or other proprietary notations from the
          materials; or
        </StyledParagraph>
      </li>
      <li>
        <StyledParagraph>
          ・transferring the materials to another person or "mirror" the
          materials on any other server.
        </StyledParagraph>
      </li>
    </ul>

    <StyledParagraph>
      This will let WasedaTime to terminate upon violations of any of these
      restrictions. Upon termination, your viewing right will also be terminated
      and you should destroy any downloaded materials in your possession whether
      it is printed or electronic format. These Terms of Service has been
      created with the help of the{" "}
      <a href="https://www.termsofservicegenerator.net">
        Terms Of Service Generator
      </a>
      .
    </StyledParagraph>

    <StyledHeader headerType="h4" centered>
      3. Disclaimer
    </StyledHeader>

    <StyledParagraph>
      All the materials on WasedaTime’s Website are provided "as is". WasedaTime
      makes no warranties, may it be expressed or implied, therefore negates all
      other warranties. Furthermore, WasedaTime does not make any
      representations concerning the accuracy or reliability of the use of the
      materials on its Website or otherwise relating to such materials or any
      sites linked to this Website.
    </StyledParagraph>

    <StyledHeader headerType="h4" centered>
      4. Limitations
    </StyledHeader>

    <StyledParagraph>
      WasedaTime or its suppliers will not be hold accountable for any damages
      that will arise with the use or inability to use the materials on
      WasedaTime’s Website, even if WasedaTime or an authorize representative of
      this Website has been notified, orally or written, of the possibility of
      such damage. Some jurisdiction does not allow limitations on implied
      warranties or limitations of liability for incidental damages, these
      limitations may not apply to you.
    </StyledParagraph>

    <StyledHeader headerType="h4" centered>
      5. Revisions and Errata
    </StyledHeader>

    <StyledParagraph>
      The materials appearing on WasedaTime’s Website may include technical,
      typographical, or photographic errors. WasedaTime will not promise that
      any of the materials in this Website are accurate, complete, or current.
      WasedaTime may change the materials contained on its Website at any time
      without notice. WasedaTime does not make any commitment to update the
      materials.
    </StyledParagraph>

    <StyledHeader headerType="h4" centered>
      6. Links
    </StyledHeader>

    <StyledParagraph>
      WasedaTime has not reviewed all of the sites linked to its Website and is
      not responsible for the contents of any such linked site. The presence of
      any link does not imply endorsement by WasedaTime of the site. The use of
      any linked website is at the user’s own risk.
    </StyledParagraph>

    <StyledHeader headerType="h4" centered>
      7. Site Terms of Use Modifications
    </StyledHeader>

    <StyledParagraph>
      WasedaTime may revise these Terms of Use for its Website at any time
      without prior notice. By using this Website, you are agreeing to be bound
      by the current version of these Terms and Conditions of Use.
    </StyledParagraph>

    <StyledHeader headerType="h4" centered>
      8. Your Privacy
    </StyledHeader>

    <StyledParagraph>
      Please read our <a href="/privacy-policy">Privacy Policy</a>.
    </StyledParagraph>

    <StyledHeader headerType="h4" centered>
      9. Governing Law
    </StyledHeader>

    <StyledParagraph>
      Any claim related to WasedaTime's Website shall be governed by the laws of
      Japan without regards to its conflict of law provisions.
    </StyledParagraph>
  </div>
);

export default TermsOfService;
