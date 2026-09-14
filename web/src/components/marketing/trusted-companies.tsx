import Image from "next/image";

const companies = [
  { name: "Google", logo: "/images/company-logos/google.svg" },
  { name: "Microsoft", logo: "/images/company-logos/microsoft.svg" },
  { name: "Amazon", logo: "/images/company-logos/amazon.svg" },
  { name: "IBM", logo: "/images/company-logos/ibm.svg" },
  { name: "Adobe", logo: "/images/company-logos/adobe.svg" },
  { name: "Tesla", logo: "/images/company-logos/tesla.svg" },
  { name: "Meta", logo: "/images/company-logos/meta.svg" },
];

function CompanyMarks({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden} className="trusted-company-set">
      {companies.map((company) => (
        <li className="trusted-company-card" key={company.name}>
          <span className="trusted-company-logo-wrap">
            <Image
              alt={`${company.name} logo`}
              className="trusted-company-logo"
              fill
              sizes="180px"
              src={company.logo}
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

export function TrustedCompanies() {
  return (
    <section className="border-y border-white/[.06] bg-[#05060d] px-4 py-8 sm:px-8 sm:py-10 lg:px-12">
      <p className="mb-6 text-center text-[10px] font-semibold tracking-[.28em] text-white/55 sm:mb-7">
        TRUSTED BY LEADING COMPANIES
      </p>
      <div
        className="trusted-company-marquee"
        aria-label="Trusted company logos"
      >
        <div className="trusted-company-track">
          <CompanyMarks />
          <CompanyMarks hidden />
        </div>
      </div>
    </section>
  );
}
