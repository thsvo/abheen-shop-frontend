import Link from "next/link";
import Image from "next/image";
import logo from "@assets/ABHEEN.svg";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="brand">
          <Image
            src={logo}
            alt="Ghorer Bazar"
            width={120}
            height={60}
            className="logo"
          />
          <p className="description">
            অভিন , একটি আন্তর্জাতিক পণ্যের সমাহার। আপনি কি বিশ্বব্যাপী ব্র্যান্ড
            থেকে প্রিমিয়াম পণ্য খুঁজছেন? অভিন-এ, প্রথম আমরা আপনার নখরঅর্পণে
            বিশ্বস্ত খাঁটি গুণগত মানসম্মত আন্তর্জাতিক আইটেম সহ বিশ্বকে আপনার
            সামনে নিয়ে এসেছি।
          </p>
        </div>

        <div className="links">
          <div className="column">
            <h3 className="title">COMPANY</h3>
            <ul>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/return-policy">রিটার্ন পলিসি</Link>
              </li>
              <li>
                <Link href="/refund-policy">রিফান্ড পলিসি</Link>
              </li>
            </ul>
          </div>

          <div className="column">
            <h3 className="title">QUICK HELP</h3>
            <ul>
              <li>
                <Link href="/customer-service">গ্রাহক সেবা</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="dbid"></div>
        </div>
      </div>
    </footer>
  );
}
