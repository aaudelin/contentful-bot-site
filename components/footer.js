import Container from './container'

export default function Footer() {
  return (
    <footer className="bg-accent-1">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-2xlfont-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            © Contentful Bot all rights reserved
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a href="https://storyset.com/web">Web illustrations by Storyset</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
