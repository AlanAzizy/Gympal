import Upload from "../../Assets/Upload.png";

const DragAndDrop = () => {


  const handleFileInputClick = () => {
    document.getElementById("fileInput").click();
  };



  return (
    <div className="container mt-4">
      <div
        className="wrapper rounded-3 "
      >
        <div className="d-flex justify-content-center border-3 rounded-3" style={{border:"dotted  #ddd "}}>
          <button
            type="button"
            className="mx-auto border-0 bg-transparent p-5"
            onClick={handleFileInputClick}
          >
            <img src={Upload} alt="" width={80} />
            <p className="card-text text-center" style={{ color: "#aaa" }}>
              Max file size: 2MB <br></br>
              Supported file types: PNG, JPG
            </p>
          </button>
        </div>
      </div>
      <input
        id="fileInput"
        type="file"
        style={{ display: "none" }}
      />
    </div>
  );
};

export default DragAndDrop;
