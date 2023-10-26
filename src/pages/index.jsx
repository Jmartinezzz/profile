import * as React from "react"
import profileImg from "../images/io.png"
import mapIcon from "../images/icons/map.svg"
import emailIcon from "../images/icons/phone-white.svg"
import phoneIcon from "../images/icons/email-white.svg"
import ListComponent from "../components/ListComponent"
import Header from "../components/header"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import "../styles/styles.css"

export default function IndexPage() {
  const { t } = useTranslation()

  const skillsArray = t('skills.skills_list').split('.');

  return (
    <React.Fragment>
      <Header />
      <div className="profile mb-16 mt-5" id="profile">
        {/* Grid 1 */}
        <div className="flex flex-wrap">
          <div className="sm:w-full md:w-1/5 left__col"></div>

          <div className="sm:w-full md:w-3/5 py-8 public__profile">
            <div className="profile__hero flex flex-wrap bg-navy-blue">
              <div className="md:w-1/3 lg:w-1/4 xxl:w-1/6 applicant__picture">
                <div
                  className="rounded-full"
                  style={{
                    background: `url(${profileImg})`,
                    backgroundSize: "cover",
                    width: "170px",
                    height: "170px",
                  }}
                ></div>
              </div>

              <div className="w-1/2 xs:w-full xxl:w-1/3 applicant__info">
                <div className="flex flex-col justify-evenly h-full text-white">
                  <p className="font-bold fullname uppercase text-3xl">
                    jorge alberto martínez rodríguez
                  </p>
                  <span className="font-bold text-sm md:text-xl">{t("degree")}</span>
                  <span className="font-medium md:font-bold text-xs md:text-sm">{t('soft_skills')}</span>
                </div>
              </div>

              <div className="w-1/3 xs:w-0 lg:w-1/4 xxl:w-1/3 text-white applicant__contact">
                <div className="flex flex-col justify-evenly h-full text-white">
                  <span className="font-bold uppercase">
                    {t("contact_info.header")}
                  </span>
                  <div className="address flex items-start mt-1">
                    <img
                      src={mapIcon}
                      className="contact__icon mt-1"
                      alt="phone number"
                    />
                    <p className="text-base font-light">
                      {t("contact_info.address")}: Cimas de San Bartolo II,
                      pasaje 17 #47, Ilopango, San Salvador
                    </p>
                  </div>
                  <div className="phone flex items-center">
                    <img
                      src={emailIcon}
                      className="contact__icon"
                      alt="phone number"
                    />
                    <p className="text-base font-light truncate">
                      {t("contact_info.phone")}: 7452-7017
                    </p>
                  </div>
                  <div className="email flex items-center">
                    <img
                      src={phoneIcon}
                      className="contact__icon"
                      alt="email address"
                    />
                    <p className="text-base font-light truncate">
                      {t("contact_info.email")}: jorge336814@outlook.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="profile__body">
              <div className="examinations">
                <p className="uppercase xs:no-underline xl:underline text-navy-blue font-bold fs-18 mb-2">
                  {t("education.header")}:
                </p>
                <div className="school">
                  <div className="grid grid-cols-2">
                    <p className="text-navy-blue font-semibold  pb-3 xl:pb-2 fs-18">
                      {t("education.higher_education.title")}
                    </p>
                    <div className="text-gray block xl:inline font-light">
                      <p className="text-lg">{t("education.higher_education.college")}</p>
                      <p className="mt-2 text-base">
                        {t("education.higher_education.technician")}
                      </p>
                    </div>
                    <p className="text-navy-blue font-semibold mt-4 pb-3 xl:pb-2 fs-18">
                      {t("education.high_school.title")}:
                    </p>
                    <div className="text-gray block xl:inline font-light mt-4">
                      <p className="text-lg">{t("education.high_school.school")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="examinations mt-6">
                <p className="uppercase xs:no-underline xl:underline text-navy-blue font-bold fs-18 mb-1">
                  {t('experience.header')}
                </p>
                <ListComponent listItems={t('experience.experience_list', { returnObjects: true })} />
              </div>
              <div className="examinations mt-6">
                <p className="uppercase xs:no-underline xl:underline text-navy-blue font-bold fs-18 mb-1">
                  {t('skills.header')}
                </p>
                <ListComponent listItems={skillsArray} />
              </div>
              <div className="examinations mt-6">
                <p className="uppercase xs:no-underline xl:underline text-navy-blue font-bold fs-18 mb-1">
                  {t("others.header")}
                </p>
                <div className="school">
                  <div className="grid grid-cols-2">
                    <p className="text-navy-blue font-semibold  pb-3 xl:pb-2 fs-18">
                      {t("others.diplomas")}
                    </p>
                    <div className="text-gray block xl:inline font-light">
                      <p className="text-lg">{t("others.diplomas_items.maintenance")}</p>
                      <p className="mt-2 text-lg">
                        {t("others.diplomas_items.networking")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="examinations mt-6">
                <p className="uppercase xs:no-underline xl:underline text-navy-blue font-bold fs-18 mb-1">
                  {t("references.header")}
                </p>
                <div className="school">
                  <div className="grid grid-cols-2">
                    <p className="text-navy-blue font-semibold  pb-3 xl:pb-2 fs-18">
                      {t("references.ref1.name")}
                    </p>
                    <div className="text-gray block xl:inline font-light">
                      <p className="text-lg">{t("references.ref1.position")}</p>
                    </div>
                    <p className="text-navy-blue font-semibold mt-2 pb-3 xl:pb-2 fs-18">
                      {t("references.ref2.name")}
                    </p>
                    <div className="text-gray block xl:inline font-light mt-2">
                      <p className="text-lg">{t("references.ref2.position")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sm:w-full md:w-1/5"></div>
        </div>
      </div>
    </React.Fragment>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
