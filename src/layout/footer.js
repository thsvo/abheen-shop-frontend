import Link from 'next/link'
import Image from 'next/image'
import logo from '@assets/ABHEEN.svg'
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
            ঘরেরবাজার , যেখানে স্বাস্থ্য এবং স্বাধিনতার প্রতিশ্রুতি আমরা যা কিছু করি তার কেন্দ্রবিন্দুতে। আমরা মানসম্পন্ন নিরাপদ পণ্যগুলির একটি বৈচিত্র্যময় পরিষেবা সরবরাহ করতে পেরে গর্বিত যা কেবল আপনার শরীরকেই পুষ্ট করে না বরং পৃথিবীকে একটি স্বাস্থ্যকর গ্রহে পরিণত করতে অবদান রাখে। GhorerBazar.com এ, আমরা সুস্থতার পরিষেবা বৃদ্ধির জন্য বিশেষজ্ঞ, প্রাকৃতিক উপাদানগুলির শক্তিতে বিশ্বাস করি।
          </p>
        </div>

        <div className="links">
          <div className="column">
            <h3 className="title">COMPANY</h3>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/return-policy">রিটার্ন পলিসি</Link></li>
              <li><Link href="/refund-policy">রিফান্ড পলিসি</Link></li>
            </ul>
          </div>

          <div className="column">
            <h3 className="title">QUICK HELP</h3>
            <ul>
              <li><Link href="/customer-service">গ্রাহক সেবা</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="dbid">
          
          </div>
        </div>
      </div>
    </footer>
  )
}

