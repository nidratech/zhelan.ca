import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';

import { Container } from 'components';

const Puppies: NextPage = () => {
  return (
    <Container>
      <NextSeo
        title="Zhelan Cardigans - Puppies"
        description="Zhelan Cardigans puppies."
        canonical="https://www.zhelan.ca"
        openGraph={{
          title: 'Zhelan Cardigans - Puppies',
          description: 'Zhelan Cardigans puppies.',
          url: 'https://www.zhelan.ca/puppies',
        }}
      />
      <GalleryContainer>
        <ImageGallery showPlayButton={false} items={images} />
      </GalleryContainer>

      <LitterContainer>
        <InfoTitle>Purchase Information</InfoTitle>
        <Ul>
          <li>
            We are breeding to improve the breed, continue to preserve herding instinct and to
            maintain good health and temperament.
          </li>
          <li>
            I am offering Companion/Performance pets and Show prospects (I do not sell Show
            Prospects unless referred to by an established ethical breeder, and it will be
            co-ownership).
          </li>
          <li>Boris and Boola (Sire’s and Dam’s call names) both have health clearances.</li>
          <li>Dam’s OFA CHIC#154055</li>
          <li>
            Dam’s OFA health profile:{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.ofa.org/advanced-search?f=sr&appnum=2169987frofile"
            >
              https://www.ofa.org/advanced-search?f=sr&appnum=2169987frofile
            </a>
          </li>
          <li>Sire’s genetic testing certificates are available upon request.</li>
          <li>
            Dam’s pedigree:{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="http://www.cardiped.net/details.php?id=100716"
            >
              http://www.cardiped.net/details.php?id=100716
            </a>
          </li>
          <li>
            Sire’s pedigree:{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="http://www.cardiped.net/details.php?id=100068"
            >
              http://www.cardiped.net/details.php?id=100068
            </a>
          </li>
          <li>
            Litter’s pedigree:{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="http://www.cardiped.net/testmating.php?dam=100716&sire=100068&fbclid=IwAR3AYVMWBsX1g1QcjAokcHdJ9fWal5E8toGW45IT7LxB_p14sXARw1Ajsi8"
            >
              http://www.cardiped.net/testmating.php?dam=100716&sire=100068&fbclid=IwAR3AYVMWBsX1g1QcjAokcHdJ9fWal5E8toGW45IT7LxB_p14sXARw1Ajsi8
            </a>
          </li>
          <li>The cost of a puppy is $2,500 CAD.</li>
          <li>Puppies are placed with up-to-date shots.</li>
          <li>
            Puppies were treated with deworming medication at 2, 4, 6, and 8 weeks of age to address
            intestinal parasites. You have to continue deworming every 2 weeks until your puppy gets
            12 weeks old.
          </li>
        </Ul>
        <InfoTitle>What&apos;s next?</InfoTitle>
        <Ul>
          <li>
            Please email the filled out the{' '}
            <a href="docs/zhelan-puppy-questionnaire.docx">linked questionnaire</a> to{' '}
            <a href="mailto:zhelancardigans@gmail.com">zhelancardigans@gmail.com</a>
          </li>
          <li>Once the questionnaire is submitted, please allow me a week to review it.</li>
          <li>
            Puppies are ready for pick up between 9 and 12 weeks of age. You need to pick up the
            puppy in person.
          </li>
        </Ul>
        <br />
        The puppy questionnaire can be found here:{' '}
        <a href="https://www.zhelan.ca/docs/zhelan-puppy-questionnaire.docx">
          https://www.zhelan.ca/docs/zhelan-puppy-questionnaire.docx
        </a>
      </LitterContainer>
      <FooterPicContainer>
        <a
          href="https://www.facebook.com/permalink.php?story_fbid=1375272386171010&id=100010647843215"
          target="_blank"
          rel="noreferrer"
        >
          <PuppiesPic src="images/puppies/all.jpg" alt="Puppies pic" />
        </a>
      </FooterPicContainer>
    </Container>
  );
};

const images = [
  {
    original: 'https://www.zhelan.ca/images/puppies/boris-boola.jpg',
    thumbnail: 'https://www.zhelan.ca/images/puppies/boris-boolat.jpg',
  },
  {
    original: 'https://www.zhelan.ca/images/puppies/boris-boola2.jpg',
    thumbnail: 'https://www.zhelan.ca/images/puppies/boris-boola2t.jpg',
  },
  {
    original: 'https://www.zhelan.ca/images/puppies/1.jpg',
    thumbnail: 'https://www.zhelan.ca/images/puppies/1t.jpg',
  },
  {
    original: 'https://www.zhelan.ca/images/puppies/2.jpg',
    thumbnail: 'https://www.zhelan.ca/images/puppies/2t.jpg',
  },
  {
    original: 'https://www.zhelan.ca/images/puppies/3.jpg',
    thumbnail: 'https://www.zhelan.ca/images/puppies/3t.jpg',
  },
  {
    original: 'https://www.zhelan.ca/images/puppies/4.jpg',
    thumbnail: 'https://www.zhelan.ca/images/puppies/4t.jpg',
  },
  {
    original: 'https://www.zhelan.ca/images/puppies/5.jpg',
    thumbnail: 'https://www.zhelan.ca/images/puppies/5t.jpg',
  },
  {
    original: 'https://www.zhelan.ca/images/puppies/6.jpg',
    thumbnail: 'https://www.zhelan.ca/images/puppies/6t.jpg',
  },
  {
    original: 'https://www.zhelan.ca/images/puppies/7.jpg',
    thumbnail: 'https://www.zhelan.ca/images/puppies/7t.jpg',
  },
  {
    original: 'https://www.zhelan.ca/images/puppies/8.jpg',
    thumbnail: 'https://www.zhelan.ca/images/puppies/8t.jpg',
  },
  {
    original: 'https://www.zhelan.ca/images/puppies/9.jpg',
    thumbnail: 'https://www.zhelan.ca/images/puppies/9t.jpg',
  },
];

const Ul = styled.ul`
  list-style: disc;
  list-style-position: inside;

  li {
    margin-top: ${({ theme }) => theme.space.medium};
  }
`;
const InfoTitle = styled.h3`
  padding: ${({ theme }) => `${theme.space.large} 0 0`};
  font-size: 1.25em;
`;
const LitterContainer = styled.div`
  color: ${({ theme }) => theme.color.white};
  font-size: 1.1em;
`;
const GalleryContainer = styled.div`
  width: 80vw;
  margin: auto;
`;
const PuppiesPic = styled.img`
  margin-top: ${({ theme }) => theme.space.large};
  width: 100%;
  max-width: 62.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
`;
const FooterPicContainer = styled.div`
  width: 100%;
  margin: ${({ theme }) => theme.space.medium} auto 0;
`;

export default Puppies;
