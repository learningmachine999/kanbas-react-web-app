import { useNavigate, useLocation } from "react-router";
import * as db from "../../Database";

export default function AssignmentEditor() {
    const { pathname } = useLocation();
    const assignment_id = pathname.split("/").filter(Boolean).pop();
    const assignments = db.assignments;
    const navigate = useNavigate();

    return (
        <div id="wd-assignments-editor" className="container">
            {assignments
                .filter((assignment: any) => assignment._id === assignment_id)
                .map((assignment: any) => (
                <div className="mb-3" key={assignment._id}>
                    <label htmlFor={`wd-name-${assignment._id}`}>Assignment Name</label>
                    <input id={`wd-name-${assignment._id}`} className="form-control" value={assignment._id} />
                </div>
            ))}
            {/* Description */}
            <div className="mb-3">
                <label htmlFor="wd-description">Description</label>
                <textarea id="wd-description" className="form-control" rows={5}>
                    The assignment is available online
                    Submit a link to the landing page of your Web
                    application running on Netlify. The landing page should include the following:
                    Your full name and section links to each of the lab assignments Link to the
                    Kanbas application
                </textarea>
            </div>

            {/* Points */}
            <div className="row mb-3">
                <div className="col-md-3 text-end">
                    <label htmlFor="wd-points">Points</label>
                </div>
                <div className="col-md-9">
                    <input id="wd-points" className="form-control" value={100} />
                </div>
            </div>


            {/* Assign Section */}
            <div className="row mb-3">
                <div className="col-md-3 text-end">
                    <label>Assign</label>
                </div>
                <div className="col-md-9">
                    <div className="border p-3">
                        <div className="mb-3">
                            <label htmlFor="wd-assign-to">Assign to</label>
                            <input id="wd-assign-to" className="form-control" value="Everyone" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="wd-due-date">Due</label>
                            <input
                                type="date"
                                name="due-date"
                                id="wd-due-date"
                                className="form-control"
                                defaultValue="2024-05-13"
                            />
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="wd-available-from">Available from</label>
                                <input
                                    type="date"
                                    name="earliest-available-date"
                                    id="wd-available-from"
                                    className="form-control"
                                    defaultValue="2024-05-06"
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="wd-available-until">Until</label>
                                <input
                                    type="date"
                                    name="latest-available-date"
                                    id="wd-available-until"
                                    className="form-control"
                                    defaultValue="2024-05-20"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr />

            {/* Buttons */}
            <div className="float-end">
                <button className="btn btn-secondary me-2" onClick={() => navigate(-1)}>Cancel</button>
                <button className="btn btn-danger" onClick={() => navigate(-1)}>Save</button>
            </div>
        </div>
    );
}