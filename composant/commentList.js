function CommentList({id}){
    const [commentaires, setCommentaires] = React.useState([]);

    React.useEffect(() => {
        fetch(`http://localhost:3000/commentaires?idPublication=${id}`)
            .then(response => response.json())
            .then(data => setCommentaires(data))
            .catch(error => console.error(error));
    }, [id]);   
    if (!commentaires) {
        return <div>Loading...</div>;
    }
    return (
        <div id="commentaires" className="row" >    
            {commentaires.map(commentaire => (
               <Comment commentaire={commentaire.contenu} image="../image/user-square.png" key={commentaire.id} />
            ))}
        </div>
    );
}