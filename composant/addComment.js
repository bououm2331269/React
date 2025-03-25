function AddComment({ id }) {
    const [commentContent, setCommentContent] = React.useState('');
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [success, setSuccess] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        setSuccess(false);

        const newComment = {
            idPublication: id,
            datePublication: new Date().toISOString(),
            contenu: commentContent,
        };

        
        fetch(`http://localhost:3000/commentaires?idPublication=${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newComment),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Une erreur est survenue lors de l’envoi du commentaire.');
                }
                return response.json();
            })
            .then(() => {
                setSuccess(true);
                setCommentContent('');
            })
            .catch((err) => setError(err.message))
            .finally(() => setIsSubmitting(false));
    };

    return (
        <div className="add-comment">
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <textarea
                        className="form-control"
                        placeholder="Votre commentaire..."
                        value={commentContent}
                        onChange={(e) => setCommentContent(e.target.value)}
                        required
                        rows="4"
                    />
                </div>
                
                <div className="d-flex justify-content-end mt-3">
                    <button type="submit" className="btn btn-primary rounded" disabled={isSubmitting}>
                        {isSubmitting ? 'Envoi...' : 'Ajouter'}
                    </button>
                </div>
            </form>
            {error && <p className="text-danger">Erreur : {error}</p>}
            {success && <p className="text-success">Commentaire ajouté avec succès !</p>}
        </div>
    );
}


