import ProgressBar from "@ramonak/react-progress-bar";

const Billionare = ( {name,percent,wealth,img,rank} ) => {
    // image code
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => ( images[item.replace('./', '')] = r(item) ));
        return images;
      }
      const images = importAll(require.context('./billionares', false));

    // image code ends
  return (
    <div className="col-12 col-md-6 mb-3">
      <div className="card mb-0 mb-md-2 border-0 position-relative">
        <span className="position-absolute top-0 start-100 px-2 translate-middle bg-orange border border-dark rounded-circle fw-bold">
            {rank}
        </span>
        <div className="row g-0">
          <div className="col-8">
            <div className="card-body text-dark text-start p-2 pb-1 p-md-3">
              <h5 className="card-title fs-6 fs-4 mb-md-3">{percent}% of {name}'s Wealth</h5>
              <span className="card-text mb-1 mb-md-3">
                <ProgressBar completed={percent<1 ? 1 : percent} bgColor='#DE774E' height='13px' animateOnRender={true} isLabelVisible={false}/>
              </span>
                <small className="text-muted">
                  Total Wealth : ${wealth} Billion
                </small><br/>
                <small className="text-muted d-none d-md-block">
                  (source: <a href="https://www.forbes.com/" className="text-muted" target="_blank" rel="noreferrer">Forbes</a>)
                </small>
            </div>
          </div>
          <div className="col-4 overflow-hidden">
            <img
              src={images[img]}
              className="img-fluid rounded-end"
              alt="Billionare"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billionare;
