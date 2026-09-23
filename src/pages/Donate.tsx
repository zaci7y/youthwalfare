import { PageHeader } from '../components/PageHeader';
import donationQrUrl from '@/assets/donation.jpeg';

const PAYPAL_URL = 'https://www.paypal.com/donate/?hosted_button_id=X3QXZUKS4LVQ8';

export function Donate() {
  return (
    <>
      <PageHeader
        title="Make a Donation"
        subtitle="Support food assistance, children's medical care, education and emergency relief through a secure donation."
      />

      <section className="section-space donate-page">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-7">
              <div className="donate-panel h-100">
                <span className="section-tag">Ways to give</span>
                <h2 className="section-heading mt-3">Give hope where it is needed most.</h2>
                <p className="section-lead">
                  Your gift helps Youth Unity Welfare Organization provide practical support to families and communities.
                  Choose PayPal for an online donation, or use the domestic bank details below.
                </p>
                <a href={PAYPAL_URL} className="btn btn-primary-ngo btn-lg mt-2" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-paypal me-2"></i>Donate with PayPal
                </a>
                <p className="donate-method-note mb-0 mt-3">
                  PayPal opens in a new tab. Complete the payment there and keep the confirmation for your records.
                </p>
                <div className="donate-purpose-grid mt-5">
                  <div><i className="bi bi-basket2-heart-fill"></i><strong>Food support</strong><span>Meals and essential supplies</span></div>
                  <div><i className="bi bi-heart-pulse-fill"></i><strong>Medical care</strong><span>Help for children and families</span></div>
                  <div><i className="bi bi-book-half"></i><strong>Education</strong><span>Learning and school essentials</span></div>
                  <div><i className="bi bi-hurricane"></i><strong>Emergency relief</strong><span>Support during crises</span></div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="donate-panel donate-qr-panel h-100">
                <span className="icon-badge"><i className="bi bi-qr-code-scan"></i></span>
                <h2 className="h3 mt-3">Scan to donate</h2>
                <p>Scan this PayPal QR code with your phone to open the donation page.</p>
                <img src={donationQrUrl} alt="PayPal donation QR code for Youth Unity Welfare Organization" className="donate-page-qr" />
                <p className="donate-method-note mb-0">You can also use the PayPal button on this page.</p>
              </div>
            </div>
          </div>

          <section className="donate-bank-section mt-5" aria-labelledby="bank-transfer-heading">
            <div className="row g-4 align-items-end mb-4">
              <div className="col-lg-8">
                <span className="section-tag">Bank transfer</span>
                <h2 id="bank-transfer-heading" className="section-heading mt-3">Domestic transfer details</h2>
                <p className="section-lead mb-0">
                  Use these details to send a domestic wire, ACH transfer, or real-time payment to
                  Youth Unity Welfare Organization's Mercury account.
                </p>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="donate-panel h-100">
                  <span className="icon-badge"><i className="bi bi-bank"></i></span>
                  <h3 className="h4 mt-3">Receiving bank</h3>
                  <dl className="donate-detail-list">
                    <div><dt>Bank name</dt><dd>Column N.A.</dd></div>
                    <div><dt>ABA routing number</dt><dd className="donate-number">121145433</dd></div>
                    <div><dt>Bank address</dt><dd>1 Letterman Drive, Building A, Suite A4-700<br />San Francisco, CA 94129, United States</dd></div>
                  </dl>
                  <p className="donate-method-note mb-0">Mercury uses Column N.A. as its banking partner.</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="donate-panel h-100">
                  <span className="icon-badge"><i className="bi bi-person-check-fill"></i></span>
                  <h3 className="h4 mt-3">Beneficiary</h3>
                  <dl className="donate-detail-list">
                    <div><dt>Beneficiary name</dt><dd>Youth Unity Welfare Organization</dd></div>
                    <div><dt>Account number</dt><dd className="donate-number">697186659633383</dd></div>
                    <div><dt>Account type</dt><dd>Checking</dd></div>
                    <div><dt>Beneficiary address</dt><dd>1269 G Street<br />Valley Stream, NY 11580, United States</dd></div>
                  </dl>
                </div>
              </div>
            </div>
            <p className="donate-bank-note mt-4 mb-0">
              Please double-check the beneficiary and account details before sending a transfer.
              For questions about your donation, <a href="tel:+13322524459">call our team</a>.
            </p>
          </section>
        </div>
      </section>
    </>
  );
}