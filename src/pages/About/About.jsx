/* Code generated with AutoHTML Plugin for Figma */
import "./About.css";
import { CaseStudyCard } from "../../components/CaseStudyCard/CaseStudyCard";
import { HashLink as Link } from "react-router-hash-link";
import { Input } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export const About = ({ className, ...props }) => {
  const validateEmail = (email) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (event) => {
    // Updating formData state with new values when input changes
    setFormData({ ...formData, [event.target.name]: event.target.value || "" });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    // Validate the email address
    if (!validateEmail(formData.user_email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Check if the message is empty, if so, set a message
    if (!formData.message) {
      setMessage("Please enter your message.");
      return;
    }

    // check if the username is empty, if so, set a message
    if (!formData.user_name) {
      setMessage("Please kindly enter your name.");
      return;
    }

    // Set up the email template
    const templateParams = {
      from_name: formData.user_name,
      from_email: formData.user_email,
      message: formData.message,
    };

    // Sending email using emailjs with the service ID,
    // template ID, email template, and user ID
    emailjs
      .send(
        "default_service",
        "template_akw22hk",
        templateParams,
        "Fg2lHPN7RHm1ial7e"
      )
      .then(
        (result) => {
          console.log(result.status, result.text);
          setMessage("Message sent successfully!");
          setFormData({ user_name: "", user_email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          setMessage("Failed to send the message, please try again.");
        }
      );
  };

  const [message, setMessage] = useState("");

  return (
    <div className={"about " + className}>
      <div className="body">
        <div id="topAnchor" className="about-me-section-frame">
          <div className="about-me-title-frame">
            <div className="about-me-title">ABOUT </div>
          </div>
          <div className="about-me-description-frame">
            <div className="about-me-description">
              <div className="i-m-a-versatile-product-and-business-model-designer-developer-and-entrepreneur-with-over-15-years-of-experience-my-passion-is-crafting-profitable-digital-experiences-i-m-currently-sharpening-my-full-stack-web-development-skills-and-open-to-contract-work-in-product-design-and-full-stack-development-for-a-wide-range-of-digital-projects">
                I&#039;m a versatile product and business model designer,
                developer, and entrepreneur with over 15 years of experience. My
                passion is crafting profitable digital experiences. <br />
                <br />
                I&#039;m currently sharpening my full stack web development
                skills and open to contract work in product design and full
                stack development for a wide range of digital projects.{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="get-in-touch-frame">
          <div className="get-in-touch-sub-frame">
            <div className="get-in-touch-title-frame">
              <div className="get-in-touch-title">GET IN TOUCH </div>
            </div>
        
              <div className="contact-form-frame">
                <form
                  onSubmit={sendEmail}
                  className="client-contact-input-frame"
                >
                  <div className="contact-us-name-input">
                    <div className="contact-us-first-name-input">
                      <div className="field-title-label">Name </div>
                      <div className="input-group">
                        <Input
                          className="input"
                          name="user_name"
                          value={formData.user_name || ""}
                          onChange={handleChange}
                          placeholder=""
                          _placeholder={{ color: "blue.900" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="contact-us-email-input">
                    <div className="field-title-label">Email </div>
                    <div className="input-group">
                      <Input
                        className="input"
                        name="user_email"
                        type="email"
                        value={formData.user_email || ""}
                        onChange={handleChange}
                        placeholder=""
                        _placeholder={{ color: "blue.900" }}
                      />
                    </div>
                  </div>
                  <div className="contact-us-message-input">
                    <div className="field-title-label">Message </div>
                    <div className="input-group2">
                      <Textarea
                        className="input2"
                        name="message"
                        value={formData.message || ""}
                        onChange={handleChange}
                        placeholder=""
                        _placeholder={{ color: "blue.900" }}
                      />
                    </div>
                  </div>

                  <button className="button" type="submit">
                    <div className="children">Send </div>
                  </button>
                </form>
              </div>
         
          </div>
        </div>
        <div className="other-online-cases-container">
          <div className="other-online-cases-title-frame">
            <div className="other-online-cases-title">MORE TO DISCOVER </div>
          </div>
          <div className="other-online-cases-frame">
            <div className="other-online-cases-sub-frame">
              <Link to="/volkswagencase#topAnchor">
                <CaseStudyCard
                  showBetaCaseFrame={false}
                  showFrameLogoAirbnb={false}
                  showGitHubCaseFrame={false}
                  showFrameLogoAdsTrees={false}
                  showFrameLogoBdc={false}
                  showFrameLogoSubZeroWolf={false}
                  showFrameLogoCogeco={false}
                  showFrameLogoVolkswagen={true}
                  showOnlineCaseFrame={true}
                  showFrameLogoHealthCheck={false}
                  showFrameLogoAprr={false}
                  showFrameLogoSideWalkLabs={false}
                  showFrameLogoTuneMuse={false}
                  showFigmaCaseFrame={false}
                  showDesignChip={true}
                  showFrameLogoPortfolio={false}
                  showAppStoreCaseFrame={false}
                  showBusinessChip={true}
                  caseStudyCardBody="Oversaw service appointment improvements, leading to a 27% rise in digital bookings as a proportion of the total appointments"
                  showInterviewCaseFrame={false}
                  showFrameLogoShire={false}
                  showCodingChip={false}
                  className="case-study-card-instance"
                />
              </Link>

              <a
                href="https://apps.apple.com/ca/app/health-check-reminders/id6448612606"
                target="_blank"
                rel="noreferrer"
              >
                <CaseStudyCard
                  showBetaCaseFrame={false}
                  showFrameLogoAirbnb={false}
                  showGitHubCaseFrame={false}
                  showFrameLogoAdsTrees={false}
                  showFrameLogoBdc={false}
                  showFrameLogoSubZeroWolf={false}
                  showFrameLogoCogeco={false}
                  showFrameLogoVolkswagen={false}
                  showOnlineCaseFrame={false}
                  showFrameLogoHealthCheck={true}
                  showFrameLogoAprr={false}
                  showFrameLogoSideWalkLabs={false}
                  showFrameLogoTuneMuse={false}
                  showFigmaCaseFrame={false}
                  showDesignChip={true}
                  showFrameLogoPortfolio={false}
                  showAppStoreCaseFrame={true}
                  showBusinessChip={true}
                  caseStudyCardBody="Designed, developed and launched an iOS app promoting better human performance through fundamental health reminders"
                  showInterviewCaseFrame={false}
                  showFrameLogoShire={false}
                  showCodingChip={true}
                  className="case-study-card-instance"
                />
              </a>

              <Link to="/aprrcase#topAnchor">
                <CaseStudyCard
                  showBetaCaseFrame={false}
                  showFrameLogoAirbnb={false}
                  showGitHubCaseFrame={false}
                  showFrameLogoAdsTrees={false}
                  showFrameLogoBdc={false}
                  showFrameLogoSubZeroWolf={false}
                  showFrameLogoCogeco={false}
                  showFrameLogoVolkswagen={false}
                  showOnlineCaseFrame={true}
                  showFrameLogoHealthCheck={false}
                  showFrameLogoAprr={true}
                  showFrameLogoSideWalkLabs={false}
                  showFrameLogoTuneMuse={false}
                  showFigmaCaseFrame={false}
                  showDesignChip={true}
                  showFrameLogoPortfolio={false}
                  showAppStoreCaseFrame={false}
                  showBusinessChip={true}
                  caseStudyCardBody="Directed a one-week Design Sprint involving executives and management to design and launch a highway road trip planning mobile app"
                  showInterviewCaseFrame={false}
                  showFrameLogoShire={false}
                  showCodingChip={false}
                  className="case-study-card-instance"
                />
              </Link>

              <a
                href="https://tune-muse-team.github.io/tunemuse/"
                target="_blank"
                rel="noreferrer"
              >
                <CaseStudyCard
                  showBetaCaseFrame={false}
                  showFrameLogoAirbnb={false}
                  showGitHubCaseFrame={false}
                  showFrameLogoAdsTrees={true}
                  showFrameLogoBdc={false}
                  showFrameLogoSubZeroWolf={false}
                  showFrameLogoCogeco={false}
                  showFrameLogoVolkswagen={false}
                  showOnlineCaseFrame={false}
                  showFrameLogoHealthCheck={false}
                  showFrameLogoAprr={false}
                  showFrameLogoSideWalkLabs={false}
                  showFrameLogoTuneMuse={false}
                  showFigmaCaseFrame={true}
                  showDesignChip={true}
                  showFrameLogoPortfolio={false}
                  showAppStoreCaseFrame={false}
                  showBusinessChip={true}
                  caseStudyCardBody="Designed and developed this collaborative MVP allowing people to watch ads in exchange for planting trees, contributing to save the planet"
                  showInterviewCaseFrame={false}
                  showFrameLogoShire={false}
                  showCodingChip={true}
                  className="case-study-card-instance"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
