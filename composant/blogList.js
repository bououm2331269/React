function BlogList() {
  const [publications, setPublications] = React.useState([]);

  React.useEffect(() => {
      fetch('http://localhost:3000/publications')
          .then(response => response.json())
          .then(data => setPublications(data))
          .catch(error => console.error(error));
  }, []);

  return (
      <div id="publications" className="row">
          {publications.map(publication => (
              <div
                  className="card-col"
                  key={publication.id}
                  onClick={() => (window.location.href = `Blog_Post.html?id=${publication.id}`)}
              >
                  <BlogCard title={publication.title} description = {publication.description} image = {publication.image} date = {publication.date}/>
              </div>
          ))}
      </div>
  );
}
