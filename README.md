# Gatsby WordPress Starter
#### Last Updated: 2019-06-17

This starter is forked from the
[gatsby-starter-netlify-cms](https://github.com/netlify-templates/gatsby-starter-netlify-cms)
and modified to use WordPress instead of netlify-cms, using the [gatsby-source-wordpress](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-wordpress) plugin as the data connector.

Demo: https://gatsby-starter-wordpress.netlify.com/

> **WARNING**: Using `yarn upgrade` or `npm update` will break the site. See [GatsbyCentral/gatsby-starter-wordpress#36](https://github.com/GatsbyCentral/gatsby-starter-wordpress/issues/36) and [gatsbyjs/gatsby#10262](https://github.com/gatsbyjs/gatsby/issues/10262) for more info. Hopefully we'll have a resolution soon. - 19 Dec 2018

## Use It Now

* Run `yarn install` to install all of the dependencies for the site.
* Edit `gatsby-config.js`, change `baseUrl`
  - Make sure you have at least 1 post and 1 page on your WordPress site
  - Make sure at least 1 post has at least 1 tag
* Ensure the permalink structure in your WordPress installation is set to `Post Name` instead of the deafult `Plain`, or else the `gatsby-source-wordpress` plugin won't be able to communicate with WordPress
* Rejoice
  - For more information on the source plugin, check out the [gatsby-source-wordpress](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-wordpress) repository page
  - File any [issues here](https://github.com/GatsbyCentral/gatsby-starter-wordpress/issues)
* When ready, run `gatsby develop` to run the development server to test out the site.

## WordPress Credentials
* The default URL under `gatsby-config.js` points to a digital ocean server running WordPress at `138.68.237.156`.
* The project is currently running under Liam McMains' personal Digital Ocean account. Please contact him at lmcmains@codeauthority.com or liam@mcmains.net if you need access to the project.
* Otherwise, you can spin up your own droplet by clicking `Create` on Digital Ocean, going to `Marketplace`, and selecting the WordPress image.

### Known Limitations

* This is based on the [netlify starter](https://github.com/netlify-templates/gatsby-starter-netlify-cms) which uses [bulma](https://bulma.io). This adds 150KB to every built page.
* Your WordPress site must have at least 1 post with 1 tag, or the starter will crash
* Nested pages / categories will not render with nested pages
  - A WordPress page like `/about/team/` will render on Gatsby as `/team/`
  - Likewise for categories
  - Discussion here https://github.com/GatsbyCentral/gatsby-starter-wordpress/issues/24

## CSS Processing

This plugin uses [gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/) and [bulma](https://bulma.io/). The bulma build would otherwise be ~170K which adds 170K to each of your built HTML pages. However, with purgecss this is reduced 90%.
