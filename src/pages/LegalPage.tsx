const LegalPage = () => {
  return (
    <div className="my-20">
        <div className="flex flex-col justify-start items-start gap-6 font-montserrat pb-16">
            <h2 className="text-4xl font-bold font-palanquin">Terms and Conditions</h2>
            <p>Welcome to QUENTAH! These Terms and Conditions govern your use of our app, services, and website. By using our Services, you agree to these Terms. If you do not agree, please do not use our Services.</p>
            <h3 className="text-2xl font-semibold font-poppins">1. Use of Services</h3>
            <p>1.1. Eligibility: You must be at least 18 years old or have the consent of a parent or guardian to use our Services.</p>
            <p>1.2. Account Responsibility: You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</p>
            <p>1.3. Prohibited Activities: You agree not to use our Services for any unlawful or unauthorized purposes, including but not limited to:</p>
            <ul>
                <li>- Sharing false or misleading information.</li>
                <li>- Attempting to hack, disrupt, or exploit our Services.</li>
                <li>- Violating the rights of others.</li>
            </ul>
            <h3 className="text-2xl font-semibold font-poppins">2. Ordering and Payments</h3>
            <p>2.1. Orders: Orders placed through the app are final once confirmed. Any modifications or cancellations are subject to the restaurant policies.</p>
            <p>2.2. Payments: All payments are securely processed through third-party providers like Stripe. We do not store your payment information.</p>
            <h3 className="text-2xl font-semibold font-poppins">3. User-Generated Content</h3>
            <p>3.1. Responsibility: You retain ownership of any content you upload but grant us a non-exclusive, worldwide license to use it as necessary for our Services.</p>
            <p>3.2. Removal: We reserve the right to remove user-generated content that violates our Terms or is deemed inappropriate.</p>
            <h3 className="text-2xl font-semibold font-poppins">4. Limitations of Liability</h3>
            <p>We are not liable for:</p>
            <ul>
                <li>- Errors in orders caused by users.</li>
                <li>- Technical interruptions beyond our control.</li>
                <li>- Losses incurred due to misuse of the Services.</li>
            </ul>
            <h3 className="text-2xl font-semibold font-poppins">5. Termination</h3>
            <p>We may suspend or terminate your access to our Services for violating these Terms, or for other reasons deemed necessary to protect our Services or users.</p>
            <h3 className="text-2xl font-semibold font-poppins">6. Changes to Terms</h3>
            <p>We reserve the right to update these Terms. Any changes will be effective upon posting, and it is your responsibility to review them periodically.</p>
        </div>
        <div className="w-full border-slate-50 border-b-2"/>
        <div className="flex flex-col justify-start items-start gap-6 font-montserrat mt-10">
            <h2 className="text-4xl font-bold font-palanquin">Privacy Policy</h2>
            <p>At QUENTAH, we value your privacy. This Privacy Policy explains how we collect, use, and protect your personal information.</p>
            <h3 className="text-2xl font-semibold font-poppins">1. Information We Collect</h3>
            <p>1.1. Account Information: When you register, we collect details such as your name, email address, and contact information.</p>
            <p>1.2. Order Details: Information related to your orders, such as items purchased, payment details, and delivery preferences.</p>
            <p>1.3. Usage Data: We collect data on how you interact with our app, such as device information, IP address, and usage patterns.</p>
            <h3 className="text-2xl font-semibold font-poppins">2. How We Use Your Information</h3>
            <p>We use your information to:</p>
            <ul>
                <li>- Process and fulfill orders.</li>
                <li>- Improve our Services.</li>
                <li>- Send promotional offers and updates (you can opt-out at any time).</li>
            </ul>
            <h3 className="text-2xl font-semibold font-poppins">3. Sharing Your Information</h3>
            <p>We do not sell your personal information. However, we may share your data with:</p>
            <ul>
                <li>- Third-Party Providers: For payment processing, analytics, and other operational purposes.</li>
                <li>- Legal Authorities: When required by law or to protect our rights.</li>
            </ul>
            <h3 className="text-2xl font-semibold font-poppins">4. Data Security</h3>
            <p>We implement security measures to protect your data. However, no system is entirely secure, and we cannot guarantee absolute protection.</p>
            <h3 className="text-2xl font-semibold font-poppins">5. Your Rights</h3>
            <p>You have the right to:</p>
            <ul>
                <li>- Access the personal data we hold about you.</li>
                <li>- Request corrections to inaccuracies.</li>
                <li>- Request the deletion of your data (subject to legal obligations).</li>
            </ul>
            <h3  className="text-2xl font-semibold font-poppins">6. Cookies</h3>
            <p>Our app uses cookies to enhance user experience and gather analytics. You can manage cookie preferences through your browser settings.</p>
            <h3 className="text-2xl font-semibold font-poppins">7. Changes to This Policy</h3>
            <p>We may update this Privacy Policy from time to time. Updates will be posted in the app, and it is your responsibility to review them periodically.</p>
        </div>
    </div>
  )
}

export default LegalPage