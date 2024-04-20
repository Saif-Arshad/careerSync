import React from 'react'

export default function page() {
  return (
<>
<div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
	<div className="flex flex-col items-center">
		<h2 className="font-bold text-5xl mt-5 tracking-tight">
			FAQ
		</h2>
		<p className="text-neutral-500 text-xl mt-3">
			Frequenty asked questions
		</p>
        <p className='text-neutral-500'>If you don’t find your answer, Please contact us or Leave a Message, we’ll be more than happy to assist you.</p>
	</div>
	<div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> How do I create an account?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                To create an account, simply click on the Sign Up button located on the homepage. Fill in the required details such as your name, email address, and password. Once you have to filled out the form, click on Create Account to complete the process. You will receive a confirmation email to verify your account. After verification, you can log in and start exploring job opportunities.
				</p>
			</details>
		</div>
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span>  How do I log in to my account?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
				Logging in to your account is easy. Just visit the homepage and enter your registered email address and password in the designated fields. Once you have ro entered your credentials, click on the Log In button. If your information is correct, you will be redirected to your account dashboard, where you can access all the features and functionalities available to registered users.
				</p>
			</details>
		</div>
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> I forgot my password. How can I reset it?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                If you  forgotten your password, do not worry. On the login page, click on the Forgot Password link. You will be prompted to enter the email address associated with your account. After submitting your email address, you will receive instructions on how to reset your password. Follow the link provided in the email, and you will be able to set a new password for your account.
				</p>
			</details>
		</div>
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> How do I search for jobs?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                To search for jobs, use the search bar located at the top of the homepage. Enter keywords related to the type of job you are looking for, such as job title, industry, or specific skills. You can also browse through job categories provided on the homepage. Once you have to entered your search criteria, press Enter or click on the search icon. You will be presented with a list of job listings that match your search.
				</p>
			</details>
		</div>
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> Can I filter job search results?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Yes, you can refine your job search results using various filters available on the search page. After conducting a search, look for the filter options on the left-hand side of the search results page. You can filter jobs based on criteria such as location, job type (full-time, part-time, etc.), salary range, experience level, and more. Simply select the filters that match your preferences, and the search results will automatically update to show only the jobs that meet your criteria.
				</p>
			</details>
		</div>
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span>How do I apply for a job?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                Applying for a job is straightforward. Once you will found a job listing that interests you, click on the listing to view the full job description. Read through the job description carefully to ensure it aligns with your skills and qualifications. If you are interested and meet the requirements, look for the Apply Now button 
				</p>
			</details>
		</div>
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> How do I contact support?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
					If you need help with the platform or have any other questions, you can contact the
					company support team by submitting a support request through the website or by emailing
					careerSync@gmail.com
				</p>
			</details>
		</div>
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> Are there any fees for using the platform?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                No, our platform is free for job seekers to use. You can search for jobs, apply to job listings, and access all features without any fees or charges. We believe in providing equal access to job opportunities for everyone, and our platform is designed to be accessible to all job seekers. Whether you are actively job hunting or just exploring potential opportunities, you can use our platform at no cost. However, please note that some job listings may require you to apply through external websites or platforms, which may have their own terms and conditions. Always review the details of each job listing before applying.
				</p>
			</details>
		</div>
		<div className="py-5">
			<details className="group">
				<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> How long does it take for my job application to be reviewed?</span>
					<span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                The time it takes for a job application to be reviewed varies depending on the employer and their hiring process. Typically, employers aim to review applications promptly, but it can take anywhere from a few days to several weeks. Factors such as the number of applications received, the complexity of the hiring process, and the availability of hiring managers can influence the review timeline. Rest assured that your application is being considered, and we encourage you to be patient during the review process. You can track the status of your applications from your account dashboard and may receive notifications or updates from employers regarding your application status. If you have not heard back after a reasonable amount of time, you can consider following up with the employer to inquire about the status of your application.
				</p>
			</details>
		</div>
	</div>
</div>

</>
  )
}
