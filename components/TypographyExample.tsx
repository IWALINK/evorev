/**
 * Typography Example Component
 * Demonstrates how to use the professional typography system
 */

import React from 'react';
import { Typography, TypographyClasses } from '@/lib/typography';

export const TypographyExample = () => {
  return (
    <div className="container-custom py-16">
      {/* ===== HEADINGS EXAMPLES ===== */}
      <section className="mb-16">
        <h1>Main Page Title - Saans SemiBold</h1>
        <h2>Section Title - Saans SemiBold</h2>
        <h3>Subsection Title - Saans Medium</h3>
        <h4>Card Title - Saans Medium</h4>
        <h5>Small Title - Saans Medium</h5>
        <h6>Tiny Title - Saans Medium</h6>
      </section>

      {/* ===== BODY TEXT EXAMPLES ===== */}
      <section className="mb-16">
        <h2>Body Text Variants</h2>
        <p className="text-body-lg">
          Large body text - Perfect for introductory paragraphs or lead text.
          Inter Variable ensures excellent readability. (Inter Variable)
        </p>
        <p className="text-body">
          Standard body text - The default for most content. Comfortable to read
          for long periods. This is what most of your text should use. (Inter Variable)
        </p>
        <p className="text-body-sm">
          Small body text - Useful for fine print, captions, or secondary information.
          Still readable but more compact. (Inter Variable)
        </p>
        <p className="text-caption">
          CAPTION TEXT - METADATA, TIMESTAMPS, OR LABELS (Inter Variable)
        </p>
      </section>

      {/* ===== BUTTONS EXAMPLES ===== */}
      <section className="mb-16">
        <h2>Button Typography</h2>
        <div className="flex gap-4 flex-wrap">
          <button className="bg-secondary hover:bg-gray-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ">
            Primary Button
          </button>
          <button className="bg-secondary hover:bg-gray-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ">
            Primary Button
          </button>
          <button className="bg-secondary hover:bg-gray-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ">
            Primary Button
          </button>
        </div>
        
        <div className="flex gap-4 flex-wrap mt-4">
          <button className="btn-secondary border-2 border-gray-300 px-6 py-3 rounded-lg hover:border-gray-400 transition">
            Secondary Button
          </button>
          <button className="btn-secondary btn-small border-2 border-gray-300 px-4 py-2 rounded-lg hover:border-gray-400 transition">
            Secondary Small
          </button>
        </div>
      </section>

      {/* ===== CODE EXAMPLES ===== */}
      <section className="mb-16">
        <h2>Code & Technical Elements</h2>
        <p>
          Install the package with <code>npm install evorev</code> and then
          import it using <code>import &#123; Component &#125; from 'evorev'</code>.
        </p>
        
        <pre><code>{`// Code block example (SFMono)
function greet(name: string) {
  return \`Hello, \${name}!\`;
}

const message = greet('World');
console.log(message);`}</code></pre>
      </section>

      {/* ===== FONT FAMILIES ===== */}
      <section className="mb-16">
        <h2>Font Family Utilities</h2>
        <p className="font-heading text-2xl fw-semibold mb-2">
          This text uses Saans font (heading font family)
        </p>
        <p className="font-body text-lg mb-2">
          This text uses Inter Variable (body font family)
        </p>
        <p className="font-mono text-lg mb-2">
          This text uses SFMono (monospace font family)
        </p>
        <p className="font-decorative text-2xl mb-2">
          ✨ This uses Honk Sans - Use sparingly! ✨
        </p>
      </section>

      {/* ===== DECORATIVE EXAMPLES (Use sparingly!) ===== */}
      <section className="mb-16">
        <h2>Decorative Accents</h2>
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <p className="text-accent mb-4">
            🎉 Special Promotion! 🎉
          </p>
          <h3>Get 50% Off Today</h3>
          <p className="text-body">
            This is how you might use decorative text for special announcements
            or visual accents - but don't overdo it!
          </p>
        </div>
      </section>

      {/* ===== UTILITY CLASSES EXAMPLES ===== */}
      <section className="mb-16">
        <h2>Typography Utilities</h2>
        
        <div className="space-y-4">
          <div>
            <h4>Font Weights</h4>
            <p className="fw-regular">Regular weight (400)</p>
            <p className="fw-medium">Medium weight (500)</p>
            <p className="fw-semibold">Semibold weight (600)</p>
            <p className="fw-bold">Bold weight (700)</p>
          </div>

          <div>
            <h4>Letter Spacing</h4>
            <p className="tracking-tight text-2xl">Tight tracking (-0.02em)</p>
            <p className="tracking-normal text-2xl">Normal tracking (0)</p>
            <p className="tracking-wide text-2xl">Wide tracking (0.02em)</p>
            <p className="tracking-wider text-2xl">Wider tracking (0.05em)</p>
          </div>

          <div>
            <h4>Line Heights</h4>
            <p className="leading-tight">
              Tight line height (1.3) - Good for headings and compact text.
              Notice how close the lines are to each other. This creates a more
              dense appearance.
            </p>
            <p className="leading-normal">
              Normal line height (1.6) - Perfect for body text. Provides
              comfortable reading experience with proper spacing between lines.
              This is the default for most content.
            </p>
            <p className="leading-relaxed">
              Relaxed line height (1.8) - Extra spacious for easier scanning.
              Great for quotes, callouts, or text that needs more breathing room.
              Creates an airy, open feel.
            </p>
          </div>
        </div>
      </section>

      {/* ===== USING WITH INLINE STYLES ===== */}
      <section className="mb-16">
        <h2>Using Typography Object (TypeScript)</h2>
        <div style={Typography.h3}>
          Styled with Typography.h3 object
        </div>
        <div style={Typography.body}>
          This uses the Typography.body style object directly in React.
          Perfect when you need inline styles or styled-components.
        </div>
        <div style={Typography.caption}>
          Caption styled with Typography.caption object
        </div>
      </section>

      {/* ===== USING WITH CLASSNAMES ===== */}
      <section className="mb-16">
        <h2>Using TypographyClasses (TypeScript)</h2>
        <div className={TypographyClasses.h3}>
          Using TypographyClasses.h3 constant
        </div>
        <div className={TypographyClasses.body}>
          This uses the TypographyClasses.body constant for className.
          Type-safe and auto-completable in your IDE!
        </div>
        <div className={TypographyClasses.caption}>
          Caption with TypographyClasses.caption
        </div>
      </section>

      {/* ===== RESPONSIVE BEHAVIOR ===== */}
      <section className="mb-16">
        <h2>Responsive Typography</h2>
        <div className="bg-yellow-50 border-2 border-yellow-400 p-6 rounded-lg">
          <p className="text-body-sm fw-semibold mb-2">💡 TIP</p>
          <p className="text-body">
            All heading sizes use <code>clamp()</code> which means they automatically
            scale based on viewport width. Try resizing your browser window to see
            the effect! No media queries needed.
          </p>
        </div>
        
        <h1 className="mt-8">This H1 scales from 2.5rem to 4.5rem</h1>
        <h2>This H2 scales from 2rem to 3.5rem</h2>
        <h3>This H3 scales from 1.5rem to 2.5rem</h3>
      </section>

      {/* ===== REAL WORLD EXAMPLE ===== */}
      <section className="mb-16">
        <h2>Real World Example - Feature Card</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border-2 border-gray-200 p-6 rounded-lg card-hover">
            <h4 className="mb-3">Fast Performance</h4>
            <p className="text-body-sm mb-4">
              Lightning-fast load times with optimized font delivery and
              variable font support for all weight variations.
            </p>
            <button className="btn-secondary btn-small">
              Learn More
            </button>
          </div>

          <div className="border-2 border-gray-200 p-6 rounded-lg card-hover">
            <h4 className="mb-3">Beautiful Design</h4>
            <p className="text-body-sm mb-4">
              Carefully crafted typography hierarchy that ensures your
              content looks professional and is easy to read.
            </p>
            <button className="btn-secondary btn-small">
              Learn More
            </button>
          </div>

          <div className="border-2 border-gray-200 p-6 rounded-lg card-hover">
            <h4 className="mb-3">Type Safe</h4>
            <p className="text-body-sm mb-4">
              Full TypeScript support with auto-completion for all
              typography constants and utility classes.
            </p>
            <button className="btn-secondary btn-small">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* ===== BEST PRACTICES ===== */}
      <section className="bg-gray-100 p-8 rounded-lg">
        <h2 className="mb-4">Best Practices Summary</h2>
        <ul className="space-y-2 text-body">
          <li>✅ Use <strong>Saans</strong> for all headings and primary buttons</li>
          <li>✅ Use <strong>Inter</strong> for body text and secondary buttons</li>
          <li>✅ Use <strong>SFMono</strong> only for code elements</li>
          <li>✅ Use <strong>Honk Sans</strong> sparingly for special accents</li>
          <li>✅ Maintain clear hierarchy (h1 → h2 → h3...)</li>
          <li>✅ Let <code>clamp()</code> handle responsive sizing automatically</li>
          <li>❌ Don't mix Saans and Inter in same paragraph</li>
          <li>❌ Don't skip heading levels (h1 → h3)</li>
          <li>❌ Don't use fixed pixel sizes - use CSS variables</li>
          <li>❌ Don't overuse decorative fonts</li>
        </ul>
      </section>
    </div>
  );
};

export default TypographyExample;

