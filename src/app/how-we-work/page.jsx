const page = () => {
  const processContainerStyle = 'pt-10 max-w-4xl mx-auto';
  const processTitleStyle = 'font-bold mb-6';
  const processDescStyle = 'text-gray-600';
  return (
    <>
      <section className="how-we-work w-screen">
        <div className="max-w-[1400px] mx-auto py-12 px-3">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-6xl font-semibold text-white">
              Project Management out, Product <br />
              Delivery in
            </div>
            <p className="text-gray-200 py-6">
              We pride ourselves on our methodical approach, combining
              meticulous planning with agile execution. Our process begins with
              a deep understanding of your needs, followed by collaborative
              strategizing and transparent communication every step of the way.
              With a commitment to excellence and continuous improvement, we
              deliver results that exceed expectations, ensuring your
              satisfaction and success.
            </p>
          </div>
        </div>
      </section>
      <div className="bg-gradient-to-r from-sky-100 to-orange-50">
        <div className="px-3 md:px-12 py-10 max-w-[1400px] mx-auto">
          <div>
            <h1 className="text-center font-bold text-4xl mb-6">
              Our working process
            </h1>
            <p className="text-center text-gray-600 mb-5">
              Let your creativity shine and start <br />
              building your website today and impress your visitors.
            </p>
          </div>
          <div>
            <div className={processContainerStyle}>
              <h2 className={processTitleStyle}>
                Requirement Gathering and Analysis
              </h2>
              <p className={processDescStyle}>
                Meet with clients/stakeholders to understand their requirements
                and expectations. Document the requirements and analyze them to
                determine feasibility and scope.
              </p>
            </div>
            <div className={processContainerStyle}>
              <h2 className={processTitleStyle}>Project Planning</h2>
              <p className={processDescStyle}>
                Create a project plan outlining tasks, timelines, resources, and
                dependencies. Assign responsibilities to team members and
                establish communication channels.
              </p>
            </div>
            <div className={processContainerStyle}>
              <h2 className={processTitleStyle}>Design Phase</h2>
              <p className={processDescStyle}>
                Design the architecture and system components based on the
                requirements. Create wireframes, mockups, or prototypes to
                visualize the user interface and user experience.
              </p>
            </div>
            <div className={processContainerStyle}>
              <h2 className={processTitleStyle}>Development</h2>
              <p className={processDescStyle}>
                Write code according to the design specifications. Conduct
                regular code reviews to ensure quality and maintainability.
                Implement testing frameworks for unit testing and integration
                testing.
              </p>
            </div>
            <div className={processContainerStyle}>
              <h2 className={processTitleStyle}>Testing</h2>
              <p className={processDescStyle}>
                Perform various testing activities such as functional testing,
                regression testing, performance testing, and security testing.
                Report and track bugs using issue-tracking systems.
              </p>
            </div>
            <div className={processContainerStyle}>
              <h2 className={processTitleStyle}>Deployment and Release</h2>
              <p className={processDescStyle}>
                Prepare the software for deployment to production environments.
                Coordinate with operations teams for deployment schedules and
                procedures. Monitor the deployment process and address any
                issues that arise.
              </p>
            </div>
            <div className={processContainerStyle}>
              <h2 className={processTitleStyle}>Maintenance and Support</h2>
              <p className={processDescStyle}>
                Provide ongoing maintenance and support for the software
                post-release. Address user-reported issues and implement patches
                or updates as necessary. Monitor system performance and
                scalability, making adjustments as needed.
              </p>
            </div>
            <div className={processContainerStyle}>
              <h2 className={processTitleStyle}>Documentation</h2>
              <p className={processDescStyle}>
                Document the software architecture, design decisions, and
                codebase for future reference. Create user manuals, API
                documentation, and other relevant documentation for end-users
                and developers.
              </p>
            </div>
            <div className={processContainerStyle}>
              <h2 className={processTitleStyle}>Continuous Improvement</h2>
              <p className={processDescStyle}>
                Collect feedback from users and stakeholders to identify areas
                for improvement. Conduct regular retrospectives to reflect on
                past projects and identify lessons learned. Implement process
                improvements and adopt new technologies or methodologies to
                enhance efficiency and quality.
              </p>
            </div>
            <div className={processContainerStyle}>
              <h2 className={processTitleStyle}>Project Closure</h2>
              <p className={processDescStyle}>
                Evaluate the project against initial objectives and
                deliverables. Conduct a final review to ensure all requirements
                have been met. Archive project documentation and assets for
                future reference. Celebrate team achievements and conduct a
                post-project analysis to identify successes and areas for
                improvement
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <h1 className="mt-20 text-6xl font-bold text-center text-stone-700 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            Get A 30 Min Free Consultation
          </h1>

          <p className="mt-7 text-xl font-medium text-center text-stone-500 max-md:max-w-full">
            Let your creativity shine and start building your website today and
            impress your visitors.
          </p>

          <button className="mb-[40px] px-8 py-4 mt-16 text-base font-bold text-center text-white whitespace-nowrap bg-sky-500 shadow-lg rounded-[100px] max-md:px-5 max-md:mt-10">
            Appointment
          </button>
        </div>
      </div>
    </>
  );
};

export default page;
