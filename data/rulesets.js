





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-3b630179b3ba661bed136319970519c14eae34456b7cf575d1126c208cd61d0e.css" integrity="sha256-O2MBebO6ZhvtE2MZlwUZwU6uNEVrfPV10RJsIIzWHQ4=" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-9b570fad50fd50c872c1410630c81a11e93ad851620357a8d2d4af6ffd5e42c0.css" integrity="sha256-m1cPrVD9UMhywUEGMMgaEek62FFiA1eo0tSvb/1eQsA=" media="all" rel="stylesheet" />
  
  
  
  

  <meta name="viewport" content="width=device-width">
  
  <title>Pokemon-Showdown/rulesets.js at master · Zarel/Pokemon-Showdown</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars0.githubusercontent.com/u/551184?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="Zarel/Pokemon-Showdown" property="og:title" /><meta content="https://github.com/Zarel/Pokemon-Showdown" property="og:url" /><meta content="Pokemon-Showdown - Pokémon battle simulator." property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MTgwMzEyMzY5OjhlZjZiMWI1YjQ4YWE2MTU0Nzg2MDFhZDhhODkyOTI4ODJkNzdjZDI5NTkxMDAxMGIzNmM0Mzk2NWY5ZTg3ZmE=--709fc81a750ff6e36a4cf5d9c41b3730ecf2c6b4">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="CA5F:4749:503CD54:7362EC7:593E7F0F" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="CA5F:4749:503CD54:7362EC7:593E7F0F" name="octolytics-dimension-request_id" /><meta content="iad" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" /><meta content="29373427" name="octolytics-actor-id" /><meta content="Impulse-PS" name="octolytics-actor-login" /><meta content="24881181bca2713a4bdf6b0a738ca3eee4493ad9892411fbdf63ec130b8d74b2" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged In">
    <meta class="js-ga-set" name="dimension3" content="desktop">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="Impulse-PS">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="M2JlNDUxOGM1YmJlN2YxZGJhMGY2MjA4MzAxMmUzZGIyMDRmZmE1MmE0MWJiMDJkYmFmNzRmMDIzODA0MmM0MXx7InJlbW90ZV9hZGRyZXNzIjoiNDkuMTUuMTkuMzQiLCJyZXF1ZXN0X2lkIjoiQ0E1Rjo0NzQ5OjUwM0NENTQ6NzM2MkVDNzo1OTNFN0YwRiIsInRpbWVzdGFtcCI6MTQ5NzI2Nzk4NywiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">


  <meta name="html-safe-nonce" content="b08be84ace711618cc5363c25b35bf4ee3bd4e09">

  <meta http-equiv="x-pjax-version" content="ebb0f37be70b8572254f336eee1d1218">
  

      <link href="https://github.com/Zarel/Pokemon-Showdown/commits/master.atom" rel="alternate" title="Recent Commits to Pokemon-Showdown:master" type="application/atom+xml">

  <meta name="description" content="Pokemon-Showdown - Pokémon battle simulator.">
  <meta name="go-import" content="github.com/Zarel/Pokemon-Showdown git https://github.com/Zarel/Pokemon-Showdown.git">

  <meta content="551184" name="octolytics-dimension-user_id" /><meta content="Zarel" name="octolytics-dimension-user_login" /><meta content="3038446" name="octolytics-dimension-repository_id" /><meta content="Zarel/Pokemon-Showdown" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="3038446" name="octolytics-dimension-repository_network_root_id" /><meta content="Zarel/Pokemon-Showdown" name="octolytics-dimension-repository_network_root_nwo" /><meta content="false" name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" />


    <link rel="canonical" href="https://github.com/Zarel/Pokemon-Showdown/blob/master/data/rulesets.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

  </head>

  <body class="logged-in env-production page-blob">
    



  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="bg-black text-white p-3 show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    

      <div class="mobile-banner">
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/site/mobile_preference" class="js-mobile-preference-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="tkvtXGpXdOCyF8Q5j/tTY6fmgvfNYCD01DLikWui4DV+08TnoiFF77/OyWPpEfEBxMqgeKSR9vGeFCCyNCB98w==" /></div>
          <input type="hidden" name="mobile" value="true">
          <input type="hidden" name="anchor" class="js-mobile-preference-anchor-field">

          <button type="submit" class="switch-to-mobile" data-ga-click="Mobile, switch to mobile, switch button">
            <svg aria-hidden="true" class="octicon octicon-device-mobile" height="64" version="1.1" viewBox="0 0 10 16" width="40"><path fill-rule="evenodd" d="M9 0H1C.45 0 0 .45 0 1v14c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM5 15.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zM9 12H1V2h8v10z"/></svg>
            Switch to mobile version
          </button>
</form>      </div>


        
<div class="header" role="banner">
  <div class="container clearfix">
    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/Zarel/Pokemon-Showdown/search" class="js-site-search-form" data-scoped-search-url="/Zarel/Pokemon-Showdown/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/Zarel/Pokemon-Showdown/blob/master/data/rulesets.js" class="header-search-scope no-underline">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>


      <ul class="header-nav float-left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" aria-label="Issues you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
            <li class="header-nav-item">
              <a href="/marketplace" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-selected-links=" /marketplace">
                Marketplace
</a>            </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav float-right" id="user-links">
  <li class="header-nav-item">
    

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus float-left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"/></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="Zarel/Pokemon-Showdown">This repository</span>
  </div>
    <a class="dropdown-item" href="/Zarel/Pokemon-Showdown/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/Impulse-PS"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@Impulse-PS" class="avatar" src="https://avatars3.githubusercontent.com/u/29373427?v=3&amp;s=40" height="20" width="20">
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">Impulse-PS</strong>
        </div>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/Impulse-PS" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/Impulse-PS?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="4vr20ZVy9VTezDQiiHo1dIZyvgHjY/PxSdMQ0E7O3HfC9F6P6APIjMxZbIcbt1jYMMwl+kuL2SQQpNOu0N9KBQ==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="sr-only right-0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="BuvYIDIcnVNfmP0Xfvr0gQtzQjvtovOf+k0yGHrjXJ0m5XB+T22gi00NpbLtN5ktvc3ZwEVK2UqjOvFm5PLK7w==" /></div>
      <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
        Sign out
      </button>
</form>  </div>
</div>


      

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      


    
        



      



    <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
      <div class="container repohead-details-container">

        <ul class="pagehead-actions">
  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="PKknWmqEmLSuaJ1gkpHofnO2tSePmRC5pxp6eKfGOPxEBokrUkUmOycLv1gTiuIXEZfSi4m2Mp2D9IFG1qRZ3A==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="3038446" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/Zarel/Pokemon-Showdown/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
                <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                Watch
            </span>
          </a>
            <a class="social-count js-social-count"
              href="/Zarel/Pokemon-Showdown/watchers"
              aria-label="164 users are watching this repository">
              164
            </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                        Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                        Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
      <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/Zarel/Pokemon-Showdown/unstar" class="starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="84/usUSEtDT7NN5y3UCXQA0Q9Q0o0OeDWZmHWQ9uQNCRpMlZwaY3yqlT2zIntXFCT+puivWwKdfFB7DzFQMBEQ==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar Zarel/Pokemon-Showdown"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/Zarel/Pokemon-Showdown/stargazers"
           aria-label="1159 users starred this repository">
          1,159
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/Zarel/Pokemon-Showdown/star" class="unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="EtfzIaDfPshGtFpt97D8IrQ4VXG6O/xY30Gun8+kOEpz42ovjrkj5GSewoeSs1WBMbxJ6Bjk7dXvM82wBNUPlw==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star Zarel/Pokemon-Showdown"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/Zarel/Pokemon-Showdown/stargazers"
           aria-label="1159 users starred this repository">
          1,159
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/Zarel/Pokemon-Showdown/fork" class="btn-with-count" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="1JA4x5wkWe+Us/10ThYemM7o/xjEuW0nLiRwiJh4MStmbFqGDZElizIbAlVDEUG/iQoitNTDfOpyMPdH9TNyMQ==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of Zarel/Pokemon-Showdown to your account"
                aria-label="Fork your own copy of Zarel/Pokemon-Showdown to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/Zarel/Pokemon-Showdown/network" class="social-count"
       aria-label="1171 users forked this repository">
      1,171
    </a>
  </li>
</ul>

        <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/Zarel" class="url fn" rel="author">Zarel</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/Zarel/Pokemon-Showdown" data-pjax="#js-repo-pjax-container">Pokemon-Showdown</a></strong>

</h1>

      </div>
      <div class="container">
        
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/Zarel/Pokemon-Showdown" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /Zarel/Pokemon-Showdown" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/Zarel/Pokemon-Showdown/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /Zarel/Pokemon-Showdown/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">35</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/Zarel/Pokemon-Showdown/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /Zarel/Pokemon-Showdown/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">31</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/Zarel/Pokemon-Showdown/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /Zarel/Pokemon-Showdown/projects">
      <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >1</span>
</a>


    <div class="reponav-dropdown js-menu-container">
      <button type="button" class="btn-link reponav-item reponav-dropdown js-menu-target " data-no-toggle aria-expanded="false" aria-haspopup="true">
        Insights
        <svg aria-hidden="true" class="octicon octicon-triangle-down v-align-middle text-gray" height="11" version="1.1" viewBox="0 0 12 16" width="8"><path fill-rule="evenodd" d="M0 5l6 6 6-6z"/></svg>
      </button>
      <div class="dropdown-menu-content js-menu-content">
        <div class="dropdown-menu dropdown-menu-sw">
          <a class="dropdown-item" href="/Zarel/Pokemon-Showdown/pulse" data-skip-pjax>
            <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
            Pulse
          </a>
          <a class="dropdown-item" href="/Zarel/Pokemon-Showdown/graphs" data-skip-pjax>
            <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
            Graphs
          </a>
        </div>
      </div>
    </div>
