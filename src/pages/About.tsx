const About = () => {
  return (
    <div className="my-20 flex flex-col gap-6 font-montserrat">
        <h2 className="text-4xl font-bold font-palanquin">About</h2>
        <p>Welcome to Quenteh, the ultimate restaurant management solution designed to simplify and elevate how restaurants operate.</p>
        <p>Running a restaurant is no small feat, but with Quenteh, you can focus on what truly matters—delivering exceptional food and experiences—while we handle the complexities of managing your business.</p>
        <h3 className="text-2xl font-semibold font-poppins">What We Do</h3>
        <p>Quenteh is a cutting-edge platform that empowers restaurant owners to:</p>
        <ul className="flex flex-col gap-2">
          <li>- <span className="font-semibold">Take and Manage Orders Efficiently:</span> Streamline orders with real-time updates and intuitive displays. Orders are shown in the kitchen with color-coded indicators based on time passed, ensuring faster service and reduced errors.</li>
          <li>- <span className="font-semibold">Organize Your Menu:</span> Easily manage dishes, categories, promotions, and discounts with a few clicks. Keep your menu updated and dynamic.</li>
          <li>- <span className="font-semibold">Boost Productivity with Dashboards:</span> Access detailed dashboards that track sales, orders, and overall performance, giving you valuable insights to make data-driven decisions.</li>
          <li>- <span className="font-semibold">Automate Billing:</span> Generate electronic invoices (boletas and facturas) seamlessly, complying with legal standards and saving you time.</li>
        </ul>
        <p>At Quenteh, our goal is to simplify your processes while maximizing your efficiency. Whether you're a small café or a large restaurant chain, our tools are designed to grow with your business.</p>
    </div>
  )
}

export default About