import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTask } from "../actions/taskAction";

const EditTask = () => {
  const currentItem = useSelector((state) => state.currentItem);
  console.log(currentItem);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const hundleClick = () => {
    const updatedTask = {
      id: currentItem.id,
      description: text,
    };
    dispatch(editTask(updatedTask));
  };

  useEffect(() => {
    currentItem && setText(currentItem.description);
  }, [currentItem]);

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Edit your task
            </h5>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label className="col-form-label">Description:</label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={hundleClick}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
