import React from "react";
import Link from "next/link";
import Image from "next/image";
// internal
import payment from "@assets/img/footer/footer-payment.png";
import SocialLinks from "@components/social";
import CopyrightText from "./copyright-text";
import logo from "@assets/abheen.png";

// single widget
function SingleWidget({ col, col_2, col_3, title, contents }) {
  return (
    <div
      className={`col-xxl-${col} col-xl-${col} col-lg-3 col-md-${col_2} col-sm-6"`}
    >
      <div className={`footer__widget mb-50 footer-col-11-${col_3}`}>
        <h3 className="footer__widget-title">{title}</h3>
        <div className="footer__widget-content">
          <ul>
            {contents.map((l, i) => (
              <li key={i}>
                <Link href={`/${l.url}`}>{l.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const Footer = () => {
  return (
    <>
      <footer>
        <div
          className="footer__area footer__style-4"
          data-bg-color="footer-bg-white"
        >
          <div className="footer__top">
            <div className="container">
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-6">
                <Link href="/">
                        <Image
                          src={logo}
                          alt="Image 1"
                          width={150}
                          height={150}
                        />
                      </Link>
                  <div className="footer__widget footer__widget-11 mb-50 footer-col-11-1">
                    <div className="footer__logo mb-5">
                     
                    </div>

                    <div className="footer__widget-content">
                      <div className="footer__info">
                        <p>
                          অভিন , একটি আন্তর্জাতিক পণ্যের সমাহার। আপনি কি
                          বিশ্বব্যাপী ব্র্যান্ড থেকে প্রিমিয়াম পণ্য খুঁজছেন?
                          অভিন-এ, প্রথম আমরা আপনার নখরঅর্পণে বিশ্বস্ত খাঁটি
                          গুণগত মানসম্মত আন্তর্জাতিক আইটেম সহ বিশ্বকে আপনার
                          সামনে নিয়ে এসেছি।
                        </p>
                        <div className="footer__social footer__social-11">
                          {/* <SocialLinks /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
<br/> <br/>
                <SingleWidget
                  col="2"
                  col_2="4"
                  col_3="2"
                  title="COMPANY"
                  contents={[
                    { url: "#", title: "About us" },
                    { url: "#", title: "রিটার্ন পলিসি" },
                    { url: "#", title: "রিফান্ড পলিসি" },
             
                  ]}
                />
                <SingleWidget
                  col="3"
                  col_2="3"
                  col_3="3"
                  title="QUCIK HELP"
                  contents={[
                    { url: "#", title: "গ্রাহক সেবা" },
                    { url: "#", title: "Contract" },
            
                  ]}
                />
                {/* <SingleWidget
                  col="1"
                  col_2="3"
                  col_3="4"
                  title="Support"
                  contents={[
                    { url: "", title: "FAQs" },
                    { url: "", title: "Reviews" },
                    { url: "", title: "Contact Us" },
                    { url: "", title: "Shipping" },
                    { url: "", title: "Returns" },
                  ]}
                /> */}

                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-6">
                  <div className="footer__widget mb-50 footer-col-11-5">
                    <h3 className="footer__widget-title">Talk To Us</h3>

                    <div className="footer__widget-content">
                    
                      <div className="footer__contact">
                        <div className="footer__contact-call">
                          <span>
                            <a href="tel:624-423-26-72">+8801911941234</a>
                          </span>
                        </div>
                        <div className="footer__contact-mail">
                          <span>
                            <a href="mailto:support@abheen.com">
                              support@abheen.com
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="container">
              <div className="footer__bottom-inner">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="footer__copyright">
                      <CopyrightText />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="footer__payment text-sm-end">
                      <Image src={payment} alt="payment" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
