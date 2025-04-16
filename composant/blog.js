function GetIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id'); 
}
function Blog() {
    const urlParams = new URLSearchParams(window.location.search);
    const publicationId = urlParams.get('id');

    const [id, setId] = React.useState();
    
    React.useEffect(() => {
        const id = GetIdFromUrl();
        setId(id);
    }, []);

    
    if(!id) {
        return <div className="loading">Loading...</div>;
    }
    return(
        <>
            <div className="container mt-4 p-4 mb-5">
                <BlogDetails id={id} />
                <AddComment id={id}  />
                <CommentList id={id} />
                
            </div>
            
        </>
    )
}
  
