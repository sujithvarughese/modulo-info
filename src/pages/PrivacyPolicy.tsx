import {Flex} from "@mantine/core";


const PrivacyPolicy = () => {
  return (
    <Flex direction="column" justify="center" align="center">
      <h1>Privacy Policy</h1>
      <Flex direction="column">
        <h1>Privacy Policy for Modulo</h1>
        <p><em>Last updated: March 29, 2025</em></p>

        <section>
          <h2>1. Data Collection</h2>
          <p><strong>Modulo does not collect, store, or share any personal data.</strong><br/>
            As the developer, we do not have access to your calendar data, your inputs, or any personal information.</p>
        </section>

        <section>
          <h2>2. How Modulo Works</h2>
          <p>To provide activity suggestions, Modulo analyzes your calendar and any additional input you
            provide <strong>locally on your device</strong>. This information is temporarily processed and sent securely
            to <strong>OpenAI's API</strong> to generate personalized suggestions. None of this data is stored by
            Modulo.</p>
        </section>

        <section>
          <h2>3. Third-Party Services</h2>
          <p>Modulo uses the <strong>OpenAI API</strong> to generate suggestions. While we do not store or collect your
            information, your calendar summary and any inputs you choose to provide may be processed by OpenAI's
            servers. For more information about how OpenAI handles data, please refer to their <a
              href="https://openai.com/policies/api-data-usage-policies" target="_blank">API Data Usage Policy</a>.</p>
        </section>

        <section>
          <h2>4. Security</h2>
          <p>All communication with third-party services (like OpenAI) is encrypted using industry-standard protocols.
            We do our best to keep your data safe while it is being processed.</p>
        </section>

        <section>
          <h2>5. Your Consent</h2>
          <p>By using Modulo, you consent to the processing of your data as described in this policy. You are always in
            control and can delete the app at any time to stop all use.</p>
        </section>

        <section>
          <h2>6. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. If we make any significant changes, we’ll let you know
            within the app or through an update notice.</p>
        </section>

        <section>
          <h2>7. Contact Us</h2>
          <p>If you have any questions or concerns about your privacy while using Modulo, feel free to reach out
            at:
            📧 <a href="mailto:sujithv15@gmail.com">sujithv15@gmail.com</a></p>
        </section>
      </Flex>
    </Flex>
  );
};

export default PrivacyPolicy;