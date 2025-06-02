import React, { useState } from 'react';
import './Technologies.css';

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState('Website Development');

  const categories = [
    'Website Development',
    'App Development',
    'Digital Marketing',
    'SEO',
  ];

  const tools = {
    'Website Development': [
      { name: 'Wordpress', image: 'Mask_group_67_8bd99d404b.webp' },
      { name: 'React', image: 'Mask_group_50_c93c4841d2.webp' },
      { name: 'Vue.js', image: 'Mask_group_63_d9105ea78f.webp' },
      { name: 'PHP', image: 'php_1d3b64b85d.webp' },
      { name: 'Pythone', image: 'python_9828a276c4.webp' },
      { name: 'Angular.js', image: 'angular.webp' },
      { name: 'Node.js', image: 'node_js_ba6f19e132.webp' },
      { name: 'Ruby', image: 'ruby_632c73bf20.webp' },
      { name: 'Java', image: 'java_af6208f7f7.webp' },
      { name: 'Wix', image: 'Mask_group_66_c9f9f0ba42.webp' },
      { name: 'Webflow', image: 'webflow.webp' },
      { name: 'Laravel', image: 'laravel.webp' },
    ],
    'App Development': [
      { name: 'Android', image: 'android_ce04718bfc.webp' },
      { name: 'IOS', image: 'Mask_group_72_ab44e0e6c2 (1).webp' },
      { name: 'Java', image: 'java_af6208f7f7.webp' },
      { name: 'Kotlin', image: 'Mask_group_27_56cfcc433d.webp' },
      { name: 'Laravel', image: 'laravel.webp' },
      { name: 'Jet Compose', image: 'Jetpack-compose (1).webp' },
      { name: 'Swift & Swiftui', image: 'swiftui.webp' },
      { name: 'Xamarin', image: 'Xamarin.webp' },
      { name: 'Flutter', image: 'Mask_group_14_a2da91a4de.webp' },
      { name: 'React Native', image: 'Mask_group_51_b75d5583be.webp' },
      { name: 'Objective-c', image: 'Mask_group_39_32e642f0b4.webp' },
      { name: 'Dejango', image: 'django-icon.webp' },
    ],
    'Digital Marketing': [
      { name: 'MGID', image: 'UgIG5WsFoUTC4IiFhL_VNMTq8uj4cn6s.webp' },
      { name: 'Buffer', image: 'Buffer.webp' },
      { name: 'Hootsuite', image: 'Hoostesuite.webp' },
      { name: 'Google Analytics', image: 'Google-Analytics.webp' },
      { name: 'Tag Manager', image: 'tagmanager.webp' },
      { name: 'Taboola', image: 'images-4.webp' },
      { name: 'Out Brain', image: 'Outbrain.webp' },
      { name: 'Instagram', image: 'Insta.webp' },
      { name: 'Facebook', image: 'FB.webp' },
      { name: 'Reddit', image: 'reddit.webp' },
      { name: 'Pintrest', image: 'pinterest_PNG37.webp' },
      { name: 'TikTok', image: 'tiktok.webp' },
    ],
    'SEO': [
      { name: 'Ahrefs', image: 'images.webp' },
      { name: 'Moz', image: 'moz.webp' },
      { name: 'Semrush', image: 'semrush.webp' },
      { name: 'Crawling Sitemap', image: 'Crawling-sitemap-1.webp' },
      { name: 'Indexing Sitemap', image: 'Indexing-Sitemap-1.webp' },
      { name: 'Ubersuggest', image: 'ubersuggest.webp' },
      { name: 'Out Brain', image: 'Outbrain.webp' },
      { name: 'KWFinder', image: 'kwfinder.webp' },
      { name: 'Sitebulb', image: 'sitebulb.webp' },
      { name: 'DeepCrawl', image: 'deepcrawl.webp' },
      { name: 'JetOctopus', image: 'Jetoctopusl_logo.jpg-removebg-pr.webp' },
      { name: 'SEOlyzer', image: 'seolyer.webp' },
    ],
  };

  return (
    <div className="container my-5">
      <div className="row shadow rounded-4 p-4 bg-white">
        {/* Left Sidebar */}
        <div className="col-md-3 mb-4 mb-md-0">
          <div className="d-flex flex-column gap-3">
            {categories.map((cat, index) => (
              <button
                key={index}
                className={`btn fw-bold ${
                  activeCategory === cat ? 'bg-dark text-white' : 'bg-light text-danger'
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Right Grid for Selected Category */}
        <div className="col-md-9">
          <div className="row g-3">
            {tools[activeCategory]?.map((tool, index) => (
              <div className="col-6 col-md-4 col-lg-3" key={index}>
                <div className="border rounded-3 p-3 text-center bg-light h-100">
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="img-fluid mb-2"
                    style={{ maxHeight: '60px' }}
                    
                  />
                  <div className="fw-semibold">{tool.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
