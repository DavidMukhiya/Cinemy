import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MovieService from "../services/MovieService";

const AddMovieComponent = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [isMovie, setIsMovie] = useState("");
  const navigate = useNavigate();
  const { movieId } = useParams();

  const saveMovie = (e) => {
    e.preventDefault();

    const movie = { id, name, image, description, isMovie };

    console.log(movie);

    MovieService.addMovie(movie)
      .then((response) => {
        console.log(response.data);
        navigate("/movies");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    MovieService.getEmployeByID(movieId)
      .then((response) => {
        setId(response.data.id);
        setName(response.data.name);
        setImage(response.data.image);
        setDescription(response.data.description);
        setIsMovie(response.data.isMovie);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const title = () => {
    if (movieId) {
      return <h2 className="text-center mt-3">Update Movie</h2>;
    } else {
      return <h2 className="text-center mt-3">Add Movie</h2>;
    }
  };
  return (
    <>
      <div className="container mt-3 mb-3">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {/* <h2 className="text-center mt-3">Add Movie</h2> */}
            {title()}
            <div className="card-body">
              <form>
                {/* ID */}
                <div className="form-group mb-2">
                  <label className="form-label">Movie ID:</label>
                  <input
                    type="number"
                    placeholder="Enter Movie ID"
                    name="id"
                    className="form-control"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  ></input>
                </div>
                {/* ID */}

                {/* Name */}
                <div className="form-group mb-2">
                  <label className="form-label">Movie Name :</label>
                  <input
                    type="text"
                    placeholder="Enter Movie Name"
                    name="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>
                {/* Name */}

                {/* Image */}
                <div className="form-group mb-2">
                  <label className="form-label">Image Url :</label>
                  <input
                    type="text"
                    placeholder="Enter Image Url"
                    name="image"
                    className="form-control"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  ></input>
                </div>
                {/* Image */}

                {/* Description */}
                <div className="form-group mb-2">
                  <label className="form-label">Description :</label>
                  <textarea
                    class="form-control"
                    id="description"
                    rows="3"
                    type="text"
                    placeholder="Write Description"
                    name="description"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                {/* Description */}

                {/* IsMovie? */}
                <div className="form-group mb-2">
                  <label className="form-label">Movie?</label>
                  <input
                    type="number"
                    placeholder="Enter 1 for Movies or else 0"
                    name="isMovie"
                    className="form-control"
                    value={isMovie}
                    onChange={(e) => setIsMovie(e.target.value)}
                  ></input>
                </div>
                {/* IsMovie? */}
                <button
                  className="btn btn-success"
                  onClick={(e) => saveMovie(e)}
                >
                  Add Movie
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMovieComponent;
