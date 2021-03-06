import React from 'react';
import styled from 'styled-components';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Image from 'react-bulma-components/lib/components/image';
import Button from 'react-bulma-components/lib/components/button';

import './HeroSection.scss';

import { CenterAlignContainer } from './Common';

const HoverableButton = styled(Button)`
  &:hover {
    background-color: #00bba8 !important;
  }
`;
const DownloadButton = (props) => {
  const classes = props.primary ?
    'has-background-primary has-text-white' :
    'has-background-white has-text-black-bis';

  return (
    <a href="http://52.82.125.33:8082/LoopringWallet.apk">
      <HoverableButton
        className={classes}
        size="large"
        style={{
          borderRadius: '20px',
          width: '300px',
          fontSize: '16px',
          fonWeight: '400',
          margin: '20px',
          transition: '0.5s',
          border: 'none',
        }}
      >
        下载安卓App
      </HoverableButton>
    </a>
  );
};

const HeroSection = (props) => {
  return (
    <>
      <Section
        className="hero-section-top has-background-primary has-text-white"
        style={{
          paddingBottom: '40px',
          backgroundImage: 'url(\'/images/bg_color_top.png\')',
          backgroundSize: 'cover',
          borderBottom: '180px solid white',
        }}
      >
        <CenterAlignContainer>
          <div className="has-text-centered">
            <div
              className="is-size-5-mobile is-size-4"
              style={{ fontWeight: '300' }}
            >
              路印智能钱包
            </div>
            <div
              className="is-size-2-mobile is-size-1"
              style={{
                fontWeight: '600',
                paddingTop: '40px',
                paddingBottom: '20px',
              }}
            >
              自由触手可及
            </div>
          </div>
        </CenterAlignContainer>

        <CenterAlignContainer>
          <Image
            style={{
              margin: 'auto',
              marginTop: '10px',
              marginBottom: '-240px',
              width: '340px',
              filter: 'drop-shadow(0 0 1rem rgba(0,0,0,0.5))',
            }}
            src={'/images/top.png'}
          />
        </CenterAlignContainer>
      </Section>

      <Section className="hero-section-bottom is-small has-background-white">
        <CenterAlignContainer>
          <div className="has-text-centered" style={{ marginTop: '0' }}>
            <DownloadButton primary />
            <div
              className="first-zkrollup has-text-black-bis "
              style={{ paddingTop: '60px', fontWeight: '600' }}
            >
              全球第一个
            </div>
            <div
              className="has-text-black-bis is-size-3-mobile is-size-3"
              style={{ fontWeight: '500' }}
            >
              zkRollup加持的以太坊智能钱包
            </div>

            <div
              className="has-text-grey-dark is-size-6"
              style={{
                maxWidth: '600px',
                fontWeight: '300',
                marginTop: '20px',
                marginBottom: '120px',
              }}
            >
              零知卷叠（zkRollup）二层扩容技术具有和以太坊主网同样的安全保障，性能有上千倍的提升，费用却只是主网的百分之一。
              作为世界上第一个主网上线的零知卷叠技术，路印协议为路印钱包带来畅快淋漓的订单本和AMM交易体验。
            </div>
          </div>
        </CenterAlignContainer>
      </Section>
    </>
  );
};
export default HeroSection;
export { CenterAlignContainer, DownloadButton };
