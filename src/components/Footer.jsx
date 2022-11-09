function Footer() {
    return <footer className="page-footer #aa00ff purple accent-4">
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} Copyright Text
      <a className="grey-text text-lighten-4 right" href="https://github.com/Rustam9724/react-shop-project">Repo</a>
      </div>
    </div>
  </footer>
}

export {Footer};