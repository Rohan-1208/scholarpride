// app/cbse-disclosure/page.tsx

export default function CBSEDisclosurePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-center text-4xl font-bold text-primary mb-4">
        CBSE Mandatory Public Disclosure
      </h1>
      <p className="mb-8 text-center text-sm text-muted-foreground">
        Information as per CBSE SARAS affiliation record (Affiliation No. 1630732).{" "}
        <a
          href="https://saras.cbse.gov.in/saras/AffiliatedList/AfflicationDetails/1630732"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          View on CBSE SARAS
        </a>
      </p>

      {/* A. General Information */}
      <h2 className="text-2xl font-semibold mb-4 text-primary">A. General Information</h2>
      <div className="overflow-x-auto mb-12">
        <table className="min-w-full table-auto border border-gray-300">
          <tbody className="text-muted-foreground">
            <DisclosureRow label="Name of Institution" value="Scholar's Pride School" />
            <DisclosureRow label="Affiliation Number" value="1630732" />
            <DisclosureRow label="School Code" value="20712" />
            <DisclosureRow label="State" value="Punjab" />
            <DisclosureRow label="District" value="Sangrur" />
            <DisclosureRow
              label="Complete Address with PIN Code"
              value="Bagrian Road, Near Panchvati Mandir, Dhuri, Sangrur, Punjab – 148024"
            />
            <DisclosureRow label="Website" value="https://scholarspridedhuri.com/" />
            <DisclosureRow label="Year of Foundation" value="2009" />
            <DisclosureRow label="Date of First Opening" value="17 January 2010" />
            <DisclosureRow label="Name of Principal / Head of Institution" value="Mr. Suneet Kumar" />
            <DisclosureRow label="Principal's Qualifications" value="M.A., B.Ed." />
            <DisclosureRow label="Administrative Experience" value="18 Years" />
            <DisclosureRow label="Teaching Experience" value="18 Years" />
            <DisclosureRow label="Status of the School" value="Senior Secondary Level" />
            <DisclosureRow label="School Type" value="Independent" />
            <DisclosureRow label="Affiliation Period" value="01/04/2027 to 31/03/2032" />
            <DisclosureRow
              label="Name of Trust / Society / Managing Committee"
              value="P.L. Bansal Memorial Educational Society"
            />
            <DisclosureRow label="Contact Numbers" value="70871-35842, 98144-00452" />
            <DisclosureRow label="Email" value="info@scholarspridedhuri.com" />
            <DisclosureRow label="Academic Session" value="April to March" />
          </tbody>
        </table>
      </div>

      {/* B. Documents */}
      <h2 className="text-2xl font-semibold mb-4 text-primary">B. Documents and Information</h2>
      <div className="overflow-x-auto mb-12">
        <table className="min-w-full table-auto border border-gray-300">
          <thead>
            <tr className="bg-muted text-left">
              <th className="border px-4 py-2">Document Name</th>
              <th className="border px-4 py-2">Link</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <DisclosureDoc title="Affiliation Extension Certificate" file="/document/Affiliation_extension.pdf" />
            <DisclosureDoc title="Recognition Certificate" file="/document/Recognition_certificate.pdf" />
            <DisclosureDoc title="Safety Certificate" file="/document/safety_certificate.pdf" />
            <DisclosureDoc title="Fire Safety Certificate" file="/document/fire_certificate.pdf" />
            <DisclosureDoc title="Society Registration Certificate" file="/document/society_registration.pdf" />
            <DisclosureDoc title="No Objection Certificate (NOC)" file="/document/noc.pdf" />
            <DisclosureDoc
              title="Water Safety and Sanitary Condition"
              file="/document/safe_drinking_and_sanitary_condition.pdf"
            />
            <DisclosureDoc title="Affidavit" file="/document/affidavit.pdf" />
            <DisclosureDoc title="Xth Marks" file="/document/10th_marks.pdf" />
            <DisclosureDoc
              title="Infrastructure and Facilities"
              file="/document/Scholars_Pride_Infrastructure_Details.pdf"
            />
          </tbody>
        </table>
      </div>

      {/* School Infrastructure (from existing disclosure) */}
      <h2 className="text-2xl font-semibold mb-4 text-primary">School Infrastructure</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300">
          <tbody className="text-muted-foreground">
            <DisclosureRow label="Area of School Campus" value="2 Acres" />
            <DisclosureRow label="Total Built Up Area" value="10514 sq. ft." />
            <DisclosureRow label="Playground Area" value="Yes (12 Kanal)" />
            <DisclosureRow label="No. of Classrooms" value="24" />
            <DisclosureRow label="Headmaster/Office/Storeroom" value="Yes (2)" />
            <DisclosureRow label="Separate Toilets for Boys" value="Yes (B-4, G-4)" />
            <DisclosureRow label="Separate Toilets for Girls" value="Yes (G-4)" />
            <DisclosureRow label="Drinking Water Facility" value="Yes (Submersible Pump)" />
            <DisclosureRow label="Barrier Free Access" value="Yes" />
            <DisclosureRow label="Library" value="Yes (3000+ books)" />
          </tbody>
        </table>
      </div>
    </div>
  )
}

function DisclosureRow({ label, value }: { label: string; value: string }) {
  return (
    <tr>
      <td className="border px-4 py-2 font-medium w-1/3">{label}</td>
      <td className="border px-4 py-2">{value}</td>
    </tr>
  )
}

function DisclosureDoc({ title, file }: { title: string; file: string }) {
  return (
    <tr>
      <td className="border px-4 py-2">{title}</td>
      <td className="border px-4 py-2">
        <a
          href={file}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          View Document
        </a>
      </td>
    </tr>
  )
}