</nav>

      </div>
    </div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    
        
  <a href="/Zarel/Pokemon-Showdown/blob/ae2c190c18f602c932a0025ca7ab2b5ed9672ffd/data/rulesets.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:aa7225f3e190fb4ec3c711708a108223 -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Zarel/Pokemon-Showdown/blob/block-bindings/data/rulesets.js"
               data-name="block-bindings"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                block-bindings
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Zarel/Pokemon-Showdown/blob/log-upgrade/data/rulesets.js"
               data-name="log-upgrade"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                log-upgrade
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/Zarel/Pokemon-Showdown/blob/master/data/rulesets.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Zarel/Pokemon-Showdown/blob/old-seasonals/data/rulesets.js"
               data-name="old-seasonals"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                old-seasonals
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Zarel/Pokemon-Showdown/blob/past-gens/data/rulesets.js"
               data-name="past-gens"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                past-gens
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Zarel/Pokemon-Showdown/blob/prototype-party/data/rulesets.js"
               data-name="prototype-party"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                prototype-party
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Zarel/Pokemon-Showdown/blob/sugar-removal/data/rulesets.js"
               data-name="sugar-removal"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                sugar-removal
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Zarel/Pokemon-Showdown/blob/typescript-test/data/rulesets.js"
               data-name="typescript-test"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                typescript-test
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="BtnGroup float-right">
      <a href="/Zarel/Pokemon-Showdown/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
    </div>
    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/Zarel/Pokemon-Showdown"><span>Pokemon-Showdown</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/Zarel/Pokemon-Showdown/tree/master/data"><span>data</span></a></span><span class="separator">/</span><strong class="final-path">rulesets.js</strong>
    </div>
  </div>


  <include-fragment class="commit-tease" src="/Zarel/Pokemon-Showdown/contributors/master/data/rulesets.js">
    <div>
      Fetching contributors&hellip;
    </div>

    <div class="commit-tease-contributors">
      <img alt="" class="loader-loading float-left" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" />
      <span class="loader-error">Cannot retrieve contributors at this time</span>
    </div>
</include-fragment>
  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/Zarel/Pokemon-Showdown/raw/master/data/rulesets.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/Zarel/Pokemon-Showdown/blame/master/data/rulesets.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/Zarel/Pokemon-Showdown/commits/master/data/rulesets.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>


        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/Zarel/Pokemon-Showdown/edit/master/data/rulesets.js" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="TVfmEzpYm+oZ8eXMg3J3jLeVZ5ECKzShrsgzRkcP95M9H5nWlQvmMr+VsA7RpN1U9ySdjwBaDIcDyQ9fqVK6+A==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Edit the file in your fork of this project" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
          </button>
</form>        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/Zarel/Pokemon-Showdown/delete/master/data/rulesets.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="bJQYsqMlRMvTRpuUGmlCzZjZg/Yt1Y8vwoKBmnDO+xXBq5bSEIyG7o49xWsChDRjuctdCyktSEvNTnLbbT4bsw==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Delete the file in your fork of this project" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      733 lines (704 sloc)
      <span class="file-info-divider"></span>
    32.4 KB
  </div>
