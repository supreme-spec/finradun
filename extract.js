/* eslint-disable */
const fs = require('fs');
const path = require('path');

const srcDir = 'd:/project/finradun.ru';
const outDir = 'd:/project/finradun.ru/finradun-next/src/data';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// These are basically all HTML files in the srcDir except root/system files
const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.html') && !['index.html', 'portfolio.html', 'contacts.html', 'partners.html', 'blog.html', 'beginners.html', 'intermediate.html', 'professional.html', 'blog-single.html', '404.html'].includes(f));

const articles = [];

files.forEach(file => {
  const content = fs.readFileSync(path.join(srcDir, file), 'utf8');
  const slug = file.replace('.html', '');
  
  // Extract title
  let titleMatch = content.match(/<title>([^<]+)<\/title>/);
  let title = titleMatch ? titleMatch[1].replace(' | Блог Сергея Свистунова', '').trim() : slug;
  
  // Try to find more precise h3/h2 title
  let h3Match = content.match(/<h3><a[^>]*>(.*?)<\/a><\/h3>/);
  if (h3Match) {
     title = h3Match[1].replace(/<[^>]+>/g, '').trim();
  }

  // Extract content inside <div class="blog-text fl-wrap">
  // We need to match from <div class="blog-text fl-wrap"> to the matching closing div.
  // Using a simpler regex since it usually ends with closing div of post or comments
  let textMatch = content.match(/<div class="blog-text fl-wrap">([\s\S]*?)<\/div>\s*<\/div>\s*(?:<!--comments end -->|<div class="col-md-4">)/);
  if (!textMatch) {
      textMatch = content.match(/<div class="blog-text fl-wrap">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<!-- blog-sidebar/);
  }
  
  let htmlContent = '';
  if (textMatch) {
      htmlContent = textMatch[1].trim();
      // Remove the inner <h3> title from content if it's there
      htmlContent = htmlContent.replace(/<div class="clearfix"><\/div>\s*<h3>[\s\S]*?<\/h3>/, '');
  }

  // Extract image
  let imageMatch = content.match(/<div class="slick-slide-item"><img src="([^"]+)"/);
  // Also try default meta
  if(!imageMatch) imageMatch = content.match(/<meta property="og:image" content="([^"]+)"/);
  if(!imageMatch) imageMatch = content.match(/"image":\s*"([^"]+)"/);
  
  let image = "images/folio/5.webp";
  if (imageMatch) {
      image = imageMatch[1];
      if (image.startsWith('https://finradun.ru/')) {
         image = image.replace('https://finradun.ru/', '');
      }
  }

  articles.push({
      slug,
      title,
      image,
      content: htmlContent
  });
});

fs.writeFileSync(path.join(outDir, 'articles.json'), JSON.stringify(articles, null, 2));
console.log('Extracted ' + articles.length + ' articles.');
