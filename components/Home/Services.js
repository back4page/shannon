import Link from 'next/link';
import ImageGrid from '../common/ImageGrid';
import { servicesAllList } from '../../data/servicesAllList';
import {
  ScaleFade,
  SlideTopFade,
  StaggerDownFade,
  StaggerParent,
} from '../../animations/scroll';

function Services() {
  const services = servicesAllList.slice(0, 6);

  return (
    <div className="bg-white">
      <div className="lg:container py-20 px-4 lg:py-32 mx-aut0">
        <div className="lg:w-2/4 mx-auto">
          <SlideTopFade>
            <h2 className="heading-lg leading-snug text-center">
              Our Services
            </h2>
          </SlideTopFade>
        </div>

        <StaggerParent>
          <div className="lg:container py-16 px-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-100 hover:bg-gray-200 rounded-md p-8">
              <StaggerDownFade>
                <div>
                  <h1 className="font-bold mb-3 text-lg">
                    custom software development
                  </h1>
                  <p>
                    We have a team of experienced developers who can create
                    custom software solutions tailored to meet your unique
                    business needs. Whether you need a web application, mobile
                    app, or desktop software, we can deliver high-quality
                    solutions.
                  </p>
                </div>
              </StaggerDownFade>
            </div>
            <div className="bg-gray-100 hover:bg-gray-200 rounded-md p-8">
              <StaggerDownFade>
                <div>
                  <h1 className="font-bold mb-3 text-lg">
                    Web application development
                  </h1>
                  <p>
                    When it comes to developing disruptive web products, Shannon
                    takes an unconventional approach. Continue exploring new
                    technologies, business models, and design approaches to
                    create truly disruptive web products that can make a lasting
                    impact on the industry
                  </p>
                </div>
              </StaggerDownFade>
            </div>
            <div className="bg-gray-100 hover:bg-gray-200 rounded-md p-8">
              <StaggerDownFade>
                <div>
                  <h1 className="font-bold mb-3 text-lg">
                    mobile application development
                  </h1>
                  <p>
                    Our mobile app development teams prioritize clients needs.
                    Developing apps that perform well across different mobile
                    devices requires careful consideration of various factors,
                    including responsive design, cross-platform development,
                    testing on different devices, API compatibility, and app
                    store guidelines.
                  </p>
                </div>
              </StaggerDownFade>
            </div>
            <div className="bg-gray-100 hover:bg-gray-200 rounded-md p-8">
              <StaggerDownFade>
                <div>
                  <h1 className="font-bold mb-3 text-lg">
                    Digital marketing and management
                  </h1>
                  <p>
                    Marketing teams begin by thoroughly understanding the
                    client&apos;s requirements. This involves meetings,
                    discussions, and documentation to ensure a clear
                    understanding of the project goals. we created a
                    programmatic marketing campaign. Identifying and reaching
                    specific audience segments based on demographics, behaviors,
                    interests, or other criteria. Remember, the success of
                    programmatic marketing campaigns often relies on continuous
                    monitoring, analysis, and adjustment to ensure optimal
                    performance and return on investment.
                  </p>
                </div>
              </StaggerDownFade>
            </div>
          </div>
        </StaggerParent>

        <div className="flex justify-center mt-5">
          <ScaleFade>
            <Link href="/services" passHref>
              <button className="px-10 lg:px-16 py-3 lg:py-4 bg-white hover:bg-custom-gray text-custom-gray hover:text-white duration-300 text-sm border-2 border-slate-300 hover:border-custom-gray font-Montserrat rounded-full uppercase">
                see more
              </button>
            </Link>
          </ScaleFade>
        </div>
      </div>
    </div>
  );
}

export default Services;