</div>

    

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Note: These are the rules that formats use</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> The list of formats is stored in config/formats.js</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">exports</span>.<span class="pl-smi">BattleFormats</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span> Rulesets</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span>/////////////////////////////////////////////////////////////////</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">	standard<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ValidatorRule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Standard<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">		ruleset<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>Sleep Clause Mod<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Species Clause<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Nickname Clause<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>OHKO Clause<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Moody Clause<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Evasion Moves Clause<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Endless Battle Clause<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>HP Percentage Mod<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Cancel Mod<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">		banlist<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>Unreleased<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Illegal<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">	standardnext<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ValidatorRule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Standard NEXT<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">		ruleset<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>Sleep Clause Mod<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Species Clause<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Nickname Clause<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>OHKO Clause<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>HP Percentage Mod<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Cancel Mod<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">		banlist<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>Illegal<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Soul Dew<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">	standardubers<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ValidatorRule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Standard Ubers<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">		ruleset<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>Sleep Clause Mod<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Species Clause<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Nickname Clause<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Moody Clause<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>OHKO Clause<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Endless Battle Clause<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>HP Percentage Mod<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Cancel Mod<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">		banlist<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>Unreleased<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Illegal<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">	standardgbu<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ValidatorRule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Standard GBU<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">		ruleset<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>Species Clause<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Nickname Clause<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Item Clause<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Cancel Mod<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">		banlist<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>Unreleased<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Illegal<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Battle Bond<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&#39;</span>Mewtwo<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Mew<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&#39;</span>Lugia<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Ho-Oh<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Celebi<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&#39;</span>Kyogre<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Groudon<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Rayquaza<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Jirachi<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Deoxys<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&#39;</span>Dialga<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Palkia<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Giratina<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Phione<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Manaphy<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Darkrai<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Shaymin<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Arceus<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&#39;</span>Victini<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Reshiram<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Zekrom<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Kyurem<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Keldeo<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Meloetta<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Genesect<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&#39;</span>Xerneas<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Yveltal<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Zygarde<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Diancie<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Hoopa<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Volcanion<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">			<span class="pl-s"><span class="pl-pds">&#39;</span>Cosmog<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Cosmoem<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Solgaleo<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Lunala<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Necrozma<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Magearna<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Marshadow<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">		],</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onValidateSet</span>(<span class="pl-smi">set</span>, <span class="pl-smi">format</span>) {</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">gen</span> <span class="pl-k">&lt;</span> <span class="pl-c1">7</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">toId</span>(<span class="pl-smi">set</span>.<span class="pl-smi">item</span>) <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>souldew<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> [<span class="pl-s"><span class="pl-pds">`</span><span class="pl-s1"><span class="pl-pse">${</span><span class="pl-smi">set</span>.<span class="pl-c1">name</span> <span class="pl-k">||</span> <span class="pl-smi">set</span>.<span class="pl-smi">species</span><span class="pl-pse">}</span></span> has Soul Dew, which is banned in <span class="pl-s1"><span class="pl-pse">${</span><span class="pl-smi">format</span>.<span class="pl-c1">name</span><span class="pl-pse">}</span></span>.<span class="pl-pds">`</span></span>];</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">	standarddoubles<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ValidatorRule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Standard Doubles<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">		ruleset<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>Species Clause<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Nickname Clause<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>OHKO Clause<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Moody Clause<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Evasion Abilities Clause<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Evasion Moves Clause<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Endless Battle Clause<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>HP Percentage Mod<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Cancel Mod<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">		banlist<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>Unreleased<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Illegal<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">	pokemon<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ValidatorRule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Pokemon<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onValidateTeam</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">team</span>, <span class="pl-smi">format</span>) {</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> problems <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> ----------- legality line ------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>format <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-smi">format</span>.<span class="pl-smi">banlistTable</span> <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-smi">format</span>.<span class="pl-smi">banlistTable</span>[<span class="pl-s"><span class="pl-pds">&#39;</span>illegal<span class="pl-pds">&#39;</span></span>]) <span class="pl-k">return</span> problems;</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> everything after this line only happens if we&#39;re doing legality enforcement</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> kyurems <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (<span class="pl-k">let</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">team</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (team[i].<span class="pl-smi">species</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Kyurem-White<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> team[i].<span class="pl-smi">species</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Kyurem-Black<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (kyurems <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">problems</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>You cannot have more than one Kyurem-Black/Kyurem-White.<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">					kyurems<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> problems;</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onChangeSet</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">set</span>, <span class="pl-smi">format</span>) {</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> item <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">getItem</span>(<span class="pl-smi">set</span>.<span class="pl-smi">item</span>);</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> template <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">getTemplate</span>(<span class="pl-smi">set</span>.<span class="pl-smi">species</span>);</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> problems <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> totalEV <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> allowCAP <span class="pl-k">=</span> <span class="pl-k">!!</span>(format <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">format</span>.<span class="pl-smi">banlistTable</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">format</span>.<span class="pl-smi">banlistTable</span>[<span class="pl-s"><span class="pl-pds">&#39;</span>Rule:allowcap<span class="pl-pds">&#39;</span></span>]);</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">set</span>.<span class="pl-smi">species</span> <span class="pl-k">===</span> <span class="pl-smi">set</span>.<span class="pl-c1">name</span>) <span class="pl-k">delete</span> <span class="pl-smi">set</span>.<span class="pl-c1">name</span>;</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">template</span>.<span class="pl-smi">gen</span> <span class="pl-k">&gt;</span> <span class="pl-c1">this</span>.<span class="pl-smi">gen</span>) {</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">problems</span>.<span class="pl-c1">push</span>(<span class="pl-smi">set</span>.<span class="pl-smi">species</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> does not exist in gen <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">gen</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ((<span class="pl-smi">template</span>.<span class="pl-smi">num</span> <span class="pl-k">===</span> <span class="pl-c1">25</span> <span class="pl-k">||</span> <span class="pl-smi">template</span>.<span class="pl-smi">num</span> <span class="pl-k">===</span> <span class="pl-c1">172</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">template</span>.<span class="pl-smi">tier</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Illegal<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">problems</span>.<span class="pl-c1">push</span>(<span class="pl-smi">set</span>.<span class="pl-smi">species</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> does not exist outside of gen <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">template</span>.<span class="pl-smi">gen</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> ability <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">set</span>.<span class="pl-smi">ability</span>) {</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">				ability <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">getAbility</span>(<span class="pl-smi">set</span>.<span class="pl-smi">ability</span>);</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">ability</span>.<span class="pl-smi">gen</span> <span class="pl-k">&gt;</span> <span class="pl-c1">this</span>.<span class="pl-smi">gen</span>) {</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">problems</span>.<span class="pl-c1">push</span>(<span class="pl-smi">ability</span>.<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> does not exist in gen <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">gen</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">set</span>.<span class="pl-smi">moves</span>) {</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> (<span class="pl-k">let</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">set</span>.<span class="pl-smi">moves</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">let</span> move <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">getMove</span>(<span class="pl-smi">set</span>.<span class="pl-smi">moves</span>[i]);</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">move</span>.<span class="pl-smi">gen</span> <span class="pl-k">&gt;</span> <span class="pl-c1">this</span>.<span class="pl-smi">gen</span>) {</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">problems</span>.<span class="pl-c1">push</span>(<span class="pl-smi">move</span>.<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> does not exist in gen <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">gen</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">!</span>allowCAP <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">move</span>.<span class="pl-smi">isNonstandard</span>) {</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">problems</span>.<span class="pl-c1">push</span>(<span class="pl-smi">move</span>.<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> does not exist.<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">item</span>.<span class="pl-smi">gen</span> <span class="pl-k">&gt;</span> <span class="pl-c1">this</span>.<span class="pl-smi">gen</span>) {</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">problems</span>.<span class="pl-c1">push</span>(<span class="pl-smi">item</span>.<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> does not exist in gen <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">gen</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">set</span>.<span class="pl-smi">moves</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">set</span>.<span class="pl-smi">moves</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">4</span>) {</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">problems</span>.<span class="pl-c1">push</span>((<span class="pl-smi">set</span>.<span class="pl-c1">name</span> <span class="pl-k">||</span> <span class="pl-smi">set</span>.<span class="pl-smi">species</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> has more than four moves.<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">set</span>.<span class="pl-smi">level</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">set</span>.<span class="pl-smi">level</span> <span class="pl-k">&gt;</span> <span class="pl-c1">100</span>) {</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">problems</span>.<span class="pl-c1">push</span>((<span class="pl-smi">set</span>.<span class="pl-c1">name</span> <span class="pl-k">||</span> <span class="pl-smi">set</span>.<span class="pl-smi">species</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> is higher than level 100.<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>allowCAP <span class="pl-k">||</span> <span class="pl-smi">template</span>.<span class="pl-smi">tier</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>CAP<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">template</span>.<span class="pl-smi">isNonstandard</span>) {</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">problems</span>.<span class="pl-c1">push</span>(<span class="pl-smi">set</span>.<span class="pl-smi">species</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> does not exist.<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>allowCAP <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">ability</span>.<span class="pl-smi">isNonstandard</span>) {</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">problems</span>.<span class="pl-c1">push</span>(<span class="pl-smi">ability</span>.<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> does not exist.<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">item</span>.<span class="pl-smi">isNonstandard</span>) {</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">item</span>.<span class="pl-smi">isNonstandard</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>gen2<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">problems</span>.<span class="pl-c1">push</span>(<span class="pl-smi">item</span>.<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> does not exist outside of gen 2.<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">!</span>allowCAP) {</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">problems</span>.<span class="pl-c1">push</span>(<span class="pl-smi">item</span>.<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> does not exist.<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (<span class="pl-k">let</span> k <span class="pl-k">in</span> <span class="pl-smi">set</span>.<span class="pl-smi">evs</span>) {</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-smi">set</span>.<span class="pl-smi">evs</span>[k] <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>number<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> <span class="pl-smi">set</span>.<span class="pl-smi">evs</span>[k] <span class="pl-k">&lt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">set</span>.<span class="pl-smi">evs</span>[k] <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">				totalEV <span class="pl-k">+=</span> <span class="pl-smi">set</span>.<span class="pl-smi">evs</span>[k];</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> In gen 6, it is impossible to battle other players with pokemon that break the EV limit</span></td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (totalEV <span class="pl-k">&gt;</span> <span class="pl-c1">510</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">this</span>.<span class="pl-smi">gen</span> <span class="pl-k">===</span> <span class="pl-c1">6</span>) {</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">problems</span>.<span class="pl-c1">push</span>((<span class="pl-smi">set</span>.<span class="pl-c1">name</span> <span class="pl-k">||</span> <span class="pl-smi">set</span>.<span class="pl-smi">species</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> has more than 510 total EVs.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> ----------- legality line ------------------------------------------</span></td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">format</span>.<span class="pl-smi">banlistTable</span> <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-smi">format</span>.<span class="pl-smi">banlistTable</span>[<span class="pl-s"><span class="pl-pds">&#39;</span>illegal<span class="pl-pds">&#39;</span></span>]) <span class="pl-k">return</span> problems;</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> everything after this line only happens if we&#39;re doing legality enforcement</span></td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> only in gen 1 and 2 it was legal to max out all EVs</span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">gen</span> <span class="pl-k">&gt;=</span> <span class="pl-c1">3</span> <span class="pl-k">&amp;&amp;</span> totalEV <span class="pl-k">&gt;</span> <span class="pl-c1">510</span>) {</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">problems</span>.<span class="pl-c1">push</span>((<span class="pl-smi">set</span>.<span class="pl-c1">name</span> <span class="pl-k">||</span> <span class="pl-smi">set</span>.<span class="pl-smi">species</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> has more than 510 total EVs.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">template</span>.<span class="pl-smi">gender</span>) {</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">set</span>.<span class="pl-smi">gender</span> <span class="pl-k">!==</span> <span class="pl-smi">template</span>.<span class="pl-smi">gender</span>) {</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">set</span>.<span class="pl-smi">gender</span> <span class="pl-k">=</span> <span class="pl-smi">template</span>.<span class="pl-smi">gender</span>;</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">set</span>.<span class="pl-smi">gender</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>M<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">set</span>.<span class="pl-smi">gender</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>F<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">set</span>.<span class="pl-smi">gender</span> <span class="pl-k">=</span> <span class="pl-c1">undefined</span>;</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Legendary Pokemon must have at least 3 perfect IVs in gen 6</span></td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> baseTemplate <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">getTemplate</span>(<span class="pl-smi">template</span>.<span class="pl-smi">baseSpecies</span>);</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">set</span>.<span class="pl-smi">ivs</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">this</span>.<span class="pl-smi">gen</span> <span class="pl-k">&gt;=</span> <span class="pl-c1">6</span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-smi">baseTemplate</span>.<span class="pl-smi">gen</span> <span class="pl-k">&gt;=</span> <span class="pl-c1">6</span> <span class="pl-k">||</span> <span class="pl-smi">format</span>.<span class="pl-smi">requirePentagon</span>) <span class="pl-k">&amp;&amp;</span> (<span class="pl-smi">template</span>.<span class="pl-smi">eggGroups</span>[<span class="pl-c1">0</span>] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Undiscovered<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> <span class="pl-smi">template</span>.<span class="pl-smi">species</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Manaphy<span class="pl-pds">&#39;</span></span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">template</span>.<span class="pl-smi">prevo</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">template</span>.<span class="pl-smi">nfe</span> <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> exceptions</span></td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">template</span>.<span class="pl-smi">species</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Unown<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">template</span>.<span class="pl-smi">baseSpecies</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Pikachu<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-smi">template</span>.<span class="pl-smi">baseSpecies</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Diancie<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> <span class="pl-k">!</span><span class="pl-smi">set</span>.<span class="pl-smi">shiny</span>)) {</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">let</span> perfectIVs <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> (<span class="pl-k">let</span> i <span class="pl-k">in</span> <span class="pl-smi">set</span>.<span class="pl-smi">ivs</span>) {</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">set</span>.<span class="pl-smi">ivs</span>[i] <span class="pl-k">&gt;=</span> <span class="pl-c1">31</span>) perfectIVs<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">let</span> reason <span class="pl-k">=</span> (<span class="pl-smi">format</span>.<span class="pl-smi">requirePentagon</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span> and this format requires gen <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-smi">gen</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> Pokémon<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span> in gen 6<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (perfectIVs <span class="pl-k">&lt;</span> <span class="pl-c1">3</span>) <span class="pl-smi">problems</span>.<span class="pl-c1">push</span>((<span class="pl-smi">set</span>.<span class="pl-c1">name</span> <span class="pl-k">||</span> <span class="pl-smi">set</span>.<span class="pl-smi">species</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> must have at least three perfect IVs because it&#39;s a legendary<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> reason <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> limit one of each move</span></td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> moves <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">set</span>.<span class="pl-smi">moves</span>) {</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">let</span> hasMove <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> (<span class="pl-k">let</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">set</span>.<span class="pl-smi">moves</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">let</span> move <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">getMove</span>(<span class="pl-smi">set</span>.<span class="pl-smi">moves</span>[i]);</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">let</span> moveid <span class="pl-k">=</span> <span class="pl-smi">move</span>.<span class="pl-c1">id</span>;</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (hasMove[moveid]) <span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">					hasMove[moveid] <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">moves</span>.<span class="pl-c1">push</span>(<span class="pl-smi">set</span>.<span class="pl-smi">moves</span>[i]);</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">set</span>.<span class="pl-smi">moves</span> <span class="pl-k">=</span> moves;</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> battleForme <span class="pl-k">=</span> <span class="pl-smi">template</span>.<span class="pl-smi">battleOnly</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">template</span>.<span class="pl-smi">species</span>;</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (battleForme) {</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">template</span>.<span class="pl-smi">requiredAbility</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">set</span>.<span class="pl-smi">ability</span> <span class="pl-k">!==</span> <span class="pl-smi">template</span>.<span class="pl-smi">requiredAbility</span>) {</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">problems</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">template</span>.<span class="pl-smi">species</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> transforms in-battle with <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">template</span>.<span class="pl-smi">requiredAbility</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span>); <span class="pl-c"><span class="pl-c">//</span> Darmanitan-Zen, Zygarde-Complete</span></td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">template</span>.<span class="pl-smi">requiredItems</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">template</span>.<span class="pl-smi">requiredItems</span>.<span class="pl-en">includes</span>(<span class="pl-smi">item</span>.<span class="pl-c1">name</span>)) {</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">problems</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">template</span>.<span class="pl-smi">species</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> transforms in-battle with <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">Chat</span>.<span class="pl-en">plural</span>(<span class="pl-smi">template</span>.<span class="pl-smi">requiredItems</span>.<span class="pl-c1">length</span>, <span class="pl-s"><span class="pl-pds">&quot;</span>either <span class="pl-pds">&quot;</span></span>) <span class="pl-k">+</span> <span class="pl-smi">template</span>.<span class="pl-smi">requiredItems</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span> or <span class="pl-pds">&quot;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span>); <span class="pl-c"><span class="pl-c">//</span> Mega or Primal</span></td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">template</span>.<span class="pl-smi">requiredMove</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">set</span>.<span class="pl-smi">moves</span>.<span class="pl-c1">indexOf</span>(<span class="pl-en">toId</span>(<span class="pl-smi">template</span>.<span class="pl-smi">requiredMove</span>)) <span class="pl-k">&lt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">problems</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">template</span>.<span class="pl-smi">species</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> transforms in-battle with <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">template</span>.<span class="pl-smi">requiredMove</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span>); <span class="pl-c"><span class="pl-c">//</span> Meloetta-Pirouette, Rayquaza-Mega</span></td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">format</span>.<span class="pl-smi">noChangeForme</span>) <span class="pl-smi">set</span>.<span class="pl-smi">species</span> <span class="pl-k">=</span> <span class="pl-smi">template</span>.<span class="pl-smi">baseSpecies</span>; <span class="pl-c"><span class="pl-c">//</span> Fix forme for Aegislash, Castform, etc.</span></td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">template</span>.<span class="pl-smi">requiredAbility</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">set</span>.<span class="pl-smi">ability</span> <span class="pl-k">!==</span> <span class="pl-smi">template</span>.<span class="pl-smi">requiredAbility</span>) {</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">problems</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (<span class="pl-smi">set</span>.<span class="pl-c1">name</span> <span class="pl-k">||</span> <span class="pl-smi">set</span>.<span class="pl-smi">species</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> needs the ability <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">template</span>.<span class="pl-smi">requiredAbility</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span>); <span class="pl-c"><span class="pl-c">//</span> No cases currently.</span></td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">template</span>.<span class="pl-smi">requiredItems</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">template</span>.<span class="pl-smi">requiredItems</span>.<span class="pl-en">includes</span>(<span class="pl-smi">item</span>.<span class="pl-c1">name</span>)) {</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">problems</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (<span class="pl-smi">set</span>.<span class="pl-c1">name</span> <span class="pl-k">||</span> <span class="pl-smi">set</span>.<span class="pl-smi">species</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> needs to hold <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">Chat</span>.<span class="pl-en">plural</span>(<span class="pl-smi">template</span>.<span class="pl-smi">requiredItems</span>.<span class="pl-c1">length</span>, <span class="pl-s"><span class="pl-pds">&quot;</span>either <span class="pl-pds">&quot;</span></span>) <span class="pl-k">+</span> <span class="pl-smi">template</span>.<span class="pl-smi">requiredItems</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span> or <span class="pl-pds">&quot;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span>); <span class="pl-c"><span class="pl-c">//</span> Memory/Drive/Griseous Orb/Plate/Z-Crystal - Forme mismatch</span></td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">template</span>.<span class="pl-smi">requiredMove</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">set</span>.<span class="pl-smi">moves</span>.<span class="pl-c1">indexOf</span>(<span class="pl-en">toId</span>(<span class="pl-smi">template</span>.<span class="pl-smi">requiredMove</span>)) <span class="pl-k">&lt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">problems</span>.<span class="pl-c1">push</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (<span class="pl-smi">set</span>.<span class="pl-c1">name</span> <span class="pl-k">||</span> <span class="pl-smi">set</span>.<span class="pl-smi">species</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> needs to have the move <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">template</span>.<span class="pl-smi">requiredMove</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span>); <span class="pl-c"><span class="pl-c">//</span> Keldeo-Resolute</span></td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> Mismatches between the set forme (if not base) and the item signature forme will have been rejected already.</span></td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> It only remains to assign the right forme to a set with the base species (Arceus/Genesect/Giratina/Silvally).</span></td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">item</span>.<span class="pl-smi">forcedForme</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">template</span>.<span class="pl-smi">species</span> <span class="pl-k">===</span> <span class="pl-c1">this</span>.<span class="pl-en">getTemplate</span>(<span class="pl-smi">item</span>.<span class="pl-smi">forcedForme</span>).<span class="pl-smi">baseSpecies</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">format</span>.<span class="pl-smi">noChangeForme</span>) {</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">set</span>.<span class="pl-smi">species</span> <span class="pl-k">=</span> <span class="pl-smi">item</span>.<span class="pl-smi">forcedForme</span>;</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">template</span>.<span class="pl-smi">species</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Pikachu-Cosplay<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">let</span> cosplay <span class="pl-k">=</span> {meteormash<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Pikachu-Rock-Star<span class="pl-pds">&#39;</span></span>, iciclecrash<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Pikachu-Belle<span class="pl-pds">&#39;</span></span>, drainingkiss<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Pikachu-Pop-Star<span class="pl-pds">&#39;</span></span>, electricterrain<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Pikachu-PhD<span class="pl-pds">&#39;</span></span>, flyingpress<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&#39;</span>Pikachu-Libre<span class="pl-pds">&#39;</span></span>};</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> (<span class="pl-k">let</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">set</span>.<span class="pl-smi">moves</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">set</span>.<span class="pl-smi">moves</span>[i] <span class="pl-k">in</span> cosplay) {</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">set</span>.<span class="pl-smi">species</span> <span class="pl-k">=</span> cosplay[<span class="pl-smi">set</span>.<span class="pl-smi">moves</span>[i]];</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">set</span>.<span class="pl-smi">species</span> <span class="pl-k">!==</span> <span class="pl-smi">template</span>.<span class="pl-smi">species</span>) {</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> Autofixed forme.</span></td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">				template <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">getTemplate</span>(<span class="pl-smi">set</span>.<span class="pl-smi">species</span>);</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">format</span>.<span class="pl-smi">banlistTable</span>[<span class="pl-s"><span class="pl-pds">&#39;</span>Rule:ignoreillegalabilities<span class="pl-pds">&#39;</span></span>] <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">format</span>.<span class="pl-smi">noChangeAbility</span>) {</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> Ensure that the ability is (still) legal.</span></td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">let</span> legalAbility <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">for</span> (<span class="pl-k">let</span> i <span class="pl-k">in</span> <span class="pl-smi">template</span>.<span class="pl-smi">abilities</span>) {</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> (<span class="pl-smi">template</span>.<span class="pl-smi">abilities</span>[i] <span class="pl-k">!==</span> <span class="pl-smi">set</span>.<span class="pl-smi">ability</span>) <span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">						legalAbility <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-k">!</span>legalAbility) { <span class="pl-c"><span class="pl-c">//</span> Default to first ability.</span></td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">set</span>.<span class="pl-smi">ability</span> <span class="pl-k">=</span> <span class="pl-smi">template</span>.<span class="pl-smi">abilities</span>[<span class="pl-s"><span class="pl-pds">&#39;</span>0<span class="pl-pds">&#39;</span></span>];</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> problems;</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">	hoennpokedex<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ValidatorRule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Hoenn Pokedex<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onValidateSet</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">set</span>, <span class="pl-smi">format</span>) {</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> hoennDex <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">				&quot;Abra&quot;:1, &quot;Absol&quot;:1, &quot;Aggron&quot;:1, &quot;Alakazam&quot;:1, &quot;Altaria&quot;:1, &quot;Anorith&quot;:1, &quot;Armaldo&quot;:1, &quot;Aron&quot;:1, &quot;Azumarill&quot;:1, &quot;Azurill&quot;:1, &quot;Bagon&quot;:1, &quot;Baltoy&quot;:1, &quot;Banette&quot;:1, &quot;Barboach&quot;:1, &quot;Beautifly&quot;:1, &quot;Beldum&quot;:1, &quot;Bellossom&quot;:1, &quot;Blaziken&quot;:1, &quot;Breloom&quot;:1, &quot;Budew&quot;:1, &quot;Cacnea&quot;:1, &quot;Cacturne&quot;:1, &quot;Camerupt&quot;:1, &quot;Carvanha&quot;:1, &quot;Cascoon&quot;:1, &quot;Castform&quot;:1, &quot;Chimecho&quot;:1, &quot;Chinchou&quot;:1, &quot;Chingling&quot;:1, &quot;Clamperl&quot;:1, &quot;Claydol&quot;:1, &quot;Combusken&quot;:1, &quot;Corphish&quot;:1, &quot;Corsola&quot;:1, &quot;Cradily&quot;:1, &quot;Crawdaunt&quot;:1, &quot;Crobat&quot;:1, &quot;Delcatty&quot;:1, &quot;Dodrio&quot;:1, &quot;Doduo&quot;:1, &quot;Donphan&quot;:1, &quot;Dusclops&quot;:1, &quot;Dusknoir&quot;:1, &quot;Duskull&quot;:1, &quot;Dustox&quot;:1, &quot;Electrike&quot;:1, &quot;Electrode&quot;:1, &quot;Exploud&quot;:1, &quot;Feebas&quot;:1, &quot;Flygon&quot;:1, &quot;Froslass&quot;:1, &quot;Gallade&quot;:1, &quot;Gardevoir&quot;:1, &quot;Geodude&quot;:1, &quot;Girafarig&quot;:1, &quot;Glalie&quot;:1, &quot;Gloom&quot;:1, &quot;Golbat&quot;:1, &quot;Goldeen&quot;:1, &quot;Golduck&quot;:1, &quot;Golem&quot;:1, &quot;Gorebyss&quot;:1, &quot;Graveler&quot;:1, &quot;Grimer&quot;:1, &quot;Grovyle&quot;:1, &quot;Grumpig&quot;:1, &quot;Gulpin&quot;:1, &quot;Gyarados&quot;:1, &quot;Hariyama&quot;:1, &quot;Heracross&quot;:1, &quot;Horsea&quot;:1, &quot;Huntail&quot;:1, &quot;Igglybuff&quot;:1, &quot;Illumise&quot;:1, &quot;Jigglypuff&quot;:1, &quot;Kadabra&quot;:1, &quot;Kecleon&quot;:1, &quot;Kingdra&quot;:1, &quot;Kirlia&quot;:1, &quot;Koffing&quot;:1, &quot;Lairon&quot;:1, &quot;Lanturn&quot;:1, &quot;Latias&quot;:1, &quot;Latios&quot;:1, &quot;Lileep&quot;:1, &quot;Linoone&quot;:1, &quot;Lombre&quot;:1, &quot;Lotad&quot;:1, &quot;Loudred&quot;:1, &quot;Ludicolo&quot;:1, &quot;Lunatone&quot;:1, &quot;Luvdisc&quot;:1, &quot;Machamp&quot;:1, &quot;Machoke&quot;:1, &quot;Machop&quot;:1, &quot;Magcargo&quot;:1, &quot;Magikarp&quot;:1, &quot;Magnemite&quot;:1, &quot;Magneton&quot;:1, &quot;Magnezone&quot;:1, &quot;Makuhita&quot;:1, &quot;Manectric&quot;:1, &quot;Marill&quot;:1, &quot;Marshtomp&quot;:1, &quot;Masquerain&quot;:1, &quot;Mawile&quot;:1, &quot;Medicham&quot;:1, &quot;Meditite&quot;:1, &quot;Metagross&quot;:1, &quot;Metang&quot;:1, &quot;Mightyena&quot;:1, &quot;Milotic&quot;:1, &quot;Minun&quot;:1, &quot;Mudkip&quot;:1, &quot;Muk&quot;:1, &quot;Natu&quot;:1, &quot;Ninetales&quot;:1, &quot;Ninjask&quot;:1, &quot;Nosepass&quot;:1, &quot;Numel&quot;:1, &quot;Nuzleaf&quot;:1, &quot;Oddish&quot;:1, &quot;Pelipper&quot;:1, &quot;Phanpy&quot;:1, &quot;Pichu&quot;:1, &quot;Pikachu&quot;:1, &quot;Pinsir&quot;:1, &quot;Plusle&quot;:1, &quot;Poochyena&quot;:1, &quot;Probopass&quot;:1, &quot;Psyduck&quot;:1, &quot;Raichu&quot;:1, &quot;Ralts&quot;:1, &quot;Regice&quot;:1, &quot;Regirock&quot;:1, &quot;Registeel&quot;:1, &quot;Relicanth&quot;:1, &quot;Rhydon&quot;:1, &quot;Rhyhorn&quot;:1, &quot;Rhyperior&quot;:1, &quot;Roselia&quot;:1, &quot;Roserade&quot;:1, &quot;Sableye&quot;:1, &quot;Salamence&quot;:1, &quot;Sandshrew&quot;:1, &quot;Sandslash&quot;:1, &quot;Sceptile&quot;:1, &quot;Seadra&quot;:1, &quot;Seaking&quot;:1, &quot;Sealeo&quot;:1, &quot;Seedot&quot;:1, &quot;Seviper&quot;:1, &quot;Sharpedo&quot;:1, &quot;Shedinja&quot;:1, &quot;Shelgon&quot;:1, &quot;Shiftry&quot;:1, &quot;Shroomish&quot;:1, &quot;Shuppet&quot;:1, &quot;Silcoon&quot;:1, &quot;Skarmory&quot;:1, &quot;Skitty&quot;:1, &quot;Slaking&quot;:1, &quot;Slakoth&quot;:1, &quot;Slugma&quot;:1, &quot;Snorunt&quot;:1, &quot;Solrock&quot;:1, &quot;Spheal&quot;:1, &quot;Spinda&quot;:1, &quot;Spoink&quot;:1, &quot;Starmie&quot;:1, &quot;Staryu&quot;:1, &quot;Surskit&quot;:1, &quot;Swablu&quot;:1, &quot;Swalot&quot;:1, &quot;Swampert&quot;:1, &quot;Swellow&quot;:1, &quot;Taillow&quot;:1, &quot;Tentacool&quot;:1, &quot;Tentacruel&quot;:1, &quot;Torchic&quot;:1, &quot;Torkoal&quot;:1, &quot;Trapinch&quot;:1, &quot;Treecko&quot;:1, &quot;Tropius&quot;:1, &quot;Vibrava&quot;:1, &quot;Vigoroth&quot;:1, &quot;Vileplume&quot;:1, &quot;Volbeat&quot;:1, &quot;Voltorb&quot;:1, &quot;Vulpix&quot;:1, &quot;Wailmer&quot;:1, &quot;Wailord&quot;:1, &quot;Walrein&quot;:1, &quot;Weezing&quot;:1, &quot;Whiscash&quot;:1, &quot;Whismur&quot;:1, &quot;Wigglytuff&quot;:1, &quot;Wingull&quot;:1, &quot;Wobbuffet&quot;:1, &quot;Wurmple&quot;:1, &quot;Wynaut&quot;:1, &quot;Xatu&quot;:1, &quot;Zangoose&quot;:1, &quot;Zigzagoon&quot;:1, &quot;Zubat&quot;:1,</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> template <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">getTemplate</span>(<span class="pl-smi">set</span>.<span class="pl-smi">species</span> <span class="pl-k">||</span> <span class="pl-smi">set</span>.<span class="pl-c1">name</span>);</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>(<span class="pl-smi">template</span>.<span class="pl-smi">baseSpecies</span> <span class="pl-k">in</span> hoennDex) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">format</span>.<span class="pl-smi">banlistTable</span>[<span class="pl-smi">template</span>.<span class="pl-smi">speciesid</span>] <span class="pl-k">!==</span> <span class="pl-c1">false</span>) {</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> [<span class="pl-smi">template</span>.<span class="pl-smi">baseSpecies</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> is not in the Hoenn Pokédex.<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">	alolapokedex<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ValidatorRule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Alola Pokedex<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onValidateSet</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">set</span>, <span class="pl-smi">format</span>) {</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> alolaDex <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">				&quot;Rowlet&quot;:1, &quot;Dartrix&quot;:1, &quot;Decidueye&quot;:1, &quot;Litten&quot;:1, &quot;Torracat&quot;:1, &quot;Incineroar&quot;:1, &quot;Popplio&quot;:1, &quot;Brionne&quot;:1, &quot;Primarina&quot;:1, &quot;Pikipek&quot;:1, &quot;Trumbeak&quot;:1, &quot;Toucannon&quot;:1, &quot;Yungoos&quot;:1, &quot;Gumshoos&quot;:1, &quot;Rattata-Alola&quot;:1, &quot;Raticate-Alola&quot;:1, &quot;Caterpie&quot;:1, &quot;Metapod&quot;:1, &quot;Butterfree&quot;:1, &quot;Ledyba&quot;:1, &quot;Ledian&quot;:1, &quot;Spinarak&quot;:1, &quot;Ariados&quot;:1, &quot;Pichu&quot;:1, &quot;Pikachu&quot;:1, &quot;Raichu-Alola&quot;:1, &quot;Grubbin&quot;:1, &quot;Charjabug&quot;:1, &quot;Vikavolt&quot;:1, &quot;Bonsly&quot;:1, &quot;Sudowoodo&quot;:1, &quot;Happiny&quot;:1, &quot;Chansey&quot;:1, &quot;Blissey&quot;:1, &quot;Munchlax&quot;:1, &quot;Snorlax&quot;:1, &quot;Slowpoke&quot;:1, &quot;Slowbro&quot;:1, &quot;Slowking&quot;:1, &quot;Wingull&quot;:1, &quot;Pelipper&quot;:1, &quot;Abra&quot;:1, &quot;Kadabra&quot;:1, &quot;Alakazam&quot;:1, &quot;Meowth-Alola&quot;:1, &quot;Persian-Alola&quot;:1, &quot;Magnemite&quot;:1, &quot;Magneton&quot;:1, &quot;Magnezone&quot;:1, &quot;Grimer-Alola&quot;:1, &quot;Muk-Alola&quot;:1, &quot;Growlithe&quot;:1, &quot;Arcanine&quot;:1, &quot;Drowzee&quot;:1, &quot;Hypno&quot;:1, &quot;Makuhita&quot;:1, &quot;Hariyama&quot;:1, &quot;Smeargle&quot;:1, &quot;Crabrawler&quot;:1, &quot;Crabominable&quot;:1, &quot;Gastly&quot;:1, &quot;Haunter&quot;:1, &quot;Gengar&quot;:1, &quot;Drifloon&quot;:1, &quot;Drifblim&quot;:1, &quot;Misdreavus&quot;:1, &quot;Mismagius&quot;:1, &quot;Zubat&quot;:1, &quot;Golbat&quot;:1, &quot;Crobat&quot;:1, &quot;Diglett-Alola&quot;:1, &quot;Dugtrio-Alola&quot;:1, &quot;Spearow&quot;:1, &quot;Fearow&quot;:1, &quot;Rufflet&quot;:1, &quot;Braviary&quot;:1, &quot;Vullaby&quot;:1, &quot;Mandibuzz&quot;:1, &quot;Mankey&quot;:1, &quot;Primeape&quot;:1, &quot;Delibird&quot;:1, &quot;Oricorio&quot;:1, &quot;Cutiefly&quot;:1, &quot;Ribombee&quot;:1, &quot;Petilil&quot;:1, &quot;Lilligant&quot;:1, &quot;Cottonee&quot;:1, &quot;Whimsicott&quot;:1, &quot;Psyduck&quot;:1, &quot;Golduck&quot;:1, &quot;Magikarp&quot;:1, &quot;Gyarados&quot;:1, &quot;Barboach&quot;:1, &quot;Whiscash&quot;:1, &quot;Machop&quot;:1, &quot;Machoke&quot;:1, &quot;Machamp&quot;:1, &quot;Roggenrola&quot;:1, &quot;Boldore&quot;:1, &quot;Gigalith&quot;:1, &quot;Carbink&quot;:1, &quot;Sableye&quot;:1, &quot;Rockruff&quot;:1, &quot;Lycanroc&quot;:1, &quot;Spinda&quot;:1, &quot;Tentacool&quot;:1, &quot;Tentacruel&quot;:1, &quot;Finneon&quot;:1, &quot;Lumineon&quot;:1, &quot;Wishiwashi&quot;:1, &quot;Luvdisc&quot;:1, &quot;Corsola&quot;:1, &quot;Mareanie&quot;:1, &quot;Toxapex&quot;:1, &quot;Shellder&quot;:1, &quot;Cloyster&quot;:1, &quot;Bagon&quot;:1, &quot;Shelgon&quot;:1, &quot;Salamence&quot;:1, &quot;Lillipup&quot;:1, &quot;Herdier&quot;:1, &quot;Stoutland&quot;:1, &quot;Eevee&quot;:1, &quot;Vaporeon&quot;:1, &quot;Jolteon&quot;:1, &quot;Flareon&quot;:1, &quot;Espeon&quot;:1, &quot;Umbreon&quot;:1, &quot;Leafeon&quot;:1, &quot;Glaceon&quot;:1, &quot;Sylveon&quot;:1, &quot;Mudbray&quot;:1, &quot;Mudsdale&quot;:1, &quot;Igglybuff&quot;:1, &quot;Jigglypuff&quot;:1, &quot;Wigglytuff&quot;:1, &quot;Tauros&quot;:1, &quot;Miltank&quot;:1, &quot;Surskit&quot;:1, &quot;Masquerain&quot;:1, &quot;Dewpider&quot;:1, &quot;Araquanid&quot;:1, &quot;Fomantis&quot;:1, &quot;Lurantis&quot;:1, &quot;Morelull&quot;:1, &quot;Shiinotic&quot;:1, &quot;Paras&quot;:1, &quot;Parasect&quot;:1, &quot;Poliwag&quot;:1, &quot;Poliwhirl&quot;:1, &quot;Poliwrath&quot;:1, &quot;Politoed&quot;:1, &quot;Goldeen&quot;:1, &quot;Seaking&quot;:1, &quot;Feebas&quot;:1, &quot;Milotic&quot;:1, &quot;Alomomola&quot;:1, &quot;Fletchling&quot;:1, &quot;Fletchinder&quot;:1, &quot;Talonflame&quot;:1, &quot;Salandit&quot;:1, &quot;Salazzle&quot;:1, &quot;Cubone&quot;:1, &quot;Marowak-Alola&quot;:1, &quot;Kangaskhan&quot;:1, &quot;Magby&quot;:1, &quot;Magmar&quot;:1, &quot;Magmortar&quot;:1, &quot;Stufful&quot;:1, &quot;Bewear&quot;:1, &quot;Bounsweet&quot;:1, &quot;Steenee&quot;:1, &quot;Tsareena&quot;:1, &quot;Comfey&quot;:1, &quot;Pinsir&quot;:1, &quot;Oranguru&quot;:1, &quot;Passimian&quot;:1, &quot;Goomy&quot;:1, &quot;Sliggoo&quot;:1, &quot;Goodra&quot;:1, &quot;Castform&quot;:1, &quot;Wimpod&quot;:1, &quot;Golisopod&quot;:1, &quot;Staryu&quot;:1, &quot;Starmie&quot;:1, &quot;Sandygast&quot;:1, &quot;Palossand&quot;:1, &quot;Cranidos&quot;:1, &quot;Rampardos&quot;:1, &quot;Shieldon&quot;:1, &quot;Bastiodon&quot;:1, &quot;Archen&quot;:1, &quot;Archeops&quot;:1, &quot;Tirtouga&quot;:1, &quot;Carracosta&quot;:1, &quot;Phantump&quot;:1, &quot;Trevenant&quot;:1, &quot;Nosepass&quot;:1, &quot;Probopass&quot;:1, &quot;Pyukumuku&quot;:1, &quot;Chinchou&quot;:1, &quot;Lanturn&quot;:1, &quot;Type: Null&quot;:1, &quot;Silvally&quot;:1, &quot;Zygarde&quot;:1, &quot;Trubbish&quot;:1, &quot;Garbodor&quot;:1, &quot;Skarmory&quot;:1, &quot;Ditto&quot;:1, &quot;Cleffa&quot;:1, &quot;Clefairy&quot;:1, &quot;Clefable&quot;:1, &quot;Minior&quot;:1, &quot;Beldum&quot;:1, &quot;Metang&quot;:1, &quot;Metagross&quot;:1, &quot;Porygon&quot;:1, &quot;Porygon2&quot;:1, &quot;Porygon-Z&quot;:1, &quot;Pancham&quot;:1, &quot;Pangoro&quot;:1, &quot;Komala&quot;:1, &quot;Torkoal&quot;:1, &quot;Turtonator&quot;:1, &quot;Togedemaru&quot;:1, &quot;Elekid&quot;:1, &quot;Electabuzz&quot;:1, &quot;Electivire&quot;:1, &quot;Geodude-Alola&quot;:1, &quot;Graveler-Alola&quot;:1, &quot;Golem-Alola&quot;:1, &quot;Sandile&quot;:1, &quot;Krokorok&quot;:1, &quot;Krookodile&quot;:1, &quot;Trapinch&quot;:1, &quot;Vibrava&quot;:1, &quot;Flygon&quot;:1, &quot;Gible&quot;:1, &quot;Gabite&quot;:1, &quot;Garchomp&quot;:1, &quot;Klefki&quot;:1, &quot;Mimikyu&quot;:1, &quot;Bruxish&quot;:1, &quot;Drampa&quot;:1, &quot;Absol&quot;:1, &quot;Snorunt&quot;:1, &quot;Glalie&quot;:1, &quot;Froslass&quot;:1, &quot;Sneasel&quot;:1, &quot;Weavile&quot;:1, &quot;Sandshrew-Alola&quot;:1, &quot;Sandslash-Alola&quot;:1, &quot;Vulpix-Alola&quot;:1, &quot;Ninetales-Alola&quot;:1, &quot;Vanillite&quot;:1, &quot;Vanillish&quot;:1, &quot;Vanilluxe&quot;:1, &quot;Snubbull&quot;:1, &quot;Granbull&quot;:1, &quot;Shellos&quot;:1, &quot;Gastrodon&quot;:1, &quot;Relicanth&quot;:1, &quot;Dhelmise&quot;:1, &quot;Carvanha&quot;:1, &quot;Sharpedo&quot;:1, &quot;Wailmer&quot;:1, &quot;Wailord&quot;:1, &quot;Lapras&quot;:1, &quot;Exeggcute&quot;:1, &quot;Exeggutor-Alola&quot;:1, &quot;Jangmo-o&quot;:1, &quot;Hakamo-o&quot;:1, &quot;Kommo-o&quot;:1, &quot;Emolga&quot;:1, &quot;Scyther&quot;:1, &quot;Scizor&quot;:1, &quot;Murkrow&quot;:1, &quot;Honchkrow&quot;:1, &quot;Riolu&quot;:1, &quot;Lucario&quot;:1, &quot;Dratini&quot;:1, &quot;Dragonair&quot;:1, &quot;Dragonite&quot;:1, &quot;Aerodactyl&quot;:1, &quot;Tapu Koko&quot;:1, &quot;Tapu Lele&quot;:1, &quot;Tapu Bulu&quot;:1, &quot;Tapu Fini&quot;:1, &quot;Cosmog&quot;:1, &quot;Cosmoem&quot;:1, &quot;Solgaleo&quot;:1, &quot;Lunala&quot;:1, &quot;Nihilego&quot;:1, &quot;Buzzwole&quot;:1, &quot;Pheromosa&quot;:1, &quot;Xurkitree&quot;:1, &quot;Celesteela&quot;:1, &quot;Kartana&quot;:1, &quot;Guzzlord&quot;:1, &quot;Necrozma&quot;:1, &quot;Magearna&quot;:1, &quot;Marshadow&quot;:1,</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> template <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">getTemplate</span>(<span class="pl-smi">set</span>.<span class="pl-smi">species</span> <span class="pl-k">||</span> <span class="pl-smi">set</span>.<span class="pl-c1">name</span>);</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>(<span class="pl-smi">template</span>.<span class="pl-smi">baseSpecies</span> <span class="pl-k">in</span> alolaDex) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>(<span class="pl-smi">template</span>.<span class="pl-smi">species</span> <span class="pl-k">in</span> alolaDex) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">format</span>.<span class="pl-smi">banlistTable</span>[<span class="pl-smi">template</span>.<span class="pl-smi">speciesid</span>] <span class="pl-k">!==</span> <span class="pl-c1">false</span>) {</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> [<span class="pl-smi">template</span>.<span class="pl-smi">baseSpecies</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> is not in the Alola Pokédex.<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">	potd<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Rule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>PotD<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onStart</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">Config</span>.<span class="pl-smi">potd</span>) {</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">this</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>rule<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>Pokemon of the Day: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-en">getTemplate</span>(<span class="pl-smi">Config</span>.<span class="pl-smi">potd</span>).<span class="pl-c1">name</span>);</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">	teampreview<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Rule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Team Preview<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">		onStartPriority<span class="pl-k">:</span> <span class="pl-k">-</span><span class="pl-c1">10</span>,</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onStart</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>clearpoke<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (<span class="pl-k">let</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-c1">this</span>.<span class="pl-smi">sides</span>[<span class="pl-c1">0</span>].<span class="pl-smi">pokemon</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">let</span> pokemon <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">sides</span>[<span class="pl-c1">0</span>].<span class="pl-smi">pokemon</span>[i];</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">let</span> details <span class="pl-k">=</span> <span class="pl-smi">pokemon</span>.<span class="pl-smi">details</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>(Arceus<span class="pl-k">|</span>Gourgeist<span class="pl-k">|</span>Genesect<span class="pl-k">|</span>Pumpkaboo<span class="pl-k">|</span>Silvally)(-<span class="pl-c1">[<span class="pl-c1">a-zA-Z</span>?]</span><span class="pl-k">+</span>)<span class="pl-k">?</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>$1-*<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">this</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>poke<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">pokemon</span>.<span class="pl-smi">side</span>.<span class="pl-c1">id</span>, details, <span class="pl-smi">pokemon</span>.<span class="pl-smi">item</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>item<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (<span class="pl-k">let</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-c1">this</span>.<span class="pl-smi">sides</span>[<span class="pl-c1">1</span>].<span class="pl-smi">pokemon</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">let</span> pokemon <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">sides</span>[<span class="pl-c1">1</span>].<span class="pl-smi">pokemon</span>[i];</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">let</span> details <span class="pl-k">=</span> <span class="pl-smi">pokemon</span>.<span class="pl-smi">details</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>(Arceus<span class="pl-k">|</span>Gourgeist<span class="pl-k">|</span>Genesect<span class="pl-k">|</span>Pumpkaboo<span class="pl-k">|</span>Silvally)(-<span class="pl-c1">[<span class="pl-c1">a-zA-Z</span>?]</span><span class="pl-k">+</span>)<span class="pl-k">?</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>$1-*<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">this</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>poke<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">pokemon</span>.<span class="pl-smi">side</span>.<span class="pl-c1">id</span>, details, <span class="pl-smi">pokemon</span>.<span class="pl-smi">item</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>item<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onTeamPreview</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-en">makeRequest</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>teampreview<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">	littlecup<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ValidatorRule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Little Cup<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onValidateSet</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">set</span>) {</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> template <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">getTemplate</span>(<span class="pl-smi">set</span>.<span class="pl-smi">species</span> <span class="pl-k">||</span> <span class="pl-smi">set</span>.<span class="pl-c1">name</span>);</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">template</span>.<span class="pl-smi">prevo</span>) {</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> [<span class="pl-smi">set</span>.<span class="pl-smi">species</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> isn&#39;t the first in its evolution family.<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">template</span>.<span class="pl-smi">nfe</span>) {</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> [<span class="pl-smi">set</span>.<span class="pl-smi">species</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> doesn&#39;t have an evolution family.<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">	speciesclause<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ValidatorRule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Species Clause<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onStart</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>rule<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Species Clause: Limit one of each Pokémon<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onValidateTeam</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">team</span>, <span class="pl-smi">format</span>) {</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> speciesTable <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (<span class="pl-k">let</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">team</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">let</span> template <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">getTemplate</span>(team[i].<span class="pl-smi">species</span>);</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (speciesTable[<span class="pl-smi">template</span>.<span class="pl-smi">num</span>]) {</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>You are limited to one of each Pokémon by Species Clause.<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>(You have more than one <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">template</span>.<span class="pl-smi">baseSpecies</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">				speciesTable[<span class="pl-smi">template</span>.<span class="pl-smi">num</span>] <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">	nicknameclause<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ValidatorRule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Nickname Clause<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onValidateTeam</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">team</span>, <span class="pl-smi">format</span>) {</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> nameTable <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (<span class="pl-k">let</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">team</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">let</span> name <span class="pl-k">=</span> team[i].<span class="pl-c1">name</span>;</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (name) {</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (name <span class="pl-k">===</span> team[i].<span class="pl-smi">species</span>) <span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (nameTable[name]) {</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>Your Pokémon must have different nicknames.<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>(You have more than one <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> name <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">					nameTable[name] <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Illegality of impersonation of other species is</span></td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> hardcoded in team-validator.js, so we are done.</span></td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">	itemclause<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ValidatorRule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Item Clause<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onStart</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>rule<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Item Clause: Limit one of each item<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onValidateTeam</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">team</span>, <span class="pl-smi">format</span>) {</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> itemTable <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (<span class="pl-k">let</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">team</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">let</span> item <span class="pl-k">=</span> <span class="pl-en">toId</span>(team[i].<span class="pl-smi">item</span>);</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">!</span>item) <span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (itemTable[item]) {</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>You are limited to one of each item by Item Clause.<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>(You have more than one <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-c1">getItem</span>(item).<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">				itemTable[item] <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">	abilityclause<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ValidatorRule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Ability Clause<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onStart</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>rule<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Ability Clause: Limit two of each ability<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onValidateTeam</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">team</span>, <span class="pl-smi">format</span>) {</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> abilityTable <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> base <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">				airlock<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>cloudnine<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">				battlearmor<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>shellarmor<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">				clearbody<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>whitesmoke<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">				dazzling<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>queenlymajesty<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">				emergencyexit<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>wimpout<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">				filter<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>solidrock<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">				gooey<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>tanglinghair<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">				insomnia<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>vitalspirit<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">				ironbarbs<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>roughskin<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">				minus<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>plus<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">				powerofalchemy<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>receiver<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">				teravolt<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>moldbreaker<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">				turboblaze<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>moldbreaker<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (<span class="pl-k">let</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">team</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">let</span> ability <span class="pl-k">=</span> <span class="pl-en">toId</span>(team[i].<span class="pl-smi">ability</span>);</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">!</span>ability) <span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (ability <span class="pl-k">in</span> base) ability <span class="pl-k">=</span> base[ability];</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (ability <span class="pl-k">in</span> abilityTable) {</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (abilityTable[ability] <span class="pl-k">&gt;=</span> <span class="pl-c1">2</span>) {</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>You are limited to two of each ability by the Ability Clause.<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">`</span>(You have more than two <span class="pl-s1"><span class="pl-pse">${</span><span class="pl-c1">this</span>.<span class="pl-en">getAbility</span>(ability).<span class="pl-c1">name</span><span class="pl-pse">}</span></span> variants)<span class="pl-pds">`</span></span>];</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">					abilityTable[ability]<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">					abilityTable[ability] <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">	ohkoclause<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ValidatorRule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>OHKO Clause<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onStart</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>rule<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>OHKO Clause: OHKO moves are banned<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onValidateSet</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">set</span>) {</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> problems <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">set</span>.<span class="pl-smi">moves</span>) {</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> (<span class="pl-k">let</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">set</span>.<span class="pl-smi">moves</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">let</span> move <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">getMove</span>(<span class="pl-smi">set</span>.<span class="pl-smi">moves</span>[i]);</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">move</span>.<span class="pl-smi">ohko</span>) <span class="pl-smi">problems</span>.<span class="pl-c1">push</span>(<span class="pl-smi">move</span>.<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span> is banned by OHKO Clause.<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> problems;</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">	evasionabilitiesclause<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ValidatorRule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Evasion Abilities Clause<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">		banlist<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>Sand Veil<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Snow Cloak<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onStart</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>rule<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Evasion Abilities Clause: Evasion abilities are banned<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">	evasionmovesclause<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ValidatorRule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Evasion Moves Clause<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">		banlist<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>Minimize<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Double Team<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onStart</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>rule<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Evasion Moves Clause: Evasion moves are banned<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onValidateSet</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">set</span>, <span class="pl-smi">format</span>, <span class="pl-smi">setHas</span>) {</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> item <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">getItem</span>(<span class="pl-smi">set</span>.<span class="pl-smi">item</span>);</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">item</span>.<span class="pl-smi">zMove</span>) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> evasionBoosted <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (<span class="pl-k">let</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">set</span>.<span class="pl-smi">moves</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">let</span> move <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">getMove</span>(<span class="pl-smi">set</span>.<span class="pl-smi">moves</span>[i]);</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">move</span>.<span class="pl-c1">type</span> <span class="pl-k">===</span> <span class="pl-smi">item</span>.<span class="pl-smi">zMoveType</span>) {</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">move</span>.<span class="pl-smi">zMoveBoost</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">move</span>.<span class="pl-smi">zMoveBoost</span>.<span class="pl-smi">evasion</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">						evasionBoosted <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>evasionBoosted) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> [(<span class="pl-smi">set</span>.<span class="pl-c1">name</span> <span class="pl-k">||</span> <span class="pl-smi">set</span>.<span class="pl-smi">species</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> can boost Evasion, which is banned by Evasion Clause.<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">	endlessbattleclause<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Rule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Endless Battle Clause<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> implemented in sim/battle.js</span></td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> A Pokémon has a confinement counter, which starts at 0:</span></td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> +1 confinement whenever:</span></td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> - it has no available moves other than Struggle</span></td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> - it was forced to switch by a stale opponent before it could do its</span></td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span>   action for the turn</span></td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> - it intentionally switched out the turn after it switched in against</span></td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span>   a stale Pokémon</span></td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> - it shifts in Triples against a stale Pokémon</span></td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> - it has gone 5 turns without losing PP (mimiced/transformed moves</span></td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span>   count only if no foe is stale)</span></td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> confinement reset to 0 whenever:</span></td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> - it uses PP while not Transformed/Impostered</span></td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> - if it has at least 2 confinement, and begins a turn without losing</span></td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span>   at least 1% of its max HP from the last time its confinement counter</span></td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span>   was 0 - user also becomes half-stale if not already half-stale, or</span></td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span>   stale if already half-stale</span></td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> A Pokémon is also considered stale if:</span></td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> - it has gained a Leppa berry through any means besides starting</span></td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span>   with one</span></td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> - OR it has eaten a Leppa berry it isn&#39;t holding</span></td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onStart</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>rule<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Endless Battle Clause: Forcing endless battles is banned<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">	moodyclause<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ValidatorRule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Moody Clause<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line">		banlist<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>Moody<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onStart</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>rule<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Moody Clause: Moody is banned<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line">	swaggerclause<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ValidatorRule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Swagger Clause<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line">		banlist<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>Swagger<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onStart</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>rule<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Swagger Clause: Swagger is banned<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line">	batonpassclause<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ValidatorRule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Baton Pass Clause<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line">		banlist<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>Baton Pass &gt; 1<span class="pl-pds">&quot;</span></span>],</td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onStart</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>rule<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Baton Pass Clause: Limit one Baton Passer, can<span class="pl-cce">\&#39;</span>t pass Spe and other stats simultaneously<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onValidateSet</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">set</span>, <span class="pl-smi">format</span>, <span class="pl-smi">setHas</span>) {</td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>batonpass<span class="pl-pds">&#39;</span></span> <span class="pl-k">in</span> setHas)) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> check if Speed is boosted</span></td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> speedBoosted <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> nonSpeedBoosted <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-en">toId</span>(<span class="pl-smi">set</span>.<span class="pl-smi">item</span>) <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>eeviumz<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line">				speedBoosted <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line">				nonSpeedBoosted <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> item <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">getItem</span>(<span class="pl-smi">set</span>.<span class="pl-smi">item</span>);</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (<span class="pl-k">let</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">set</span>.<span class="pl-smi">moves</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">let</span> move <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">getMove</span>(<span class="pl-smi">set</span>.<span class="pl-smi">moves</span>[i]);</td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">move</span>.<span class="pl-smi">boosts</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">move</span>.<span class="pl-smi">boosts</span>.<span class="pl-smi">spe</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line">					speedBoosted <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">move</span>.<span class="pl-smi">boosts</span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-smi">move</span>.<span class="pl-smi">boosts</span>.<span class="pl-smi">atk</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> <span class="pl-k">||</span> <span class="pl-smi">move</span>.<span class="pl-smi">boosts</span>.<span class="pl-smi">def</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> <span class="pl-k">||</span> <span class="pl-smi">move</span>.<span class="pl-smi">boosts</span>.<span class="pl-smi">spa</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> <span class="pl-k">||</span> <span class="pl-smi">move</span>.<span class="pl-smi">boosts</span>.<span class="pl-smi">spd</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>)) {</td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line">					nonSpeedBoosted <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">item</span>.<span class="pl-smi">zMove</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">move</span>.<span class="pl-c1">type</span> <span class="pl-k">===</span> <span class="pl-smi">item</span>.<span class="pl-smi">zMoveType</span>) {</td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">move</span>.<span class="pl-smi">zMoveBoost</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">move</span>.<span class="pl-smi">zMoveBoost</span>.<span class="pl-smi">spe</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> (<span class="pl-k">!</span>speedBoosted) speedBoosted <span class="pl-k">=</span> <span class="pl-smi">move</span>.<span class="pl-c1">name</span>;</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">move</span>.<span class="pl-smi">zMoveBoost</span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-smi">move</span>.<span class="pl-smi">zMoveBoost</span>.<span class="pl-smi">atk</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> <span class="pl-k">||</span> <span class="pl-smi">move</span>.<span class="pl-smi">zMoveBoost</span>.<span class="pl-smi">def</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> <span class="pl-k">||</span> <span class="pl-smi">move</span>.<span class="pl-smi">zMoveBoost</span>.<span class="pl-smi">spa</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span> <span class="pl-k">||</span> <span class="pl-smi">move</span>.<span class="pl-smi">zMoveBoost</span>.<span class="pl-smi">spd</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>)) {</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> (<span class="pl-k">!</span>nonSpeedBoosted <span class="pl-k">||</span> <span class="pl-smi">move</span>.<span class="pl-c1">name</span> <span class="pl-k">===</span> speedBoosted) nonSpeedBoosted <span class="pl-k">=</span> <span class="pl-smi">move</span>.<span class="pl-c1">name</span>;</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> boostSpeed <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>flamecharge<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>geomancy<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>motordrive<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>rattled<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>speedboost<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>steadfast<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>weakarmor<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>blazikenite<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>salacberry<span class="pl-pds">&#39;</span></span>];</td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>speedBoosted) {</td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> (<span class="pl-k">let</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">boostSpeed</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (boostSpeed[i] <span class="pl-k">in</span> setHas) {</td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line">						speedBoosted <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>speedBoosted) {</td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> check if non-Speed boosted</span></td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> boostNonSpeed <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>acupressure<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>starfberry<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>curse<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>poweruppunch<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>rage<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>rototiller<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>fellstinger<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>bellydrum<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>download<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>justified<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>moxie<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>sapsipper<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>defiant<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>angerpoint<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>cellbattery<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>liechiberry<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>snowball<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>weaknesspolicy<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>diamondstorm<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>flowershield<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>skullbash<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>stockpile<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>cottonguard<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>ganlonberry<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>keeberry<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>chargebeam<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>fierydance<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>geomancy<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>lightningrod<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>stormdrain<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>competitive<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>absorbbulb<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>petayaberry<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>charge<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>apicotberry<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>luminousmoss<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>marangaberry<span class="pl-pds">&#39;</span></span>];</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>nonSpeedBoosted) {</td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> (<span class="pl-k">let</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">boostNonSpeed</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (boostNonSpeed[i] <span class="pl-k">in</span> setHas) {</td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line">						nonSpeedBoosted <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-k">!</span>nonSpeedBoosted) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> if both boost sources are Z-moves, and they&#39;re distinct</span></td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (speedBoosted <span class="pl-k">!==</span> nonSpeedBoosted <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> speedBoosted <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> nonSpeedBoosted <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> [(<span class="pl-smi">set</span>.<span class="pl-c1">name</span> <span class="pl-k">||</span> <span class="pl-smi">set</span>.<span class="pl-smi">species</span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> can Baton Pass both Speed and a different stat, which is banned by Baton Pass Clause.<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code blob-code-inner js-file-line">	cfzclause<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ValidatorRule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>CFZ Clause<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code blob-code-inner js-file-line">		banlist<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>10,000,000 Volt Thunderbolt<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Acid Downpour<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>All-Out Pummeling<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Black Hole Eclipse<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Bloom Doom<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Breakneck Blitz<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Catastropika<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Continental Crush<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Corkscrew Crash<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Devastating Drake<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Extreme Evoboost<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Genesis Supernova<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Gigavolt Havoc<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Guardian of Alola<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Hydro Vortex<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Inferno Overdrive<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Malicious Moonsault<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Never-Ending Nightmare<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Oceanic Operetta<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Pulverizing Pancake<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Savage Spin-Out<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Shattered Psyche<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Sinister Arrow Raid<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Soul-Stealing 7-Star Strike<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Stoked Sparksurfer<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Subzero Slammer<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Supersonic Skystrike<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Tectonic Rage<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Twinkle Tackle<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onStart</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>rule<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>CFZ Clause: Crystal-free Z-Moves are banned<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code blob-code-inner js-file-line">	hppercentagemod<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Rule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>HP Percentage Mod<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onStart</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>rule<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>HP Percentage Mod: HP is shown in percentages<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">reportPercentages</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code blob-code-inner js-file-line">	exacthpmod<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Rule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Exact HP Mod<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onStart</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>rule<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Exact HP Mod: Exact HP is shown<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">reportExactHP</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code blob-code-inner js-file-line">	cancelmod<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Rule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Cancel Mod<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onStart</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">supportCancel</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code blob-code-inner js-file-line">	sleepclausemod<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Rule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Sleep Clause Mod<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code blob-code-inner js-file-line">		banlist<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>Hypnosis + Gengarite<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onStart</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>rule<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Sleep Clause Mod: Limit one foe put to sleep<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onSetStatus</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">status</span>, <span class="pl-smi">target</span>, <span class="pl-smi">source</span>) {</td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (source <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">source</span>.<span class="pl-smi">side</span> <span class="pl-k">===</span> <span class="pl-smi">target</span>.<span class="pl-smi">side</span>) {</td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">status</span>.<span class="pl-c1">id</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>slp<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> (<span class="pl-k">let</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">target</span>.<span class="pl-smi">side</span>.<span class="pl-smi">pokemon</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">let</span> pokemon <span class="pl-k">=</span> <span class="pl-smi">target</span>.<span class="pl-smi">side</span>.<span class="pl-smi">pokemon</span>[i];</td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">pokemon</span>.<span class="pl-smi">hp</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">pokemon</span>.<span class="pl-c1">status</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>slp<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">pokemon</span>.<span class="pl-smi">statusData</span>.<span class="pl-c1">source</span> <span class="pl-k">||</span> <span class="pl-smi">pokemon</span>.<span class="pl-smi">statusData</span>.<span class="pl-c1">source</span>.<span class="pl-smi">side</span> <span class="pl-k">!==</span> <span class="pl-smi">pokemon</span>.<span class="pl-smi">side</span>) {</td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code blob-code-inner js-file-line">							<span class="pl-c1">this</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>-message<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Sleep Clause Mod activated.<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code blob-code-inner js-file-line">	freezeclausemod<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Rule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Freeze Clause Mod<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onStart</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>rule<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Freeze Clause Mod: Limit one foe frozen<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onSetStatus</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">status</span>, <span class="pl-smi">target</span>, <span class="pl-smi">source</span>) {</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (source <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">source</span>.<span class="pl-smi">side</span> <span class="pl-k">===</span> <span class="pl-smi">target</span>.<span class="pl-smi">side</span>) {</td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">status</span>.<span class="pl-c1">id</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>frz<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> (<span class="pl-k">let</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">target</span>.<span class="pl-smi">side</span>.<span class="pl-smi">pokemon</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">let</span> pokemon <span class="pl-k">=</span> <span class="pl-smi">target</span>.<span class="pl-smi">side</span>.<span class="pl-smi">pokemon</span>[i];</td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">pokemon</span>.<span class="pl-c1">status</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>frz<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code blob-code-inner js-file-line">						<span class="pl-c1">this</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>-message<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Freeze Clause activated.<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code blob-code-inner js-file-line">	sametypeclause<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ValidatorRule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Same Type Clause<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onStart</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>rule<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Same Type Clause: Pokémon in a team must share a type<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onValidateTeam</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">team</span>) {</td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> typeTable;</td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (<span class="pl-k">let</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">team</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">let</span> template <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">getTemplate</span>(team[i].<span class="pl-smi">species</span>);</td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">template</span>.<span class="pl-smi">types</span>) <span class="pl-k">return</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>Your team must share a type.<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (i <span class="pl-k">===</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code blob-code-inner js-file-line">					typeTable <span class="pl-k">=</span> <span class="pl-smi">template</span>.<span class="pl-smi">types</span>;</td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code blob-code-inner js-file-line">					typeTable <span class="pl-k">=</span> <span class="pl-smi">typeTable</span>.<span class="pl-en">filter</span>(<span class="pl-smi">type</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">template</span>.<span class="pl-smi">types</span>.<span class="pl-c1">indexOf</span>(type) <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">gen</span> <span class="pl-k">&gt;=</span> <span class="pl-c1">7</span>) {</td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">let</span> item <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">getItem</span>(team[i].<span class="pl-smi">item</span>);</td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">item</span>.<span class="pl-smi">megaStone</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">template</span>.<span class="pl-smi">species</span> <span class="pl-k">===</span> <span class="pl-smi">item</span>.<span class="pl-smi">megaEvolves</span>) {</td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code blob-code-inner js-file-line">						template <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">getTemplate</span>(<span class="pl-smi">item</span>.<span class="pl-smi">megaStone</span>);</td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code blob-code-inner js-file-line">						typeTable <span class="pl-k">=</span> <span class="pl-smi">typeTable</span>.<span class="pl-en">filter</span>(<span class="pl-smi">type</span> <span class="pl-k">=&gt;</span> <span class="pl-smi">template</span>.<span class="pl-smi">types</span>.<span class="pl-c1">indexOf</span>(type) <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">typeTable</span>.<span class="pl-c1">length</span>) <span class="pl-k">return</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>Your team must share a type.<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code blob-code-inner js-file-line">	megarayquazaclause<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Rule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Mega Rayquaza Clause<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onStart</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>rule<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>Mega Rayquaza Clause: You cannot mega evolve Rayquaza<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (<span class="pl-k">let</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-c1">this</span>.<span class="pl-smi">sides</span>[<span class="pl-c1">0</span>].<span class="pl-smi">pokemon</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">sides</span>[<span class="pl-c1">0</span>].<span class="pl-smi">pokemon</span>[i].<span class="pl-smi">speciesid</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>rayquaza<span class="pl-pds">&#39;</span></span>) <span class="pl-c1">this</span>.<span class="pl-smi">sides</span>[<span class="pl-c1">0</span>].<span class="pl-smi">pokemon</span>[i].<span class="pl-smi">canMegaEvo</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (<span class="pl-k">let</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-c1">this</span>.<span class="pl-smi">sides</span>[<span class="pl-c1">1</span>].<span class="pl-smi">pokemon</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">sides</span>[<span class="pl-c1">1</span>].<span class="pl-smi">pokemon</span>[i].<span class="pl-smi">speciesid</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>rayquaza<span class="pl-pds">&#39;</span></span>) <span class="pl-c1">this</span>.<span class="pl-smi">sides</span>[<span class="pl-c1">1</span>].<span class="pl-smi">pokemon</span>[i].<span class="pl-smi">canMegaEvo</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code blob-code-inner js-file-line">	inversemod<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Rule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Inverse Mod<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code blob-code-inner js-file-line">		onNegateImmunity<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onEffectiveness</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">typeMod</span>, <span class="pl-smi">target</span>, <span class="pl-smi">type</span>, <span class="pl-smi">move</span>) {</td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> The effectiveness of Freeze Dry on Water isn&#39;t reverted</span></td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (move <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">move</span>.<span class="pl-c1">id</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>freezedry<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> type <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Water<span class="pl-pds">&#39;</span></span>) <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (move <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-c1">this</span>.<span class="pl-en">getImmunity</span>(move, type)) <span class="pl-k">return</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-k">-</span>typeMod;</td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code blob-code-inner js-file-line">	sketchclause<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ValidatorRule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Sketch Clause<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">onValidateTeam</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">team</span>) {</td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> sketchedMoves <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span> (<span class="pl-k">let</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">team</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">let</span> move <span class="pl-k">=</span> team[i].<span class="pl-smi">sketchmonsMove</span>;</td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">!</span>move) <span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (move <span class="pl-k">in</span> sketchedMoves) {</td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>You are limited to sketching one of each move by the Sketch Clause.<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>(You have sketched <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-en">getMove</span>(move).<span class="pl-c1">name</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> more than once)<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code blob-code-inner js-file-line">				sketchedMoves[move] <span class="pl-k">=</span> (team[i].<span class="pl-c1">name</span> <span class="pl-k">||</span> team[i].<span class="pl-smi">species</span>);</td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code blob-code-inner js-file-line">		},</td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code blob-code-inner js-file-line">	ignoreillegalabilities<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ValidatorRule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Ignore Illegal Abilities<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Implemented in the &#39;pokemon&#39; ruleset and in teamvalidator.js</span></td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code blob-code-inner js-file-line">	allowonesketch<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ValidatorRule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Allow One Sketch<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Implemented in teamvalidator.js</span></td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code blob-code-inner js-file-line">	allowcap<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code blob-code-inner js-file-line">		effectType<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ValidatorRule<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code blob-code-inner js-file-line">		name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>Allow CAP<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> Implemented in the &#39;pokemon&#39; ruleset</span></td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
</table>

  </div>

  </div>

  <button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
  <div id="jump-to-line" style="display:none">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
      <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
      <button type="submit" class="btn">Go</button>
</form>  </div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>







    </div>
  </div>

  </div>

      
<div class="container site-footer-container">
  <div class="site-footer " role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.33021s from github-fe-e627a19.cp1-iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha256-c3IPAnuzF/zrEYwlknXaS+Xvo0TCRqEjQaaMMWjO6qc=" src="https://assets-cdn.github.com/assets/frameworks-73720f027bb317fceb118c259275da4be5efa344c246a12341a68c3168ceeaa7.js"></script>
    <script async="async" crossorigin="anonymous" integrity="sha256-H5QLYYkn6D0c00dgltzjiS6S1mWzZ9c/vAaxm/FF6P4=" src="https://assets-cdn.github.com/assets/github-1f940b618927e83d1cd3476096dce3892e92d665b367d73fbc06b19bf145e8fe.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

