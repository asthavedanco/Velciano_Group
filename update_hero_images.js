const fs = require('fs');
const path = require('path');

const replacements = {
  'src/app/export/page.tsx': '/images/shaking_hands_business_cta_1776849464795.png',
  'src/app/e-catalogue/page.tsx': '/images/catalogue_hero_banner_1776839154651.png',
  'src/app/contact/page.tsx': '/images/contact_banner_bg.png',
  'src/app/about/page.tsx': '/images/contact_banner_bg.png',
  'src/app/about/why-us/page.tsx': '/images/shaking_hands_business_cta_1776849464795.png',
  'src/app/about/testimonials/page.tsx': '/images/sofa_cover_luxury.png',
  'src/app/about/manufacturing/page.tsx': '/images/industrial_rubber_mats_hero_1776839712171.png',
  'src/app/about/global-demand/page.tsx': '/images/shaking_hands_business_cta_1776849464795.png',
  'src/app/about/dealership/page.tsx': '/images/shaking_hands_business_cta_1776849464795.png',
  'src/app/about/certification/page.tsx': '/images/certification_logos.png',
  'src/app/collection/page.tsx': '/images/pillow_cover_decorative.png',
  'src/app/collection/CollectionLayout.tsx': '/images/curtain_modern.png',
  'src/app/product/[slug]/page.tsx': '/images/bedsheet_luxury.png'
};

for (const [relPath, newImage] of Object.entries(replacements)) {
  const filePath = path.join(__dirname, relPath);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    continue;
  }
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  const sectionIndex = content.indexOf('className="sub-hero"');
  if (sectionIndex !== -1) {
    const genericSrcIndex = content.indexOf('src="', sectionIndex);
    if (genericSrcIndex !== -1 && genericSrcIndex < sectionIndex + 1000) {
      const endQuote = content.indexOf('"', genericSrcIndex + 5);
      content = content.substring(0, genericSrcIndex + 5) + newImage + content.substring(endQuote);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated ${relPath} to ${newImage}`);
    }
  } else {
    console.log(`Could not find sub-hero section in ${relPath}`);
  }
}
