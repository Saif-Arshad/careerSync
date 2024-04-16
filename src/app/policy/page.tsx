import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div className='w-full flex justify-center min-h-screen'>  
    <div className='w-11/12 flex flex-col flex-wrap'>
      <h1 className='text-2xl md:text-4xl font-bold mt-8'>About CareerSync</h1>
      <p className='w-full md:w-9/12 mt-3'>CareerSync is the  job site and strives to put job seekers first, giving them free access to search for jobs, post resumes, and research companies. Every day, we connect millions of people to new opportunities.</p>
    <Link href="/jobs"> <button className='mt-3 bg-emerald-500 hover:bg-emerald-600 py-3 px-8 rounded-3xl text-xl text-white'>Visit Jobs</button> </Link>
        <h1 className='text-2xl md:text-4xl font-bold mt-8'>Introduction</h1>
        <p className='w-full md:w-11/12 mt-3'>careerSync values the trust our users and customers place in us when they give us access to their Personal Data. This Privacy Policy describes how we work to maintain that trust and protect that information.

Our Privacy Policy details how we collect, use, and disclose the Personal and Non-Personal Data we collect from and about you when you access or use our online and/or mobile websites, applications, services, and software, interactions with us on the phone or in person, or, where permitted by applicable law and in line with this Privacy Policy, that we obtain from publicly available sources or third-party sources.</p>
      <h1 className='text-2xl md:text-4xl font-bold mt-8'>Retention of Your Information</h1>
      <p className='w-full md:w-11/12 mt-3'>Where careerSync acts as a controller of your Personal Data, we retain such data until it is no longer necessary to fulfill the purpose it is being used for, as required by applicable laws,  or until you ask us to delete it. 

Information on how long we retain your information, for each purpose, is set out in the following section. In determining these appropriate retention periods, we consider the purposes for which we process Personal Data and whether we can achieve those purposes through other means. We also consider the extent, nature, and sensitivity of Personal Data and our legal obligations with respect to data. Where possible and relying on our legitimate interest in improving our Sites, careerSync anonymizes or aggregates Personal Data, so that it can no longer be associated with or identify a user, in which case careerSync can further process the information. For example, we may use anonymized job seeker data, such as your resume or profile data to test the accuracy of our products and services. Another way we may use anonymized data is to make sure our technology is helping all people get jobs in a way that is fair.</p>
    <h1 className='text-2xl md:text-4xl font-bold mt-8'>Security</h1>
    <p  className='w-full md:w-11/12 mt-3'>careerSync uses reasonable security measures to help protect your personal data. careerSync intends to make your experience as secure as possible by protecting personal data covered by this policy against loss, misuse, alteration, or unauthorized access. We perform regular vulnerability assessments of our systems and network to help protect your personal data. However, no method of transmission or method of electronic storage of information via the Internet can be 100% secure. For example, emails or other messages sent via your web browser, or resumes shared with employers may not be encrypted by the recipient. Where the security of your information is beyond our control, we cannot guarantee the privacy of such information.</p>
      <h1 className='text-2xl md:text-4xl font-bold mt-8'>Cookies and Tracking technologies</h1>
     <p  className='w-full md:w-11/12 mt-3'>
     When you visit the Sites, download or install an careerSync App, and in some of our advertisements on third party websites we use cookies, web beacons, and other similar technologies, for measurement services, better targeting advertisements, and for marketing purposes. Please see our Cookie Policy for further detailed information regarding our use of cookies including how you can control the use of these cookies via your browser settings, including, where you wish to opt-out of our use of unnecessary cookies.

Logging from third-party websites

If you do not already have an careerSync account but log in to careerSync using a third party such as Facebook or Google, this creates an careerSync account using the same email address used in your Facebook or Google account. If you agree to provide this information to careerSync, Facebook or Google will authenticate you and redirect you to careerSync. Please note, when you log in to careerSync using your Facebook or Google account, Facebook or Google will use cookies in order to authenticate you as a Facebook or Google user.

By accessing careerSync through your Facebook or Google account, you understand that Facebook or Google will share certain Personal Data for the purposes of authentication to permit you to access our Sites in a secure manner. If you no longer wish to share data with careerSync from your Facebook or Google account, you will need to adjust your Facebook or Google account settings. Information passed from Facebook or Google to careerSync will be considered careerSync account information for purposes of your use of careerSync.

You have the ability to disable the connection between your Facebook or Google account and your careerSync account at any time by accessing your privacy settings on your Facebook or Google account. Facebook or Google may also ask for your permission to share certain other details with careerSync, including but not limited to your name, profile picture, public profile information, and email address. Once you give this permission, the requested information will be shared with careerSync. This information will be used to provide services to you, including populating your careerSync Profile on careerSync. The shared information will remain associated with your careerSync Profile until you modify or delete it.

Do Not Track Requests 

We do not respond to the browser “Do Not Track” (DNT) signal if enabled by the user in their web browser. When we set or read cookies on non-affiliated sites that have integrated our job search and display features, we do so, for example, to provide a personalized job search experience to users on those sites. We do not share any information about your use of our Sites with those third parties. When third parties that we have integrated into the Sites (as described in our  Cookie Policy) set or read their own third-party cookies, they may or may not respond to the DNT signal.

Conversion Tracking 

careerSync may provide an Employer with code for a Conversion Tracker to place on its website that pings the Job Seeker web beacon and tracks whenever a Job Seeker has applied to a job on that Employer’s website. The Conversion Tracker is simply a counter that notifies careerSync that a Job Seeker has applied, and also has the ability to count applications across devices if a Job Seeker is logged in to the Employer’s website. If you would like to remove yourself from careerSync’s Job Seeker web beacon, you must use our web beacon opt-out.
     </p>
    <Link href="/"> <button className='mt-3 bg-emerald-500 hover:bg-emerald-600 py-3 px-8 rounded-3xl text-xl text-white'>Go to Home Page</button> </Link>

      </div> 
    </div>
  )
}

export default page
