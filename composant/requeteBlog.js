function App() {
    const urlParams = new URLSearchParams(window.location.search);
    const publicationId = urlParams.get('id');

    return<><Header />
    <BlogDetails id={publicationId} />
    <AddComment id={publicationId} />
    <CommentList id={publicationId} />
    <Footer />
     </>
  }
  
  const container=document.querySelector("#root")
  const root=ReactDOM.createRoot(container)
  root.render(<App />)