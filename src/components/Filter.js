import { useDispatch } from "react-redux";
import { filterTask } from "../actions/taskAction";

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch(filterTask(e.target.value));
  };

  return (
    <div className="mb-4 d-flex justify-content-center">
      <div className="form-check form-check-inline mr-3">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="all"
          onClick={handleFilter}
        />
        <label className="form-check-label">All</label>
      </div>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="Completed"
          onClick={handleFilter}
        />
        <label className="form-check-label">Completed</label>
      </div>

      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio3"
          value="uncompleted"
          onClick={handleFilter}
        />
        <label className="form-check-label">Uncompleted</label>
      </div>
    </div>
  );
};

export default Filter;
