import Container from './container';

export default function Footer() {
  return (
    <footer className="mt-auto py-8">
      <Container>
        <div className="flex justify-center">
          <p className="text-gray-300 mt-4">
            © 2021 Imsety Taylor. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
