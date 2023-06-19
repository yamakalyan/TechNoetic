export default function PostJob() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md col-lg">
            <form>
              <div className="form-group">
                <label>Enter Job title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ex : Hiring Job seekers"
                />
              </div>
              <div className="form-group">
                <label>Enter job catogory</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ex : Web developer, Digital marketing."
                />
              </div>
              <div className="form-group">
                <label>Enter Location</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ex : Hyderabad, Bangalore, Chennai"
                />
              </div>
              {/* <div className="form-group">
    <label>Example select</label>
    <select className="form-control" >
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div> */}
              <div className="form-group">
                <label>Enter job Description</label>
                <textarea className="form-control" rows="3" placeholder="Description"></textarea>
              </div>
              <div className="text-center">
                <button className="btn btn-primary">Post job</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
