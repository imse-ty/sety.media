import Container from './container';
import {
  FaTwitter,
  FaBehance,
  FaLinkedinIn,
  FaInstagram,
  FaDribbble,
  FaVimeo,
  FaYoutube
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="mt-auto py-8">
      <Container>
        <div className="flex justify-center">
          <div>
            <FaTwitter />
            <FaBehance />
            <FaLinkedinIn />
            <FaInstagram />
            <FaDribbble />
            <FaVimeo />
            <FaYoutube />
          </div>
          <p className="text-gray-300 mt-4">
            © 2021 Imsety Taylor. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
