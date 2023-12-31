
import axios from "axios";

function VotingCardsRow(props) {
  const { Id, obj } = props;
  const { _id, PartyName, CandidateName, Symbol, Image } = obj;

  const handleClick = (partyName) => {
    const data = {
      Id: Id,
      PartyVoted: partyName,
    };
    console.log("partyName: "+partyName);
    axios
      .post("https://online-voting-backend-uc7g.onrender.comISVotedRoute/AddIsvoted", data)
      .then((response) => {
        console.log("Vote submitted successfully!");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error submitting vote:", error, _id);
      });
  };

  return (
    <div className="col-md-4 col-lg-3 " style={{ marginBottom: "20px" }}>
      <div className="card d-flex" style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
        <div class="row justify-content-center">
          <img src={Symbol} className="mt-3 card-img-top" alt="Party Logo" style={{ height: "100px", width: "100px" }} />
          <img src={Image} className="mt-3 card-img-top" alt="Party img" style={{ height: "100px", width: "100px" }} />
        </div>

        <div className="card-body  ffmaily">
          <h5 className="card-title"> <b>Party Name &nbsp; &nbsp;:</b> {PartyName}</h5>
          <p className="card-text"> <b>Candidate Name&nbsp;&nbsp;:</b>  {CandidateName}</p>
        </div>
        <div className="card-footer d-flex justify-content-center ffmaily">
          <button onClick={() => handleClick(PartyName)} className="btn btn-warning" style={{color:"white"}}>
          <i class="fa-solid fa-computer-mouse"></i>  Click to Vote
          </button>
        </div>
      </div>
    </div>
  );
}

export default VotingCardsRow;
