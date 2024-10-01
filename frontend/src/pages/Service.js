import React from 'react';
import Layout from '../components/Layout.js';

const ServiceTerms = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Service Terms</h1>
        <p className="text-sm text-gray-600 mb-8"><strong>Last updated: September 1st, 2024</strong></p>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <p className="text-gray-700 leading-relaxed">
            These Service Terms outline the warranty and service conditions for products purchased from <strong>BayMeters LLC</strong> ("Seller," "we," "our," or "us"). By purchasing our products, you ("Buyer") agree to these terms.
          </p>
        </div>

        {[
          { title: "1. Seller's Limited Warranty", content: "BayMeters warrants that all purchased items ('Purchased Items') will be free from defects in materials and workmanship under normal use, service, and conditions for a period of one (1) year from the date of the Seller's invoice, unless otherwise specified. This warranty is only applicable to the original Buyer and is non-transferable." },
          { title: "2. Buyer's Responsibilities", content: "The Buyer is solely responsible for the correct selection, application, installation, and maintenance of the Purchased Items. Additionally, the Buyer must provide any necessary instructions to the end users regarding the safe and proper use, periodic maintenance, and any safety precautions concerning the Purchased Items." },
          { title: "3. Warranty Limitations", content: "The seller's limited warranty only covers direct damages to the product itself. The seller shall not be held responsible for any indirect or consequential losses incurred during the use of the product. Customers are expected to incorporate reasonable tolerance designs in their production processes to account for potential losses caused by individual instruments." },
          { title: "4. Warranty Exclusions", content: (
            <>
              <p>This warranty does not apply to Purchased Items that:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Have been repaired, altered, or modified by any party other than the Seller's authorized service centers, affecting the reliability or performance of the product.</li>
                <li>Have been subject to misuse, negligence, accidents, improper storage, or handling.</li>
                <li>Have not been operated or maintained according to the Seller's written instructions.</li>
                <li>Have experienced wear and tear due to the Buyer's specific application, including exposure to harsh environments, or have worn parts due to normal usage.</li>
              </ul>
            </>
          )},
          { title: "5. Harsh Environments Description", content: (
            <>
              <p>"Harsh environments" refer to conditions that may accelerate damage, wear, or deterioration of the Purchased Items, including but not limited to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Extreme Temperatures: Operating outside the recommended temperature range.</li>
                <li>High Humidity or Moisture: Prolonged exposure to moisture or humidity leading to corrosion or short circuits.</li>
                <li>Corrosive Atmosphere: Exposure to chemicals or gases (e.g., hydrogen sulfide, chlorine) causing material degradation.</li>
                <li>Dust or Pollution: High levels of dust or particles causing contamination or mechanical failure.</li>
                <li>Vibration and Shock: Severe mechanical vibration or impacts causing structural damage.</li>
                <li>Radiation Exposure: Exposure to electromagnetic fields, UV light, or radiation degrading materials.</li>
                <li>Water Immersion or Flooding: Exposure to water, especially for non-waterproof items.</li>
                <li>Extreme Weather: Severe conditions like storms or freezing temperatures leading to physical damage.</li>
                <li>Biological Hazards: Infestation by insects or rodents causing damage to cables or connectors.</li>
              </ul>
            </>
          )},
          { title: "6. Additional Exclusions to Warranty Coverage", content: (
            <>
              <p>This limited warranty does not cover:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Normal wear and tear due to natural aging.</li>
                <li>Consumable products such as sensors, probes, and filters.</li>
                <li>Damage from improper handling, installation, or use beyond the product's capacity.</li>
                <li>Force majeure events including natural disasters, fire, or flood.</li>
                <li>Third-party components or unauthorized modifications and repairs.</li>
              </ul>
            </>
          )},
          { title: "7. Claim Procedure", content: "In the event of a warranty claim, the Buyer must notify BayMeters in writing with details of the defect, proof of purchase, serial numbers, and relevant documentation. BayMeters reserves the right to inspect the product and determine whether the defect is covered by the warranty. If validated, BayMeters may repair or replace the defective product, or issue a refund equal to the original purchase price, subject to depreciation. The Seller's decision will be final." },
          { title: "8. Warranty Service and Contact Information", content: (
            <p>
              For warranty inquiries or technical support, please contact us via our website or email at <a href="mailto:lake@baymeters.com" className="text-blue-600 hover:underline">lake@baymeters.com</a>.
            </p>
          )}
        ].map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">{section.title}</h2>
            <div className="bg-gray-50 rounded-lg p-4">
              {typeof section.content === 'string' ? (
                <p className="text-gray-700 leading-relaxed">{section.content}</p>
              ) : (
                section.content
              )}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ServiceTerms;
