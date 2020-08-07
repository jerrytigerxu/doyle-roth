import React from 'react'
import { FaEnvelope, FaPhone, FaFax, FaHome } from 'react-icons/fa'

import { StaticQuery, graphql } from 'gatsby'
import './style.scss'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            gatsby
            bulma
            twitter
            medium
            github
            email
            phone
            fax
            address
          }
        }
      }
    `}
    render={data => (
      <footer className='footer centerClass has-background-white'>
        <div className='content has-text-centered'>

          <article className='media centerClass'>
            <span className='icon'>
              <FaEnvelope size='fa-2x' color='black' />
            </span>
            &nbsp;
              <p className='is-size-6'>{data.site.siteMetadata.email}</p>
            &nbsp;

            <span className='icon'>
                <FaPhone size='fa-2x' color='black' />
            </span>
            &nbsp;
            <p className='is-size-6'>{data.site.siteMetadata.phone}</p>

            &nbsp;
            <span className='icon'>
                <FaFax size='fa-2x' color='black' />
            </span>
            &nbsp;
            <p className='is-size-6'>{data.site.siteMetadata.fax}</p>

            &nbsp;
            <span className='icon'>
                <FaHome size='fa-2x' color='black' />
            </span>
            &nbsp;
            <p className='is-size-6'>{data.site.siteMetadata.address}</p>
          </article>
          &nbsp;

        </div>
      </footer>
    )}
  />
)

export default Footer
