// src/components/CaseStudyCard/CaseStudyCard.jsx

/* Code generated with AutoHTML Plugin for Figma */
import "./CaseStudyCard.css";

export const CaseStudyCard = ({
  showBetaCaseFrame = true,
  showGitHubCaseFrame = true,
  showFrameLogoAdsTrees = true,
  showFrameLogoSubZeroWolf = true,
  showFrameLogoAirbnb = true,
  showFrameLogoCogeco = true,
  showFrameLogoVolkswagen = true,
  showOnlineCaseFrame = true,
  showFrameLogoHealthCheck = true,
  showFrameLogoBdc = true,
  showFrameLogoAprr = true,
  showFrameLogoSideWalkLabs = true,
  showFrameLogoTuneMuse = true,
  showFigmaCaseFrame = true,
  showDesignChip = true,
  showFrameLogoPortfolio = true,
  showFrameLogoAiwair = false,
  showAppStoreCaseFrame = true,
  showBusinessChip = true,
  caseStudyCardBody = "Performed international strategic user research for Sidewalk Labs, an Alphabet group (Google) company, to uncover client needs and product requirements",
  showInterviewCaseFrame = true,
  showFrameLogoShire = true,
  showCodingChip = true,
  className,
  ...props
}) => {
  return (
    <div className={"case-study-card " + className}>
      <div className="case-study-card-client-logo-frame">
        {showFrameLogoSideWalkLabs && (
          <>
            <div className="frame-logo-side-walk-labs">
              <img
                className="sidewalk-labs-logo-2018"
                src="sidewalk-labs-logo-20180.png"
                alt="Logo Sidewalks Labs"
              />
            </div>
          </>
        )}
        {showFrameLogoAiwair && (
          <>
            <div className="frame-logo-aiwair">
              <img
                className="logo-aiwair"
                src="aiwair-logo0.svg"
                alt="Logo Aiwair"
              />
            </div>
          </>
        )}
        {showFrameLogoSubZeroWolf && (
          <>
            <div className="frame-logo-sub-zero-wolf">
              <img
                className="logo-szw-1"
                src="logo-szw-10.png"
                alt="Logo Sub Zero Wolf"
              />
            </div>
          </>
        )}
        {showFrameLogoAirbnb && (
          <>
            <div className="frame-logo-airbnb">
              <img className="logo-airbnb" src="logo-airbnb0.png" alt="Logo Airbnb" />
            </div>
          </>
        )}
        {showFrameLogoCogeco && (
          <>
            <div className="frame-logo-cogeco">
              <img className="logo-cogeco" src="logo-cogeco0.png" alt="Logo Cogeco" />
            </div>
          </>
        )}
        {showFrameLogoVolkswagen && (
          <>
            <div className="frame-logo-volkswagen">
              <img className="logo-volkswagen" src="logo-volkswagen0.png" alt="Logo Volkswagen" />
            </div>
          </>
        )}
        {showFrameLogoBdc && (
          <>
            <div className="frame-logo-bdc">
              <img className="logo-bdc-1" src="logo-bdc-10.png" alt="Logo BDC" />
            </div>
          </>
        )}
        {showFrameLogoAprr && (
          <>
            <div className="frame-logo-aprr">
              <img className="aprr-logo" src="aprr-logo0.png" alt="Logo APRR" />
            </div>
          </>
        )}
        {showFrameLogoShire && (
          <>
            <div className="frame-logo-shire">
              <img className="shire-logo" src="shire-logo0.png" alt="Logo Shire" />
            </div>
          </>
        )}
        {showFrameLogoHealthCheck && (
          <>
            <div className="frame-logo-health-check">
              <img className="logo-health-check" src="logo-health-check0.png" alt="Logo Health Check" />
            </div>
          </>
        )}
        {showFrameLogoTuneMuse && (
          <>
            <div className="frame-logo-tune-muse">
              <img className="tune-muse-logo" src="tune-muse-logo0.png" alt="Logo Tune Muse" />
            </div>
          </>
        )}
        {showFrameLogoAdsTrees && (
          <>
            <div className="frame-logo-ads-trees">
              <img className="ads-trees-logo" src="ads-trees-logo0.png" alt="Logo AdsTress" />
            </div>
          </>
        )}
        {showFrameLogoPortfolio && (
          <>
            <div className="frame-logo-portfolio">
              <img className="logo-portfolio" src="logo-portfolio0.png" alt="Logo Portfolio" />
            </div>
          </>
        )}
      </div>
      <div className="case-study-card-divider"></div>
      <div className="case-study-card-body-frame">
        <div className="case-study-card-body">{caseStudyCardBody} </div>
      </div>
      <div className="case-study-card-divider"></div>
      <div className="case-study-card-expertise-chips-frame">
        {showBusinessChip && (
          <>
            <div className="business-chip">
              <div className="business">BUSINESS </div>
            </div>
          </>
        )}
        {showDesignChip && (
          <>
            <div className="design-chip">
              <div className="design">DESIGN </div>
            </div>
          </>
        )}
        {showCodingChip && (
          <>
            <div className="coding-chip">
              <div className="code">CODE </div>
            </div>
          </>
        )}
      </div>
      <div className="case-study-card-divider"></div>
      {showInterviewCaseFrame && (
        <>
          <div className="interview-case-frame">
            <svg
              className="interview"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.73333 2.1001C3.30898 2.1001 2.90202 2.26867 2.60196 2.56873C2.3019 2.86879 2.13333 3.27575 2.13333 3.7001C2.13333 4.12444 2.3019 4.53141 2.60196 4.83147C2.90202 5.13153 3.30898 5.3001 3.73333 5.3001C4.15768 5.3001 4.56464 5.13153 4.8647 4.83147C5.16476 4.53141 5.33333 4.12444 5.33333 3.7001C5.33333 3.27575 5.16476 2.86879 4.8647 2.56873C4.56464 2.26867 4.15768 2.1001 3.73333 2.1001ZM6.4 2.63343V3.7001H13.3333V9.56676H7.46666H6.93333H6.4V10.0105C6.39048 10.0681 6.39048 10.1269 6.4 10.1845V10.6334H6.93333H7.46666H14.4C14.4707 10.6344 14.5408 10.6214 14.6064 10.595C14.672 10.5687 14.7317 10.5295 14.782 10.4799C14.8324 10.4303 14.8723 10.3712 14.8996 10.306C14.9269 10.2408 14.9409 10.1708 14.9409 10.1001C14.9409 10.0294 14.9269 9.95944 14.8996 9.89424C14.8723 9.82903 14.8324 9.7699 14.782 9.72028C14.7317 9.67066 14.672 9.63153 14.6064 9.60518C14.5408 9.57882 14.4707 9.56577 14.4 9.56676V3.16676C14.4 3.02532 14.3438 2.88967 14.2438 2.78966C14.1438 2.68964 14.0081 2.63345 13.8667 2.63343H6.4ZM8.52291 5.29593C8.42076 5.29919 8.32169 5.33173 8.2375 5.38968L6.77187 6.36676H6.4H3.2C2.61066 6.36676 2.13333 6.8441 2.13333 7.43343V14.3491C2.13333 14.6531 2.38037 14.9001 2.68437 14.9001C2.97451 14.9001 3.21517 14.6746 3.23437 14.3855L3.46771 10.8824C3.47731 10.7427 3.59306 10.6334 3.73333 10.6334C3.8736 10.6334 3.98936 10.7421 3.99896 10.8813L4.23229 14.3855C4.25149 14.6751 4.49216 14.9001 4.78229 14.9001C5.08629 14.9001 5.33333 14.6531 5.33333 14.3491V7.96676C5.33333 7.67236 5.57226 7.43343 5.86666 7.43343H6.93333C7.03862 7.43342 7.14156 7.40225 7.22916 7.34385L8.82916 6.27718C8.92713 6.21394 9.00168 6.12034 9.04139 6.01071C9.08111 5.90107 9.0838 5.78145 9.04906 5.67014C9.01432 5.55883 8.94406 5.46197 8.84904 5.39438C8.75401 5.3268 8.63946 5.29222 8.52291 5.29593Z"
                fill="#3B3B3B"
              />
            </svg>

            <div className="interview-case">Presented during interviews </div>
          </div>
        </>
      )}
      {showOnlineCaseFrame && (
        <>
          <div className="online-case-frame">
            <svg
              className="internet"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1141_836)">
                <path
                  d="M8.00001 2.1001C4.47094 2.1001 1.60001 4.97103 1.60001 8.5001C1.60001 12.0292 4.47094 14.9001 8.00001 14.9001C8.55361 14.9001 9.08747 14.8225 9.60001 14.6897V11.8928C9.17974 13.0891 8.57227 13.8334 8.00001 13.8334C7.31841 13.8334 6.58397 12.7876 6.17917 11.1668H9.60001V10.1001H5.97396C5.90516 9.5993 5.86667 9.06276 5.86667 8.5001C5.86667 7.9326 5.91561 7.40453 5.98542 6.9001H10.0146C10.0844 7.40453 10.1333 7.9326 10.1333 8.5001C10.1333 8.64623 10.1236 8.78529 10.1188 8.92822C10.4041 8.66476 10.7819 8.5001 11.2 8.5001C11.2 7.9422 11.1643 7.409 11.1031 6.9001H13.0865C13.2459 7.40542 13.3333 7.94271 13.3333 8.5001C13.3333 8.87076 13.2913 9.23097 13.2188 9.58031L14.1521 10.2459C14.31 9.6902 14.4 9.10596 14.4 8.5001C14.4 4.97103 11.5291 2.1001 8.00001 2.1001ZM8.00001 3.16676C8.67992 3.16676 9.40511 4.21968 9.81042 5.83343H6.18959C6.5949 4.21968 7.3201 3.16676 8.00001 3.16676ZM5.90001 3.59906C5.54592 4.20039 5.26432 4.96138 5.07396 5.83343H3.38438C3.95859 4.84424 4.84108 4.05462 5.90001 3.59906ZM10.1 3.59906C11.1589 4.05462 12.0414 4.84424 12.6156 5.83343H10.926C10.7357 4.96138 10.4541 4.20039 10.1 3.59906ZM2.91355 6.9001H4.89688C4.83571 7.409 4.80001 7.9422 4.80001 8.5001C4.80001 9.05796 4.83608 9.59076 4.89688 10.1001H2.91251C2.75357 9.5945 2.66667 9.05743 2.66667 8.5001C2.66667 7.94271 2.75414 7.40542 2.91355 6.9001ZM11.2083 9.56051C11.1325 9.5589 11.0572 9.57347 10.9875 9.60326C10.9177 9.63305 10.8551 9.67737 10.8039 9.73326C10.7526 9.78916 10.7139 9.85534 10.6902 9.9274C10.6665 9.99946 10.6585 10.0757 10.6667 10.1511V14.9001C10.6667 15.1945 10.9056 15.4334 11.2 15.4334C11.3536 15.4334 11.4894 15.3666 11.5865 15.2626L11.5896 15.2636L12.5927 14.0782L13.6563 16.2053C13.6876 16.268 13.7309 16.3239 13.7838 16.3698C13.8368 16.4157 13.8982 16.4507 13.9647 16.4729C14.0311 16.495 14.1013 16.5039 14.1712 16.4989C14.241 16.4939 14.3093 16.4753 14.3719 16.4439C14.4346 16.4126 14.4905 16.3692 14.5364 16.3163C14.5822 16.2634 14.6173 16.2019 14.6394 16.1355C14.6616 16.069 14.6704 15.9988 14.6654 15.929C14.6605 15.8591 14.6418 15.7909 14.6104 15.7282L13.525 13.5584L15.0802 13.2793L15.0813 13.2699C15.3021 13.2054 15.4667 13.0089 15.4667 12.7668C15.4667 12.5806 15.3649 12.4247 15.2198 12.3293L15.2219 12.3188L11.574 9.71676C11.4768 9.6195 11.3458 9.56353 11.2083 9.56051ZM3.38855 11.1668H5.07292C5.26279 12.0404 5.54483 12.7995 5.89896 13.4011C4.84136 12.9457 3.96295 12.1556 3.38855 11.1668Z"
                  fill="#3B3B3B"
                />
              </g>
              <defs>
                <clipPath id="clip0_1141_836">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>

            <div className="online-case">Online </div>
          </div>
        </>
      )}
      {showAppStoreCaseFrame && (
        <>
          <div className="app-store-case-frame">
            <svg
              className="internet2"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1219_150623)">
                <path
                  d="M8.00001 2.1001C4.47094 2.1001 1.60001 4.97103 1.60001 8.5001C1.60001 12.0292 4.47094 14.9001 8.00001 14.9001C8.55361 14.9001 9.08747 14.8225 9.60001 14.6897V11.8928C9.17974 13.0891 8.57227 13.8334 8.00001 13.8334C7.31841 13.8334 6.58397 12.7876 6.17917 11.1668H9.60001V10.1001H5.97396C5.90516 9.5993 5.86667 9.06276 5.86667 8.5001C5.86667 7.9326 5.9156 7.40453 5.98542 6.9001H10.0146C10.0844 7.40453 10.1333 7.9326 10.1333 8.5001C10.1333 8.64623 10.1236 8.78529 10.1188 8.92822C10.4041 8.66476 10.7819 8.5001 11.2 8.5001C11.2 7.9422 11.1643 7.409 11.1031 6.9001H13.0865C13.2459 7.40542 13.3333 7.94271 13.3333 8.5001C13.3333 8.87076 13.2913 9.23097 13.2188 9.58031L14.1521 10.2459C14.31 9.6902 14.4 9.10596 14.4 8.5001C14.4 4.97103 11.5291 2.1001 8.00001 2.1001ZM8.00001 3.16676C8.67992 3.16676 9.40511 4.21968 9.81042 5.83343H6.18959C6.5949 4.21968 7.3201 3.16676 8.00001 3.16676ZM5.90001 3.59906C5.54592 4.20039 5.26432 4.96138 5.07396 5.83343H3.38438C3.95859 4.84424 4.84108 4.05462 5.90001 3.59906ZM10.1 3.59906C11.1589 4.05462 12.0414 4.84424 12.6156 5.83343H10.926C10.7357 4.96138 10.4541 4.20039 10.1 3.59906ZM2.91355 6.9001H4.89688C4.83571 7.409 4.80001 7.9422 4.80001 8.5001C4.80001 9.05796 4.83608 9.59076 4.89688 10.1001H2.91251C2.75357 9.5945 2.66667 9.05743 2.66667 8.5001C2.66667 7.94271 2.75414 7.40542 2.91355 6.9001ZM11.2083 9.56051C11.1325 9.5589 11.0572 9.57347 10.9875 9.60326C10.9177 9.63305 10.8551 9.67737 10.8039 9.73326C10.7526 9.78916 10.7139 9.85534 10.6902 9.9274C10.6665 9.99946 10.6585 10.0757 10.6667 10.1511V14.9001C10.6667 15.1945 10.9056 15.4334 11.2 15.4334C11.3536 15.4334 11.4894 15.3666 11.5865 15.2626L11.5896 15.2636L12.5927 14.0782L13.6563 16.2053C13.6876 16.268 13.7309 16.3239 13.7838 16.3698C13.8368 16.4157 13.8982 16.4507 13.9647 16.4729C14.0311 16.495 14.1013 16.5039 14.1712 16.4989C14.241 16.4939 14.3093 16.4753 14.3719 16.4439C14.4346 16.4126 14.4905 16.3692 14.5364 16.3163C14.5822 16.2634 14.6173 16.2019 14.6394 16.1355C14.6616 16.069 14.6704 15.9988 14.6654 15.929C14.6605 15.8591 14.6418 15.7909 14.6104 15.7282L13.525 13.5584L15.0802 13.2793L15.0813 13.2699C15.3021 13.2054 15.4667 13.0089 15.4667 12.7668C15.4667 12.5806 15.3649 12.4247 15.2198 12.3293L15.2219 12.3188L11.574 9.71676C11.4768 9.6195 11.3458 9.56353 11.2083 9.56051ZM3.38855 11.1668H5.07292C5.26279 12.0404 5.54483 12.7995 5.89896 13.4011C4.84136 12.9457 3.96295 12.1556 3.38855 11.1668Z"
                  fill="#3B3B3B"
                />
              </g>
              <defs>
                <clipPath id="clip0_1219_150623">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>

            <div className="app-store">View on the AppStore </div>
          </div>
        </>
      )}
      {showGitHubCaseFrame && (
        <>
          <div className="git-hub-case-frame">
            <svg
              className="internet3"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1219_152524)">
                <path
                  d="M8.00001 2.1001C4.47094 2.1001 1.60001 4.97103 1.60001 8.5001C1.60001 12.0292 4.47094 14.9001 8.00001 14.9001C8.55361 14.9001 9.08747 14.8225 9.60001 14.6897V11.8928C9.17974 13.0891 8.57227 13.8334 8.00001 13.8334C7.31841 13.8334 6.58397 12.7876 6.17917 11.1668H9.60001V10.1001H5.97396C5.90516 9.5993 5.86667 9.06276 5.86667 8.5001C5.86667 7.9326 5.9156 7.40453 5.98542 6.9001H10.0146C10.0844 7.40453 10.1333 7.9326 10.1333 8.5001C10.1333 8.64623 10.1236 8.78529 10.1188 8.92822C10.4041 8.66476 10.7819 8.5001 11.2 8.5001C11.2 7.9422 11.1643 7.409 11.1031 6.9001H13.0865C13.2459 7.40542 13.3333 7.94271 13.3333 8.5001C13.3333 8.87076 13.2913 9.23097 13.2188 9.58031L14.1521 10.2459C14.31 9.6902 14.4 9.10596 14.4 8.5001C14.4 4.97103 11.5291 2.1001 8.00001 2.1001ZM8.00001 3.16676C8.67992 3.16676 9.40511 4.21968 9.81042 5.83343H6.18959C6.5949 4.21968 7.3201 3.16676 8.00001 3.16676ZM5.90001 3.59906C5.54592 4.20039 5.26432 4.96138 5.07396 5.83343H3.38438C3.95859 4.84424 4.84108 4.05462 5.90001 3.59906ZM10.1 3.59906C11.1589 4.05462 12.0414 4.84424 12.6156 5.83343H10.926C10.7357 4.96138 10.4541 4.20039 10.1 3.59906ZM2.91355 6.9001H4.89688C4.83571 7.409 4.80001 7.9422 4.80001 8.5001C4.80001 9.05796 4.83608 9.59076 4.89688 10.1001H2.91251C2.75357 9.5945 2.66667 9.05743 2.66667 8.5001C2.66667 7.94271 2.75414 7.40542 2.91355 6.9001ZM11.2083 9.56051C11.1325 9.5589 11.0572 9.57347 10.9875 9.60326C10.9177 9.63305 10.8551 9.67737 10.8039 9.73326C10.7526 9.78916 10.7139 9.85534 10.6902 9.9274C10.6665 9.99946 10.6585 10.0757 10.6667 10.1511V14.9001C10.6667 15.1945 10.9056 15.4334 11.2 15.4334C11.3536 15.4334 11.4894 15.3666 11.5865 15.2626L11.5896 15.2636L12.5927 14.0782L13.6563 16.2053C13.6876 16.268 13.7309 16.3239 13.7838 16.3698C13.8368 16.4157 13.8982 16.4507 13.9647 16.4729C14.0311 16.495 14.1013 16.5039 14.1712 16.4989C14.241 16.4939 14.3093 16.4753 14.3719 16.4439C14.4346 16.4126 14.4905 16.3692 14.5364 16.3163C14.5822 16.2634 14.6173 16.2019 14.6394 16.1355C14.6616 16.069 14.6704 15.9988 14.6654 15.929C14.6605 15.8591 14.6418 15.7909 14.6104 15.7282L13.525 13.5584L15.0802 13.2793L15.0813 13.2699C15.3021 13.2054 15.4667 13.0089 15.4667 12.7668C15.4667 12.5806 15.3649 12.4247 15.2198 12.3293L15.2219 12.3188L11.574 9.71676C11.4768 9.6195 11.3458 9.56353 11.2083 9.56051ZM3.38855 11.1668H5.07292C5.26279 12.0404 5.54483 12.7995 5.89896 13.4011C4.84136 12.9457 3.96295 12.1556 3.38855 11.1668Z"
                  fill="#3B3B3B"
                />
              </g>
              <defs>
                <clipPath id="clip0_1219_152524">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>

            <div className="git-hub">View on GitHub </div>
          </div>
        </>
      )}
      {showFigmaCaseFrame && (
        <>
          <div className="figma-case-frame">
            <svg
              className="internet4"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1219_154613)">
                <path
                  d="M8.00001 2.1001C4.47094 2.1001 1.60001 4.97103 1.60001 8.5001C1.60001 12.0292 4.47094 14.9001 8.00001 14.9001C8.55361 14.9001 9.08747 14.8225 9.60001 14.6897V11.8928C9.17974 13.0891 8.57227 13.8334 8.00001 13.8334C7.31841 13.8334 6.58397 12.7876 6.17917 11.1668H9.60001V10.1001H5.97396C5.90516 9.5993 5.86667 9.06276 5.86667 8.5001C5.86667 7.9326 5.9156 7.40453 5.98542 6.9001H10.0146C10.0844 7.40453 10.1333 7.9326 10.1333 8.5001C10.1333 8.64623 10.1236 8.78529 10.1188 8.92822C10.4041 8.66476 10.7819 8.5001 11.2 8.5001C11.2 7.9422 11.1643 7.409 11.1031 6.9001H13.0865C13.2459 7.40542 13.3333 7.94271 13.3333 8.5001C13.3333 8.87076 13.2913 9.23097 13.2188 9.58031L14.1521 10.2459C14.31 9.6902 14.4 9.10596 14.4 8.5001C14.4 4.97103 11.5291 2.1001 8.00001 2.1001ZM8.00001 3.16676C8.67992 3.16676 9.40511 4.21968 9.81042 5.83343H6.18959C6.5949 4.21968 7.3201 3.16676 8.00001 3.16676ZM5.90001 3.59906C5.54592 4.20039 5.26432 4.96138 5.07396 5.83343H3.38438C3.95859 4.84424 4.84108 4.05462 5.90001 3.59906ZM10.1 3.59906C11.1589 4.05462 12.0414 4.84424 12.6156 5.83343H10.926C10.7357 4.96138 10.4541 4.20039 10.1 3.59906ZM2.91355 6.9001H4.89688C4.83571 7.409 4.80001 7.9422 4.80001 8.5001C4.80001 9.05796 4.83608 9.59076 4.89688 10.1001H2.91251C2.75357 9.5945 2.66667 9.05743 2.66667 8.5001C2.66667 7.94271 2.75414 7.40542 2.91355 6.9001ZM11.2083 9.56051C11.1325 9.5589 11.0572 9.57347 10.9875 9.60326C10.9177 9.63305 10.8551 9.67737 10.8039 9.73326C10.7526 9.78916 10.7139 9.85534 10.6902 9.9274C10.6665 9.99946 10.6585 10.0757 10.6667 10.1511V14.9001C10.6667 15.1945 10.9056 15.4334 11.2 15.4334C11.3536 15.4334 11.4894 15.3666 11.5865 15.2626L11.5896 15.2636L12.5927 14.0782L13.6563 16.2053C13.6876 16.268 13.7309 16.3239 13.7838 16.3698C13.8368 16.4157 13.8982 16.4507 13.9647 16.4729C14.0311 16.495 14.1013 16.5039 14.1712 16.4989C14.241 16.4939 14.3093 16.4753 14.3719 16.4439C14.4346 16.4126 14.4905 16.3692 14.5364 16.3163C14.5822 16.2634 14.6173 16.2019 14.6394 16.1355C14.6616 16.069 14.6704 15.9988 14.6654 15.929C14.6605 15.8591 14.6418 15.7909 14.6104 15.7282L13.525 13.5584L15.0802 13.2793L15.0813 13.2699C15.3021 13.2054 15.4667 13.0089 15.4667 12.7668C15.4667 12.5806 15.3649 12.4247 15.2198 12.3293L15.2219 12.3188L11.574 9.71676C11.4768 9.6195 11.3458 9.56353 11.2083 9.56051ZM3.38855 11.1668H5.07292C5.26279 12.0404 5.54483 12.7995 5.89896 13.4011C4.84136 12.9457 3.96295 12.1556 3.38855 11.1668Z"
                  fill="#3B3B3B"
                />
              </g>
              <defs>
                <clipPath id="clip0_1219_154613">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>

            <div className="figma">Take the Figma prototype </div>
          </div>
        </>
      )}
      {showBetaCaseFrame && (
        <>
          <div className="beta-case-frame">
            <svg
              className="internet5"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1219_157011)">
                <path
                  d="M8.00001 2.1001C4.47094 2.1001 1.60001 4.97103 1.60001 8.5001C1.60001 12.0292 4.47094 14.9001 8.00001 14.9001C8.55361 14.9001 9.08747 14.8225 9.60001 14.6897V11.8928C9.17974 13.0891 8.57227 13.8334 8.00001 13.8334C7.31841 13.8334 6.58397 12.7876 6.17917 11.1668H9.60001V10.1001H5.97396C5.90516 9.5993 5.86667 9.06276 5.86667 8.5001C5.86667 7.9326 5.9156 7.40453 5.98542 6.9001H10.0146C10.0844 7.40453 10.1333 7.9326 10.1333 8.5001C10.1333 8.64623 10.1236 8.78529 10.1188 8.92822C10.4041 8.66476 10.7819 8.5001 11.2 8.5001C11.2 7.9422 11.1643 7.409 11.1031 6.9001H13.0865C13.2459 7.40542 13.3333 7.94271 13.3333 8.5001C13.3333 8.87076 13.2913 9.23097 13.2188 9.58031L14.1521 10.2459C14.31 9.6902 14.4 9.10596 14.4 8.5001C14.4 4.97103 11.5291 2.1001 8.00001 2.1001ZM8.00001 3.16676C8.67992 3.16676 9.40511 4.21968 9.81042 5.83343H6.18959C6.5949 4.21968 7.3201 3.16676 8.00001 3.16676ZM5.90001 3.59906C5.54592 4.20039 5.26432 4.96138 5.07396 5.83343H3.38438C3.95859 4.84424 4.84108 4.05462 5.90001 3.59906ZM10.1 3.59906C11.1589 4.05462 12.0414 4.84424 12.6156 5.83343H10.926C10.7357 4.96138 10.4541 4.20039 10.1 3.59906ZM2.91355 6.9001H4.89688C4.83571 7.409 4.80001 7.9422 4.80001 8.5001C4.80001 9.05796 4.83608 9.59076 4.89688 10.1001H2.91251C2.75357 9.5945 2.66667 9.05743 2.66667 8.5001C2.66667 7.94271 2.75414 7.40542 2.91355 6.9001ZM11.2083 9.56051C11.1325 9.5589 11.0572 9.57347 10.9875 9.60326C10.9177 9.63305 10.8551 9.67737 10.8039 9.73326C10.7526 9.78916 10.7139 9.85534 10.6902 9.9274C10.6665 9.99946 10.6585 10.0757 10.6667 10.1511V14.9001C10.6667 15.1945 10.9056 15.4334 11.2 15.4334C11.3536 15.4334 11.4894 15.3666 11.5865 15.2626L11.5896 15.2636L12.5927 14.0782L13.6563 16.2053C13.6876 16.268 13.7309 16.3239 13.7838 16.3698C13.8368 16.4157 13.8982 16.4507 13.9647 16.4729C14.0311 16.495 14.1013 16.5039 14.1712 16.4989C14.241 16.4939 14.3093 16.4753 14.3719 16.4439C14.4346 16.4126 14.4905 16.3692 14.5364 16.3163C14.5822 16.2634 14.6173 16.2019 14.6394 16.1355C14.6616 16.069 14.6704 15.9988 14.6654 15.929C14.6605 15.8591 14.6418 15.7909 14.6104 15.7282L13.525 13.5584L15.0802 13.2793L15.0813 13.2699C15.3021 13.2054 15.4667 13.0089 15.4667 12.7668C15.4667 12.5806 15.3649 12.4247 15.2198 12.3293L15.2219 12.3188L11.574 9.71676C11.4768 9.6195 11.3458 9.56353 11.2083 9.56051ZM3.38855 11.1668H5.07292C5.26279 12.0404 5.54483 12.7995 5.89896 13.4011C4.84136 12.9457 3.96295 12.1556 3.38855 11.1668Z"
                  fill="#3B3B3B"
                />
              </g>
              <defs>
                <clipPath id="clip0_1219_157011">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>

            <div className="beta">Try the Beta version </div>
          </div>
        </>
      )}
    </div>
  );
};
