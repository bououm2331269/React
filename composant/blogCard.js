function BlogCard({title, description, image, date}) {
    return (
        <div className="card  bg-secondary">
            <img  className="card-img-top " src={image} alt={title}></img>
            <div className="card-body">
                <h5 className="card-title bg-light ">{title}</h5>
                <p className="card-text text-white">{description}</p>
                <p className="card-text text-white">{date}</p>
            </div>
      </div>
    )
}