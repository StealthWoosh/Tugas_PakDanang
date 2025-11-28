'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function Home() {
  const [showConsentModal, setShowConsentModal] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [serverStatus, setServerStatus] = useState('Server is up | 83328 Players online!');

  useEffect(() => {
    console.log('showHamburgerMenu state:', showHamburgerMenu);
    const gtConsentCookie = getCookie('gt_consent_status');
    if (gtConsentCookie === '') {
      setShowConsentModal(true);
    }

    // Initialize FlexSlider
    if (typeof $('.banner-slider').flexslider === 'function') {
      $('.banner-slider').flexslider({
        animation: 'fade',
        selector: '.slides > li',
        slideshowSpeed: 8000,
        animationSpeed: 600,
        controlNav: false,
        directionNav: false,
        keyboard: true,
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
    }

    // Initialize Magnific Popup for images
    if (typeof $('.growtopia-feature-image').magnificPopup === 'function') {
      $('.growtopia-feature-image').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
          verticalFit: true
        }
      });
    }

    // Initialize Magnific Popup for videos
    if (typeof $('#watch-video').magnificPopup === 'function') {
      $('#watch-video').magnificPopup({
        type: 'iframe',
        iframe: {
          markup: '<div class="mfp-iframe-scaler">' +
            '<div class="mfp-close"></div>' +
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            '</div>',

          patterns: {
            youtube: {
              index: 'youtube.com/',
              id: 'v=',
              src: '//www.youtube.com/embed/%id%?autoplay=1'
            },
            vimeo: {
              index: 'vimeo.com/',
              id: '/',
              src: '//player.vimeo.com/video/%id%?autoplay=1'
            },
            gmaps: {
              index: '//maps.google.',
              src: '%id%&output=embed'
            }
          },
          srcAction: 'iframe_src',
        }
      });
    }

    // Initialize WOW.js
    if (typeof window.WOW === 'function') {
      new WOW().init();
    }
  }, []);

  function setCookie(cname: string, cvalue: string, exdays: number) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname: string) {
    const name = cname + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  const handleAcceptConsent = () => {
    setCookie('gt_consent_status', '1', 365);
    setShowConsentModal(false);
    
  };

  const handleRefuseConsent = () => {
    setCookie('gt_consent_status', '0', 180);
    setShowConsentModal(false);
  };

  const handleConfirmRedirect = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    if (window.confirm('You are going to be redirected to an external link.\n\nDo you wish to proceed?')) {
      window.open(url, '_blank');
    }
  };

  return (
    <>
      <link rel="icon" type="image/png" href="https://s3.eu-west-1.amazonaws.com/cdn.growtopiagame.com/website/resources/assets/images/growtopia.ico" sizes="16x16" />
      <link rel="shortcut icon" href="https://s3.eu-west-1.amazonaws.com/cdn.growtopiagame.com/website/resources/assets/images/growtopia.ico" type="image/x-icon" />
      <link rel="icon" href="https://s3.eu-west-1.amazonaws.com/cdn.growtopiagame.com/website/resources/assets/images/growtopia.ico" type="image/x-icon" />

      <link media="all" rel="stylesheet" href="https://s3.eu-west-1.amazonaws.com/cdn.growtopiagame.com/website/resources/vendors/animate/animate.min.css" />
      <link media="all" rel="stylesheet" href="https://s3.eu-west-1.amazonaws.com/cdn.growtopiagame.com/website/resources/vendors/FlexSlider/css/flexslider.min.css" />
      <link media="all" rel="stylesheet" href="https://s3.eu-west-1.amazonaws.com/cdn.growtopiagame.com/website/resources/assets/css/main-min.css" />
      <link media="all" rel="stylesheet" href="https://s3.eu-west-1.amazonaws.com/cdn.growtopiagame.com/website/resources/assets/css/hamburger-style-min.css" />
      <link media="all" rel="stylesheet" href="https://s3.eu-west-1.amazonaws.com/cdn.growtopiagame.com/website/resources/assets/css/slick-min.css" />
      <link media="screen and (min-width: 992px)" rel="stylesheet" href="https://s3.eu-west-1.amazonaws.com/cdn.growtopiagame.com/website/resources/assets/css/set2-min.css" />
      <link media="all" rel="stylesheet" href="https://s3.eu-west-1.amazonaws.com/cdn.growtopiagame.com/website/resources/vendors/magnific-popup/magnific-popup-min.css" />
      <link media="all" rel="stylesheet" href="https://s3.eu-west-1.amazonaws.com/cdn.growtopiagame.com/website/resources/assets/css/custom-min.css" />

      <Script id="google-analytics-old" strategy="beforeInteractive">
        {`
          if (document.cookie.indexOf("gt_consent_status=1") >= 0) {
            var _gaq = _gaq || [];
            _gaq.push(['_setAccount', 'UA-36654746-1']);
            _gaq.push(['_trackPageview']);

            (function() {
              var ga = document.createElement('script');
              ga.type = 'text/javascript';
              ga.async = true;
              ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
              var s = document.getElementsByTagName('script')[0];
              s.parentNode.insertBefore(ga, s);
            })();
          }
        `}
      </Script>
      <Script id="google-analytics-new" strategy="beforeInteractive">
        {`
          if (document.cookie.indexOf("gt_consent_status=1") >= 0) {
            (function() {
              var ga = document.createElement('script');
              ga.type = 'text/javascript';
              ga.async = true;
              ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://www.') + 'googletagmanager.com/gtag/js?id=G-F4HG4PR4LM';
              var s = document.getElementsByTagName('script')[0];
              s.parentNode.insertBefore(ga, s);
            })();
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-F4HG4PR4LM');
          }
        `}
      </Script>

      <Script id="base-url-script" strategy="beforeInteractive">
        {`window.base_url = window.location.origin;`}
      </Script>

      {/* Add jQuery Script */}
      <Script
        id="jquery-script"
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
        strategy="beforeInteractive"
      />

      {/* Main wrapper */}
      <div id="wrap">
        {/* Header */}
        <header className="navbar-fixed-top full-width bg-dark" id="header">
          <div className="server-status">
            <p>{serverStatus}</p>
          </div>
          <div className="container">
            <nav className="navbar navbar-default" id="mainnav">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle nav-opener" onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}>
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <div className="logo">
                  <a href="#top">
                    <img className="normal" src="/images/logo_navibar.png" alt="Growtopia" />
                    <img className="gray" src="/images/logo_navibar.png" alt="Growtopia" />
                  </a>
                </div>
              </div>
              <div className="collapse navbar-collapse" id="nav">
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="/fan-kit" title="Download Growtopia Fan kit">Fan Kit</a></li>
                  <li><a href="https://www.growtopiagame.com/forums/" title="Forums" target="_blank">Forums</a></li>
                  <li><a href="/faq" title="Frequently Asked Questions">Support</a></li>
                  <li><a href="/leaderboard" title="View Dungeons Leaderboard">Leaderboard</a></li>
                  <li><a href="/shop?utm_src=main_menu" title="Get more gems" className="shop-menu-button">Shop</a></li>
                </ul>
              </div>
            </nav>
          </div>

          {/* Hamburger Menu */}
          <div className="nav-right visible-xs hidden-sm hidden-md hidden-lg">
            <div className={`button ${showHamburgerMenu ? 'active' : ''}`} id="btn" onClick={() => { console.log('Hamburger button clicked'); setShowHamburgerMenu(!showHamburgerMenu); }}>
              <div className="bar top"></div>
              <div className="bar middle"></div>
              <div className="bar bottom"></div>
            </div>
          </div>

          <div className={`sidebar ${showHamburgerMenu ? 'animate' : ''}`}>
            <ul className="sidebar-list">
              <li className="sidebar-item"><a href="#home" className="sidebar-anchor" title="Home" onClick={() => setShowHamburgerMenu(false)}>Home</a></li>
              <li className="sidebar-item"><a href="#about" className="sidebar-anchor" title="About" onClick={() => setShowHamburgerMenu(false)}>About</a></li>
              <li className="sidebar-item"><a href="#video" className="sidebar-anchor" title="Video" onClick={() => setShowHamburgerMenu(false)}>Video</a></li>
              <li className="sidebar-item"><a href="#worlds-we-love" className="sidebar-anchor" title="Worlds we love" onClick={() => setShowHamburgerMenu(false)}>Worlds we love</a></li>
              <li className="sidebar-item"><a href="#community" className="sidebar-anchor" title="Community" onClick={() => setShowHamburgerMenu(false)}>Community</a></li>
              <li className="sidebar-item"><a href="#download" className="sidebar-anchor" title="Download" onClick={() => setShowHamburgerMenu(false)}>Download</a></li>
              <li className="sidebar-item"><a href="/fan-kit" className="sidebar-anchor" title="Download Growtopia Fan kit">Fan Kit</a></li>
              <li className="sidebar-item"><a href="/leaderboard" className="sidebar-anchor" title="View Dungeons Leaderboard">Leaderboard</a></li>
              <li className="sidebar-item"><a href="/shop" className="sidebar-anchor" title="Get more gems">Shop</a></li>
              <li className="sidebar-item"><a href="#social" className="sidebar-anchor" title="Social" onClick={() => setShowHamburgerMenu(false)}>Social</a></li>
              <li className="sidebar-item"><a href="https://www.growtopiagame.com/forums/" title="Forums" target="_blank">Forums</a></li>
              <li className="sidebar-item"><a href="/recover" title="Account Recovery">Account Recovery</a></li>
              <li className="sidebar-item"><a href="/faq" title="Frequently Asked Questions">Support</a></li>
            </ul>

            <div className="social-icon">
              <ul className="sidebar-social-list">
                <li className="social-item"><a href="https://www.youtube.com/channel/UCNFTBaDHB4_Y8eFa8YssSMQ" onClick={(e) => handleConfirmRedirect(e, 'https://www.youtube.com/channel/UCNFTBaDHB4_Y8eFa8YssSMQ')} target="_blank"><img src="/images/grow_youtube.png" alt="YouTube" /></a></li>
                <li className="social-item"><a href="https://www.instagram.com/growtopia/" onClick={(e) => handleConfirmRedirect(e, 'https://www.instagram.com/growtopia/')} target="_blank"><img src="/images/grow_insta.png" alt="Instagram" /></a></li>
                <li className="social-item"><a href="https://x.com/growtopiagame" onClick={(e) => handleConfirmRedirect(e, 'https://x.com/growtopiagame')} target="_blank"><img src="/images/grow_twitter.png" alt="Twitter" /></a></li>
                <li className="social-item"><a href="https://www.facebook.com/growtopia/" onClick={(e) => handleConfirmRedirect(e, 'https://www.facebook.com/growtopia/')} target="_blank"><img src="/images/grow_fb.png" alt="Facebook" /></a></li>
                <li className="social-item"><a href="https://discord.gg/growtopia" onClick={(e) => handleConfirmRedirect(e, 'https://discord.gg/growtopia')} target="_blank"><img src="/images/grow_discord.png" alt="Discord" /></a></li>
                <li className="social-item"><a href="https://www.tiktok.com/@growtopia" onClick={(e) => handleConfirmRedirect(e, 'https://www.tiktok.com/@growtopia')} target="_blank"><img src="/images/tiktok.png" alt="TikTok" /></a></li>
              </ul>
            </div>
          </div>
        </header>

        {/* Banner */}
        <div id="top"></div>
        <section className="hero banner window-height banner-slider" id="home">
          <div className="flexslider">
            <ul className="slides">
              <li>
                <div className="fleximg" style={{backgroundImage: 'url(/images/grow_header.jpg)'}}></div>
                <div className="flex-caption banner-caption text-left">
                  <div className="container">
                    <div className="worldofday ani fadeIn">
                      <a href="#" className="world-of-day-image">
                        <img src="https://s3.amazonaws.com/world.growtopiagame.com/hollowmansion.png" alt="World of the Day" />
                        <div className="caption">
                          <p className="heading">World of the Day</p>
                          <p className="text"></p>
                        </div>
                      </a>
                    </div>
                    <big className="ani fadeIn">
                      <img src="/images/logo_header.png" alt="Growtopia" />
                    </big>
                    <small className="ani fadeIn grow-punch-line">
                      Growtopia is a free-to-play sandbox MMO game with almost endless possibilities for world creation, customization and having fun with your friends. Enjoy thousands of items, challenges and events.
                    </small>
                    <div id="download-button">
                      <button className="btn btn-primary btn-md radius ani fadeIn grow-button" onClick={() => setShowDownloadModal(true)}>Download</button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <a href="#about" className="glyphicon glyphicon-circle-arrow-down arrow bounce"></a>
        </section>

        <div className="content">
          {/* Twitter Section */}
          <section>
            <div className="twitter">
              <div className="ticker">
                <div className="twitter-icon col-lg-1 col-md-1">
                  <a href="https://x.com/growtopiagame" target="_blank">
                    <img src="/images/twittericon.png" />
                  </a>
                </div>
                <div className="tweets marquee-parent col-lg-9 col-md-8 col-xs-7 col-sm-8">
                  <span className="marquee-child">
                    <i className="glyphicon glyphicon-info-sign"></i> Find out more at <a href="https://twitter.com/growtopiagame" target="_blank">Growtopia official Twitter account</a>
                  </span>
                </div>
                <div className="account col-lg-1 col-md-2 col-sm-2 col-xs-4">
                  <a href="https://x.com/growtopiagame" target="_blank">@growtopiagame</a>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="common-box about parallax container" id="about">
            <div className="row same-height">
              <div className="col-md-6 intro height">
                <div className="intro-text common-box wow fadeIn animated grow-features" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                  <div className="section-title">
                    <h2>Growtopia</h2>
                  </div>
                  <p>Join a universe of unlimited worlds, all connected to each other. Create mind-bending worlds together with friends and fill them with anything your heart desires!&nbsp;</p>
                  <div>
                    <p>Collecting seeds, growing trees, harvesting and combining seeds to make new ones is the heart of the game. As universes go, Growtopia is filled with everyday heroes and some villains too.<br /><br /></p>
                    <h1>Features&nbsp;</h1>
                    <div>
                      <ul>
                        <li>Unlimited worlds&nbsp;</li>
                        <li>Free to play, a single currency can be earned&nbsp;</li>
                        <li>Full chat and messaging&nbsp;</li>
                        <li>Thousands of amazing items to discover&nbsp;</li>
                        <li>Plays great on big screen</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 height grow-feature-image-container">
                <div className="row">
                  <div className="team-list">
                    <div className="wow fadeIn animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                      <div className="item-wrap">
                        <div className="item">
                          <a href="/upload/1_grow_feature_1550388575.png" className="growtopia-feature-image">
                            <img src="/upload/resize/1_grow_feature_1550388575.png" className="fill" alt="Growtopia Feature Image: Building a world" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="wow fadeIn animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                      <div className="item-wrap">
                        <div className="item">
                          <a href="/upload/1_grow_feature_1550391017.png" className="growtopia-feature-image">
                            <img src="/upload/resize/1_grow_feature_1550391017.png" className="fill" alt="Growtopia Feature Image: Character customization" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="wow fadeIn animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                      <div className="item-wrap">
                        <div className="item">
                          <a href="/upload/1_grow_feature_1550388739.png" className="growtopia-feature-image">
                            <img src="/upload/resize/1_grow_feature_1550388739.png" className="fill" alt="Growtopia Feature Image: Farming and harvesting" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="wow fadeIn animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                      <div className="item-wrap">
                        <div className="item">
                          <a href="/upload/1_grow_feature_1550390623.png" className="growtopia-feature-image">
                            <img src="/upload/resize/1_grow_feature_1550390623.png" className="fill" alt="Growtopia Feature Image: Social interaction" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="grow-feature-button">
                <a href="#" className="btn btn-primary btn-md outline radius grow-feature-button" id="grow-feature-button">Play Growtopia</a>
              </div>
              <div id="feature-platform-list" style={{display: 'none'}}>
                <ul className="platform-list">
                  <li><a href="https://app.appsflyer.com/com.rtsoft.growtopia?pid=Website&c=Home" onClick={(e) => handleConfirmRedirect(e, 'https://app.appsflyer.com/com.rtsoft.growtopia?pid=Website&c=Home')} target="_blank"><img src="/images/google_badge.png" alt="Google Play" /></a></li>
                  <li><a href="https://app.appsflyer.com/id590495115?pid=Website&c=home" onClick={(e) => handleConfirmRedirect(e, 'https://app.appsflyer.com/id590495115?pid=Website&c=home')} target="_blank"><img src="/images/appstore_badge.png" alt="App Store" /></a></li>
                  <li><a href="https://growtopiagame.com/Growtopia-Installer.exe" target="_blank"><img src="/images/windows_badge.png" alt="Windows" /></a></li>
                  <li><a href="https://go.onelink.me/BxRH/web2steam" target="_blank"><img src="/images/steam.png" alt="Steam" /></a></li>
                  <li><a href="https://growtopiagame.com/Growtopia-mac.dmg" target="_blank"><img src="/images/mac_badge.png" alt="Mac" /></a></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Video Section */}
          <section className="services common-box platformer" id="video">
            <div className="parent-video">
              <video loop muted autoPlay playsInline className="fullscreen-bg__video">
                <source src="https://s3.eu-west-1.amazonaws.com/cdn.growtopiagame.com/website/resources/assets/videos/Growtopia_Official_Trailer_3.webm" type="video/webm" />
                <source src="https://s3.eu-west-1.amazonaws.com/cdn.growtopiagame.com/website/resources/assets/videos/Growtopia_Official_Trailer_3_large.ogg" type="video/ogg" />
                <source src="https://s3.eu-west-1.amazonaws.com/cdn.growtopiagame.com/website/resources/assets/videos/Growtopia_Official_Trailer_3_hd720.mp4" type="video/mp4; codecs='avc1.42E01E, mp4a.40.2'" />
              </video>
            </div>
            <div className="container wow fadeIn animated" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
              <div className="section-title">
                <h2>A Creative Platformer</h2>
              </div>
              <p className="grow-line-white">
                Growtopia started with growing trees at its core, but over its 11-year history, it has blossomed into so much more. Become a surgeon and save lives, hone your skills as a top chef and create delicious meals, cast your fishing rod and land legendary catches, build ships and embark on star voyages, and craft Parkour worlds filled with mazes, traps, and puzzles. With endless possibilities and a thriving community, it&apos;s like having hundreds of games in one. Who will you be today?
              </p>
              <div>&nbsp;</div>
              <div id="watch_trailer">
                <a href="https://www.youtube.com/watch?v=2-tArcNir10" id="watch-video" className="btn btn-primary grow-platformer-button">Watch Trailer</a>
              </div>
            </div>
          </section>

          {/* Worlds We Love Section */}
          <section className="common-box world-we-love parallax" id="worlds-we-love">
            <div className="row same-height">
              <div className="col-md-12 intro height">
                <div className="intro-text common-box wow fadeIn animated container" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                  <div className="section-title">
                    <h2>Worlds We Love</h2>
                  </div>
                  <div className="grid worlds-we-love-carousel">
                    <figure className="effect-goliath">
                      <a href="/upload/1_grow_world_love_1550391580.jpg">
                        <img src="/upload/resize/1_grow_world_love_1550391580.jpg" className="world-we-love" alt="Balloon Fight World" />
                        <figcaption>
                          <h2>Balloon Fight World</h2>
                          <p>Punch, Build, Balloon Fight!</p>
                        </figcaption>
                      </a>
                    </figure>
                    <figure className="effect-goliath">
                      <a href="/upload/1_grow_world_love_1550391780.jpg">
                        <img src="/upload/resize/1_grow_world_love_1550391780.jpg" className="world-we-love" alt="The Forgotten Raven World" />
                        <figcaption>
                          <h2>The Forgotten Raven</h2>
                          <p>The early bird catches the worm.</p>
                        </figcaption>
                      </a>
                    </figure>
                    <figure className="effect-goliath">
                      <a href="/upload/1_grow_world_love_1550391803.jpg">
                        <img src="/upload/resize/1_grow_world_love_1550391803.jpg" className="world-we-love" alt="Sarkalla World" />
                        <figcaption>
                          <h2>Sarkalla</h2>
                          <p>Look me in the eye.</p>
                        </figcaption>
                      </a>
                    </figure>
                    <figure className="effect-goliath">
                      <a href="/upload/1_grow_world_love_1550391833.jpg">
                        <img src="/upload/resize/1_grow_world_love_1550391833.jpg" className="world-we-love" alt="Ubisoft World" />
                        <figcaption>
                          <h2>Ubisoft World</h2>
                          <p>Do you recognize these characters?</p>
                        </figcaption>
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Community Section */}
          <section className="common-box community parallax" id="community">
            <div className="row same-height">
              <div className="col-md-12 intro height">
                <div className="intro-text common-box wow fadeIn animated container grow-punch-line" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                  <div className="section-title">
                    <h2>Community</h2>
                  </div>
                  <p>
                    Growtopia lives and breathes thanks to the amazing community of players who come to play, create, educate and entertain each other. Growtopians chat in the game, as well as on dedicated Growtopia forums. To get advice, pro tips, latest news, share your fan art, or discuss updates and suggest new features, head to forums! <br />
                  </p>
                  <div className="grid community-carousel"></div>
                  <a href="https://www.growtopiagame.com/forums/" target="_blank" className="btn btn-primary btn-md grow-button">Visit Forums</a>
                </div>
              </div>
            </div>
          </section>

          {/* Download Section */}
          <section className="common-box download parallax" id="download">
            <div className="row same-height">
              <div className="col-md-12 intro height">
                <div className="intro-text common-box wow fadeIn animated container grow-punch-line" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                  <div className="section-title">
                    <h2>Download</h2>
                  </div>
                  <p>New worlds and new friends are waiting for you! Start playing Growtopia now.</p>
                  <ul className="platform-list">
                    <li><a href="https://app.appsflyer.com/com.rtsoft.growtopia?pid=Website&c=Home" onClick={(e) => handleConfirmRedirect(e, 'https://app.appsflyer.com/com.rtsoft.growtopia?pid=Website&c=Home')} target="_blank"><img src="/images/google_badge.png" alt="Google Play" /></a></li>
                    <li><a href="https://app.appsflyer.com/id590495115?pid=Website&c=home" onClick={(e) => handleConfirmRedirect(e, 'https://app.appsflyer.com/id590495115?pid=Website&c=home')} target="_blank"><img src="/images/appstore_badge.png" alt="App Store" /></a></li>
                    <li><a href="https://growtopiagame.com/Growtopia-Installer.exe" target="_blank"><img src="/images/windows_badge.png" alt="Windows" /></a></li>
                    <li><a href="https://go.onelink.me/BxRH/web2steam" target="_blank"><img src="/images/steam.png" alt="Steam" /></a></li>
                    <li><a href="https://growtopiagame.com/Growtopia-mac.dmg" target="_blank"><img src="/images/mac_badge.png" alt="Mac" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Social Spread Section */}
          <section className="common-box social-spread parallax" id="social">
            <div className="row same-height">
              <div className="col-md-12 intro height">
                <div className="intro-text common-box wow fadeIn animated container" data-wow-offset="30" data-wow-duration="1.5s" data-wow-delay="0.15s">
                  <div className="section-title">
                    <h2>Spread the love</h2>
                  </div>
                  <p className="grow-line-white">Follow Growtopia on your preferred Social Media channel to see awesome creations by fellow players, and random Growtopia beauty. Like and share with your friends!</p>
                  <div className="social-icon">
                    <ul className="platform-list">
                      <li><a href="https://www.youtube.com/channel/UCNFTBaDHB4_Y8eFa8YssSMQ" onClick={(e) => handleConfirmRedirect(e, 'https://www.youtube.com/channel/UCNFTBaDHB4_Y8eFa8YssSMQ')} target="_blank"><img src="/images/grow_youtube.png" alt="YouTube" /></a></li>
                      <li><a href="https://www.instagram.com/growtopia/" onClick={(e) => handleConfirmRedirect(e, 'https://www.instagram.com/growtopia/')} target="_blank"><img src="/images/grow_insta.png" alt="Instagram" /></a></li>
                      <li><a href="https://x.com/growtopiagame" onClick={(e) => handleConfirmRedirect(e, 'https://x.com/growtopiagame')} target="_blank"><img src="/images/grow_twitter.png" alt="Twitter" /></a></li>
                      <li><a href="https://www.facebook.com/growtopia/" onClick={(e) => handleConfirmRedirect(e, 'https://www.facebook.com/growtopia/')} target="_blank"><img src="/images/grow_fb.png" alt="Facebook" /></a></li>
                      <li><a href="https://discord.gg/growtopia" onClick={(e) => handleConfirmRedirect(e, 'https://discord.gg/growtopia')} target="_blank"><img src="/images/grow_discord.png" alt="Discord" /></a></li>
                      <li><a href="https://www.tiktok.com/@growtopia" onClick={(e) => handleConfirmRedirect(e, 'https://www.tiktok.com/@growtopia')} target="_blank"><img src="/images/tiktok.png" alt="TikTok" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer id="footer">
          <div className="common-box footer">
            <div className="container text-center">
              <div className="logo">
                <a href="https://www.ubisoft.com" target="_blank">
                  <img src="/images/ubi_icon.png" alt="Ubisoft" />
                </a>
              </div>
              <div className="copy-right">
                &copy; 2025 <a href="https://www.ubisoft.com" target="_blank">Ubisoft</a>. All Rights Reserved.
              </div>
              <ul className="link">
                <li><a href="https://legal.ubi.com/" target="_blank" title="Legal">Legal</a></li>
                <li><a href="https://legal.ubi.com/privacypolicy" target="_blank" title="Privacy Policy">Privacy Policy</a></li>
                <li><a href="javascript:void(0)" onClick={(e) => { e.preventDefault(); setShowConsentModal(true); }} id="manage-cookie-consent" title="Manage Consent">Manage Consent</a></li>
                <li><a href="https://www.ubisoft.com/en-us/help/contact?game=50003&platform=29&category=389&hidefields=all&gf=1&af=1" target="_blank" title="Do not sell my Personal Information">Do not sell my Personal Information</a></li>
                <li><a href="https://www.ubisoft.com/en-us/help/contact?game=50003&platform=29&category=389&hidefields=all&gf=1&af=1" target="_blank" title="Limit Use/Disclosure of My Sensitive Personal Information">Limit Use/Disclosure of My Sensitive Personal Information</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>

      {/* Download Modal */}
      <div id="download-popup" className={showDownloadModal ? "modal d-block" : "modal d-none"} role="dialog" style={{ display: showDownloadModal ? 'block' : 'none', backgroundColor: showDownloadModal ? 'rgba(0,0,0,0.5)' : 'transparent' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" onClick={() => setShowDownloadModal(false)}>&times;</button>
            </div>
            <section className="download-popup">
              <div className="row same-height">
                <div className="col-md-12 intro height">
                  <div className="section-image">
                    <img src="/upload/1_grow_icon_1513191167.jpg" alt="Growtopia Icon" />
                    <p>Growtopia is a universe of unlimited worlds, all connected to each other.<br />Play Growtopia on any of the platforms below. If you create and use Grow ID, your game will be synchronized across devices.</p>
                  </div>
                  <div className="platform-wrapper">
                    <ul className="platform-list">
                      <li><a href="https://app.appsflyer.com/com.rtsoft.growtopia?pid=Website&c=download" onClick={(e) => handleConfirmRedirect(e, 'https://app.appsflyer.com/com.rtsoft.growtopia?pid=Website&c=download')} target="_blank"><img src="/images/google_badge.png" alt="Google Play" /></a></li>
                      <li><a href="https://app.appsflyer.com/id590495115?pid=Website&c=download" onClick={(e) => handleConfirmRedirect(e, 'https://app.appsflyer.com/id590495115?pid=Website&c=download')} target="_blank"><img src="/images/appstore_badge.png" alt="App Store" /></a></li>
                      <li><a href="https://growtopiagame.com/Growtopia-mac.dmg" target="_blank"><img src="/images/mac_badge.png" alt="Mac" /></a></li>
                      <li><a href="https://growtopiagame.com/Growtopia-Installer.exe" target="_blank"><img src="/images/windows_badge.png" alt="Windows" /></a></li>
                    </ul>
                  </div>
                  <div className="section-image">
                    <p className="bold">Now you can enjoy Growtopia on the following PC platforms!</p>
                  </div>
                  <div className="platform-wrapper">
                    <ul className="platform-list">
                      <li><a href="https://go.onelink.me/BxRH/web2steam" onClick={(e) => handleConfirmRedirect(e, 'https://go.onelink.me/BxRH/web2steam')} target="_blank"><img src="/images/steam.png" alt="Steam" /></a></li>
                    </ul>
                  </div>
                  <div className="section-image">
                    <p className="small">Please note that accessing Growtopia on Steam requires Ubisoft Connect client installed.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Consent Modal */}
      {showConsentModal && (
        <div className="modal fade show" id="consentModal" style={{display: 'block', backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <div className="panel-heading">
                  <h3 className="text-center text-info">Welcome!</h3>
                </div>
                <p className="text-muted">
                  We use cookies and technological tools to analyse the traffic of this website, enhance your experience and offer you ads tailored to your interests.
                </p>
                <p className="text-muted">
                  Maintain control over your data by setting cookies, you can change or withdraw your consent at any time. If you refuse cookies, it does not affect the way our site operates, however you will not be able to take full advantage of all our features. For more information, consult our <a href="https://legal.ubi.com/privacypolicy/" title="Legal" target="_blank">privacy policy</a>.
                </p>
                <div className="h6">
                  <small>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Tracker</th>
                          <th>Description</th>
                          <th>Partner</th>
                          <th>Expiration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Google Analytics</td>
                          <td>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.</td>
                          <td>No</td>
                          <td>A Year</td>
                        </tr>
                        <tr>
                          <td>Growtopia Website</td>
                          <td>Required for the website to function and to check the status of cookie consent.</td>
                          <td>Own</td>
                          <td>A Year</td>
                        </tr>
                        <tr>
                          <td>Amazon Session</td>
                          <td>Required for the website to function and to help the client maintain a connection to the same instance over a cookie&apos;s lifetime.</td>
                          <td>No</td>
                          <td>A week</td>
                        </tr>
                      </tbody>
                    </table>
                  </small>
                </div>
                <div className="row center-align">
                  <div className="col-lg-3 col-sm-2"></div>
                  <div className="col-lg-3 col-sm-4">
                    <button onClick={handleRefuseConsent} className="btn btn-primary grow-button">I refuse cookies</button>
                  </div>
                  <div className="col-lg-3 col-sm-4">
                    <button onClick={handleAcceptConsent} className="btn btn-primary grow-button">I accept cookies</button>
                  </div>
                  <div className="col-lg-3 col-sm-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pre Loader */}
      {/* This preloader is removed because it might be causing an overlay issue. If a preloader is desired, implement it using React state. */}
      {/*
      <div className="preloader" id="pageLoad">
        <div className="holder"> <img src="/images/loder.svg" height="100" width="100" alt="Loader"> </div>
      </div>
      */}

      {/* Ensure growweb.min.js loads after jQuery */}
      <Script src="https://s3.eu-west-1.amazonaws.com/cdn.growtopiagame.com/website/resources/assets/js/growweb.min.js" strategy="afterInteractive" />
    </>
  );
}