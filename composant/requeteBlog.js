function App() {
    return<>
        <Header />
        <Blog/>
        <Footer />
    </>
  }
  
const container=document.querySelector("#root")
const root=ReactDOM.createRoot(container)
root.render(<App />)