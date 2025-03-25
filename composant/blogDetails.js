function BlogDetails({id}) {
    const [blogDetails, setBlogDetails] = React.useState(null);

    React.useEffect(() => {
        fetch(`http://localhost:3000/publications/${id}`)
            .then(response => response.json())
            .then(data => setBlogDetails(data))
            .catch(error => console.error(error));
    }, [id]);

    if (!blogDetails) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <div className="row">
            <img src={blogDetails.image} alt="Logo" className="imageBlog"></img>
          </div>
          <div className="row">
            <h1 className="text-primary text-center">{blogDetails.title}</h1>
            <p className="text-white">{blogDetails.description} {blogDetails.description}</p>
            <p className="text-white">{blogDetails.description} {blogDetails.description}</p>
          </div>
          <div className="row ">
            <div className="d-flex justify-content-center align-items-center">
                <figure className="text-center">
                    <img src={blogDetails.image} alt="Logo" className="img-fluid"></img>
                    <figcaption className="mt-2 text-primary fs-3">La belle fleure</figcaption>
                </figure>
            </div>

            <p className="text-white">{blogDetails.description} {blogDetails.description}</p>
            <p className="text-white">{blogDetails.description} {blogDetails.description}</p>
        </div>
        </>
    );

}