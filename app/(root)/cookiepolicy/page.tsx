import Navbar from "@/components/navigation/Navbar";
import React from "react";

const CookiePolicy = () => {
  return (
    <section>
      <Navbar bgColor="dark" />
      <div className="m-3 md:m-20 flex-start flex-col gap-10">
        <h2 className="h2 text-white">Cookie Policy</h2>
        <h3 className="h3 text-white">1. Introduction</h3>
        <p className="p2 text-white">
          At Enzuzo Inc. (&quot;us&quot;, &quot;we&quot;, &quot;our&quot; or the
          &quot;Company&quot;) we value your privacy and the importance of
          safeguarding your data. This Privacy Policy (&quot;Privacy
          Policy&quot;) describes our privacy practices for the activities set
          out below. As per your rights, we inform you how we collect, store,
          access, and otherwise process information relating to individuals. In
          this Policy, &quot;Personal Data&quot; refers to any information that
          on its own, or in combination with other available information, can
          distinguish an individual. We are committed to protecting your privacy
          in accordance with the highest level of privacy regulation. As such,
          we follow the obligations under
        </p>
        <ol className="flex flex-col">
          <li className="text-white p2">
            1. Canada&quot;s Personal Information Protection and Electronic
            Documents Act (PIPEDA) and the applicable provincial legislations
          </li>
          <li className="text-white p2">
            2. the EU&quot;s General Protection Data Regulation (GDPR)
          </li>
          <li className="text-white p2">
            3. Brazil&quot;s Data Protection Legislation (LGPD)
          </li>
          <li className="text-white p2">
            4. California&quot;s Consumer Protection Act (CCPA) and California
            Online Privacy Protection Act (CalOPPA)
          </li>
        </ol>
      </div>
    </section>
  );
};

export default CookiePolicy;
